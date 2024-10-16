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
import VideoFrame from "@/components/iFrame";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
const variants = {
  hidden: { opacity: 0, scale: 0 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

export default function FixFlot() {
  const [image, setImage] = useState(2);
  const handleChangeImage = (src: number) => {
    setImage(src);
  };
  const images = [
    {
      src: "/produtos/fixflot/fixflot1.png",
      alt: "bombona diagonal",
    },
    {
      src: "/produtos/fixflot/fixflot2.png",
      alt: "bombona diagonal cima",
    },
    {
      src: "/produtos/fixflot.png",
      alt: "bombona cima",
    },
    {
      src: "/produtos/fixflot/fixflot4.png",
      alt: "bombona diagonal baixo",
    },
  ];

  return (
    <MotionLayout title="Fix-Flot">
      <Box
        bgImage={"/lotusclean.gif"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        px={{ base: "10", md: "140", lg: "180px" }}
        py={{ base: "200", md: "140", lg: "180px" }}
        boxShadow={"0px 4px 4px 1000px rgba(71, 0, 0, 0.50) inset"}
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
            FixFlot: IDEAL PARA A LAVAGEM DE TAPETES
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
            Saiba mais
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

              <Text as={"p"} fontWeight={"semibold"} fontSize={"md"} color={"#A22C37"}>
                O que é FixFlot?
              </Text>
              <Text as={"p"} textAlign={"justify"} fontSize={"md"}>
                LÓTUS FIX-FLOT é um flotador extremamente concentrado com excelente espumação e alto poder de fixação de
                cor através da tecnologia “Lótus Omni FIX”, especialmente desenvolvido para limpeza de todos os tipos de
                tapetes e carpetes. Com alta capacidade na remoção das mais variadas sujidades, além de revitalizar a
                coloração e o toque natural da fibra. Devido ao seu efeito de fixação de cor da tecnologia “Lótus Omni
                FIX” é extremamente seguro para realizar a higienização de tapetes persas, orientais, kilim, fibras
                naturais, fibras sintéticas e carpetes, com redução de até 99% das chances de ocorrer migração de cores,
                quando tomado os devidos cuidados com o processo indicado*.
              </Text>
            </Flex>
          </Flex>
          <Flex w={{ base: "full", lg: "50%" }} flexDirection={"column"} gap={4} rounded={"md"} px={4} my={4}>
            <Text
              as={"h2"}
              fontWeight={"semibold"}
              fontSize={"md"}
              textTransform={"uppercase"}
              py={4}
              color={"#A22C37"}
            >
              Diluição recomendada
            </Text>
            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Reveal delay={0.1}>
                <HiddenText
                  color="radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"
                  hover="radial-gradient(circle, rgba(154,42,42,0.9) 0%, rgba(71,1,1,0.9) 93%, rgba(71,1,1,0.9) 100%);"
                  title="Sujidade Leve"
                  text="Realizar diluição de 1:130
                (7,5mL de FIX-FLOT para 992,5ml de água);"
                />
              </Reveal>
              <Reveal delay={0.15}>
                <HiddenText
                  color="radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"
                  hover="radial-gradient(circle, rgba(154,42,42,0.9) 0%, rgba(71,1,1,0.9) 93%, rgba(71,1,1,0.9) 100%);"
                  title="Sujidade média"
                  text="Realizar diluição de 1:100
                (10mL de FIX-FLOT para 990mL de água);"
                />
              </Reveal>
              <Reveal delay={0.2}>
                <HiddenText
                  color="radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"
                  hover="radial-gradient(circle, rgba(154,42,42,0.9) 0%, rgba(71,1,1,0.9) 93%, rgba(71,1,1,0.9) 100%);"
                  title="Sujidade alto"
                  text=" Realizar diluição de 1:70 (15mL
                de FIX-FLOT para 985mL de água)."
                />
              </Reveal>
              <Reveal delay={0.25}>
                <HiddenText
                  color="radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"
                  hover="radial-gradient(circle, rgba(154,42,42,0.9) 0%, rgba(71,1,1,0.9) 93%, rgba(71,1,1,0.9) 100%);"
                  title="Sujidade muito alta"
                  text="Realizar diluição de 1:50
                (20mL de FIX-FLOT para 980mL de água)."
                />
              </Reveal>
            </Flex>

            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Text as={"h2"} textTransform={"uppercase"} fontWeight={"semibold"} color={"#A22C37"}>
                Sugestão para Tapetes de Fibra sintética / Sisal / Algodão Claro:
              </Text>
              <Text>
                Após a definição da diluição escolhida, aplicar 1 Litro de solução para cada m² de tapete com um regador
                sobre o tapete ou carpete a ser limpo, aguardar por pelo menos 10 minutos para que o produto inicie o
                processo de limpeza química. Após este período realizar a esfregação do tapete com enceradeira rotativa
                e enxaguar com água em abundância
              </Text>
              <Text as={"h2"} textTransform={"uppercase"} fontWeight={"semibold"} color={"#A22C37"}>
                Sugestão para Carpetes:
              </Text>
              <Text>
                Após a definição da diluição escolhida, pulverizar o produto sobre a superfície do carpete com um
                pulverizador, aguardar por pelo menos 10 minutos para que o produto inicie o processo de limpeza
                química. Após este período realizar a esfregação do carpete com enceradeira rotativa e realizar quantas
                extrações forem necessárias.
              </Text>
              <Text as={"h2"} textTransform={"uppercase"} fontWeight={"semibold"} color={"#A22C37"}>
                Sugestão para Tapetes de Fibras naturais coloridos:
              </Text>
              <Text>
                Realizar um teste de migração, utilizando um papel absorvente, para se definir o processo a ser
                utilizado para higienização. No caso de não migração no papel, seguir com o processo úmido; No caso de
                migração no papel, seguir com o processo semi-seco. Informações detalhadas para o processo de limpeza de
                tapetes de fibras naturais, acessar botão abaixo.
              </Text>
            </Flex>
            <Flex gap={2} w={"full"} flexDir={{ base: "column", sm: "row" }}>
              <Button
                bg={"radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"}
                color={"white"}
                _hover={{
                  bg: "radial-gradient(circle, rgba(154,42,42,0.9) 0%, rgba(71,1,1,0.9) 93%, rgba(71,1,1,0.9) 100%);",
                }}
                onClick={() => window.open("https://drive.google.com/file/d/1pkPh5ROm8CEyBJ3d9CegI5ukalshy4J7/view")}
              >
                Boletim Tecnico
              </Button>
              <Button
                bg={"radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"}
                color={"white"}
                _hover={{
                  bg: "radial-gradient(circle, rgba(154,42,42,0.9) 0%, rgba(71,1,1,0.9) 93%, rgba(71,1,1,0.9) 100%);",
                }}
                onClick={() => window.open("https://drive.google.com/file/d/1nL97bZPDRa3zXDUmArhpyCpbRQN9mHDa/view")}
              >
                FISPQ
              </Button>
              <Button
                bg={"radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"}
                color={"white"}
                _hover={{
                  bg: "radial-gradient(circle, rgba(154,42,42,0.9) 0%, rgba(71,1,1,0.9) 93%, rgba(71,1,1,0.9) 100%);",
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
                      <Box as="span" flex="1" textAlign="left" fontWeight={"semibold"} color={"#A22C37"}>
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
                      <strong>PH</strong>: 2,5 - 3,5
                    </Text>
                    <Text>
                      <strong>Densidade</strong>: aproximadamente 0,985 g/cm3.
                    </Text>
                    <Text>
                      <strong>Solubilidade</strong> em água: Solúvel em qualquer proporção.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Flex>

        <Button
          my={4}
          bg={"radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"}
          color={"white"}
          w={"full"}
          _hover={{
            bg: "radial-gradient(circle, rgba(154,42,42,0.9) 0%, rgba(71,1,1,0.9) 93%, rgba(71,1,1,0.9) 100%);",
          }}
          textTransform={"uppercase"}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5511913591344&text=Ol%C3%A1,%20vim%20pelo%20Site%20Institucional.%20"
            )
          }
        >
          Compre conosco
        </Button>
      </Container>
    </MotionLayout>
  );
}
