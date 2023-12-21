import { Box, Container, Text, Flex, Button } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { Certificated } from "@/components/Certificated";
import VideoFrame from "@/components/iFrame";
import TabsHistory from "@/components/TabsHistory";
import MotionLayout from "@/components/MotionLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const openPDF = () => {
    window.open("/manual/manualdeuso.pdf", "_blank");
  };

  return (
    <MotionLayout title="Home">
      <Card.Root>
        <Card.Tittle title="Conheça nossas linhas" />
        <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
          <Card.Item
            alt="Lotus logo"
            href="/lotus"
            bgImage="/card-lotus.webp"
            title="Higienização e Impermeabilização de estofados"
            logo="logo-lotus.svg"
            bgPos="bottom right"
          />
          {/* <Card.Item
            alt="Limpoo logo"
            href="/limpoo"
            bgImage="/card-limpoo.webp"
            title="Limpeza pós-obra"
            logo="logo-limpoo.svg"
          /> */}
        </Flex>
      </Card.Root>
      <Container maxW={"container.xl"} as="section">
        <Container
          maxW="container.xl"
          py={8}
          px={8}
          bg={
            "radial-gradient(circle, rgba(55,88,147,1) 0%, rgba(24,24,59,1) 93%, rgba(24,26,61,1) 100%);"
          }
          rounded={"md"}
        >
          <Text
            as="h2"
            fontWeight={"bold"}
            fontSize={"xl"}
            color={"white"}
            marginBottom={4}
          >
            Veja quem somos
          </Text>
          <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
            <Box width={{ base: "100%", md: "60%" }}>
              <VideoFrame
                embedID="nQQ8AF8-otE"
                title="G&S Home Solutions"
                ariaDescription="G&S Home Solutions video de apresentação"
              />
            </Box>
            <Flex
              width={{ base: "100%", md: "40%" }}
              flexDirection={"column"}
              justify={"space-between"}
            >
              <Box>
                <Text
                  as="h2"
                  fontSize={"lg"}
                  color={"white"}
                  fontWeight={"bold"}
                  marginBottom={{ base: 0, md: 2 }}
                >
                  Por que escolher a G&S ?
                </Text>
                <Text as="p" color={"white"}>
                  Nós somos a primeira empresa brasileira com a linha completa
                  de produtos profissionais voltada para o mercado têxtil de
                  higienização e impermeabilização.
                </Text>
              </Box>
              <Box minH={"65%"}>
                <TabsHistory />
              </Box>
            </Flex>
          </Flex>
        </Container>
        <Certificated.Bar />
        <Container maxW="container.xl" my={4} id="manual">
          <Text as="h2" fontWeight={"bold"} fontSize={"xl"} py={8}>
            Caro cliente, segue o nosso Manual de uso, cuidados e
            responsabilidade profissional:
          </Text>
          <Flex flexDirection={{ base: "column-reverse", md: "column" }}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              gap={4}
              textAlign={"justify"}
            >
              <Flex
                flexDirection={"column"}
                width={{ base: "100%", md: "40%" }}
                gap={8}
              >
                <Image
                  src="/manualdeuso.svg"
                  alt="Imagem representando manual de uso"
                  width={848}
                  height={598}
                />
              </Flex>

              <Flex
                width={{ base: "100%", md: "80%" }}
                flexDirection={"column"}
                gap={4}
              >
                <Text as="p">
                  Este documento visa informar sobre as condições de uso,
                  cuidados especiais e responsabilidade para uso profissional de
                  nossos produtos. Sua leitura é importante, pois nele segue
                  informações fundamentais sobre o uso adequado e pontos de
                  atenção que o profissional deve conhecer.
                </Text>
                <Text as="p">
                  Como também informa aos nossos clientes e colaboradores, o
                  grau de risco nas aplicações de produtos específicos a base se
                  solventes não inflamáveis e inflamáveis devido a perigos
                  relacionados a incêndios, explosões que podem ser gerados pelo
                  uso de impermeabilizantes de base solvente inflamável sem a
                  devida atenção e conhecimento dos produtos, suas
                  características e cuidados necessários durante a aplicação,
                  informações sobre aplicações em geral e também tipos de
                  tecidos que podem comprometer um bom processo e
                  consequentemente gerar problemas caso não sejam seguidas.
                </Text>
                <Text as="p">
                  Solicitamos a todos os profissionais que ao receberem este
                  documento leia atentamente as orientações contidas em toda sua
                  extensão antes da utilização dos produtos e mesmo assim caso
                  ainda tenham alguma dúvida, entre em contato com nossa área
                  comercial/técnica para que possamos tirar suas eventuais
                  dúvidas.
                </Text>
              </Flex>
            </Flex>
            <Button w={"full"} mt={4} colorScheme="messenger" onClick={openPDF}>
              Faça download do manual
            </Button>
          </Flex>
        </Container>
      </Container>
    </MotionLayout>
  );
}
