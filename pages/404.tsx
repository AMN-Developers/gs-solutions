import MotionLayout from "@/components/MotionLayout"
import { Button, Container, Flex, Text } from "@chakra-ui/react"
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
          <Image alt="Imagem 404" src={"/404.png"} width={300} height={300} />
          <Text as={"p"} fontSize={"2xl"} fontWeight={"bold"}>
            Pagina não encontrada
          </Text>
          <Text
            as={"p"}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={"semibold"}
          >
            A pagina que está tentando acessar não existe, certifique-se do url
            foi inserido corretamente
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
        </Flex>
      </Container>
    </MotionLayout>
  )
}
