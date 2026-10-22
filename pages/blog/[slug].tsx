import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BsInstagram, BsYoutube, BsWhatsapp } from "react-icons/bs";
import {
  decodeHtml,
  getPostBySlug,
  getPostCategory,
  getPostImage,
  getPosts,
  getRelatedPosts,
  serializeSchema,
  type WordpressPost,
} from "@/libs/wordpress";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.gshomesolutions.com.br";

type BlogPostProps = { post: WordpressPost; relatedPosts: WordpressPost[] };

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}Z`));
}

function parseCustomSchema(value?: string) {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const title = decodeHtml(post.title.rendered);
  const description =
    post.acf?.meta_description || decodeHtml(post.excerpt.rendered);
  const image = getPostImage(post);
  const category = getPostCategory(post);
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: post.date,
    dateModified: post.modified,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "G&S Home Solutions" },
    publisher: { "@type": "Organization", name: "G&S Home Solutions" },
    image: image?.source_url ? [image.source_url] : undefined,
  };
  const customSchema = parseCustomSchema(post.acf?.schema_personalizado);

  return (
    <>
      <Head>
        <title>{post.acf?.seo_title || `${title} | G&S Home Solutions`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        {image?.source_url ? (
          <meta property="og:image" content={image.source_url} />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeSchema(articleSchema) }}
        />
        {customSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeSchema(customSchema) }}
          />
        ) : null}
      </Head>

      <Box bg="gray.50" minH="70vh" pb={{ base: 12, md: 20 }}>
        <Container
          maxW="container.xl"
          px={{ base: 5, md: 0 }}
          pt={{ base: 7, md: 10 }}
        >
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
            fontSize="sm"
            color="gray.600"
            mb={6}
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/">
                Início
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/blog">
                Blog
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Box
            as="section"
            bg="white"
            borderRadius={{ base: "lg", md: "2xl" }}
            overflow="hidden"
            boxShadow="sm"
            mb={{ base: 8, lg: 10 }}
          >
            <Grid
              templateColumns={{
                base: "1fr",
                md: image ? "minmax(0, 1.25fr) minmax(360px, .75fr)" : "1fr",
              }}
              minH={{ md: image ? "440px" : "auto" }}
            >
              <Stack
                px={{ base: 6, md: 10 }}
                py={{ base: 8, md: 10 }}
                spacing={5}
                justify="center"
              >
                {category ? (
                  <Text
                    color="blue.700"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    fontSize="sm"
                  >
                    {category.name}
                  </Text>
                ) : null}
                <Heading
                  as="h1"
                  fontSize={{ base: "3xl", md: "5xl" }}
                  lineHeight="shorter"
                >
                  {title}
                </Heading>
                <Text color="gray.500" fontSize="sm">
                  Publicado em {formatDate(post.date)}
                </Text>
                {description ? (
                  <Text
                    color="gray.600"
                    fontSize={{ base: "lg", md: "xl" }}
                    lineHeight="tall"
                  >
                    {description}
                  </Text>
                ) : null}
              </Stack>
              {image ? (
                <Box
                  position="relative"
                  minH={{ base: "280px", md: "full" }}
                  h={{ base: "280px", md: "auto" }}
                >
                  <Image
                    unoptimized
                    src={image.source_url}
                    alt={image.alt_text || title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 500px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ) : null}
            </Grid>
          </Box>

          <Grid
            templateColumns={{
              base: "1fr",
              lg: "minmax(0, 2.15fr) minmax(280px, .85fr)",
            }}
            gap={{ base: 8, lg: 10 }}
            alignItems="start"
          >
            <Box
              as="article"
              bg="white"
              borderRadius={{ base: "lg", md: "2xl" }}
              overflow="hidden"
              boxShadow="sm"
            >
              <Box
                px={{ base: 6, md: 10 }}
                py={{ base: 8, md: 12 }}
                color="gray.700"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                sx={{
                  "& p": { mb: 6 },
                  "& h2": {
                    mt: 10,
                    mb: 4,
                    fontSize: { base: "2xl", md: "3xl" },
                    color: "gray.800",
                    fontWeight: "bold",
                    lineHeight: "short",
                  },
                  "& h3": {
                    mt: 8,
                    mb: 3,
                    fontSize: "xl",
                    color: "gray.800",
                    fontWeight: "bold",
                  },
                  "& ul, & ol": { pl: 6, mb: 6 },
                  "& a": { color: "blue.600", textDecoration: "underline" },
                  "& img": {
                    maxW: "100%",
                    h: "auto",
                    borderRadius: "md",
                    my: 8,
                  },
                }}
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </Box>

            <Stack
              as="aside"
              spacing={6}
              position={{ lg: "sticky" }}
              top={{ lg: 6 }}
            >
              <Box bg="white" borderRadius="xl" p={5} boxShadow="sm">
                <Heading as="h2" size="md" mb={4}>
                  Leia também
                </Heading>
                <Stack spacing={4}>
                  {relatedPosts.length ? (
                    relatedPosts.map((relatedPost) => {
                      const relatedImage = getPostImage(relatedPost);
                      const relatedTitle = decodeHtml(
                        relatedPost.title.rendered,
                      );
                      return (
                        <Box
                          as={Link}
                          href={`/blog/${relatedPost.slug}`}
                          key={relatedPost.id}
                          display="block"
                          _hover={{ textDecoration: "none" }}
                        >
                          <Box
                            borderRadius="lg"
                            overflow="hidden"
                            borderWidth="1px"
                            borderColor="gray.100"
                            _hover={{
                              borderColor: "blue.300",
                              boxShadow: "md",
                            }}
                            transition="all .2s ease"
                          >
                            {relatedImage ? (
                              <Box position="relative" h="120px">
                                <Image
                                  unoptimized
                                  src={
                                    relatedImage.media_details?.sizes?.medium
                                      ?.source_url || relatedImage.source_url
                                  }
                                  alt={relatedImage.alt_text || relatedTitle}
                                  fill
                                  sizes="300px"
                                  style={{ objectFit: "cover" }}
                                />
                              </Box>
                            ) : null}
                            <Box p={4}>
                              <Text
                                fontWeight="semibold"
                                color="gray.800"
                                lineHeight="short"
                                noOfLines={3}
                              >
                                {relatedTitle}
                              </Text>
                              <Text
                                color="blue.700"
                                fontSize="sm"
                                fontWeight="semibold"
                                mt={2}
                              >
                                Ler artigo →
                              </Text>
                            </Box>
                          </Box>
                        </Box>
                      );
                    })
                  ) : (
                    <Text color="gray.500" fontSize="sm">
                      Em breve, mais conteúdos desta categoria.
                    </Text>
                  )}
                </Stack>
              </Box>

              <Box
                bgImage="linear-gradient(rgba(8, 20, 48, .5), rgba(8, 20, 48, .72)), url('/card-lotus.webp')"
                bgSize="cover"
                bgPosition="center"
                color="white"
                borderRadius="xl"
                p={5}
              >
                <Text fontWeight="bold" fontSize="xl">
                  Linha Lótus
                </Text>
                <Text fontSize="sm" mt={2}>
                  Higienização e impermeabilização de estofados.
                </Text>
                <Button
                  as={Link}
                  href="/lotus"
                  mt={4}
                  size="sm"
                  colorScheme="green"
                >
                  Conheça a linha
                </Button>
              </Box>

              <Box
                bgImage="linear-gradient(rgba(8, 20, 48, .5), rgba(8, 20, 48, .72)), url('/card-limpoo.webp')"
                bgSize="cover"
                bgPosition="center"
                color="white"
                borderRadius="xl"
                p={5}
              >
                <Text fontWeight="bold" fontSize="xl">
                  Linha Limpoo
                </Text>
                <Text fontSize="sm" mt={2}>
                  Soluções profissionais para limpeza pós-obra.
                </Text>
                <Button
                  as={Link}
                  href="/limpoo"
                  mt={4}
                  size="sm"
                  colorScheme="green"
                >
                  Conheça a linha
                </Button>
              </Box>

              <Box bg="#18183b" color="white" borderRadius="xl" p={5}>
                <Text fontWeight="bold" fontSize="lg">
                  Acompanhe a G&amp;S
                </Text>
                <Text color="whiteAlpha.800" fontSize="sm" mt={2}>
                  Conteúdos, novidades e dicas profissionais nas nossas redes.
                </Text>
                <Flex mt={4} gap={2}>
                  <Box
                    as={Link}
                    href="https://www.instagram.com/gshomesolutions/"
                    target="_blank"
                    aria-label="Instagram da G&S Home Solutions"
                    p={2}
                    borderRadius="md"
                    bg="whiteAlpha.200"
                    _hover={{ bg: "#06EC46", color: "#18183b" }}
                  >
                    <BsInstagram />
                  </Box>
                  <Box
                    as={Link}
                    href="https://www.youtube.com/c/GSHomeSolutions"
                    target="_blank"
                    aria-label="YouTube da G&S Home Solutions"
                    p={2}
                    borderRadius="md"
                    bg="whiteAlpha.200"
                    _hover={{ bg: "#06EC46", color: "#18183b" }}
                  >
                    <BsYoutube />
                  </Box>
                  <Box
                    as={Link}
                    href="https://api.whatsapp.com/send?phone=5511913591344&text=Ol%C3%A1,%20vim%20pelo%20Blog%20da%20G%26S."
                    target="_blank"
                    aria-label="WhatsApp da G&S Home Solutions"
                    p={2}
                    borderRadius="md"
                    bg="whiteAlpha.200"
                    _hover={{ bg: "#06EC46", color: "#18183b" }}
                  >
                    <BsWhatsapp />
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await getPosts(100);
    return {
      paths: posts.map((post) => ({ params: { slug: post.slug } })),
      fallback: "blocking",
    };
  } catch {
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const post = await getPostBySlug(slug);

  if (!post) return { notFound: true, revalidate: 60 };

  const relatedPosts = await getRelatedPosts(post).catch((error) => {
    console.error("Não foi possível carregar os artigos relacionados:", error);
    return [];
  });

  return { props: { post, relatedPosts }, revalidate: 60 };
};
