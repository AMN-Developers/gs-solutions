import { Card, CardBody, CardHeader, Flex, Text, Image } from "@chakra-ui/react"
import Link from "next/link"

export default function CardItem() {
  return (
    <Flex
      justifyContent="space-between"
      gap={4}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Card
        as={Link}
        href="/lotus"
        align="center"
        marginY={2}
        w={{ base: "100%", md: "50%" }}
        bgImage={"/card-lotus.webp"}
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
            src="/logo-lotus.svg"
            alt="Lotus logo"
          />
        </CardHeader>
        <CardBody fontWeight={"bold"}>
          <Text>Higienização e Impermeabilização de estofados</Text>
        </CardBody>
      </Card>
      <Card
        as={Link}
        href="/limpoo"
        align="center"
        marginY={2}
        w={{ base: "100%", md: "50%" }}
        bgImage={"/card-lotus.webp"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        filter={"grayscale(100%)"}
        _hover={{
          filter: "none",
          transition: "all 0.8s ease-in-out",
        }}
      >
        <CardHeader>
          <Image
            width={445}
            height={100}
            src="/logo-limpoo.svg"
            alt="Lotus logo"
          />
        </CardHeader>
        <CardBody fontWeight={"bold"}>
          <Text>Limpeza pós-obra</Text>
        </CardBody>
      </Card>
    </Flex>
  )
}
