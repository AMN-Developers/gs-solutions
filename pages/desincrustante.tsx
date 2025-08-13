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

export default function Desincrustante() {
  const [image, setImage] = useState(2);
  const handleChangeImage = (src: number) => {
    setImage(src);
  };
  const images = [
    {
      src: "/produtos/desincrustante/Limpoo Desincrustante 05.png",
      alt: "bombona diagonal",
    },
    {
      src: "/produtos/desincrustante/Limpoo Desincrustante 01.png",
      alt: "bombona diagonal cima",
    },
    {
      src: "/produtos/desincrustante/Limpoo Desincrustante 03.png",
      alt: "bombona cima",
    },
    {
      src: "/produtos/desincrustante/Limpoo Desincrustante 04.png",
      alt: "bombona diagonal baixo",
    },
  ];
  //done
  return (
    <MotionLayout title="Limpoo Desincrustante">
      <Box
        bgImage={""}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        px={{ base: "10", md: "140", lg: "180px" }}
        py={{ base: "200", md: "140", lg: "180px" }}
        boxShadow={"0px 4px 4px 1000px #6F5E56 inset"}
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
            LIMPOO DESINCRUSTANTE: O ESSENCIAL DO PÓS OBRA
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
              <Text as={"p"} textAlign={"justify"} fontSize={"md"}>
                Limpador Desincrustante concentrado ácido, de alta performance e
                ação rápida, desenvolvido para remoção de incrustação de
                cimento, remoção de ferrugem, remoção de eflorescência calcária,
                óxidos, terra, fuligem e sujidades inorgânicas em geral. Possui
                agentes umectantes que facilitam a penetração do produto na
                sujidade incrustada, agindo de dentro para fora na sujidade e
                facilitando a remoção da incrustação, sem causar danos a
                superfície. Produto concentrado de excelente custo benefício,
                permitindo diluições conforme a situação a ser aplicado.
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
              fontWeight={"bold"}
              fontSize={"md"}
              textTransform={"uppercase"}
              py={4}
              textAlign={"center"}
            >
              Diluição recomendada
            </Text>
            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Reveal delay={0.1}>
                <HiddenText
                  color="#6F5E56"
                  hover="#6F5E40"
                  title="Sujidade Leve"
                  text="Sujidade leve realizar diluição de 1:10 
(100,0mL de L.Desincrustante  para 900,0ml de água);"
                />
              </Reveal>
              <Reveal delay={0.15}>
                <HiddenText
                  color="#6F5E56"
                  hover="#6F5E40"
                  title="Sujidade média"
                  text="Sujidade média realizar diluição de 1:5 
(200,0mL de L.Desincrustante para 800,0ml de água);"
                />
              </Reveal>
              <Reveal delay={0.2}>
                <HiddenText
                  color="#6F5E56"
                  hover="#6F5E40"
                  title="Sujidade alta"
                  text="Sujidade alta realizar diluição de 1:3
 (330,0 mL de L.Desincrustante 670mL de água)."
                />
              </Reveal>
            </Flex>

            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Text as={"h2"} textTransform={"uppercase"} fontWeight={"bold"}>
                Utilização:
              </Text>
              <Text>
                Após a definição da diluição escolhida e preparação da solução:
                Realizar uma limpeza previa da superfície, removendo a sujidade
                pesada como entulho, terra, areia, etc; remover, com o auxílio
                de uma espátula, as incrustações maiores que possam existir
                sobre o substrato/piso. Aplicar o produto na superfície a ser
                limpa. Deixar o produto agir por aproximadamente 5 minutos;
                realizar a ação mecânica para remoção da sujidade, com o auxílio
                de um escovão, espátula, escova ou lavadora de baixa rotação
                associada a disco de limpeza; finalizada a remoção, realizar
                enxágues na superfície com água limpa em abundância, até remover
                por completo o residual de produto.
              </Text>
            </Flex>
            <Flex gap={2} w={"full"} flexDir={{ base: "column", sm: "row" }}>
              <Button
                bg={"#6F5E56"}
                _hover={{
                  bg: "#6F5E40",
                }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1iopUY86XSD34bnSw9R9Z1ciHT3f4ycyv/view?usp=sharing",
                  )
                }
              >
                Boletim Tecnico
              </Button>
              <Button
                bg={"#6F5E56"}
                _hover={{
                  bg: "#6F5E40",
                }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1XTQlTe4GXouK80wTYibzZ1mFrGItbzMU/view?usp=sharing",
                  )
                }
              >
                FISPQ
              </Button>
            </Flex>
            <Flex flexDirection={"column"} gap={4} pb={4}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        Propriedades
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"md"}>
                    <Text>
                      <strong>PH</strong>: 0,20 a 2 - Ácido.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Flex>

        <Button
          my={4}
          bg={"#6F5E56"}
          _hover={{
            bg: "#6F5E40",
          }}
          w={"full"}
          textTransform={"uppercase"}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/message/EA6EJOB3Q3KLM1?autoload=1&app_absent=0",
            )
          }
        >
          Compre conosco
        </Button>
      </Container>
    </MotionLayout>
  );
}
