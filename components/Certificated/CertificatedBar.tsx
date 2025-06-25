import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

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
        <Box
          maxW={200}
          as={Link}
          href="https://drive.google.com/file/d/1WzQ3i0_99gQostt5TV5fnqab5buzXGLp/view"
          target="_blank"
        >
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
        <Box
          as={Link}
          href="https://drive.google.com/file/d/1MLUPUMzHhbTjKcrbs4ixqX8WWX_xSp5f/view?usp=drive_link"
          target="_blank"
        >
          <Image
            src="iso-logo.svg"
            alt="logo iso 9001"
            width={76}
            height={76}
          />
        </Box>
      </Flex>
    </Container>
  );
}
