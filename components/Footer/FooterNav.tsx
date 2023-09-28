import { Box, Container, Link } from "@chakra-ui/react"
import Image from 'next/image'

export default function FooterNav() {
  return (
    <Container
      maxW={"container.xl"}
      display={"flex"}
      justifyContent="space-between"
      alignItems="center"
      py={2}
      fontWeight={"thin"}
    >
      <Box
        maxW={70}
        maxH={'auto'}
      >
        <Image src="/logo.png" alt="G&S Home Solutions" width={245} height={319} />
      </Box>
      <Box
        as="div"
        display={"flex"}
        color={"white"}
        padding={4}
        fontSize={"sm"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Link href="#" mx={2}>
          Home
        </Link>
        <Link href="#" mx={2}>
          Entre em Contato
        </Link>
        <Link href="#" mx={2}>
          Politica de Privacidade
        </Link>
        <Link href="#" mx={2}>
          Distribuidores
        </Link>
        <Link href="#" mx={2}>
          FAQ
        </Link>
      </Box>
    </Container>
  )
}
