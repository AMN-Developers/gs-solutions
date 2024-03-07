import MotionLayout from "@/components/MotionLayout";
import Reveal from "@/components/Reveal";
import {
  Box,
  Button,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  css,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Fidelidade() {
  const [tabIndex, setTabIndex] = useState<number | null>(0);

  const handleTabsChange = (index: number | null) => {
    setTabIndex(index);
  };

  return (
    <MotionLayout title="Programa de Fidelidade">
      <Container maxW={"container.xl"}>
        <Text
          as="h1"
          textAlign={"center"}
          py={8}
          fontSize={"2xl"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Programa de fidelidade
        </Text>
        <Flex
          border={"2px solid rgba(55,88,147,1)"}
          rounded={"md"}
          p={8}
          mb={4}
          flexDir={{ base: "column", md: "row" }}
          minH={{ base: "sm", md: "lg" }}
        >
          <Flex
            w={{ base: "100%", md: "50%" }}
            flexDir={"column"}
            justifyContent={"center"}
            textAlign={"center"}
            py={8}
          >
            <Text as={"h2"} fontSize={"lg"} fontWeight={"semibold"}>
              Objetivo do nosso programa
            </Text>
            <Text as={"p"} fontSize={"sm"}>
              Este procedimento fixa sistemática do programa de fidelização de
              clientes.
            </Text>
            <Button as={Link} href={"#"} colorScheme="whatsapp" m={4}>
              Cadastre agora
            </Button>
          </Flex>
          <Flex w={{ base: "100%", md: "50%" }} flexDir={"column"}>
            <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
              Sobre o programa
            </Text>
            <Tabs
              index={tabIndex as number}
              onChange={handleTabsChange}
              isLazy
              lazyBehavior="unmount"
              fontSize={"xs"}
              textAlign={"justify"}
            >
              <TabList
                overflowX="auto"
                overflowY="hidden"
                css={css({
                  scrollbarWidth: "none",
                  "::-webkit-scrollbar": { display: "none" },
                  WebkitOverflowScrolling: "touch",
                  boxShadow: "inset 0 -2px 0 rgba(0, 0, 0, 0.1)",
                  borderBottom: "2px solid #06EC46",
                })}
                textColor={"white"}
                rounded={"md"}
              >
                <Tab
                  fontSize={"xs"}
                  bg={"rgba(55,88,147,1)"}
                  _hover={{
                    color: "green.500",
                  }}
                  _selected={{
                    color: "#06EC46",
                  }}
                >
                  Elegibilidade
                </Tab>
                <Tab
                  fontSize={"xs"}
                  bg={"rgba(55,88,147,1)"}
                  _hover={{
                    color: "green.500",
                  }}
                  _selected={{
                    color: "#06EC46",
                  }}
                >
                  Regras de Pontuação
                </Tab>
                <Tab
                  fontSize={"xs"}
                  bg={"rgba(55,88,147,1)"}
                  _hover={{
                    color: "green.500",
                  }}
                  _selected={{
                    color: "#06EC46",
                  }}
                >
                  Resgate dos prêmios.
                </Tab>
                <Tab
                  fontSize={"xs"}
                  bg={"rgba(55,88,147,1)"}
                  _hover={{
                    color: "green.500",
                  }}
                  _selected={{
                    color: "#06EC46",
                  }}
                >
                  Dos Diretos Reservados.
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text as={"p"} mb={2}>
                    1.1 O participante após sua primeira compra se cadastra na
                    plataforma, se declarando conhecedor e de acordo com os
                    termos de uso e responsável pelas informações cadastrais.
                  </Text>
                  <Text as={"p"} mb={2}>
                    1.2 O participante do programa Compre e Ganhe com a G&S está
                    ciente que deve manter seu email e telefone atualizado para
                    recebimento das informações de pontuação.
                  </Text>
                  <Text as={"p"} mb={2}>
                    1.3 Estão aptas a participar do Compre e Ganha com a G&S as
                    pessoas portadoras de número de CPF e/ou CNPJ próprio. A
                    pontuação será concedida aos clientes que criaram suas
                    contas com o mesmo CPF/CNPJ da emissão da sua Nota de
                    compra.
                  </Text>
                  <Text mb={2}>
                    1.4 Em caso de tentativa de pontuação indevida ou concebida
                    de forma errônea pela plataforma a G&S Home Solutions
                    reserva-se o direito de retirar os pontos referentes ao
                    consumo em questão ou ainda remover a participação do CPF/
                    CNPJ do programa Compre e Ganha com a G&S.
                  </Text>
                  <Text>
                    1.5 Será considerado um{" "}
                    <strong>Cliente Fidelimax Premiun</strong>, o cliente que
                    adquirir ao menos{" "}
                    <strong>
                      3 produtos da linha de higienização e 1 produto da linha
                      de Impermeabilizantes da marca Lótus G&S Home Solutions
                    </strong>{" "}
                    e/ou ter um{" "}
                    <strong>
                      ticket médio superior a R$ 1.500,00 por compra
                    </strong>
                    , considerando um tempo de recorrência de compra de{" "}
                    <strong>até 45 dias corridos.</strong>
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text as={"p"} mb={2}>
                    2.1 Toda compra realizada na G&S Home Solutions ganhará
                    pontos, respeitando a regra: Para clientes fidelimax
                    Standard a cada R$ 1,00 é convertido em 1 de ponto. Para
                    clientes fidelimax Premium a cada R$1,00 é convertido em
                    1,35 de pontos.
                  </Text>
                  <Text as={"p"} mb={2}>
                    2.2 Para pontuar no programa Compre e Ganhe com a G&S é
                    simples, a pontuação é gerada automaticamente após qualquer
                    compra realizada, seguindo o valor e numero da NF em
                    referência, após o cadastro inicial no programa Compre e
                    Ganhe com a G&S.
                  </Text>
                  <Text>
                    2.3 É proibido ao cliente a comercialização dos seus pontos
                    ou dos códigos de cupons gerados. Sendo exclusivos ao
                    CNPJ/CPF da conta cadastrada. Se comprovada a prática sua
                    conta dentro do programa Compre e Ganhe com a G&S pode ter
                    sua pontuação zerada.
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text as={"p"} mb={2}>
                    3.1 O resgate somente poderá ser feito pelo próprio cliente,
                    quando for efetuar a compra com o seu vendedor técnico, não
                    sendo permitido resgate por terceiros, independente de
                    relação, grau de parentesco.
                  </Text>
                  <Text as={"p"} mb={2}>
                    3.2 O resgate dos prêmios pode ser feito diretamente com o
                    vendedor técnico na hora da compra com prévia autorização do
                    usuário ao acesso da sua conta via CPF ou CNPJ do cliente
                  </Text>
                  <Text>
                    3.3 Os pontos tem validade após 1 ano sem compras com a G&S.
                    Assim gerando 1 ano sem nova entrada de pontos vinculadas a
                    conta do participante.
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text as={"p"} mb={2}>
                    4.1 A G&S se reserva ao direito de encerrar o programa
                    Compre e Ganhe com a G&S sem aviso prévio aos participantes
                    em caso de não conformidade com o alinhamento da marca ou
                    qualquer eventualidades que possam ocorrer no futuro do
                    programa.
                  </Text>
                  <Text>
                    4.2 A G&S Home Solutions se compromete com a segurança dos
                    dados informados ao programa conforme a LGPD (lei geral de
                    proteção de dados) .
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
        <Box textAlign={"center"} p={4}>
          <Text fontWeight={"semibold"} fontSize={"xl"}>
            Estrutura dos Pontos
          </Text>
          <Text fontWeight={"light"}>
            Toda compra realizada gera pontos, sendo diferenciado o
            multiplicador, conforme a categoria do cliente na plataforma:
          </Text>
        </Box>
        <Flex
          gap={4}
          mb={4}
          justifyContent={"space-between"}
          flexDir={{ base: "column", md: "row" }}
        >
          <Reveal delay={0.1}>
            <Flex
              textAlign={"center"}
              bg={"gray.200"}
              rounded={"md"}
              justifyContent={"center"}
              flexDir={"column"}
              gap={2}
              minH={"36"}
              p={4}
              border={"1px solid gray"}
              boxShadow={"md"}
            >
              <Text as={"h2"} fontWeight={"semibold"}>
                Clientes categoria Standard{" "}
              </Text>
              <Text as={"p"} fontSize={"sm"}>
                R$ 1,00 multiplica por 1,0X, equivalendo a 1 ponto para cada R$
                1,00 da NF referência.
              </Text>
            </Flex>
          </Reveal>
          <Reveal delay={0.3}>
            <Flex
              justifyContent={"center"}
              flexDir={"column"}
              gap={2}
              textAlign={"center"}
              bg={"gray.200"}
              rounded={"md"}
              minH={"36"}
              p={4}
              border={"1px solid gray"}
              boxShadow={"md"}
            >
              <Text as={"h2"} fontWeight={"semibold"}>
                Clientes categoria Premium
              </Text>
              <Text as={"p"} fontSize={"sm"}>
                R$ 1,00 multiplica por 1,35X, equivalendo a 1,35 pontos para
                cada R$ 1,00 da NF referência
              </Text>
              <Text as={"p"} fontSize={"xs"} fontWeight={"bold"}>
                35% a mais de pontos se comparado ao cliente Standard
              </Text>
            </Flex>
          </Reveal>
        </Flex>
      </Container>
    </MotionLayout>
  );
}
