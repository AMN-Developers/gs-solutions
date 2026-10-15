import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { calculatorPromotions } from "@/libs/calculatorPromotions";
import {
  calculateDilution,
  DILUTION_RATIOS,
  parseWater,
} from "@/libs/dilution";

interface InstallPrompt extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.gshomesolutions.com.br"
).replace(/\/$/, "");
const canonical = `${SITE_URL}/calculadora`;
const description =
  "Calcule a quantidade de produto de limpeza para diluir em água. Escolha a proporção, informe litros ou mililitros e veja o resultado em ml.";
const format = (value: number) =>
  new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 }).format(value);
const faqs = [
  {
    question: "O que significa uma diluição de 1:50?",
    answer:
      "Nesta calculadora, 1:50 significa uma parte de produto para 50 partes de água. Por exemplo, para 5 litros de água, o cálculo indica 100 ml de produto. Confira se essa interpretação corresponde à orientação do fabricante.",
  },
  {
    question: "Devo informar a água ou o volume final da mistura?",
    answer:
      "Informe somente a quantidade de água. O produto é adicionado a esse volume: 5 litros de água mais 100 ml de produto resultam em aproximadamente 5,1 litros de solução. A ferramenta não calcula a partir do volume final desejado.",
  },
  {
    question: "Qual proporção devo escolher para meu produto?",
    answer:
      "Use a proporção indicada no rótulo ou na ficha técnica, considerando a aplicação e a superfície. A calculadora faz a conta, mas não determina a diluição recomendada para um produto específico.",
  },
  {
    question: "Posso calcular usando mililitros?",
    answer:
      "Sim. Selecione ml no campo de unidade. Por exemplo, 500 ml de água na proporção 1:50 precisam de 10 ml de produto. O resultado da quantidade de produto é sempre apresentado em mililitros.",
  },
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${canonical}#app`,
      name: "Calculadora de diluição G&S Home Solutions",
      url: canonical,
      description,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      inLanguage: "pt-BR",
      browserRequirements: "Navegador com JavaScript habilitado",
      publisher: {
        "@type": "Organization",
        name: "G&S Home Solutions",
        url: SITE_URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Calculadora de diluição",
          item: canonical,
        },
      ],
    },
  ],
};

