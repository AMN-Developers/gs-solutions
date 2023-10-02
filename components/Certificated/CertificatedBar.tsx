import { Container, Flex, Image, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function CertificatedBar() {
  return (
    <Container as="section" maxW={"container.xl"} my={8}>
      <Text
        as="h2"
        fontWeight={"bold"}
        fontSize={"xl"}
        color={"black"}
        marginBottom={4}
      >
        Empresa certicada por:
      </Text>
      <Flex
        as={Link}
        href="#"
        justifyContent="space-between"
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <Image src="anvisa-logo.png" alt="logo anvisa" width={250} />
        <Image src="SVB.svg" alt="logo svb" width={76} height={76} />
        <Image src="aatcc-logo.svg" alt="logo aatcc" height={76} />
        <Image src="iso-logo.svg" alt="logo aatcc" height={76} />
      </Flex>
    </Container>
  )
}
