import { Card, CardBody, CardHeader, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";

interface CardItemProps {
  href: string;
  bgImage: string;
  logo?: string;
  alt: string;
  title: string;
  bgPos?: string;
}

export default function CardItem({ href, logo, alt, title, bgImage, bgPos }: CardItemProps) {
  return (
    <Flex h={"sm"} my={{ base: 0, md: 0 }} gap={4} w={"full"} align="center" flexDirection={"column"}>
      <Card
        w={"100%"}
        h={"100%"}
        as={Link}
        href={href}
        align="center"
        bgImage={bgImage}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={bgPos}
        filter={"grayscale(100%)"}
        position={"relative"}
        justifyContent={"center"}
        _hover={{
          filter: "none",
          transition: "all 0.6s ease-in-out",
        }}
      >
        <CardHeader>{logo && <Image width={445} height={100} src={logo} alt={alt} />}</CardHeader>
      </Card>
      <Text fontWeight={"bold"} fontSize={{ base: "md", md: "md" }}>
        {title}
      </Text>
    </Flex>
  );
}