export default function Calculadora() {
  const router = useRouter();
  const [ratio, setRatio] = useState("");
  const [water, setWater] = useState("");
  const [unit, setUnit] = useState("l");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] =
    useState<ReturnType<typeof calculateDilution>>(null);
  const [installPrompt, setInstallPrompt] = useState<InstallPrompt | null>(
    null,
  );
  const [installed, setInstalled] = useState(false);
  const [ios, setIos] = useState(false);
  const [installError, setInstallError] = useState("");
  const ratioInvalid = !DILUTION_RATIOS.includes(Number(ratio));
  const waterInvalid =
    !Number.isFinite(parseWater(water)) || parseWater(water) <= 0;
  useEffect(() => {
    if (!router.isReady) return;
    const value = Number(router.query.proportion);
    setRatio(DILUTION_RATIOS.includes(value) ? String(value) : "");
    setResult(null);
    setSubmitted(false);
  }, [router.isReady, router.query.proportion]);
  useEffect(() => {
    setInstalled(
      window.matchMedia("(display-mode: standalone)").matches ||
        Boolean((navigator as Navigator & { standalone?: boolean }).standalone),
    );
    setIos(
      /iphone|ipad|ipod/i.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1),
    );
    const onPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPrompt);
    };
    const onInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);
  const invalidateResult = () => {
    setResult(null);
    setSubmitted(false);
  };
  const calculate = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    const value = calculateDilution(Number(ratio), water, unit);
    setResult(value);
    if (!value)
      document.getElementById(ratioInvalid ? "proportion" : "water")?.focus();
  };
  const install = async () => {
    if (!installPrompt) return;
    try {
      setInstallError("");
      await installPrompt.prompt();
      await installPrompt.userChoice;
      setInstallPrompt(null);
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
        "event",
        "install_app",
      );
    } catch {
      setInstallError(
        "Não foi possível iniciar a instalação. Tente pelo menu do navegador.",
      );
    }
  };
  return (
    <>
      <NextSeo
        title="Calculadora de diluição | G&S Home Solutions"
        description={description}
        canonical={canonical}
        openGraph={{
          type: "website",
          url: canonical,
          title: "Calculadora de diluição | G&S Home Solutions",
          description,
          locale: "pt_BR",
          site_name: "G&S Home Solutions",
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </Head>
      <Box bg="#f5f7fa" color="#18183b" py={{ base: 8, md: 14 }}>
        <Container maxW="container.xl" px={{ base: 5, md: 6 }}>
          <Flex
            as="nav"
            aria-label="Você está aqui"
            gap={2}
            fontSize="sm"
            color="gray.600"
            mb={7}
          >
            <Box as={Link} href="/" _hover={{ textDecoration: "underline" }}>
              Início
            </Box>
            <Text aria-hidden="true">/</Text>
            <Text aria-current="page">Calculadora de diluição</Text>
          </Flex>
          <Stack spacing={4} mb={9} maxW="820px">
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing=".14em"
              color="green.800"
              textTransform="uppercase"
            >
              Ferramentas G&S
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight="1.15"
            >
              Calculadora de diluição
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              lineHeight="1.7"
            >
              A diluição certa começa com uma conta simples. Descubra quantos
              mililitros de produto adicionar à água, usando a proporção
              indicada no rótulo.
            </Text>
          </Stack>
          <Grid
            templateColumns={{ base: "1fr", lg: "minmax(0, 1fr) 380px" }}
            gap={{ base: 7, lg: 8 }}
            alignItems="start"
          >
            <Stack spacing={7} minW={0}>
              <Box
                bg="white"
                borderRadius="2xl"
                borderWidth="1px"
                borderColor="gray.200"
                boxShadow="0 10px 35px rgba(24,24,59,.04)"
                overflow="hidden"
              >
                <Box
                  px={{ base: 5, md: 8 }}
                  py={6}
                  borderBottomWidth="1px"
                  borderColor="gray.100"
                >
                  <Heading as="h2" size="md">
                    Calcule sua diluição
                  </Heading>
                  <Text mt={2} fontSize="sm" color="gray.600">
                    1 parte de produto para N partes de água. Resultado em ml.
                  </Text>
                </Box>
                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "1fr",
                  }}
                  gap={6}
                  p={{ base: 5, md: 8 }}
                >
                  <Stack as="form" onSubmit={calculate} noValidate spacing={6}>
                    <FormControl
                      isInvalid={submitted && ratioInvalid}
                      isRequired
                    >
                      <FormLabel htmlFor="proportion" fontWeight="semibold">
                        1. Proporção de diluição
                      </FormLabel>
                      <Select
                        id="proportion"
                        h="52px"
                        borderRadius="lg"
                        bg="gray.50"
                        placeholder="Selecione a proporção"
                        value={ratio}
                        onChange={(event) => {
                          setRatio(event.target.value);
                          invalidateResult();
                        }}
                        focusBorderColor="green.600"
                      >
                        {DILUTION_RATIOS.map((value) => (
                          <option key={value} value={value}>
                            1 : {value}
                          </option>
                        ))}
                      </Select>
                      <FormHelperText>
                        Confira a proporção no rótulo do produto.
                      </FormHelperText>
                      <FormErrorMessage>
                        Selecione uma proporção para calcular.
                      </FormErrorMessage>
                    </FormControl>
                    <Box>
                      <Grid
                        templateColumns={{
                          base: "1fr",
                          sm: "minmax(0, 1fr) 150px",
                        }}
                        gap={3}
                      >
                        <FormControl
                          isInvalid={submitted && waterInvalid}
                          isRequired
                        >
                          <FormLabel
                            htmlFor="water"
                            fontWeight="semibold"
                            minH="48px"
                          >
                            2. Quantidade de água
                          </FormLabel>
                          <Input
                            id="water"
                            type="text"
                            inputMode="decimal"
                            autoComplete="off"
                            placeholder="Ex.: 5"
                            h="52px"
                            bg="gray.50"
                            borderRadius="lg"
                            value={water}
                            onChange={(event) => {
                              setWater(event.target.value);
                              invalidateResult();
                            }}
                            focusBorderColor="green.600"
                          />
                          <FormErrorMessage>
                            Informe um número maior que zero, como 5 ou 0,5.
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl>
                          <FormLabel
                            htmlFor="unit"
                            fontWeight="semibold"
                            minH="48px"
                          >
                            Unidade
                          </FormLabel>
                          <RadioGroup
                            id="unit"
                            value={unit}
                            onChange={(value) => {
                              setUnit(value);
                              invalidateResult();
                            }}
                            aria-label="Unidade da quantidade de água"
                          >
                            <Flex h="52px" gap={5} align="center">
                              <Radio
                                value="l"
                                colorScheme="green"
                                size="lg"
                                py={2}
                              >
                                L
                              </Radio>
                              <Radio
                                value="ml"
                                colorScheme="green"
                                size="lg"
                                py={2}
                              >
                                mL
                              </Radio>
                            </Flex>
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Box>
                    <Stack spacing={2}>
                      <Button
                        type="submit"
                        h="52px"
                        bg="#06EC46"
                        color="#18183b"
                        borderRadius="lg"
                        _hover={{ bg: "#05d540" }}
                        _focusVisible={{
                          outline: "3px solid",
                          outlineColor: "green.800",
                          outlineOffset: "3px",
                        }}
                      >
                        Calcular diluição{" "}
                        <Text as="span" aria-hidden="true" ml={3}>
                          →
                        </Text>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        color="gray.600"
                        onClick={() => {
                          setRatio("");
                          setWater("");
                          setUnit("l");
                          invalidateResult();
                        }}
                      >
                        Limpar campos
                      </Button>
                    </Stack>
                    <Box role="status" aria-live="polite" aria-atomic="true">
                      {result ? (
                        <Box
                          bg="blue.50"
                          borderWidth="1px"
                          borderColor="blue.100"
                          borderRadius="lg"
                          p={5}
                        >
                          <Text fontSize="sm" color="gray.600">
                            Quantidade de produto
                          </Text>
                          <Text
                            as="output"
                            htmlFor="proportion water unit"
                            display="block"
                            fontSize="3xl"
                            fontWeight="bold"
                            color="#18183b"
                          >
                            {format(result.productMl)} ml
                          </Text>
                          <Text mt={2}>
                            Adicione {format(result.productMl)} ml de produto a{" "}
                            {format(parseWater(water))}{" "}
                            {unit === "l" ? "L" : "ml"} de água.
                          </Text>
                          <Text mt={2} fontSize="sm" color="gray.600">
                            Proporção 1:{ratio} · Volume final aproximado:{" "}
                            {format(result.totalMl / 1000)} L
                          </Text>
                          {result.productMl < 0.01 ? (
                            <Text fontSize="sm" mt={2}>
                              Quantidade inferior a 0,01 ml. Aumente o volume de
                              preparo para obter uma medida prática.
                            </Text>
                          ) : null}
                        </Box>
                      ) : null}
                    </Box>
                  </Stack>
                </Grid>
                <Box
                  px={{ base: 5, md: 8 }}
                  py={4}
                  bg="green.50"
                  borderTopWidth="1px"
                  borderColor="green.100"
                >
                  <Text fontSize="sm" color="green.900">
                    <strong>Antes de preparar:</strong> siga o rótulo e a ficha
                    técnica do produto. A ferramenta calcula a proporção; a
                    recomendação de uso depende da aplicação.
                  </Text>
                </Box>
              </Box>
              {!installed ? (
                <Box
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={5}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    gap={4}
                    direction={{ base: "column", md: "row" }}
                  >
                    <Box>
                      <Heading as="h2" size="sm">
                        Sua calculadora sempre à mão
                      </Heading>
                      <Text color="gray.600" fontSize="sm" mt={2}>
                        {ios
                          ? "No Safari, toque em Compartilhar e depois em Adicionar à Tela de Início."
                          : "Salve esta página nos favoritos ou adicione à tela inicial pelo menu do navegador, quando disponível."}
                      </Text>
                    </Box>
                    {installPrompt ? (
                      <Button
                        flexShrink={0}
                        leftIcon={<DownloadIcon />}
                        onClick={install}
                        variant="outline"
                        colorScheme="green"
                      >
                        Instalar calculadora
                      </Button>
                    ) : null}
                  </Flex>
                  {installError ? (
                    <Text role="alert" mt={3} color="red.700" fontSize="sm">
                      {installError}
                    </Text>
                  ) : null}
                </Box>
              ) : null}
              <Box
                as="section"
                bg="white"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="2xl"
                p={{ base: 5, md: 8 }}
              >
                <Heading as="h2" size="lg" mb={4}>
                  Como calcular a diluição de um produto?
                </Heading>
                <Text color="gray.600" lineHeight="1.8">
                  Converta a água para mililitros e divida pela segunda parte da
                  proporção. Para 1:50 com 5 litros de água: 5.000 ÷ 50 ={" "}
                  <strong>100 ml de produto</strong>.
                </Text>
                <Box bg="gray.50" borderRadius="lg" p={4} my={5}>
                  <Text fontWeight="semibold">
                    Produto (ml) = água (ml) ÷ proporção
                  </Text>
                  <Text fontSize="sm" color="gray.600" mt={1}>
                    1 litro = 1.000 mililitros. Nesta ferramenta, 1:N representa
                    produto:água.
                  </Text>
                </Box>
                <Text color="gray.600" lineHeight="1.8">
                  Escolha a proporção recomendada para seu produto, informe
                  apenas o volume de água e selecione L ou ml. O resultado
                  indica o produto a adicionar, não uma recomendação de
                  concentração.
                </Text>
                <Flex gap={4} mt={5} wrap="wrap">
                  <Box
                    as={Link}
                    href="/higienizacao"
                    color="green.800"
                    fontWeight="semibold"
                    textDecoration="underline"
                  >
                    Linha de higienização
                  </Box>
                  <Box
                    as={Link}
                    href="/blog"
                    color="green.800"
                    fontWeight="semibold"
                    textDecoration="underline"
                  >
                    Dicas no blog G&S
                  </Box>
                </Flex>
              </Box>
              <Box as="section" aria-labelledby="calculator-faq" pb={3}>
                <Heading id="calculator-faq" as="h2" size="lg" mb={5}>
                  Dúvidas sobre diluição
                </Heading>
                <Stack spacing={3}>
                  {faqs.map((faq) => (
                    <Box
                      as="details"
                      key={faq.question}
                      bg="white"
                      borderWidth="1px"
                      borderColor="gray.200"
                      borderRadius="xl"
                      px={5}
                      py={4}
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
                      <Box as="summary">{faq.question}</Box>
                      <Text color="gray.600" mt={3} lineHeight="1.8">
                        {faq.answer}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
            <Stack
              as="aside"
              aria-label="Conheça as linhas G&S"
              spacing={5}
              position={{ lg: "sticky" }}
              top={{ lg: 6 }}
            >
              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing=".12em"
                textTransform="uppercase"
                color="gray.600"
              >
                Conheça nossas linhas
              </Text>
              {calculatorPromotions
                .filter((card) => card.enabled)
                .slice(0, 2)
                .map((card) => (
                  <Box
                    as={Link}
                    key={card.id}
                    href={card.href}
                    display="block"
                    bg="white"
                    borderRadius="xl"
                    overflow="hidden"
                    borderWidth="1px"
                    borderColor="gray.200"
                    transition="transform .2s ease, box-shadow .2s ease"
                    _hover={{ transform: "translateY(-3px)", boxShadow: "lg" }}
                    _focusVisible={{
                      outline: "3px solid",
                      outlineColor: "green.700",
                      outlineOffset: "3px",
                    }}
                  >
                    <Box position="relative" aspectRatio={4 / 3}>
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 991px) calc(100vw - 40px), 380px"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Flex p={4} gap={3} justify="space-between" align="center">
                      <Text fontSize="sm" fontWeight="semibold">
                        {card.label}
                      </Text>
                      <Text aria-hidden="true">↗</Text>
                    </Flex>
                  </Box>
                ))}
            </Stack>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
