import MotionLayout from "@/components/MotionLayout"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

export default function Custom404() {
  return (
    <MotionLayout title="404: Está pagina não foi encontrada">
      <Container
        as="section"
        maxW={"container.xl"}
        py={4}
        position={"relative"}
      >
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          p={10}
          gap={4}
          textAlign={"center"}
        >
          <Image
            alt="Em breve imagem"
            src={"/embreve.svg"}
            width={500}
            height={250}
          />
          <Text as={"p"} fontSize={"2xl"} fontWeight={"bold"}>
            Em breve uma nova linha cheia de novidades
          </Text>
          <Button
            size={{ base: "sm", sm: "md" }}
            as={Link}
            mx={"auto"}
            href={"/"}
            colorScheme="facebook"
            _hover={{ color: "facebook.100" }}
          >
            Retornar para pagina inicial
          </Button>
          <Flex gap={4} py={4} flexDir={{ base: "column", md: "row" }}>
            <Box>
              <Text
                as={Link}
                href={"/calculadora"}
                color={"facebook.900"}
                _hover={{ textDecoration: "underline" }}
              >
                Calculadora de diluição <ArrowForwardIcon />
              </Text>
              <Text color={"gray.300"}>
                Acesse nossa calculadora de diluição
              </Text>
            </Box>
            <Box>
              <Text
                as={Link}
                href={"/rastreio"}
                color={"facebook.900"}
                _hover={{ textDecoration: "underline" }}
              >
                Rastreios <ArrowForwardIcon />
              </Text>
              <Text color={"gray.300"}>Rastreie seu pedido!</Text>
            </Box>
            <Box>
              <Text
                as={Link}
                href={"/distribuidores"}
                color={"facebook.900"}
                _hover={{ textDecoration: "underline" }}
              >
                Distribuidores G&S <ArrowForwardIcon />
              </Text>
              <Text color={"gray.300"}>
                Está procurando algum distribuidor?
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </MotionLayout>
  )
}
