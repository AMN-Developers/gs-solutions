import MotionLayout from "@/components/MotionLayout"
import {
  Container,
  Box,
  Text,
  Flex,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  Collapse,
} from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import HiddenText from "@/components/HiddenText"

import { useState } from "react"
const variants = {
  hidden: { opacity: 0, scale: 0 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
}

export default function FixFlot() {
  const { isOpen, onToggle } = useDisclosure()
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
        {/* <Text
          as={"h1"}
          py={4}
          fontSize={"2xl"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Fix-Flot - O Melhor flotador do mercado
        </Text> */}
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
              <Text as={"p"} fontWeight={"semibold"} fontSize={"2xl"}>
                O que é FixFlot?
              </Text>
              <Text as={"p"} textAlign={"justify"}>
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
            bgColor={"#A22C37"}
            rounded={"md"}
            px={4}
            textColor={"white"}
            my={4}
          >
            <Text
              as={"h2"}
              fontWeight={"semibold"}
              fontSize={"xl"}
              textTransform={"uppercase"}
              py={4}
            >
              Diluição recomendada
            </Text>
            <Flex gap={4} flexDirection={"column"} fontSize={"sm"}>
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

            <Flex gap={4} flexDirection={"column"} fontSize={"sm"}>
              <Text
                as={"h2"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
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
              <Text
                as={"h2"}
                fontWeight={"semibold"}
                fontSize={"xl"}
                textTransform={"uppercase"}
                py={4}
              >
                Propriedades
              </Text>
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
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </MotionLayout>
  )
}
