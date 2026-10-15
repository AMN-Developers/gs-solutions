import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import MotionLayout from "@/components/MotionLayout";
import { powerTrioFaqs } from "@/libs/siteFaqs";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.gshomesolutions.com.br"
).replace(/\/$/, "");
const canonical = `${SITE_URL}/powertrio`;
const products = [
  {
    id: "all-01",
    name: "All-01",
    fullName: "Lótus All-01 Power",
    color: "#ffba78",
    tint: "#fff5eb",
    border: "#efbd90",
    description: "Detergente neutro com alto poder de limpeza.",
    image: "/produtos/novas/allone/AllOne5.webp",
    detail:
      "Detergente de pH neutro desenvolvido para higienização têxtil. No Power Trio, contribui para a remoção das sujidades durante o processo de limpeza.",
    bulletin:
      "https://drive.google.com/file/d/1xVGjbNlEF_o50gbs0oNZn3WStKOPjIet/view",
    fds: "https://drive.google.com/file/d/16Xs6j3xNJNIFpJcxRvQXlDrHqEV7fx2C/view?usp=sharing",
  },
  {
    id: "pre-imper",
    name: "Pré-Imper",
    fullName: "Lótus Pré-Imper Power",
    color: "#85e1d7",
    tint: "#edf9f7",
    border: "#93d4c9",
    description:
      "Neutralizador de residuais tensoativos e pH, e potencializador de limpeza.",
    image: "/produtos/novas/preimper/PreImper5.webp",
    detail:
      "Potencializa a ação do All-01 na higienização e auxilia na neutralização de residuais tensoativos. Consulte o boletim técnico para os procedimentos de neutralização antes da impermeabilização.",
    bulletin:
      "https://drive.google.com/file/d/1NYc-V3y0QMJ1k5rPFsmrHrr_sB3n_1uZ/view",
    fds: "https://drive.google.com/file/d/19bfsy-3eQSKeTobJi7Af19AdR222aKAS/view?usp=drive_link",
  },
  {
    id: "tira-mancha",
    name: "Tira-Mancha",
    fullName: "Lótus Tira-Mancha Power",
    color: "#ff9bc9",
    tint: "#fff0f6",
    border: "#edafcb",
    description:
      "Alvejante removedor de manchas à base de percarbonato de sódio.",
    image: "/produtos/novas/tiramancha/TiraMancha5.webp",
    detail:
      "Alvejante à base de percarbonato de sódio que contribui para o tratamento de manchas oxidáveis. A aplicação deve seguir as orientações técnicas e os cuidados próprios de cada tecido.",
    bulletin:
      "https://drive.google.com/file/d/1ygYtBWjLxFyCyJfI4WGK4ftB4U-pNzZe/view",
    fds: "https://drive.google.com/file/d/1rOvw5qUBlnb6KmL94cpzCOMBjuhSKx9k/view?usp=drive_link",
  },
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonical}#page`,
      url: canonical,
      name: "Power Trio G&S para higienização de estofados",
      description:
        "Conheça as funções de All-01, Pré-Imper e Tira-Mancha, as orientações de aplicação e os documentos técnicos do Power Trio.",
      inLanguage: "pt-BR",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Power Trio",
          item: canonical,
        },
      ],
    },
  ],
};

