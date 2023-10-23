import {
  Box,
  Button,
  Collapse,
  Flex,
  useDisclosure,
  Text,
  Card,
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
  slogan,
  hoverColor,
}: ProdItemProps) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex flexDirection={"column"} mb={2}>
      <Card
        onClick={onToggle}
        rounded={"md"}
        overflow={"hidden"}
        color={"white"}
        bgImage={bgImage}
        bgSize={{ base: "contain", md: "auto" }}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        maxW={"320px"}
        textColor={"transparent"}
        maxH={"290px"}
        p={4}
        _hover={{
          transition: "all 0.8s ease-in-out",
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
          py={{ base: 10, md: 24 }}
          fontSize={{ base: "xx-small", md: "smaller" }}
          textTransform={"uppercase"}
        >
          <Text>{title}</Text>
          <Text textAlign={"left"} px={4}>
            {slogan}
          </Text>
        </Flex>
      </Card>
    </Flex>
  )
}
