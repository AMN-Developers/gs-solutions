import { Image, Link, Container, Text } from "@chakra-ui/react"
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
      <Image src="/logo.png" alt="G&S Home Solutions" maxW={100} />
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
