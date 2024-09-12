import { Container, Box, Button, keyframes } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const shineAnimation = keyframes`
  0% {
    transform: scale(0) rotate(25deg);
    opacity: 0;
  }
  80% {
    transform: scale(0) rotate(25deg);
    opacity: 0.5;
  }
  81% {
    transform: scale(4) rotate(25deg);
    opacity: 1;
  }
  100% {
    transform: scale(50) rotate(25deg);
    opacity: 0;
  }
`;

const HeaderTopBar = () => {
  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://api.whatsapp.com/send?phone=5511913591344&text=Ol%C3%A1,%20vim%20pelo%20Site%20Institucional.%20",
      );
    }
  };

  return (
    <Container
      maxW="container.xl"
      py={4}
      px={0}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box as={Link} maxW={100} maxH="auto" href="/">
        <Image
          src="/logo.png"
          alt="G&S Home Solutions"
          width={245}
          height={319}
          priority
        />
      </Box>
      <Button
        onClick={handleButtonClick}
        variant="outline"
        color="white"
        bg="#06EC46"
        overflow="hidden"
        border="none"
        position="relative"
        _hover={{
          bg: "#006B1E",
          textDecoration: "none",
          color: "#fff",
        }}
        _before={{
          content: '""',
          position: "absolute",
          top: "-180px",
          left: 0,
          width: "30px",
          height: "100%",
          backgroundColor: "#fff",
          animation: `${shineAnimation} 3s ease-in-out infinite`,
          transformOrigin: "top",
        }}
      >
        COMPRE AGORA!
      </Button>
    </Container>
  );
};

export default HeaderTopBar;
