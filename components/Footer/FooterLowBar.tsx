import { Box, Container } from "@chakra-ui/react"
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"

export default function FooterLowBar() {
  return (
    <Container
      maxW={"full"}
      flexDirection={"row"}
      display={"flex"}
      alignItems="center"
      justifyContent="space-between"
      borderTop={"1px"}
      borderColor={"whiteAlpha.300"}
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

      <Box as="p" color={"white"} fontSize={"xs"} fontWeight={"light"}>
        AMN Desenvolvimento e Aplicações® 2023
      </Box>
    </Container>
  )
}
