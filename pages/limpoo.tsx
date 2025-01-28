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
              bgImage="/hidro-benner.webp"
              title="A tríplice para sua limpeza"
              logo="powertrio-logo.svg"
              bgPos="center"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <Card.Item
              alt="Fixflot logo"
              href="/fixflot"
              bgImage="/fixflot-banner.webp"
              title="FixFlot - O melhor flotador do mercado"
              logo="logo-fixflot.svg"
              bgPos="center"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <Card.Item
              alt="Fireguard Logo"
              href="/fireguard"
              bgImage="/fireguard-bg.png"
              title="Fireguard - Poderoso hidrofugante"
              logo="logo-fireguard.png"
              bgPos="center"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <Card.Item
              alt="Linha auto Logo"
              href="/auto"
              bgImage="/auto/car.jpg"
              title="Linha automotiva - Uma higienização completa para o carro"
              logo="logo-auto.png"
              bgPos="center"
            />
          </Reveal>
        </Flex>
      </Container>
    </MotionLayout>
  );
}
