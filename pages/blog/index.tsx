import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { GetStaticProps } from "next";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  decodeHtml,
  getPostCategory,
  getPostImage,
  getCategories,
  getPosts,
  type WordpressCategory,
  type WordpressPost,
} from "@/libs/wordpress";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.gshomesolutions.com.br";

type BlogIndexProps = {
  posts: WordpressPost[];
  categories: WordpressCategory[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}Z`));
}

export default function BlogIndex({ posts, categories }: BlogIndexProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const filteredPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("pt-BR");

    return posts.filter((post) => {
      const matchesCategory =
        !selectedCategory || post.categories.includes(selectedCategory);
      const matchesSearch =
        !normalizedSearch ||
        decodeHtml(post.title.rendered)
          .toLocaleLowerCase("pt-BR")
          .includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [posts, search, selectedCategory]);

  return (
    <>
      <Head>
        <title>Blog | G&S Home Solutions</title>
        <meta
          name="description"
          content="Conteúdos e orientações da G&S Home Solutions sobre limpeza, higienização, impermeabilização e cuidados profissionais."
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
      </Head>

      <Box bg="gray.50" minH="70vh" pb={{ base: 12, md: 20 }}>
        <Container
          maxW="container.xl"
          px={{ base: 5, md: 0 }}
          pt={{ base: 10, md: 14 }}
        >
          <Flex
            gap={{ base: 8, lg: 10 }}
            align="flex-start"
            direction={{ base: "column", lg: "row" }}
          >
            <Stack w={{ base: "full", lg: "260px" }} spacing={6} flexShrink={0}>
              <Box bg="white" borderRadius="xl" p={5} boxShadow="sm">
                <Heading as="h2" size="sm" mb={4}>
                  Encontre um artigo
                </Heading>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.400" />
                  </InputLeftElement>
                  <Input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Procurar por nome"
                    aria-label="Procurar artigo por nome"
                    bg="gray.50"
                  />
                </InputGroup>
              </Box>

              <Box bg="white" borderRadius="xl" p={5} boxShadow="sm">
                <Heading as="h2" size="sm" mb={4}>
                  Categorias
                </Heading>
                <Stack align="stretch" spacing={1}>
                  <Button
                    variant="ghost"
                    justifyContent="space-between"
                    colorScheme={selectedCategory === null ? "blue" : "gray"}
                    onClick={() => setSelectedCategory(null)}
                  >
                    Todos os artigos{" "}
                    <Text as="span" fontSize="sm">
                      {posts.length}
                    </Text>
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      justifyContent="space-between"
                      whiteSpace="normal"
                      h="auto"
                      minH="40px"
                      py={2}
                      textAlign="left"
                      colorScheme={
                        selectedCategory === category.id ? "blue" : "gray"
                      }
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                      <Text as="span" fontSize="sm" ml={3}>
                        {
                          posts.filter((post) =>
                            post.categories.includes(category.id),
                          ).length
                        }
                      </Text>
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Stack>

            <Box flex="1" w="full">
              <Flex justify="space-between" align="baseline" mb={5} gap={4}>
                <Heading as="h2" size="lg">
                  Artigos recentes
                </Heading>
                <Text color="gray.500" fontSize="sm">
                  {filteredPosts.length} artigo
                  {filteredPosts.length === 1 ? "" : "s"}
                </Text>
              </Flex>
              {filteredPosts.length ? (
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7}>
                  {filteredPosts.map((post) => {
                    const image = getPostImage(post);
                    const category = getPostCategory(post);
                    const title = decodeHtml(post.title.rendered);
                    const summary = decodeHtml(post.excerpt.rendered);

                    return (
                      <Box
                        as="article"
                        key={post.id}
                        bg="white"
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="sm"
                        transition="transform .2s ease, box-shadow .2s ease"
                        _hover={{
                          transform: "translateY(-4px)",
                          boxShadow: "lg",
                        }}
                      >
                        <Box
                          as={Link}
                          href={`/blog/${post.slug}`}
                          display="block"
                          h="full"
                          _hover={{ textDecoration: "none" }}
                        >
                          <Box position="relative" h="220px" bg="gray.100">
                            {image ? (
                              <Image
                                unoptimized
                                src={
                                  image.media_details?.sizes?.large
                                    ?.source_url || image.source_url
                                }
                                alt={image.alt_text || title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: "cover" }}
                              />
                            ) : null}
                          </Box>
                          <Stack p={6} spacing={3} align="flex-start">
                            {category ? (
                              <Text
                                color="blue.700"
                                fontSize="sm"
                                fontWeight="bold"
                              >
                                {category.name}
                              </Text>
                            ) : null}
                            <Heading as="h2" size="md" lineHeight="short">
                              {title}
                            </Heading>
                            <Text color="gray.600" noOfLines={3}>
                              {summary}
                            </Text>
                            <Flex
                              w="full"
                              justify="space-between"
                              align="center"
                              pt={2}
                              fontSize="sm"
                              color="gray.500"
                            >
                              <Text>{formatDate(post.date)}</Text>
                              <Text color="blue.700" fontWeight="semibold">
                                Ler artigo →
                              </Text>
                            </Flex>
                          </Stack>
                        </Box>
                      </Box>
                    );
                  })}
                </SimpleGrid>
              ) : (
                <Box bg="white" borderRadius="lg" p={8} textAlign="center">
                  <Heading as="h2" size="md">
                    Nenhum artigo encontrado.
                  </Heading>
                  <Text color="gray.600" mt={2}>
                    Tente outro termo ou selecione uma categoria diferente.
                  </Text>
                </Box>
              )}
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const [posts, categories] = await Promise.all([
    getPosts(100),
    getCategories(),
  ]);
  return { props: { posts, categories }, revalidate: 60 };
};
