import { Card, CardBody, CardHeader, Text, Image } from "@chakra-ui/react"
import Link from "next/link"

interface CardItemProps {
  href: string
  bgImage: string
  logo: string
  alt: string
  title: string
}

export default function CardItem({ href, logo, alt, title, bgImage }: CardItemProps) {
  return (
    <Card
      as={Link}
      href={href}
      align="center"
      marginY={{ base: 2, md: 8 }}
      py={{ base: 2, md: 20 }}
      w={{ base: "100%", md: "50%" }}
      bgImage={bgImage}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      filter={"grayscale(100%)"}
      position={"relative"}
      _hover={{
        filter: "none",
        transition: "all 0.8s ease-in-out",
      }}
    >
      <CardHeader>
        <Image
          width={445}
          height={100}
          src={logo}
          alt={alt}
        />
      </CardHeader>
      <CardBody fontWeight={"bold"}>
        <Text>{title}</Text>
      </CardBody>
    </Card>
  )
}
