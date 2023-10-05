import { Box, Text } from "@chakra-ui/react"
import { CarouselItem } from "./CAR_ITEMS"
import Image from "next/image"

export default function CarouselItem({ image, alt, label }: CarouselItem) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      userSelect={"none"}
      gap={4}
      mx={4}
    >
      <Image alt={alt} src={image} width={250} height={100} />
      <Text>{label}</Text>
    </Box>
  )
}
