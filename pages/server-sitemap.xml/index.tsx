import type { GetServerSideProps } from "next";
import { getServerSideSitemapLegacy } from "next-sitemap";
import { getPosts } from "@/libs/wordpress";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const posts = await getPosts(100);
    return getServerSideSitemapLegacy(
      ctx,
      posts.map((post) => ({
        loc: `https://www.gshomesolutions.com.br/blog/${post.slug}`,
        lastmod: post.modified,
        changefreq: "weekly",
        priority: 0.8,
      })),
    );
  } catch (error) {
    console.error("Falha ao gerar sitemap do blog:", error);
    ctx.res.statusCode = 503;
    ctx.res.setHeader("Retry-After", "60");
    return getServerSideSitemapLegacy(ctx, []);
  }
};

export default function ServerSitemap() {
  return null;
}
