import MotionLayout from "@/components/MotionLayout"
import { Container, Box, Text, Flex, Image, Button } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import HiddenText from "@/components/HiddenText"

import { useState } from "react"
import Link from "next/link"
import Reveal from "@/components/Reveal"
const variants = {
  hidden: { opacity: 0, scale: 0 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
}

export default function Hidro() {
  const [image, setImage] = useState(2)
  const handleChangeImage = (src: number) => {
    setImage(src)
  }
  const images = [
    {
      src: "/produtos/hidroeoleo/HidroeOleo01.png",
      alt: "bombona diagonal",
    },
    {
      src: "/produtos/hidroeoleo/HidroeOleo02.png",
      alt: "bombona diagonal cima",
    },
    {
      src: "/produtos/hidroeoleo/HidroeOleo03.png",
      alt: "bombona cima",
    },
    {
      src: "/produtos/hidroeoleo/HidroeOleo04.png",
      alt: "bombona diagonal baixo",
    },
  ]

  return (
    <MotionLayout title="Hidro e Óleo">
      <Box
        bgColor={"#a4a4a5;"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        px={{ base: "10", md: "140", lg: "180px" }}
        py={{ base: "200", md: "140", lg: "180px" }}
      >
        <Flex flexDirection={"column"} justifyContent={"center"}>
          <Text
            fontWeight={"black"}
            fontSize={{ base: "40", md: "90" }}
            color={"white"}
            textAlign={"center"}
            textTransform={"uppercase"}
            w={"100%"}
          >
            Hidro e Óleo Fugante para Mármores
          </Text>
          <Button
            as={Link}
            mx={"auto"}
            href={"#fix"}
            color={"white"}
            bgColor={"transparent"}
            _hover={{
              bgColor: "tranparent",
              textDecoration: "underline",
            }}
          >
            Saiba mais.
          </Button>
        </Flex>
      </Box>
      <Container maxW={"container.xl"}>
        <Flex flexDirection={{ base: "column", lg: "row" }} gap={4} id="fix">
          <Flex w={{ base: "full", lg: "50%" }}>
            <Flex flexDirection={"column"} gap={4}>
              <Reveal delay={0.3}>
                <Flex
                  p={4}
                  flexDirection={{ base: "column", md: "row" }}
                  gap={4}
                >
                  <AnimatePresence mode="wait">
                    {images[image] && (
                      <Box w={"full"} h={"md"} rounded={"md"} boxShadow={"md"}>
                        <Box
                          as={motion.div}
                          initial="hidden"
                          animate="enter"
                          exit="exit"
                          variants={variants}
                          key={image}
                          boxSize={"full"}
                        >
                          <Image
                            alt="Imagem fixflot"
                            src={images[image].src}
                            boxSize={"full"}
                            fit={"contain"}
                          />
                        </Box>
                      </Box>
                    )}
                  </AnimatePresence>

                  <Flex
                    gap={2}
                    flexDirection={{ base: "row", md: "column" }}
                    justifyContent={{ base: "none", md: "space-between" }}
                    w={{ base: "100%", md: "18%" }}
                    align={"center"}
                  >
                    {images.map((Thumb, index) => (
                      <Box
                        onClick={() => handleChangeImage(index)}
                        boxShadow={"md"}
                        rounded={"md"}
                        p={4}
                        cursor={"pointer"}
                        key={index}
                      >
                        <Image
                          alt={Thumb.alt}
                          src={Thumb.src}
                          boxSize={"64px"}
                          objectFit={"contain"}
                        />
                      </Box>
                    ))}
                  </Flex>
                </Flex>
              </Reveal>

              <Text
                as={"p"}
                fontWeight={"semibold"}
                fontSize={"md"}
                color={"black"}
              >
                O que é Hidro & Óleo?
              </Text>
              <Text as={"p"} textAlign={"justify"} fontSize={"md"}>
                Confere a superfície tratada uma impermeabilização Hidro&Óleo
                fugante, com repelência contra líquidos a base de água e óleo, e
                evita manchas provenientes destes. O produto age nos capilares
                do substrato, criando o efeito impermeabilizante na superfície,
                não obstruindo os poros, com efeito de reativação de cor e
                revitalização da superfície. De fácil aplicação e alto
                rendimento.
              </Text>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "full", lg: "50%" }}
            flexDirection={"column"}
            gap={4}
            rounded={"md"}
            px={4}
            my={4}
          >
            <Text
              as={"h2"}
              fontWeight={"semibold"}
              fontSize={"md"}
              textTransform={"uppercase"}
              py={4}
              color={"black"}
            >
              De fácil aplicação e alto rendimento.
            </Text>
            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Reveal delay={0.1}>
                <HiddenText
                  color="#a4a4a5;"
                  hover="#e1e1e1"
                  title="Principais aplicações"
                  text="Limpoo Hidro & Óleo fugante foi desenvolvido para aplicações em pedras porosas, mármore, granitos, cerâmicas, pisos amadeirados e superfícies comentícias, entre outras superfícies minerais. Garantindo além proteção, um efeito de reativação de cor e revitalização. Modo de uso: Produto pronto para uso. A superfície a receber o tratamento deve estar limpa, seca e isenta de poeiras e ceras."
                />
              </Reveal>
              <Reveal delay={0.15}>
                <HiddenText
                  color="#a4a4a5;"
                  hover="#e1e1e1"
                  title="Indicamos a limpeza com Limpoo Pine"
                  text="Detergente Neutro, para que remova possíveis contaminantes e residuais de óleo. Com a superfície seca, aplicar o produto uniformemente com um rolo de lã, espuma ou pincel, até a saturação da superfície. Em caso de superfícies porosas e de alta absorção, aguardar até que a superfície absorva o produto e repita novamente o processo. Após 15 minutos, remover o excesso com um tecido de micro fibra seco e limpo. Os efeitos da camada repelente acontecem após 30 minutos da aplicação, tendo melhor resultado entre 3 e 6 horas. Após a impermeabilização com Limpoo Hidro&Óleo Fugante, indicamos a limpeza e manutenção da superfície apenas com água e detergente neutro."
                />
              </Reveal>
              <Reveal delay={0.2}>
                <HiddenText
                  color="#a4a4a5;"
                  hover="#e1e1e1"
                  title="Durabilidade"
                  text="Sua durabilidade é de 1 ano, respeitando as indicações de aplicação e cuidados após a impermeabilização. Uma reaplicação é necessária sempre que for observada uma perda na eficiência. Sempre realize um teste em uma pequena área, em caso de dúvidas quanto a aplicação e superfície"
                />
              </Reveal>
              <Reveal delay={0.25}>
                <HiddenText
                  color="#a4a4a5;"
                  hover="#e1e1e1"
                  title="Rendimento"
                  text="Rendimento: Superfícies de baixo porosidade : 20m² a 30m; Superfícies de alta porosidade: 10m² a 20m²."
                />
              </Reveal>
            </Flex>

            <Flex gap={2} w={"full"} flexDir={{ base: "column", sm: "row" }}>
              <Button
                bg={"#a4a4a5;"}
                color={"white"}
                _hover={{
                  bg: "#e1e1e1",
                }}
                onClick={() => window.open()}
              >
                Boletim Tecnico
              </Button>
              <Button
                bg={"#a4a4a5;"}
                color={"white"}
                _hover={{
                  bg: "#e1e1e1",
                }}
                onClick={() => window.open()}
              >
                FISPQ
              </Button>
              <Button
                bg={"#a4a4a5;"}
                color={"white"}
                _hover={{
                  bg: "#e1e1e1",
                }}
                onClick={() => window.open()}
              >
                Ebook de higienização
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Button
          my={4}
          bg={"#a4a4a5;"}
          color={"white"}
          w={"full"}
          _hover={{
            bg: "#e1e1e1",
          }}
          textTransform={"uppercase"}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/message/EA6EJOB3Q3KLM1?autoload=1&app_absent=0"
            )
          }
        >
          Compre conosco
        </Button>
      </Container>
    </MotionLayout>
  )
}
