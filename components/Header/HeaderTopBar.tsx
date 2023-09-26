import { Image, Link, Container, Text } from "@chakra-ui/react"
import { ArrowRightIcon } from "lucide-react"

export default function HeaderTopBar() {
  return (
    <Container
      maxW="container.xl"
      py={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src="/logo.png" alt="G&S Home Solutions" maxW={100} />
      <Link
        href="#"
        px={6}
        py={1}
        borderRadius={12}
        color="white"
        border={`1px solid white`}
        bgColor="transparent"
        display="flex"
        alignItems="center"
        animation={""}
        _hover={{
          textDecoration: "none",
          bgColor: "white",
          color: "#20274D",
        }}
      >
        <Text marginRight={2}>FAÇA UMA COTAÇÃO AGORA</Text>
        <ArrowRightIcon size={24} />
      </Link>
    </Container>
  )
}
