import { Box, Container, Text, Flex } from '@chakra-ui/react';
import { Card } from "@/components/Card"
import { Certificated } from "@/components/Certificated"
import VideoFrame from '@/components/iFrame';
import TabsHistory from '@/components/TabsHistory';
import MotionLayout from '@/components/MotionLayout';


export default function Home() {
  return (
    <MotionLayout title='Home'>
      <Card.Root>
        <Card.Tittle title='Conheça nossas linhas' />
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <Card.Item alt='Lotus logo' href='/lotus' bgImage='/card-lotus.webp' title='Higienização e Impermiabilização de estofados' logo='logo-lotus.svg' />
          <Card.Item alt='Limpoo logo' href='/limpoo' bgImage='/card-lotus.webp' title='Limpeza pós-obra' logo='logo-limpoo.svg' />
        </Flex>
      </Card.Root>
      <Box bgColor={"#263869"}>
        <Container maxW="container.xl" my={2} py={16} gap={2} as="section">
          <Text
            as="h2"
            fontWeight={"bold"}
            fontSize={"xl"}
            color={"white"}
            marginBottom={4}
          >
            Conheça a G&S Home Solutions
          </Text>
          <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
            <Box width={{ base: "100%", md: "50%" }}>
              <VideoFrame />
            </Box>
            <Flex
              width={{ base: "100%", md: "50%" }}
              flexDirection={"column"}
              justify={"space-between"}
            >
              <Box>
                <Text
                  as="h2"
                  fontSize={"lg"}
                  color={"white"}
                  fontWeight={"bold"}
                  marginBottom={{ base: 0, md: 2 }}
                >
                  Por que escolher a G&S ?
                </Text>
                <Text as="p" color={"white"}>
                  Nós somos a primeira empresa brasileira com a linha completa
                  de produtos profissionais voltada para o mercado têxtil de
                  higienização e impermeabilização.
                </Text>
              </Box>
              <Box
                minH={"65%"}
              >
                <TabsHistory />
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Certificated.Bar />
    </MotionLayout>
  )
}
