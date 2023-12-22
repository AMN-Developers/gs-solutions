import MotionLayout from "@/components/MotionLayout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  Divider,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Cartificado() {
  return (
    <MotionLayout title="Certificado e Homologação">
      <Container maxW={"container.xl"}>
        <Text
          as="h1"
          textAlign={"center"}
          py={8}
          fontSize={"2xl"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Certificados e Homologações
        </Text>
        <Text as="h2" py={4} fontWeight={"semibold"} fontSize={"lg"}>
          G&S Home Solutions juntos com a Eureciclo para um mundo melhor!
        </Text>
        <Flex gap={4} flexDirection={{ base: "column", md: "row" }}>
          <Flex
            justify={"center"}
            boxSize={"full"}
            w={{ base: "100%", md: "30%" }}
            alignSelf={"center"}
          >
            <Image
              src="/eureciclo-logo.png"
              alt="Eu Reciclo"
              width={114}
              height={114}
            />
          </Flex>

          <Flex
            flexDirection={"column"}
            p={4}
            gap={4}
            w={{ base: "100%", md: "70%" }}
            justifyContent={"center"}
          >
            <Text as="p">
              Você sabia que a G&S Home Solutions possui o selo eureciclo?
            </Text>
            <Text as="p" fontSize={"sm"}>
              Isso significa que apoiamos e investimos em reciclagem no Brasil O
              selo eureciclo foi idealizado para solucionar dois grandes
              problemas: a destinação final de embalagens geradas por empresas e
              a marginalização dos agentes da cadeia de reciclagem. É daí que
              vem a ideia da compensação ambiental: as empresas pagam as
              cooperativas para retirarem do ambiente uma quantidade equivalente
              de material ao das embalagens de seus produtos. Em 2017, iniciamos
              as operações no Chile com o selo todos reciclamos e agora estamos
              em todo território nacional.
            </Text>
          </Flex>
        </Flex>
        <Divider borderColor={"blackAlpha.400"} />
        <Flex
          flexDirection={"column"}
          fontSize={"sm"}
          my={4}
          textAlign={"justify"}
        >
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    ISO 9001
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    w={"20%"}
                    alignSelf={"center"}
                  >
                    <Image
                      src="certificados/iso.svg"
                      alt="Iso 9001"
                      width={114}
                      height={114}
                    />
                  </Box>
                  <Box
                    w={{ base: "100%", md: "80%" }}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Text>
                      A Iso 9001 designa um grupo de normas técnicas que
                      estabelecem um modelo de gestão da qualidade para
                      organizações em geral, pensando em toda nossa gestão de
                      compliance.
                    </Text>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    ANVISA
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    w={"20%"}
                    alignSelf={"center"}
                  >
                    <Image
                      src="/certificados/anvisa.png"
                      alt="Logo anvisa"
                      width={114}
                      height={114}
                    />
                  </Box>
                  <Box
                    w={{ base: "100%", md: "80%" }}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Text>
                      Todos os produtos da G&S são notificados da ANVISA
                      (Agência Nacional de Vigilância Sanitária) responsável por
                      criar normas e regulamentos e dar suporte para todas as
                      atividades da área no País.
                    </Text>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                    textTransform={"uppercase"}
                  >
                    Autorização para produção de produtos controlados
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex flexDirection={{ base: "column", md: "row" }} gap={8}>
                  <Box
                    display={"flex"}
                    justifyContent={"space-around"}
                    w={"35%"}
                    alignSelf={"center"}
                  >
                    <Image
                      src="/certificados/policiafederal.svg"
                      alt="Logo Policia Federal"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="/certificados/policiacivil.svg"
                      alt="Logo Policia Federal"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="/certificados/cetesb.svg"
                      alt="Logo Policia Federal"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="/ibama.png"
                      alt="Logo Ibama"
                      width={100}
                      height={100}
                    />
                  </Box>
                  <Box
                    w={{ base: "100%", md: "65%" }}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Text>
                      Através da Divisão de Controle e Fiscalização de Produtos
                      Químicos (DCPQ) a Policia Federal realiza o controle e a
                      fiscalização da fabricação, produção, armazenamento,
                      transformação, embalagem, compra, venda, comercialização,
                      aquisição, posse, doação, empréstimo, permuta, remessa,
                      transporte, distribuição, importação, exportação,
                      reexportação, cessão, reaproveitamento, reciclagem,
                      transferência e utilização de produtos químicos
                    </Text>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Container>
    </MotionLayout>
  );
}
