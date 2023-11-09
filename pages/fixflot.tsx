import MotionLayout from "@/components/MotionLayout"
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
} from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import HiddenText from "@/components/HiddenText"
import VideoFrame from "@/components/iFrame"

import { useState } from "react"
const variants = {
  hidden: { opacity: 0, scale: 0 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
}

export default function FixFlot() {
  const [image, setImage] = useState(2)
  const handleChangeImage = (src: number) => {
    setImage(src)
  }
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
  ]

  return (
    <MotionLayout title="Fix-Flot">
      <Container maxW={"container.xl"}>
        <Flex flexDirection={{ base: "column", lg: "row" }} gap={4}>
          <Flex w={{ base: "full", lg: "50%" }}>
            <Flex flexDirection={"column"} gap={4}>
              <Flex p={4} flexDirection={{ base: "column", md: "row" }} gap={4}>
                <AnimatePresence mode="wait">
                  {images[image] && (
                    <Box
                      w={"full"}
                      h={"md"}
                      rounded={"md"}
                      bgColor={"gray.200"}
                    >
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
                      bgColor={"gray.200"}
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
              <Text
                as={"p"}
                fontWeight={"semibold"}
                fontSize={"md"}
                color={"#A22C37"}
              >
                O que é FixFlot?
              </Text>
              <Text as={"p"} textAlign={"justify"} fontSize={"md"}>
                LÓTUS FIX-FLOT é um flotador extremamente concentrado com
                espumação controlada e com ativos anti-migrantes através da
                tecnologia “Lótus Omni FIX”, especialmente desenvolvido para
                limpeza de todos os tipos de tapetes e carpetes. Com alta
                capacidade na remoção das mais variadas sujidades, além de
                revitalizar a coloração e o toque natural da fibra. É
                extremamente seguro para realizar a higienização de tapetes
                persas, orientais, kilim, fibras naturais, fibras sintéticas e
                carpetes, sem risco de migração/transferência de cor.
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
              color={"#A22C37"}
            >
              Diluição recomendada
            </Text>
            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <HiddenText
                title="Sujidade Leve"
                text="Realizar diluição de 1:130
                (7,5mL de FIX-FLOT para 992,5ml de água);"
              />
              <HiddenText
                title="Sujidade média"
                text="Realizar diluição de 1:100
                (10mL de FIX-FLOT para 990mL de água);"
              />
              <HiddenText
                title="Sujidade alto"
                text=" Realizar diluição de 1:70 (15mL
                de FIX-FLOT para 985mL de água)."
              />
              <HiddenText
                title="Sujidade muito alta"
                text="Realizar diluição de 1:50
                (20mL de FIX-FLOT para 980mL de água)."
              />
            </Flex>

            <Flex gap={4} flexDirection={"column"} fontSize={"md"}>
              <Text
                as={"h2"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                color={"#A22C37"}
              >
                Sugestão de processo Úmido :
              </Text>
              <Text>
                Após a aspiração, aplicar 1 Litro de solução para cada 1m2 de
                tapete a ser limpo, aguardar por pelo menos 10 minutos para que
                o produto inicie o processo de ação química. Após este período
                realizar a esfregação do tapete com enceradeira rotativa e
                enxaguar com água para remoção da sujidade.
              </Text>
              <Text
                as={"h2"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                color={"#A22C37"}
              >
                Sugestão de processo Semi-Seco :
              </Text>
              <Text>
                Após a aspiração, aplicar o produto por pulverização sobre a
                superfície do tapete, sem deixar o excesso de água em sua
                superfície. Aguardar por pelo menos 10 minutos para que o
                produto inicie o processo de ação química. Após este período,
                realizar a esfregação do tapete com um Disco Bonnet. Finalizar
                realizando a extração do produto com a extratora, sem enxágue.
              </Text>
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
                        color={"#A22C37"}
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
                      <strong>PH</strong>: 2,5 - 3,5
                    </Text>
                    <Text>
                      <strong>Densidade</strong>: aproximadamente 0,985 g/cm3.
                    </Text>
                    <Text>
                      <strong>Solubilidade</strong> em água: Solúvel em qualquer
                      proporção.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Flex>
        <Container
          maxW="container.xl"
          p={8}
          mb={2}
          bg={
            "radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"
          }
          rounded={"md"}
        >
          <Text
            as="h2"
            fontWeight={"bold"}
            fontSize={"md"}
            color={"white"}
            marginBottom={4}
          >
            Conheça mais sobre o FixFlot
          </Text>
          <Flex
            flexDirection={{ base: "column", sm: "row" }}
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
        </Container>
      </Container>
    </MotionLayout>
  )
}
