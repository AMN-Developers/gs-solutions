import MotionLayout from "@/components/MotionLayout";
import {
  Container,
  Box,
  Text,
  Flex,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import HiddenText from "@/components/HiddenText";
import { AiOutlineDown } from "react-icons/ai";
import VideoFrame from "@/components/iFrame";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
const variants = {
  hidden: { opacity: 0, scale: 0 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

export default function Pine() {
  const [image, setImage] = useState(2);
  const handleChangeImage = (src: number) => {
    setImage(src);
  };
  const images = [
    {
      src: "/produtos/pine/Limpoo Pine 03.png",
      alt: "bombona diagonal",
    },
    {
      src: "/produtos/pine/Limpoo Pine 02.png",
      alt: "bombona diagonal cima",
    },
    {
      src: "/produtos/pine/Limpoo Pine 04.png",
      alt: "bombona cima",
    },
    {
      src: "/produtos/pine/Limpoo Pine 06.png",
      alt: "bombona diagonal baixo",
    },
  ];

  return (
    <MotionLayout title="Limpoo Pine">
      <Box
        bgImage={""}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        px={{ base: "10", md: "140", lg: "180px" }}
        py={{ base: "200", md: "140", lg: "180px" }}
        boxShadow={"0px 4px 4px 1000px #CDDA33 inset"}
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
            LIMPOO PINE: A SUA SOLUÇÃO PARA TODAS AS SITUAÇÕES
          </Text>
          <Button
            as={Link}
            mx={"auto"}
            href={"#fix"}
            color={"white"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            bgColor={"transparent"}
            _hover={{
              bgColor: "tranparent",
              textDecoration: "underline",
            }}
          >
            SAIBA MAIS <AiOutlineDown />
          </Button>
        </Flex>
      </Box>
      <Container maxW={"container.xl"}>
        <Flex flexDirection={{ base: "column", lg: "row" }} gap={4} id="fix">
          <Flex w={{ base: "full", lg: "50%" }}>
            <Flex flexDirection={"column"} gap={4}>
              <Reveal delay={0.3}>
                <Flex p={4} flexDirection={{ base: "column", md: "row" }} gap={4}>
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
                          <Image alt="Imagem fixflot" src={images[image].src} boxSize={"full"} fit={"contain"} />
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
                        <Image alt={Thumb.alt} src={Thumb.src} boxSize={"64px"} objectFit={"contain"} />
                      </Box>
                    ))}
                  </Flex>
                </Flex>
              </Reveal>
              <Text as={"p"} textAlign={"justify"} fontSize={"md"}>
                Detergente desengraxantes concentrado de uso geral, com uma combinação a base de óleo de pinho e
                tensoativos biodegradáveis de alta performance e poderosa ação de limpeza. Podendo ser utilizado em
                todas os tipos de superfície lavável, removendo os mais diversos tipos de sujidades tais como, óleos,
                gorduras, graxas, poeira, encardido, sujidades orgânicas em geral, sem agredir a superfície aplicada.
                Produto de pH neutro com tensoativos biodegradáveis que não agridem o meio ambiente e de fácil remoção
                por enxágue. Agradável odor floral. Produto concentrado de excelente custo beneficio , permitindo
                diluições conforme a situação a ser aplicado.
              </Text>
            </Flex>
          </Flex>
          <Flex w={{ base: "full", lg: "50%" }} flexDirection={"column"} gap={4} rounded={"md"} px={4} my={4}>
            <Text as={"h2"} fontWeight={"bold"} fontSize={"md"} textTransform={"uppercase"} py={4} textAlign={"center"}>
              Diluição recomendada
            </Text>
            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Reveal delay={0.1}>
                <HiddenText
                  color="#CDDA33"
                  hover="#CDDA70"
                  title="Sujidade Leve"
                  text="Sujidade leve realizar diluição de 1:200 (5,0ml de Limpoo Pine para 995,0ml de água);"
                />
              </Reveal>
              <Reveal delay={0.15}>
                <HiddenText
                  color="#CDDA33"
                  hover="#CDDA70"
                  title="Sujidade média"
                  text="Sujidade média realizar diluição de 1:100 (10,0ml de Limpoo Pine para 990,0ml de água);"
                />
              </Reveal>
              <Reveal delay={0.2}>
                <HiddenText
                  color="#CDDA33"
                  hover="#CDDA70"
                  title="Sujidade alta"
                  text="Sujidade alta realizar diluição de 1:50 (20,0 ml de Limpoo Pine 980,0 ml de água)."
                />
              </Reveal>
            </Flex>

            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Text as={"h2"} textTransform={"uppercase"} fontWeight={"bold"}>
                Utilização:
              </Text>
              <Text>
                Após a definição da diluição escolhida e preparação da solução: Aplique a solução do produto na
                superfície a ser limpa. A aplicação pode ser por spray, pulverizador, regador ou a melhor maneira de
                aplicação para a superfície. Deixar o produto agir por aproximadamente 5 minutos. Realizar uma
                esfregação (ação mecânica) com o auxílio de uma esponja, escova, pano de microfibra, mop ou conforme a
                necessidade da aplicação, para a remoção da sujidade. Realizar enxágue com água limpa.
              </Text>
            </Flex>
            <Flex gap={2} w={"full"} flexDir={{ base: "column", sm: "row" }}>
              <Button
                bg={"#CDDA33"}
                _hover={{
                  bg: "#CDDA70",
                }}
                onClick={() => window.open("https://drive.google.com/file/d/1pkPh5ROm8CEyBJ3d9CegI5ukalshy4J7/view")}
              >
                Boletim Tecnico
              </Button>
              <Button
                bg={"#CDDA33"}
                _hover={{
                  bg: "#CDDA70",
                }}
                onClick={() => window.open("https://drive.google.com/file/d/1nL97bZPDRa3zXDUmArhpyCpbRQN9mHDa/view")}
              >
                FISPQ
              </Button>
              <Button
                bg={"#CDDA33"}
                _hover={{
                  bg: "#CDDA70",
                }}
                onClick={() =>
                  window.open("https://drive.google.com/file/d/10Aw6Pg0HAoahpo_AJ72wtUs4Bl5j3HVv/view?usp=sharing")
                }
              >
                Ebook de higienização
              </Button>
            </Flex>
            <Flex flexDirection={"column"} gap={4} pb={4}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontWeight={"semibold"}>
                        Propriedades
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"md"}>
                    <Image
                      src="/pH.svg"
                      alt="ph tabela"
                      width={"md"}
                      mx={"auto"}
                      bgColor={"whiteAlpha.300"}
                      rounded={"md"}
                      p={4}
                    />
                    <Text>
                      <strong>PH</strong>: 7 a 8 - Neutro.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Flex>

        <Button
          my={4}
          bg={"#CDDA33"}
          _hover={{
            bg: "#CDDA70",
          }}
          w={"full"}
          textTransform={"uppercase"}
          onClick={() => window.open("https://api.whatsapp.com/message/EA6EJOB3Q3KLM1?autoload=1&app_absent=0")}
        >
          Compre conosco
        </Button>
      </Container>
    </MotionLayout>
  );
}
