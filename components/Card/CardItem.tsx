import { Card, CardBody, CardHeader, Text, Image, Flex } from "@chakra-ui/react"
import Link from "next/link"

interface CardItemProps {
  href: string
  bgImage: string
  logo: string
  alt: string
  title: string
}

export default function CardItem({
  href,
  logo,
  alt,
  title,
  bgImage,
}: CardItemProps) {
  return (
    <Flex
      h={"sm"}
      my={4}
      gap={4}
      w={{ base: "100%", md: "50%" }}
      align="center"
      flexDirection={"column"}
    >
      <Card
        w={"100%"}
        h={"100%"}
        as={Link}
        href={href}
        align="center"
        bgImage={bgImage}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        filter={"grayscale(100%)"}
        position={"relative"}
        justifyContent={"center"}
        _hover={{
          filter: "none",
          transition: "all 0.6s ease-in-out",
        }}
      >
        <CardHeader>
          <Image width={445} height={100} src={logo} alt={alt} />
        </CardHeader>
      </Card>
      <Text fontWeight={"bold"} fontSize={"lg"}>{title}</Text>
    </Flex>
  )
}
