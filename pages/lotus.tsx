import { Card } from "@/components/Card"
import MotionLayout from "@/components/MotionLayout"
import { Box, Container, Flex, Text, Button } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

export default function Lotus() {
  return (
    <MotionLayout title="Lotus">
      <Box
        bgImage={"/bglotus.gif"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        p={8}
        py={150}
        my={4}
        boxShadow={"0px 4px 4px 1000px rgba(0, 0, 0, 0.50) inset"}
      >
        <Flex flexDirection={"column"} justifyContent={"center"}>
          <Text
            fontWeight={"black"}
            fontSize={{ base: "md", md: "2xl" }}
            color={"white"}
            textAlign={"center"}
            textTransform={"uppercase"}
            w={"100%"}
          >
            A LINHA MAIS COMPLETA PARA SUA EMPRESA DE HIGIENIZAÇÃO E
            IMPERMEABILIZAÇÃO
          </Text>
        </Flex>
      </Box>
      <Container maxW={"container.xl"}>
        <Flex justifyContent={"center"} flexDirection={"column"} rounded={"md"}>
          <Text
            as="h2"
            textAlign={"center"}
            py={4}
            fontSize={{ base: "md", md: "2xl" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
          >
            SOLUÇÃO ESSENCIAL PARA HIGIENIZAÇÃO E IMPERMEABILIZAÇÃO
          </Text>
          <Box mx={"auto"} my={4}>
            <Image
              src="/produtos.png"
              alt="Linha Lotus"
              width={768}
              height={275}
            />
          </Box>
          <Flex flexDirection={{ base: "column", sm: "row" }} gap={4}>
            <Button
              w={{ base: "100%", sm: "50%" }}
              as={Link}
              href={"/higienizacao"}
              bgColor={"#222C54"}
              color={"white"}
              _hover={{
                bgColor: "transparent",
                color: "#222C54",
              }}
            >
              Linha de Higienização
            </Button>
            <Button
              w={{ base: "100%", sm: "50%" }}
              as={Link}
              href={"/impermeabilizantes"}
              bgColor={"#222C54"}
              color={"white"}
              _hover={{
                bgColor: "transparent",
                color: "#222C54",
              }}
            >
              Linha de Impermeabilizantes
            </Button>
          </Flex>
          <Card.Root>
            <Card.Tittle title="Qualidade e Tecnologia" />
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
              <Card.Item
                alt="Fixflot logo"
                href="/fixflot"
                bgImage="/fixflot-banner.webp"
                title="FixFlot - O melhor flotador do mercado"
                logo="logo-fixflot.svg"
              />
              <Card.Item
                alt="Power Trio Logo"
                href="/powertrio"
                bgImage="/powertrio-bg.png"
                title="A tríplice para sua limpeza"
                logo="powertrio-logo.svg"
              />
            </Flex>
          </Card.Root>
        </Flex>
        {/* linha max */}
        <Flex
          gap={4}
          flexDirection={{ base: "column", md: "row" }}
          bgColor={"#222C54"}
          rounded={"md"}
          my={4}
        >
          <Flex
            justify={"center"}
            boxSize={"full"}
            w={{ base: "100%", md: "40%" }}
            p={4}
            px={{ base: "4", sm: "36", md: "4" }}
          >
            <Image
              src="/embalagens-max.png"
              alt="Linha Max"
              width={734}
              height={400}
            />
          </Flex>

          <Flex
            flexDirection={"column"}
            p={4}
            gap={4}
            w={{ base: "100%", md: "60%" }}
            justifyContent={"center"}
          >
            <Text
              as="p"
              fontSize={{ base: "md", md: "2xl" }}
              fontWeight={"bold"}
              color={"white"}
            >
              Linha Max
            </Text>
            <Text as="p" fontSize={{ base: "sm", md: "md" }} color={"white"}>
              A Família de impermeabilizantes Lótus HS MAX, é para o uso dos
              profissionais mais exigentes do mercado e que pretendem
              proporcionar aos seus clientes o melhor resultado de qualidade e
              performance.
            </Text>
            <Button
              w={"40"}
              justifyContent={"left"}
              as={Link}
              href={"/max"}
              color={"white"}
              bgColor={"transparent"}
              _hover={{
                bgColor: "tranparent",
                textDecoration: "underline",
              }}
            >
              Saiba mais
            </Button>
          </Flex>
        </Flex>
        {/* linha auto */}
        <Flex
          gap={4}
          flexDirection={{ base: "column-reverse", md: "row" }}
          bgColor={"#222C54"}
          rounded={"md"}
          my={4}
        >
          <Flex
            flexDirection={"column"}
            p={4}
            gap={4}
            w={{ base: "100%", md: "60%" }}
            justifyContent={"center"}
          >
            <Text
              as="p"
              fontSize={{ base: "md", md: "2xl" }}
              fontWeight={"bold"}
              color={"white"}
            >
              Linha Auto
            </Text>
            <Text as="p" fontSize={{ base: "sm", md: "md" }} color={"white"}>
              A Família Automotiva Lótus contam com produtos formulados para
              remover sujeira, manchas e resíduos, proporcionando uma limpeza
              profunda e eficiente no seu veículo.
            </Text>
            <Button
              w={"40"}
              justifyContent={"left"}
              as={Link}
              href={"/auto"}
              color={"white"}
              bgColor={"transparent"}
              _hover={{
                bgColor: "tranparent",
                textDecoration: "underline",
              }}
            >
              Saiba mais
            </Button>
          </Flex>
          <Flex
            justify={"center"}
            boxSize={"full"}
            w={{ base: "100%", md: "40%" }}
            p={4}
            px={{ base: "4", sm: "36", md: "4" }}
          >
            <Image
              src="/embalagens-auto.png"
              alt="Linha Max"
              width={734}
              height={400}
            />
          </Flex>
        </Flex>
        {/* linha tecnica */}
        <Flex
          gap={4}
          flexDirection={{ base: "column", md: "row" }}
          bgColor={"#222C54"}
          rounded={"md"}
          my={4}
        >
          <Flex
            justify={"center"}
            boxSize={"full"}
            w={{ base: "100%", md: "40%" }}
            p={4}
            px={{ base: "4", sm: "36", md: "4" }}
          >
            <Image
              src="/embalagens-tecnica.png"
              alt="Linha Max"
              width={734}
              height={400}
            />
          </Flex>
          <Flex
            flexDirection={"column"}
            p={4}
            gap={4}
            w={{ base: "100%", md: "60%" }}
            justifyContent={"center"}
          >
            <Text
              as="p"
              fontSize={{ base: "md", md: "2xl" }}
              fontWeight={"bold"}
              color={"white"}
            >
              Linha Tecnica
            </Text>
            <Text as="p" fontSize={{ base: "sm", md: "md" }} color={"white"}>
              Linha Tecnica Lotus conta com produtos especializados em proteção
              contra bacterias e microorganimos que possam ser prejudiciais a
              saude, e também com retardantes de chamas, para maior sua maior
              segurança e do seu lar
            </Text>
            <Button
              w={"40"}
              justifyContent={"left"}
              as={Link}
              href={"/tecnica"}
              color={"white"}
              bgColor={"transparent"}
              _hover={{
                bgColor: "tranparent",
                textDecoration: "underline",
              }}
            >
              Saiba mais
            </Button>
          </Flex>
        </Flex>
      </Container>
    </MotionLayout>
  )
}
