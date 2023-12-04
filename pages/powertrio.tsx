import MotionLayout from "@/components/MotionLayout"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import VideoFrame from "@/components/iFrame"
import Reveal from "@/components/Reveal"

export default function PowerTrio() {
  return (
    <MotionLayout title="Power Trio">
      <Box
        bgImage={"/power.gif"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        px={{ base: "10", md: "140", lg: "180px" }}
        py={{ base: "200", md: "140", lg: "220px" }}
        boxShadow={"0px 4px 4px 1000px rgba(55,88,147,0.3) inset"}
      >
        <Flex flexDirection={"column"} justifyContent={"center"}>
          <Text
            fontWeight={"black"}
            fontSize={{ base: "30", md: "60", lg: "100" }}
            color={"white"}
            textAlign={"center"}
            textTransform={"uppercase"}
            w={"100%"}
          >
            Power Trio
          </Text>
          <Text
            fontWeight={"semibold"}
            fontSize={{ base: "10", md: "15", lg: "30" }}
            color={"white"}
            textAlign={"center"}
            textTransform={"uppercase"}
            w={"100%"}
          >
            O Melhor combo da limpeza
          </Text>
          <Button
            as={Link}
            mx={"auto"}
            href={"#saibamais"}
            color={"white"}
            bgColor={"transparent"}
            _hover={{
              bgColor: "tranparent",
              textDecoration: "underline",
            }}
          >
            Saiba mais
          </Button>
        </Flex>
      </Box>
      <Container maxW={"container.xl"}>
        <Text
          id="saibamais"
          fontWeight={"bold"}
          fontSize={{ base: "md", md: "2xl" }}
          textAlign={"center"}
          textTransform={"uppercase"}
          py={8}
        >
          Os produtos que compõem Power Trio
        </Text>
        <Flex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <Reveal delay={0.1}>
            <Flex
              p={{ base: "0", md: "4" }}
              flexDirection={"column"}
              bgColor={"gray.200"}
              rounded={"md"}
              boxShadow={"md"}
            >
              <Box alignSelf={"center"} p={4}>
                <Image
                  src="/produtos/allone.png"
                  alt="All in One"
                  width={100}
                  height={100}
                />
              </Box>
              <Text
                textAlign={"center"}
                fontSize={{ base: "md", sm: "sm" }}
                m={"auto"}
              >
                Detergente com alto pode de remoção
              </Text>
            </Flex>
          </Reveal>
          <Reveal delay={0.2}>
            <Flex
              p={{ base: "0", md: "4" }}
              flexDirection={"column"}
              bgColor={"gray.200"}
              rounded={"md"}
              boxShadow={"md"}
            >
              <Box alignSelf={"center"} p={4}>
                <Image
                  src="/produtos/preimper.png"
                  alt="All in One"
                  width={100}
                  height={100}
                />
              </Box>
              <Text textAlign={"center"} fontSize={{ base: "md", sm: "sm" }}>
                Potencializador do trio
              </Text>
            </Flex>
          </Reveal>
          <Reveal delay={0.3}>
            <Flex
              p={{ base: "0", md: "4" }}
              flexDirection={"column"}
              bgColor={"gray.200"}
              rounded={"md"}
              boxShadow={"md"}
            >
              <Box alignSelf={"center"} p={4}>
                <Image
                  src="/produtos/tiramancha.png"
                  alt="All in One"
                  width={100}
                  height={100}
                />
              </Box>
              <Text textAlign={"center"} fontSize={{ base: "md", sm: "sm" }}>
                Poderoso tira de manchas
              </Text>
            </Flex>
          </Reveal>
        </Flex>
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "md", md: "2xl" }}
          textAlign={"left"}
          textTransform={"uppercase"}
          py={8}
        >
          Porque usar juntos?
        </Text>
        <Reveal delay={0.3}>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            mb={4}
            gap={4}
          >
            <Flex
              flexDirection={"column"}
              w={{ base: "100%", md: "40%" }}
              gap={4}
            >
              <Flex as={Accordion} flexDirection={"column"} allowToggle gap={4}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        All01
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel fontSize={"md"}>
                    <Text>
                      É um detergente de PH Neutro especifico para higienização
                      têxtil para todo tipo de tecido e que é de acordo com as
                      exigências da ANVISA.
                    </Text>
                    <Flex gap={2}>
                      <Button
                        colorScheme="facebook"
                        size={"sm"}
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1jrikRa7UEETal5M2yAztYIHzW7zcr8-Q/view"
                          )
                        }
                      >
                        Boletim Tecnico
                      </Button>
                      <Button
                        colorScheme="facebook"
                        size={"sm"}
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1lcmXp5sFwL7nQlMjAk8JH6lXcjlZcK10/view"
                          )
                        }
                      >
                        FISPQ
                      </Button>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        Pré-Imper
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel fontSize={"md"}>
                    <Text>
                      Tem função de potencializar ação do Detergente All 01
                      quando são misturados no momento da higienização, uma
                      segunda função é neutralizar o residual tensoativo que é
                      proveniente da higienização, garantindo uma eficiência
                      maior dos impermeabilizantes.
                    </Text>
                    <Flex gap={2}>
                      <Button
                        colorScheme="facebook"
                        size={"sm"}
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1-WciTqxQzaPGhPvwemkbQVJv7T6KnL50/view"
                          )
                        }
                      >
                        Boletim Tecnico
                      </Button>
                      <Button
                        colorScheme="facebook"
                        size={"sm"}
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1yDgShU7fhVugq-A84FBJ1orPbdtN7IOr/view"
                          )
                        }
                      >
                        FISPQ
                      </Button>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        Tira Manchas
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel fontSize={"md"}>
                    <Text>
                      O tira manchas é um percabonato de sódio, ele tem um poder
                      muito bom em alvejamento e alto rendimento e performance
                      de limpeza, tanto para tecidos brancos como tecidos
                      coloridos.
                    </Text>
                    <Flex gap={2}>
                      <Button
                        colorScheme="facebook"
                        size={"sm"}
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1lkQ0A8UtFRimNkZxzSaOrJVlSKDliqx6/view"
                          )
                        }
                      >
                        Boletim Tecnico
                      </Button>
                      <Button
                        colorScheme="facebook"
                        size={"sm"}
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1citFyeEvhbvAZ-hEKGaEOLYHmXbUt3Cx/view"
                          )
                        }
                      >
                        FISPQ
                      </Button>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Flex>

              <Text>
                Estes 3 produtos têm suas vantagens porque eles podem ser
                misturados no mesmo banho sem perder eficiência, pelo contrário,
                um potencializa a ação do outro criando sinergia e garantindo um
                resultado melhor, o que possibilita um trabalho de higienização
                completa com o uso de apenas 3 produtos.
              </Text>
            </Flex>
            <Box
              alignSelf={"center"}
              boxSize={"full"}
              w={{ base: "100%", md: "60%" }}
              p={4}
              px={{ base: "4", sm: "36", md: "4" }}
              bgColor={"gray.200"}
              rounded={"md"}
            >
              <Image
                src="/embalagens-power.png"
                alt="All in One"
                width={700}
                height={430}
              />
            </Box>
          </Flex>
        </Reveal>

        <Box
          p={8}
          mb={2}
          bg={
            "radial-gradient(circle, rgba(55,88,147,1) 0%, rgba(24,24,59,1) 93%, rgba(24,26,61,1) 100%);"
          }
          rounded={"md"}
        >
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "md", md: "2xl" }}
            textAlign={"left"}
            textTransform={"uppercase"}
            color={"white"}
            pb={4}
          >
            Conheça mais!
          </Text>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
            justifyContent={"space-between"}
            color={"white"}
            fontSize={"sm"}
            fontWeight={"semibold"}
          >
            <Flex
              width={{ base: "100%", md: "30%" }}
              flexDirection={"column"}
              gap={2}
            >
              <VideoFrame
                embedID="LrYJJCz53ns"
                title="Conhecendo Power Trio"
                ariaDescription="G&S Home Solutions Power trio apresentação"
              />
              <Text>Conhecendo Power Trio</Text>
            </Flex>
            <Flex
              width={{ base: "100%", md: "30%" }}
              flexDirection={"column"}
              gap={2}
            >
              <VideoFrame
                embedID="bmJ_rxhFJ0A"
                title="Limpeza e Higienização em tecido Acquablock"
                ariaDescription="Limpeza e Higienização em tecido Acquablock"
              />
              <Text>Limpeza e Higienização em tecido Acquablock</Text>
            </Flex>
            <Flex
              width={{ base: "100%", md: "30%" }}
              flexDirection={"column"}
              gap={2}
            >
              <VideoFrame
                embedID="1F4N_zts5zI"
                title="INFORMAÇÕES IMPORTANTES!"
                ariaDescription="INFORMAÇÕES IMPORTANTES!"
              />
              <Text>INFORMAÇÕES IMPORTANTES!</Text>
            </Flex>
          </Flex>
        </Box>

        <Button
          my={4}
          bg={
            "radial-gradient(circle, rgba(55,88,147,1) 0%, rgba(24,24,59,1) 93%, rgba(24,26,61,1) 100%);"
          }
          color={"white"}
          w={"full"}
          _hover={{
            bg: "radial-gradient(circle, rgba(55,88,147,0.9) 0%, rgba(24,24,59,0.9) 93%, rgba(24,26,61,0.9) 100%);",
          }}
          textTransform={"uppercase"}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=%2B5511913591344&text&type=phone_number&app_absent=0"
            )
          }
        >
          Compre conosco
        </Button>
      </Container>
    </MotionLayout>
  )
}
