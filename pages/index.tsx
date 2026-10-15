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
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import MotionLayout from "@/components/MotionLayout";
import TabsHistory from "@/components/TabsHistory";
import VideoFrame from "@/components/iFrame";
import { homeFaqs as faqItems } from "@/libs/siteFaqs";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.gshomesolutions.com.br";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function LineCard({
  href,
  bgImage,
  logo,
  alt,
  title,
  description,
  cta,
}: {
  href: string;
  bgImage: string;
  logo: string;
  alt: string;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <Box
      as={Link}
      href={href}
      minH={{ base: "340px", md: "420px" }}
      borderRadius="2xl"
      overflow="hidden"
      bgImage={`linear-gradient(0deg, rgba(9,19,43,.85) 0%, rgba(9,19,43,.1) 75%), url('${bgImage}')`}
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="flex-end"
      p={{ base: 6, md: 8 }}
      color="white"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "2xl",
        textDecoration: "none",
      }}
      transition="all .25s ease"
    >
      <Stack spacing={4} align="flex-start">
        <Image src={logo} alt={alt} width={240} height={70} />
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Text color="whiteAlpha.900">{description}</Text>
        <Text fontWeight="bold" color="#06EC46">
          {cta} →
        </Text>
      </Stack>
    </Box>
  );
}

function CredentialCard({
  href,
  image,
  alt,
  text,
}: {
  href: string;
  image: string;
  alt: string;
  text: string;
}) {
  return (
    <Box
      as={Link}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      bg="white"
      borderRadius="xl"
      p={5}
      minH="190px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderWidth="1px"
      borderColor="gray.100"
      _hover={{
        borderColor: "#06EC46",
        transform: "translateY(-3px)",
        boxShadow: "md",
        textDecoration: "none",
      }}
      transition="all .2s ease"
    >
      <Box h="82px" display="flex" alignItems="center">
        <Image
          src={image}
          alt={alt}
          width={120}
          height={80}
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </Box>
      <Text
        fontWeight="bold"
        color="gray.800"
        minH="48px"
        display="flex"
        alignItems="flex-end"
      >
        {text}
      </Text>
    </Box>
  );
}

