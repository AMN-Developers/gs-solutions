import { Box, Container } from "@chakra-ui/react"
import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs"
import Link from "next/link"

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
          as={Link}
          padding={2}
          margin={2}
          color={"white"}
          fontSize={"lg"}
          href="https://www.youtube.com/c/GSHomeSolutions"
          aria-label="Facebook Link"
          _hover={{
            color: "#06EC46",
          }}
        >
          <BsYoutube />
        </Box>
        <Box
          as={Link}
          padding={2}
          margin={2}
          color={"white"}
          fontSize={"lg"}
          href="https://api.whatsapp.com/message/EA6EJOB3Q3KLM1?autoload=1&app_absent=0"
          aria-label="Whatsapp Link"
          _hover={{
            color: "#06EC46",
          }}
        >
          <BsWhatsapp />
        </Box>
        <Box
          as={Link}
          padding={2}
          margin={2}
          color={"white"}
          fontSize={"lg"}
          href="https://www.instagram.com/gshomesolutions/"
          aria-label="Instagram Link"
          _hover={{
            color: "#06EC46",
          }}
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
