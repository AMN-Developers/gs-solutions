import { Box, Container, Flex } from "@chakra-ui/react"
import Image from "next/image"

export default function Privacy() {
  return (
    <Container maxW={"container.xl"}>
      <Flex>
        <Box></Box>
        <Image
          src="/bgprivace.png"
          alt="Imagem representando segurança cibernetica"
          width={600}
          height={600}
        />
      </Flex>
    </Container>
  )
}
