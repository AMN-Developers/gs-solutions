import { Box, Container, Link as ChakraLink, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface FooterNavProps {
  openDrawer: () => void;
}

export default function FooterNav({ openDrawer }: FooterNavProps) {
  return (
    <Container
      maxW={"container.xl"}
      display={"flex"}
      justifyContent="space-between"
      alignItems="center"
      py={2}
      fontWeight={"thin"}
    >
      <Box maxW={70} maxH={"auto"}>
        <Image
          src="/logo.png"
          alt="G&S Home Solutions"
          width={245}
          height={319}
        />
      </Box>
      <Box
        as="div"
        display={"flex"}
        color={"white"}
        padding={4}
        fontSize={"sm"}
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <ChakraLink as={Link} href="/">
          Home
        </ChakraLink>
        <Button
          color={"white"}
          fontWeight={"thin"}
          fontSize={"sm"}
          variant="link"
          onClick={openDrawer}
          justifyContent={"left"}
        >
          Entre em Contato
        </Button>
        <ChakraLink as={Link} href="/privacy">
          Politica de Privacidade
        </ChakraLink>
        <ChakraLink as={Link} href="#">
          Distribuidores
        </ChakraLink>
        {/* <ChakraLink as={Link} href="#">
          FAQ
        </ChakraLink> */}
      </Box>
    </Container>
  );
}
