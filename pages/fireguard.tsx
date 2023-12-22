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
import VideoFrame from "@/components/iFrame";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
const variants = {
  hidden: { opacity: 0, scale: 0 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

export default function Fireguard() {
  const [image, setImage] = useState(2);
  const handleChangeImage = (src: number) => {
    setImage(src);
  };
  const images = [
    {
      src: "/produtos/fireguard/fireguard1.png",
      alt: "bombona diagonal",
    },
    {
      src: "/produtos/fireguard/fireguard2.png",
      alt: "bombona diagonal cima",
    },
    {
      src: "/produtos/fireguard/fireguard1.png",
      alt: "bombona cima",
    },
    {
      src: "/produtos/fireguard/fireguard4.png",
      alt: "bombona diagonal baixo",
    },
  ];

  return (
    <MotionLayout title="Fireguard">
      <Box
        bgImage={"/fire.gif"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"center"}
        px={{ base: "10", md: "140", lg: "180px" }}
        py={{ base: "200", md: "140", lg: "220px" }}
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
            Fireguard
          </Text>
          <Text
            fontWeight={"semibold"}
            fontSize={{ base: "10", md: "15", lg: "30" }}
            color={"white"}
            textAlign={"center"}
            textTransform={"uppercase"}
            w={"100%"}
          >
            RETARDANTE DE CHAMAS PARA TECIDOS CLASSE &quot;IIA&quot;
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
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={4}
          id="saibamais"
        >
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
                color={"#F19E34"}
              >
                O que é Fireguard?
              </Text>
              <Text as={"p"} textAlign={"justify"} fontSize={"md"}>
                LÓTUS FIREGUARD é uma solução para aplicação têxtil e outros
                substratos com o objetivo de retardar as chamas, incolor,
                inodoro, recomendado para materiais onde há a necessidade de se
                evitar ou inibir a propagação de chamas. É um produto
                extremamente versátil e fácil de ser utilizado onde há a
                necessidade de se evitar a propagação de chamas em ambientes. A
                sua ação consiste em inibir ou retardar as chamas, evitando que
                o fogo se alastre a outros ambientes e materiais combustíveis.
                Materiais aplicados com LÓTUS FIREGUARD não sofrem alterações
                significantes em relação a sua aparência, textura, cor e odor
                original. Para uso em ambientes externos expostos às
                intempéries, recomenda-se a aplicação de impermeabilizante para
                tecidos da linha LÓTUS HS 1000.
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
              color={"#F19E34"}
            >
              Como usar?
            </Text>
            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Reveal delay={0.1}>
                <HiddenText
                  color="rgba(255,180,44,1)"
                  hover="rgba(255,180,44,0.8)"
                  title="Principais aplicações"
                  text="Indicado para aplicação em superfícies de tecidos, tais
como cortinas, lonas, tendas, voil, lycra, nylon, poliéster e suas misturas, carpetes e
tapetes de fibras sintéticas, tais como nylon, polipropileno, poliamida, entre outros.
Quiosques (sapés, piaçavas, carnaúbas, fibras naturais), revestimentos e materiais
de fibra celulósica, tais como papel kraft, papelão, papel de parede, fibra acústica,
portas de madeira, divisórias, escadas, forros e coberturas de madeira."
                />
              </Reveal>
              <Reveal delay={0.15}>
                <HiddenText
                  color="rgba(255,180,44,1)"
                  hover="rgba(255,180,44,0.8)"
                  title="Tempo de ação"
                  text="100% do tempo (ação constante inibe propagação de chamas)."
                />
              </Reveal>
              <Reveal delay={0.2}>
                <HiddenText
                  color="rgba(255,180,44,1)"
                  hover="rgba(255,180,44,0.8)"
                  title="Modo de ação"
                  text="Quando em contato com o fogo, a solução de LÓTUS FIREGUARD
que penetrou no material protegido se carboniza, evitando a propagação das
chamas em 100% do tempo. Também se aumenta o controle, e diminui o tempo de
combate ao fogo, em um eventual caso de incêndio."
                />
              </Reveal>
              <Reveal delay={0.25}>
                <HiddenText
                  color="rgba(255,180,44,1)"
                  hover="rgba(255,180,44,0.8)"
                  title="Ciclo de Manutenção"
                  text=" A verificação deve ocorrer periodicamente de 3 a 8 anos
variando de acordo com o substrato que recebeu o tratamento (dentro deste
período, é permitido até um ciclo de 5 lavagens em sistema à seco utilizando
solvente de percloroetileno para tecidos e tapetes)."
                />
              </Reveal>
            </Flex>

            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Text
                as={"h2"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                color={"#F19E34"}
              >
                Precauções para manuseio seguro:
              </Text>
              <Text>
                Assegurar uma boa ventilação / exaustão no local de trabalho.
                Evitar o contacto com a pele e os olhos. Modo de ação: Quando em
                contato com o fogo, a solução de LÓTUS FIREGUARD que penetrou no
                material protegido se carboniza, evitando a propagação das
                chamas em 100% do tempo. Também se aumenta o controle, e diminui
                o tempo de combate ao fogo, em um eventual caso de incêndio.
              </Text>
              <Text
                as={"h2"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                color={"#F19E34"}
              >
                Segurança:
              </Text>
              <Text>
                Caso o tecido fique em contato com a pele, recomenda-se a
                realização de testes dermatológicos antes da aplicação. Utilize
                os equipamentos de proteção exigidos abaixo e mantenha este
                produto fora do alcance de crianças.
              </Text>
              <Text
                as={"h2"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                color={"#F19E34"}
              >
                Rendimento:
              </Text>
              <Text>
                Absorção com todas as demãos requeridas por face
                (independentemente do método de aplicação utilizado): 200 - 250
                mL/m2 (variando de acordo com a espessura, tipo de substrato e
                porosidade de cada superfície). A reaplicação se faz necessária
                sempre que houver a lavagem em água ou longos períodos de
                exposição as intempéries.
              </Text>
            </Flex>
            <Flex gap={2} w={"full"}>
              <Button
                bg={"rgba(255,180,44,1)"}
                color={"white"}
                _hover={{
                  bg: "rgba(255,180,44,0.8)",
                }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1KZBEykmdS2nvfxtI8Z9-iA9c3qB7FIjk/view"
                  )
                }
              >
                Boletim Tecnico
              </Button>
              <Button
                bg={"rgba(255,180,44,1)"}
                color={"white"}
                _hover={{
                  bg: "rgba(255,180,44,0.8)",
                }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13M6kAG2RKxtCAIPFNd2Qj49vFkTEbu1L/view"
                  )
                }
              >
                FISPQ
              </Button>
              <Button
                bg={"rgba(255,180,44,1)"}
                color={"white"}
                _hover={{
                  bg: "rgba(255,180,44,0.8)",
                }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1gwMLAQM1Zxusjf8Dm4dn7Zsgq_ODl9T1/view?pli=1"
                  )
                }
              >
                Relatorio Tec.
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
                        color={"#F19E34"}
                      >
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
                      <strong>PH</strong>: 2,5 - 4,0
                    </Text>
                    <Text>
                      <strong>Densidade</strong>: 1,000 g/cm3
                    </Text>
                    <Text>
                      <strong>Solubilidade</strong>: Totalmente solúvel.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Flex>

        {/* <Container
          maxW="container.xl"
          p={8}
          mb={2}
          bg={"rgba(255,180,44,1)"}
          rounded={"md"}
        >
          <Text
            as="h2"
            fontWeight={"bold"}
            fontSize={"md"}
            color={"white"}
            marginBottom={4}
          >
            Conheça mais sobre o Fireguard
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
                embedID="dLLWw51CcHo"
                title="G&S Home Solutions"
                ariaDescription="G&S Home Solutions video de apresentação"
              />
              <Text>Higienizando com Lótus Fix-Flot</Text>
            </Flex>
            <Flex
              width={{ base: "100%", md: "30%" }}
              flexDirection={"column"}
              gap={2}
            >
              <VideoFrame
                embedID="uE71eR_bMh8"
                title="G&S Home Solutions"
                ariaDescription="G&S Home Solutions video de apresentação"
              />
              <Text>O melhor produto para lavar tapete?</Text>
            </Flex>
            <Flex
              width={{ base: "100%", md: "30%" }}
              flexDirection={"column"}
              gap={2}
            >
              <VideoFrame
                embedID="8BIYZO6ZSDU"
                title="G&S Home Solutions"
                ariaDescription="G&S Home Solutions video de apresentação"
              />
              <Text>Aula de higienização de tapete persa</Text>
            </Flex>
          </Flex>
        </Container> */}
        <Button
          my={4}
          bg={"rgba(255,180,44,1)"}
          color={"white"}
          w={"full"}
          _hover={{
            bg: "rgba(255,180,44,0.8)",
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
  );
}
