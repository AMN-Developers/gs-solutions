import { Card } from "@/components/Card"
import MotionLayout from "@/components/MotionLayout"
import Reveal from "@/components/Reveal"
import { Box, Container, Flex, Text, Button } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

export default function Lotus() {
  return (
    <MotionLayout title="Lotus">
      <Container maxW={"container.xl"}>
        <Flex justifyContent={"center"} flexDirection={"column"} rounded={"md"}>
          <Text
            as="h2"
            textAlign={"center"}
            py={8}
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
                bgColor: "rgb(34, 44, 84,0.9)",
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
                bgColor: "rgb(34, 44, 84,0.9)",
              }}
            >
              Linha de Impermeabilizantes
            </Button>
          </Flex>

          <Text
            textAlign={"center"}
            fontSize={"2xl"}
            textTransform={"uppercase"}
            p={4}
            fontWeight={"bold"}
          >
            Qualidade e Tecnologia
          </Text>

          <Flex flexDirection={"column"} gap={4} mb={2}>
            <Reveal delay={0.2}>
              <Card.Item
                alt="Power Trio Logo"
                href="/powertrio"
                bgImage="/powertrio-bg.png"
                title="A tríplice para sua limpeza"
                logo="powertrio-logo.svg"
                bgPos="bottom"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <Card.Item
                alt="Fixflot logo"
                href="/fixflot"
                bgImage="/fixflot-banner.webp"
                title="FixFlot - O melhor flotador do mercado"
                logo="logo-fixflot.svg"
                bgPos="center"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <Card.Item
                alt="Fireguard Logo"
                href="/fireguard"
                bgImage="/fireguard-bg.png"
                title="Fireguard - Poderoso antichamas"
                logo="logo-fireguard.png"
                bgPos="center"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <Card.Item
                alt="Linha auto Logo"
                href="/auto"
                bgImage="/auto/car.jpg"
                title="Linha automotiva - completa para seu carro"
                logo="logo-auto.png"
                bgPos="center"
              />
            </Reveal>
          </Flex>
        </Flex>
      </Container>
    </MotionLayout>
  )
}
