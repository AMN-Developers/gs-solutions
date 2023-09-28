import { Link, Container, Text, Box } from "@chakra-ui/react"
import Image from "next/image"
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function HeaderTopBar() {
  return (
    <Container
      maxW="container.xl"
      py={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={0}
    >
      <Box
        maxW={100}
        maxH={'auto'}
      >
        <Image src="/logo.png" alt="G&S Home Solutions" width={245} height={319} />
      </Box>
      <Link
        href="#"
        px={6}
        py={1}
        borderRadius={'md'}
        color="white"
        bgColor="whiteAlpha.100"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        animation={""}
        _hover={{
          textDecoration: "underline",
          bgColor: "white",
          color: "#20274D",
          transition: "all 0.3s ease-in-out",
        }}
        boxShadow={"md"}
      >
        <Text marginRight={2}>FAÇA UMA COTAÇÃO AGORA</Text>
        <ArrowForwardIcon />
      </Link>
    </Container>
  )
}
