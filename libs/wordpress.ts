export const WORDPRESS_API_URL = (
  process.env.WORDPRESS_API_URL ||
  "https://cms.gshomesolutions.com.br/wp-json/wp/v2"
).replace(/\/$/, "");

export type WordpressMedia = {
  source_url: string;
  alt_text: string;
  media_details?: {
    width?: number;
    height?: number;
    sizes?: Record<
      string,
      { source_url: string; width: number; height: number }
    >;
  };
};

export type WordpressCategory = {
  id: number;
  name: string;
  slug: string;
};

export type WordpressPost = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  acf?: {
    seo_title?: string;
    meta_description?: string;
    schema_personalizado?: string;
  } | null;
  _embedded?: {
    author?: Array<{ name: string }>;
    ["wp:featuredmedia"]?: WordpressMedia[];
    ["wp:term"]?: WordpressCategory[][];
  };
};

async function wordpressFetch<T>(path: string): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(`${WORDPRESS_API_URL}${path}`, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Erro ao consultar o WordPress: ${response.status}`);
    }

    return (await response.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}

export function getPosts(limit = 24) {
  return wordpressFetch<WordpressPost[]>(
    `/posts?_embed&per_page=${Math.min(100, Math.max(1, limit))}&orderby=date&order=desc&_fields=id,date,modified,slug,title,excerpt,featured_media,categories,_links,_embedded`,
  );
}

export function getRelatedPosts(post: WordpressPost) {
  if (!post.categories.length) return Promise.resolve([] as WordpressPost[]);
  return wordpressFetch<WordpressPost[]>(
    `/posts?_embed&per_page=3&orderby=date&order=desc&exclude=${post.id}&categories=${post.categories.join(",")}&_fields=id,date,modified,slug,title,excerpt,featured_media,categories,_links,_embedded`,
  );
}

export function serializeSchema(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function getCategories() {
  return wordpressFetch<WordpressCategory[]>(
    "/categories?per_page=100&hide_empty=true&orderby=name&order=asc",
  );
}

export async function getPostBySlug(slug: string) {
  const posts = await wordpressFetch<WordpressPost[]>(
    `/posts?_embed&slug=${encodeURIComponent(slug)}`,
  );

  return posts[0] || null;
}

export function getPostImage(post: WordpressPost) {
  return post._embedded?.["wp:featuredmedia"]?.[0] || null;
}

export function getPostCategory(post: WordpressPost) {
  return post._embedded?.["wp:term"]?.[0]?.[0] || null;
}

export function decodeHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&#8217;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}
