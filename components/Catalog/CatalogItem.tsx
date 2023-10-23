import { Flex, Card, Text } from "@chakra-ui/react"
import { CatalogItem } from "./CATALOG_ITEMS"

// import { CatalogItem } from "./CATALOG_ITEMS // {}: CatalogItem"

export default function CatalogItem({
  bgImage,
  cor,
  title,
  slogan,
}: CatalogItem) {
  return (
    <Card
      rounded={"md"}
      overflow={"hidden"}
      color={"white"}
      bgImage={bgImage}
      bgSize={{ base: "contain", md: "auto" }}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      textColor={"transparent"}
      maxH={"290px"}
      p={4}
      _hover={{
        transition: "all 0.8s ease-in-out",
        bgImage: `linear-gradient(0deg, rgba(${cor}) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(${cor}) 90%)`,
        color: "black",
      }}
    >
      <Flex
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
  )
}
