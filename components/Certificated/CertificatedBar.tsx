import { Box, Container, Flex, Image, Text } from "@chakra-ui/react"
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
        Empresa certificada por:
      </Text>
      <Flex
        justifyContent="space-between"
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <Box maxW={200} as={Link} href="/certificado">
          <Image
            src="anvisa-logo.png"
            alt="logo anvisa"
            width={200}
            height={46}
          />
        </Box>
        <Box maxW={200} as={Link} href="/powertrio">
          <Image
            src="/certificados/SVB.svg"
            alt="logo svb"
            width={76}
            height={76}
          />
        </Box>
        <Box maxW={76} as={Link} href="/certificado">
          <Image
            src="aatcc-logo.svg"
            alt="logo aatcc"
            width={126}
            height={79}
          />
        </Box>
        <Box as={Link} href="/certificado">
          <Image src="iso-logo.svg" alt="logo aatcc" width={76} height={76} />
        </Box>
      </Flex>
    </Container>
  )
}