export default function Home() {
  return (
    <MotionLayout title="Produtos profissionais para higienização e impermeabilização">
      <Head>
        <title>
          G&S Home Solutions | Produtos profissionais para higienização e
          impermeabilização
        </title>
        <meta
          name="description"
          content="Produtos profissionais para higienização, impermeabilização de estofados e limpeza pós-obra. Conheça as linhas Lótus e Limpoo da G&S Home Solutions."
        />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <Box bg="gray.50">
        <Box
          as="section"
          minH={{ base: "auto", md: "500px" }}
          overflow="hidden"
          py={{ base: 10, md: 16 }}
          bgImage="linear-gradient(90deg, rgba(14, 22, 51, .96) 0%, rgba(14, 22, 51, .86) 52%, rgba(14, 22, 51, .45) 100%), url('/card-lotus.webp')"
          bgSize="cover"
          bgPosition="center"
          color="white"
          display="flex"
          alignItems="center"
        >
          <Container maxW="container.xl" px={{ base: 5, md: 0 }}>
            <Grid
              templateColumns={{ base: "1fr", lg: "1.25fr .75fr" }}
              gap={{ base: 8, lg: 12 }}
              w="full"
              alignItems="center"
            >
              <Box maxW="2xl">
                <Text
                  color="#06EC46"
                  fontSize="sm"
                  fontWeight="bold"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  mb={3}
                >
                  Os melhores produtos para os melhores profissionais
                </Text>
                <Heading
                  as="h1"
                  fontSize={{ base: "3xl", md: "5xl" }}
                  lineHeight="shorter"
                >
                  Produtos de higienização, impermeabilização de estofados e
                  limpeza profissional.
                </Heading>
                <Heading
                  as="h2"
                  mt={5}
                  color="whiteAlpha.900"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="medium"
                  lineHeight="tall"
                >
                  Inovação, tecnologia e alta performance para elevar o padrão
                  da limpeza profissional.
                </Heading>
                <Text
                  mt={6}
                  color="#06EC46"
                  fontSize="md"
                  fontWeight="semibold"
                >
                  Tem alguma dúvida sobre nossos produtos? Nossa equipe está
                  aqui para ajudar!
                </Text>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  mt={7}
                  spacing={3}
                  align={{ base: "stretch", sm: "center" }}
                >
                  <Button as={Link} href="#linhas" colorScheme="green">
                    Conheça nossas linhas
                  </Button>
                  <Button
                    as={Link}
                    href="https://api.whatsapp.com/send?phone=5511913591344"
                    variant="outline"
                    color="white"
                    borderColor="whiteAlpha.600"
                    _hover={{ bg: "whiteAlpha.200" }}
                    target="_blank"
                  >
                    Tire suas dúvidas conosco
                  </Button>
                </Stack>
              </Box>
              <Stack
                display={{ base: "none", lg: "flex" }}
                align="flex-end"
                spacing={5}
              >
                <Box
                  bg="whiteAlpha.100"
                  borderWidth="1px"
                  borderColor="whiteAlpha.300"
                  backdropFilter="blur(8px)"
                  borderRadius="xl"
                  p={6}
                  w="full"
                  maxW="330px"
                  minH="200px"
                >
                  <Image
                    src="/logo-lotus.svg"
                    alt="Linha Lótus"
                    width={230}
                    height={70}
                  />
                  <Text mt={4} color="whiteAlpha.900">
                    Higienização e impermeabilização de estofados.
                  </Text>
                </Box>
                <Box
                  bg="whiteAlpha.100"
                  borderWidth="1px"
                  borderColor="whiteAlpha.300"
                  backdropFilter="blur(8px)"
                  borderRadius="xl"
                  p={6}
                  w="full"
                  maxW="330px"
                  minH="200px"
                >
                  <Image
                    src="/logo-limpoo.svg"
                    alt="Linha Limpoo"
                    width={230}
                    height={70}
                  />
                  <Text mt={4} color="whiteAlpha.900">
                    Soluções profissionais para limpeza.
                  </Text>
                </Box>
              </Stack>
            </Grid>
          </Container>
        </Box>

        <Container
          maxW="container.xl"
          py={{ base: 10, md: 16 }}
          px={{ base: 5, md: 0 }}
        >
          <Stack as="section" id="linhas" spacing={8} scrollMarginTop="24px">
            <Box maxW="3xl">
              <Text
                color="#31558e"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="widest"
                fontSize="sm"
                mb={3}
              >
                Linhas profissionais G&S
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                lineHeight="shorter"
              >
                A G&S é uma empresa líder em soluções de limpeza profissional no
                Brasil.
              </Heading>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <LineCard
                href="/lotus"
                bgImage="/card-lotus.webp"
                logo="/logo-lotus.svg"
                alt="Linha Lótus"
                title="Higienização e impermeabilização de estofados"
                description="Nossa linha completa de higienização e impermeabilização de estofados e tecidos foi desenvolvida para atender às necessidades de profissionais de pequenas a grandes empresas."
                cta="Conheça a linha Lótus"
              />
              <LineCard
                href="/limpoo"
                bgImage="/card-limpoo.webp"
                logo="/logo-limpoo.svg"
                alt="Linha Limpoo"
                title="Limpeza Profissional"
                description="Para todas as superfícies e utilidades, nossa linha de limpeza profissional para pisos, mármores e outras aplicações oferece alto rendimento e poder de limpeza."
                cta="Conheça a linha Limpoo"
              />
            </SimpleGrid>
          </Stack>

          <Grid
            as="section"
            templateColumns={{ base: "1fr", lg: "1fr 1.35fr" }}
            gap={{ base: 8, lg: 12 }}
            mt={{ base: 12, md: 16 }}
            pt={{ base: 12, md: 16 }}
            borderTopWidth="1px"
            borderColor="gray.200"
            alignItems="stretch"
          >
            <Box
              bg="linear-gradient(135deg, #18183b 0%, #375893 100%)"
              color="white"
              borderRadius="2xl"
              p={{ base: 6, md: 10 }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Text
                color="#06EC46"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="widest"
                fontSize="sm"
                mb={3}
              >
                G&S Home Solutions
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                lineHeight="shorter"
              >
                Conhecimento aplicado para evoluir o trabalho profissional.
              </Heading>
              <Text
                mt={5}
                color="whiteAlpha.900"
                fontSize={{ base: "md", md: "lg" }}
              >
                Desde 2015, a G&S une desenvolvimento, orientação técnica e
                soluções profissionais para o mercado de higienização,
                impermeabilização e limpeza.
              </Text>
              <Button
                as={Link}
                href="/certificado"
                mt={7}
                colorScheme="green"
                alignSelf="flex-start"
              >
                Conheça nossas certificações
              </Button>
            </Box>
            <Box>
              <Text
                color="#31558e"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="widest"
                fontSize="sm"
                mb={3}
              >
                Confiança construída em processos
              </Text>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} mb={6}>
                Certificações, compromisso técnico e responsabilidade.
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                <CredentialCard
                  href="/certificado"
                  image="/anvisa-logo.png"
                  alt="ANVISA"
                  text="Empresa certificada pela ANVISA"
                />
                <CredentialCard
                  href="https://drive.google.com/file/d/1MLUPUMzHhbTjKcrbs4ixqX8WWX_xSp5f/view?usp=drive_link"
                  image="/iso-logo.svg"
                  alt="ISO 9001"
                  text="Gestão orientada à qualidade"
                />
                <CredentialCard
                  href="/certificado"
                  image="/aatcc-logo.svg"
                  alt="AATCC"
                  text="Desenvolvido em conformidade com as normas, assegurando padrões de qualidade internacionais."
                />
                <CredentialCard
                  href="https://drive.google.com/file/d/1WzQ3i0_99gQostt5TV5fnqab5buzXGLp/view"
                  image="/certificados/SVB.svg"
                  alt="Selo Verde Brasil"
                  text="Responsabilidade ambiental"
                />
              </SimpleGrid>
            </Box>
          </Grid>

          {/* Bloco institucional preservado, oculto conforme revisão de 14/10/2026.
          <Box as="section" mt={{ base: 12, md: 16 }} pt={{ base: 12, md: 16 }} borderTopWidth="1px" borderColor="gray.200">
            <Grid templateColumns={{ base: "1fr", lg: "1.05fr .95fr" }} gap={{ base: 8, lg: 10 }} bg="linear-gradient(135deg, #18183b 0%, #2f4f87 100%)" borderRadius="2xl" p={{ base: 5, md: 8 }} color="white" alignItems="stretch">
              <Box pr={{ base: 0, lg: 10 }} borderRightWidth={{ base: 0, lg: "1px" }} borderColor="whiteAlpha.300">
                <Text color="#06EC46" fontWeight="bold" textTransform="uppercase" letterSpacing="widest" fontSize="sm" mb={3}>Institucional</Text>
                <Heading as="h2" size="lg" mb={2}>Conheça a G&S Home Solutions</Heading>
                <Text color="whiteAlpha.900" mb={5}>Tecnologia, conhecimento técnico e soluções profissionais para cada etapa do seu trabalho.</Text>
                <VideoFrame embedID="nQQ8AF8-otE" title="Vídeo institucional G&S Home Solutions" ariaDescription="Vídeo de apresentação da G&S Home Solutions" />
              </Box>
              <Box>
                <Text color="#06EC46" fontWeight="bold" textTransform="uppercase" letterSpacing="widest" fontSize="sm" mb={3}>Nossa história desde 2015</Text>
                <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} mb={3}>Evolução técnica construída junto ao mercado.</Heading>
                <Text color="whiteAlpha.900" mb={5}>Conheça os marcos, produtos e decisões que construíram a trajetória da G&S Home Solutions.</Text>
                <TabsHistory />
              </Box>
            </Grid>
          </Box>

          */}

          <SimpleGrid
            as="section"
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            mt={{ base: 12, md: 16 }}
            pt={{ base: 12, md: 16 }}
            borderTopWidth="1px"
            borderColor="gray.200"
            alignItems="start"
          >
            <Box>
              <Text
                color="#31558e"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="widest"
                fontSize="sm"
                mb={3}
              >
                Dúvidas frequentes
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                lineHeight="shorter"
              >
                Informações para escolher e aplicar com mais segurança.
              </Heading>
              <Text color="gray.600" mt={4} fontSize={{ base: "md", md: "lg" }}>
                Respostas objetivas sobre as linhas, distribuidores e
                orientações técnicas da G&S.
              </Text>
              <Button
                as={Link}
                href="https://api.whatsapp.com/send?phone=5511913591344&text=Olá,%20vim%20pelo%20Site%20Institucional.%20"
                target="_blank"
                mt={7}
                colorScheme="blue"
              >
                Fale Conosco
              </Button>
            </Box>
            <Accordion
              allowToggle
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="sm"
            >
              {faqItems.map(([question, answer]) => (
                <AccordionItem key={question} borderColor="gray.100">
                  <AccordionButton py={5} px={6} _hover={{ bg: "gray.50" }}>
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                      {question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel px={6} pb={5} color="gray.600">
                    {answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </SimpleGrid>

          <Box
            as="section"
            id="manual"
            scrollMarginTop="24px"
            mt={{ base: 12, md: 16 }}
            pt={{ base: 12, md: 16 }}
            borderTopWidth="1px"
            borderColor="gray.200"
          >
            <Box
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="lg"
              borderWidth="1px"
              borderColor="gray.100"
            >
              <Box px={{ base: 6, md: 10 }} pt={{ base: 6, md: 9 }}>
                <Text
                  color="#31558e"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  fontSize="sm"
                  mb={3}
                >
                  Uso responsável
                </Text>
                <Heading as="h2" size="lg" maxW="4xl">
                  Caro cliente, segue o nosso manual de uso, cuidados e
                  responsabilidade profissional:
                </Heading>
              </Box>
              <Grid
                templateColumns={{ base: "1fr", md: ".7fr 1.3fr" }}
                gap={{ base: 4, md: 10 }}
                px={{ base: 6, md: 10 }}
                py={{ base: 6, md: 8 }}
                alignItems="center"
              >
                <Box maxW={{ base: "300px", md: "360px" }} mx="auto" w="full">
                  <Image
                    src="/manualdeuso.svg"
                    alt="Ilustração do manual de uso da G&S"
                    width={848}
                    height={598}
                  />
                </Box>
                <Stack
                  spacing={4}
                  color="gray.600"
                  textAlign="justify"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  <Text>
                    Este documento visa informar sobre as condições de uso,
                    cuidados especiais e responsabilidade para uso profissional
                    de nossos produtos. Sua leitura é importante, pois nele
                    seguem informações fundamentais sobre o uso adequado e
                    pontos de atenção que o profissional deve conhecer.
                  </Text>
                  <Text>
                    Como também informa aos nossos clientes e colaboradores o
                    grau de risco nas aplicações de produtos específicos à base
                    de solventes não inflamáveis e inflamáveis, devido a perigos
                    relacionados a incêndios e explosões. Também reúne
                    informações sobre aplicações em geral e tipos de tecidos que
                    podem comprometer um bom processo caso as orientações não
                    sejam seguidas.
                  </Text>
                  <Text>
                    Solicitamos a todos os profissionais que, ao receber este
                    documento, leiam atentamente todas as orientações antes da
                    utilização dos produtos. Em caso de dúvida, entre em contato
                    com nossa área comercial/técnica.
                  </Text>
                </Stack>
              </Grid>
              <Button
                as={Link}
                href="https://drive.google.com/file/d/1YxrvPivrUA4rsBp1OQDyy4gdvewZ3itS/view?usp=sharing"
                target="_blank"
                colorScheme="blue"
                borderRadius="0"
                w="full"
                py={7}
              >
                Faça download do manual
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </MotionLayout>
  );
}
