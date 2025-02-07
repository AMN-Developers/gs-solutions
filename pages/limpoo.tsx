import { Card } from "@/components/Card";
import MotionLayout from "@/components/MotionLayout";
import Reveal from "@/components/Reveal";
import { Container, Flex, Text } from "@chakra-ui/react";

export default function Limpoo() {
  return (
    <MotionLayout title="Limpoo">
      <Container
        as="section"
        maxW={"container.xl"}
        py={4}
        position={"relative"}
      >
        <Text
          as="h2"
          textAlign={"center"}
          py={8}
          fontSize={{ base: "md", md: "2xl" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          TUDO PARA LIMPEZA PÓS OBRA
        </Text>
        <Flex flexDirection={"column"} gap={4} mb={2}>
          <Reveal delay={0.2}>
            <Card.Item
              alt="Hidrooleo banner"
              href="/hidro"
              bgImage="/marmore.jpg"
              title="HIDRO E ÓLEO: FUGANTE PARA MÁRMORES"
              logo="hidrologo.svg"
              bgPos="center"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <Card.Item
              alt="Pine banner"
              href="/pine"
              bgImage="/card-limpoo.webp"
              title="PINE: A SUA SOLUÇÃO PARA TODAS AS SITUAÇÕES"
              logo="pine-logo.svg"
              bgPos="center"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <Card.Item
              alt="Desinscrustante banner"
              href="/desincrustante"
              bgImage="des-banner.webp"
              title="DESINCRUSTANTE: O ESSENCIAL DO PÓS OBRA"
              logo="des-logo.svg"
              bgPos="center"
            />
          </Reveal>
        </Flex>
      </Container>
    </MotionLayout>
  );
}
