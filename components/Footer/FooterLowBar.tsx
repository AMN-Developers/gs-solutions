import { Box, Container } from "@chakra-ui/react"
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"

export default function FooterLowBar() {
  return (
    <Container
      maxW={"container.xl"}
      flexDirection={{ md: "row", base: "column" }}
      display={"flex"}
      alignItems="center"
      justifyContent="space-between"
      borderTop={"1px"}
      borderColor={"whiteAlpha.300"}
      py={2}
    >
      <Box as="div" display={"flex"}>
        <Box
          as="a"
          padding={2}
          margin={2}
          color={"white"}
          fontSize={"lg"}
          href="/"
        >
          <BsFacebook />
        </Box>
        <Box
          as="a"
          padding={2}
          margin={2}
          color={"white"}
          fontSize={"lg"}
          href="/"
        >
          <BsWhatsapp />
        </Box>
        <Box
          as="a"
          padding={2}
          margin={2}
          color={"white"}
          fontSize={"lg"}
          href="/"
        >
          <BsInstagram />
        </Box>
      </Box>

      <Box as="p" color={"whiteAlpha.400"} fontSize={"xs"} fontWeight={"light"}>
        AMN Desenvolvimento e Aplicações&copy; 2023
      </Box>
    </Container>
  )
}
