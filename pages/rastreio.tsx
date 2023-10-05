import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import VideoFrame from "@/components/iFrame"
import MotionLayout from "@/components/MotionLayout"

export default function Rastreio() {
  return (
    <MotionLayout title="Rastreio">
      <Container maxW={"container.xl"} as="section">
        <Text
          as="h1"
          maxW={"container.xl"}
          display={"flex"}
          justifyContent={"center"}
          fontSize={"xl"}
          textTransform={"uppercase"}
          py={8}
          fontWeight={"bold"}
        >
          A G&S Home Solutions está em busca de praticidade no acompanhamento de
          seus pedidos.
        </Text>
        <Container
          maxW="container.xl"
          p={8}
          bg={
            "radial-gradient(circle, rgba(55,88,147,1) 0%, rgba(24,24,59,1) 93%, rgba(24,26,61,1) 100%);"
          }
          rounded={"md"}
        >
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
                  Duvidas de como rastrear seu pedido?
                </Text>
                <Text as="p" color={"white"}>
                  Não deixe de acompanhar o video
                </Text>
                <Text as="p" color={"white"} mt={8}>
                  Com o número da nota fiscal em mãos, escolha a opção de
                  pesquisa pelo DESTINATÁRIO insira seu CPF/CNPJ e clique em
                  RASTREAR.
                </Text>
              </Box>
              <Button
                mt={4}
                textTransform={"uppercase"}
                _hover={{
                  bgColor: "#06EC46",
                }}
              >
                Acompanhe seu pedido
              </Button>
            </Flex>
          </Flex>
        </Container>
        <Text
          display={"flex"}
          justifyContent={"center"}
          fontSize={"lg"}
          py={8}
          fontWeight={"bold"}
        >
          As Transportadoras abaixo não possuem nenhum sistema de rastreio e
          podem ser contatadas pelos telefones abaixo:
        </Text>
      </Container>

    </MotionLayout>
  )
}
