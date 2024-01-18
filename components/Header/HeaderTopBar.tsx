import { Container, Box, Button } from "@chakra-ui/react"
import styled, { keyframes } from "styled-components"
import React from "react"
import Link from "next/link"
import Image from "next/image"

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
`

const ShineBefore = styled.span`
  position: absolute;
  content: "none";
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: #fff;
  animation: ${shineAnimation} 3s ease-in-out infinite;
  transform-origin: top; /* Define o ponto de origem da transformação */
`

const HeaderTopBar = () => {
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
        />
      </Box>
      <Button
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/message/EA6EJOB3Q3KLM1?autoload=1&app_absent=0"
          )
        }
        variant="outline"
        color="white"
        bg="#06EC46"
        overflow={"hidden"}
        border={"none"}
        _hover={{
          bg: "#006B1E",
          textDecoration: "none",
          color: "#fff",
        }}
      >
        COMPRE AGORA!
        <ShineBefore />
      </Button>
    </Container>
  )
}
export default HeaderTopBar
