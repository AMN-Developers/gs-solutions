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
    >
      <Image alt={alt} src={image} width={150} height={50} />
      <Text fontSize={"sm"}>{label}</Text>
    </Box>
  )
}