export default function PowerTrio() {
  const [paused, setPaused] = useState(false);
  return (
    <MotionLayout
      title="Power Trio para higienização de estofados"
      description="Conheça o Power Trio G&S: Lótus All-01, Pré-Imper e Tira-Mancha. Consulte orientações de aplicação, diluição e documentos técnicos."
      canonical={canonical}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </Head>
      <Box
        as="section"
        aria-labelledby="powertrio-title"
        bg="#18183b"
        color="white"
        position="relative"
        overflow="hidden"
        sx={{
          "@media (prefers-reduced-motion: reduce)": {
            "& .powertrio-animation, & .powertrio-animation-toggle": {
              display: "none",
            },
            "& .powertrio-role": { transition: "none" },
          },
        }}
      >
        <Box
          className="powertrio-animation"
          aria-hidden="true"
          pointerEvents="none"
          display={{ base: "none", lg: paused ? "none" : "block" }}
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          w="53%"
          bgImage="url('/power.gif')"
          bgSize="cover"
          bgPosition="center"
          sx={{
            maskImage: "linear-gradient(to right, transparent 0%, black 52%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 52%)",
          }}
        >
          <Box
            position="absolute"
            inset={0}
            bg="linear-gradient(90deg, #18183b 0%, rgba(24,24,59,.65) 20%, rgba(24,24,59,.12) 70%), linear-gradient(0deg, rgba(24,24,59,.35), transparent 55%)"
          />
        </Box>
        <Container
          maxW="container.xl"
          position="relative"
          zIndex={1}
          px={{ base: 5, md: 6 }}
          py={{ base: 7, md: 10, lg: 10 }}
        >
          <Stack spacing={4} maxW={{ base: "full", lg: "680px" }}>
            <Flex
              as="nav"
              aria-label="Você está aqui"
              gap={2}
              fontSize="sm"
              color="whiteAlpha.800"
            >
              <Box as={Link} href="/" _hover={{ textDecoration: "underline" }}>
                Início
              </Box>
              <Text aria-hidden="true">/</Text>
              <Text aria-current="page">Power Trio</Text>
            </Flex>
            <Text
              color="#06EC46"
              fontWeight="bold"
              fontSize="sm"
              letterSpacing=".13em"
            >
              POWER TRIO G&S
            </Text>
            <Heading
              id="powertrio-title"
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              lineHeight="1.12"
              letterSpacing="-.025em"
            >
              Um ciclo completo para higienização de estofados
            </Heading>
            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="medium"
              color="whiteAlpha.900"
              lineHeight="1.6"
            >
              Três soluções profissionais que atuam em sinergia para uma
              higienização profunda, eficiente e completa.
            </Heading>
            <Stack spacing={2} as="ul" listStyleType="none" m={0}>
              {products.map((product, index) => (
                <Box
                  as="li"
                  key={product.id}
                  className="powertrio-role"
                  borderWidth="1px"
                  borderColor="whiteAlpha.300"
                  borderLeftWidth="4px"
                  borderLeftColor={product.color}
                  bg="rgba(24,24,59,.86)"
                  borderRadius="lg"
                  p={{ base: 3, md: 3 }}
                  transition="border-color .2s ease, transform .2s ease"
                  _hover={{
                    borderColor: product.color,
                    transform: "translateX(4px)",
                  }}
                >
                  <Flex gap={3} align="flex-start">
                    <Text
                      color={product.color}
                      fontSize="xs"
                      fontWeight="bold"
                      mt={1}
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </Text>
                    <Box>
                      <Heading
                        as="h3"
                        fontSize="md"
                        color={product.color}
                        mb={1}
                      >
                        {product.name}
                      </Heading>
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        lineHeight="1.4"
                      >
                        {product.description}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Stack>
            <Button
              as={Link}
              href="#saibamais"
              bg="#06EC46"
              color="#18183b"
              size="lg"
              alignSelf="flex-start"
              _hover={{ bg: "#05d540" }}
            >
              Conheça os produtos{" "}
              <Text as="span" aria-hidden="true" ml={3}>
                ↓
              </Text>
            </Button>
          </Stack>
          <Button
            className="powertrio-animation-toggle"
            position={{ lg: "absolute" }}
            right={{ lg: 6 }}
            bottom={{ lg: 6 }}
            mt={{ base: 6, lg: 0 }}
            size="sm"
            variant="outline"
            color="white"
            borderColor="whiteAlpha.500"
            bg="rgba(24,24,59,.8)"
            _hover={{ bg: "whiteAlpha.200" }}
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? "Exibir animação" : "Pausar animação"}
          </Button>
        </Container>
        {!paused ? (
          <Box
            className="powertrio-animation"
            aria-hidden="true"
            display={{ base: "block", lg: "none" }}
            h="120px"
            bgImage="linear-gradient(180deg, #18183b 0%, rgba(24,24,59,.15) 60%), url('/power.gif')"
            bgPosition="center"
            bgSize="cover"
          />
        ) : null}
      </Box>

      <Box
        as="section"
        aria-label="Sobre o Power Trio"
        bg="blue.50"
        borderBottomWidth="1px"
        borderColor="blue.100"
      >
        <Container
          maxW="container.xl"
          px={{ base: 5, md: 6 }}
          py={{ base: 7, md: 9 }}
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "1.2fr .8fr" }}
            gap={{ base: 5, lg: 10 }}
            alignItems="center"
          >
            <Text
              color="#18183b"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.8"
            >
              Desenvolvido para facilitar a remoção de diferentes níveis de
              sujidade, desde as mais leves até as mais difíceis, o Power Trio
              combina ações químicas que potencializam os resultados e otimizam
              o trabalho do profissional.
            </Text>
            <Box borderLeftWidth="3px" borderColor="green.600" pl={5}>
              <Text
                color="gray.700"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
              >
                O Power Trio G&S reúne <strong>Lótus All-01 Power</strong>,{" "}
                <strong>Lótus Pré-Imper Power</strong> e{" "}
                <strong>Lótus Tira-Mancha Power</strong>.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Container
        maxW="container.xl"
        px={{ base: 5, md: 6 }}
        py={{ base: 10, md: 14 }}
      >
        <Box
          as="section"
          id="saibamais"
          scrollMarginTop="24px"
          aria-labelledby="powertrio-products"
        >
          <Text
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing=".12em"
            color="green.800"
            fontWeight="bold"
            mb={3}
          >
            Um trio. Funções complementares.
          </Text>
          <Heading
            id="powertrio-products"
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#18183b"
            mb={6}
          >
            Os produtos que compõem o Power Trio
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
            {products.map((product) => (
              <Box
                as="article"
                key={product.id}
                display="block"
                p={6}
                bg="gray.50"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="xl"
                _hover={{
                  boxShadow: "md",
                  borderColor: "green.500",
                  transform: "translateY(-3px)",
                }}
                transition="transform .2s ease, box-shadow .2s ease"
              >
                <Flex justify="center" h="160px" mb={4}>
                  <Image
                    src={product.image}
                    alt={product.fullName}
                    width={140}
                    height={160}
                    style={{
                      objectFit: "contain",
                      height: "160px",
                      width: "140px",
                    }}
                  />
                </Flex>
                <Heading as="h3" size="md" color="#18183b" mb={2}>
                  {product.fullName}
                </Heading>
                <Text color="gray.600" lineHeight="tall">
                  {product.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box
          as="section"
          mt={{ base: 12, md: 16 }}
          aria-labelledby="powertrio-synergy"
        >
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "minmax(0, 1.25fr) minmax(0, .75fr)",
            }}
            gap={{ base: 7, lg: 10 }}
            alignItems="start"
          >
            <Stack spacing={5}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing=".12em"
                textTransform="uppercase"
                color="green.800"
              >
                Limpeza em sinergia
              </Text>
              <Heading
                id="powertrio-synergy"
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                color="#18183b"
              >
                Por que usar juntos?
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="1.8"
              >
                Os três produtos podem ser combinados no mesmo banho de
                higienização, conforme as orientações técnicas. Suas funções se
                complementam, permitindo uma limpeza completa de estofados com
                apenas três produtos.
              </Text>
              <Accordion
                allowMultiple
                defaultIndex={[0]}
                borderRadius="xl"
                overflow="hidden"
              >
                {products.map((product) => (
                  <AccordionItem
                    key={product.id}
                    id={`details-${product.id}`}
                    scrollMarginTop="24px"
                    borderWidth="1px"
                    borderColor={product.border}
                    borderLeftWidth="4px"
                    bg={product.tint}
                    borderRadius="lg"
                    mb={3}
                  >
                    <Heading as="h3" size="md">
                      <AccordionButton
                        p={5}
                        _hover={{ bg: product.tint }}
                        _expanded={{ bg: product.tint }}
                      >
                        <Box
                          as="span"
                          flex={1}
                          textAlign="left"
                          color="#18183b"
                          fontWeight="bold"
                          fontSize="lg"
                        >
                          {product.name}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </Heading>
                    <AccordionPanel px={5} pb={5}>
                      <Text
                        fontSize="md"
                        color="gray.700"
                        lineHeight="1.8"
                        mb={4}
                      >
                        {product.detail}
                      </Text>
                      <Flex gap={3} wrap="wrap">
                        <Button
                          as="a"
                          href={product.bulletin}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="sm"
                          colorScheme="blue"
                        >
                          Boletim técnico
                        </Button>
                        <Button
                          as="a"
                          href={product.fds}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="sm"
                          variant="outline"
                          colorScheme="blue"
                        >
                          FDS
                        </Button>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Stack>
            <Box
              as="figure"
              m={0}
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              p={{ base: 5, md: 7 }}
              maxW="420px"
              w="full"
              justifySelf="center"
              alignSelf="start"
              mt={{ lg: 14 }}
            >
              <Image
                src="/produtos/novas/PowerTrio.webp"
                alt="Lótus All-01, Pré-Imper e Tira-Mancha: produtos do Power Trio G&S"
                width={700}
                height={430}
                sizes="(max-width: 767px) 90vw, 420px"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
              <Text
                as="figcaption"
                fontSize="sm"
                color="gray.600"
                textAlign="center"
                mt={4}
                lineHeight="tall"
              >
                Três produtos com funções complementares no processo de
                higienização.
              </Text>
            </Box>
          </Grid>
        </Box>

        <Box
          as="section"
          py={{ base: 12, md: 16 }}
          aria-labelledby="powertrio-faq"
        >
          <Heading
            id="powertrio-faq"
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            mb={6}
            color="#18183b"
          >
            Dúvidas sobre o Power Trio G&S
          </Heading>
          <Stack spacing={3}>
            {powerTrioFaqs.map(([question, answer]) => (
              <Box
                as="details"
                key={question}
                bg="gray.50"
                p={5}
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
                sx={{
                  "& summary": {
                    cursor: "pointer",
                    fontWeight: 600,
                    lineHeight: 1.6,
                  },
                  "& summary:focus-visible": {
                    outline: "2px solid #166534",
                    outlineOffset: "4px",
                  },
                }}
              >
                <Box as="summary">{question}</Box>
                <Text
                  mt={4}
                  lineHeight="1.8"
                  color="gray.700"
                  whiteSpace="pre-line"
                >
                  {answer}
                </Text>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box
          bg="#18183b"
          color="white"
          borderRadius="2xl"
          p={{ base: 6, md: 8 }}
        >
          <Flex
            gap={5}
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
          >
            <Box>
              <Heading as="h2" size="md">
                Conte com a orientação técnica da G&S
              </Heading>
              <Text mt={2} color="whiteAlpha.800">
                Tire suas dúvidas sobre os produtos e os procedimentos de
                higienização.
              </Text>
            </Box>
            <Button
              as="a"
              href="https://api.whatsapp.com/send?phone=5511913591344&text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Power%20Trio."
              target="_blank"
              rel="noopener noreferrer"
              bg="#06EC46"
              color="#18183b"
              flexShrink={0}
              _hover={{ bg: "#05d540" }}
            >
              Fale com a G&S
            </Button>
          </Flex>
        </Box>
      </Container>
    </MotionLayout>
  );
}
