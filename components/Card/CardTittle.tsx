import { Box, Flex } from "@chakra-ui/react"

export default function CardTittle() {
  return (
    <Box
      as="h1"
      display={"flex"}
      justifyContent={"center"}
      fontSize={"2xl"}
      textTransform={"uppercase"}
      p={2}
      fontWeight={"bold"}
    >
      Conheça nossas linhas
    </Box>
  )
}
