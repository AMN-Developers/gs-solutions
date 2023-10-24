import { Flex, Card, Text } from "@chakra-ui/react"
import { Product } from '@/hooks/useProducts'

interface CatalogItemProps extends Partial<Product> {
  onClick: () => void
}

export default function CatalogItem({
  thumbnail,
  hover_color,
  title,
  slogan,
  onClick,
}: CatalogItemProps) {
  return (
    <Card
      rounded={"md"}
      overflow={"hidden"}
      color={"white"}
      bgImage={thumbnail}
      bgSize={{ base: "contain", md: "auto" }}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      textColor={"transparent"}
      maxH={"290px"}
      p={4}
      _hover={{
        transition: "all 0.8s ease-in-out",
        bgImage: `linear-gradient(0deg, rgba(${hover_color}) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(${hover_color}) 90%)`,
        color: "black",
        cursor: "pointer",
      }}
      onClick={onClick}
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
