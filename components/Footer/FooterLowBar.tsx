import { Box, Container } from "@chakra-ui/react";
import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import Link from "next/link";

export default function FooterLowBar() {
  const date = new Date();
  const currentYear = date.getFullYear();

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
          href="https://api.whatsapp.com/send?phone=5511913591344&text=Ol%C3%A1,%20vim%20pelo%20Site%20Institucional.%20"
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
        AMN Desenvolvimento e Aplicações&copy; 2023 - {currentYear}
      </Box>
    </Container>
  );
}
