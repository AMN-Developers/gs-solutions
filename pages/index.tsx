import { Box, Container, Text, Flex } from "@chakra-ui/react"
import { Card } from "@/components/Card"
import { Certificated } from "@/components/Certificated"
import VideoFrame from "@/components/iFrame"
import TabsHistory from "@/components/TabsHistory"
import MotionLayout from "@/components/MotionLayout"

export default function Home() {
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
          />
          <Card.Item
            alt="Limpoo logo"
            href="/limpoo"
            bgImage="/card-limpoo.webp"
            title="Limpeza pós-obra"
            logo="logo-limpoo.svg"
          />
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
      </Container>
      <Certificated.Bar />
    </MotionLayout>
  )
}
