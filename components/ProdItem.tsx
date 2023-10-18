import {
  Box,
  Button,
  Collapse,
  Flex,
  useDisclosure,
  Text,
  Card,
  Container,
} from "@chakra-ui/react"

interface ProdItemProps {
  bgImage: string
  alt: string
  title: string
  description: string
  slogan: string
  hoverColor: string
}

export default function ProdItem({
  title,
  bgImage,
  description,
  slogan,
  hoverColor,
}: ProdItemProps) {
  const { isOpen, onToggle } = useDisclosure()
  console.log(hoverColor)
  return (
    <Flex flexDirection={"column"} mb={2}>
      <Card
        onClick={onToggle}
        rounded={"md"}
        overflow={"hidden"}
        color={"white"}
        bgImage={bgImage}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgSize={"contain"}
        textColor={"transparent"}
        maxH={"220px"}
        _hover={{
          bgImage: hoverColor,
          color: "black",
        }}
      >
        <Flex
          maxW={{ base: "xs", md: "250" }}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={"center"}
          boxSize={"full"}
          fontWeight={"bold"}
          gap={2}
          py={{ base: 10, md: 20 }}
          fontSize={{ base: "xx-small", md: "smaller" }}
          textTransform={"uppercase"}
        >
          <Text>{title}</Text>
          <Text textAlign={"left"} px={4}>
            {slogan}
          </Text>
        </Flex>
      </Card>
      <Box as={Collapse} in={isOpen} maxW={{ base: "xs", md: "250" }} my={2}>
        <Flex flexDirection={"column"} gap={2}>
          <Text as="h2" textTransform={"uppercase"} fontWeight={"bold"}>
            {title}
          </Text>
          <Text as="p" textAlign={"justify"}>
            {description}
          </Text>
          <Text as="p" textAlign={"justify"}>
            <em>
              Rendimento, armazenamento e demais informações no Boletim Técnico
            </em>
          </Text>
          <Text fontWeight={"semibold"}>Faça o download:</Text>
          <Flex flexDirection={"row"} gap={2}>
            <Button colorScheme="messenger" size={"sm"}>
              FISPQ
            </Button>
            <Button colorScheme="messenger" size={"sm"}>
              Boletim Tecnico
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
