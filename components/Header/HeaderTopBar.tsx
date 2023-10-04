import { Link, Container, Text, Box } from "@chakra-ui/react"
import styled from "@emotion/styled"
import Image from "next/image"

export default function HeaderTopBar() {
  const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 5px #7293ff, inset 0 0 5px #7293ff;
      transition-delay: 0.2s;
    }
  `

  const StyledSpan = styled(Text)`
    position: relative;
    z-index: 0;
    color: #fff;
  `

  const StyledBox = styled(Box)`
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 200px;
    background: #7293ff;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: 0.6s;
    &:after,
    &:before {
      position: absolute;
      content: "";
      width: 200%;
      height: 200%;
      top: 0;
      left: 0;
      transform: translate(-25%, -75%);
    }
    &:after {
      border-radius: 45%;
      background: rgba(20, 20, 20, 1);
      box-shadow: 0 0 10px 5px #7293ff, inset 0 0 5px #7293ff;
      animation: animate 5s linear infinite;
      opacity: 0.8;
    }
    &:before {
      border-radius: 40%;
      box-shadow: 0 0 10px rgba(26, 26, 26, 0.5),
        inset 0 0 5px rgba(26, 26, 26, 0.5);
      background: rgba(26, 26, 26, 0.5);

      animation: animate 7s linear infinite;
    }
    &:hover {
      top: -200px;
    }
    @keyframes animate {
      0% {
        transform: translate(-25%, -75%) rotate(0);
      }
      100% {
        transform: translate(-25%, -75%) rotate(360deg);
      }
    }
  `

  return (
    <Container
      maxW="container.xl"
      py={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box maxW={100} maxH={"auto"}>
        <Image
          src="/logo.png"
          alt="G&S Home Solutions"
          width={245}
          height={319}
        />
      </Box>
      <StyledLink
        px={8}
        py={2}
        _hover={{
          textDecoration: "none",
        }}
      >
        <StyledSpan>FAÇA UMA COTAÇÃO</StyledSpan>
        <StyledBox />
      </StyledLink>
    </Container>
  )
}
