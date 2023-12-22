import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
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
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import MotionLayout from "@/components/MotionLayout";
import { forwardRef, useState } from "react";
import { Reveal as AutoReveal } from "@/components/Auto/Reveal";
import Reveal from "@/components/Reveal";

const images = [
  {
    src: "/auto/car.jpg",
    alt: "Imagem de um carro",
    text: "FAÇA UM TOUR DE HIGIENIZAÇÃO AUTOMOTIVA",
  },
  {
    src: "/auto/estofado.jpg",
    alt: "Imagem do interior de um carro",
    type: "HIGIENIZAÇÃO DE BANCOS",
    products: [
      {
        image: "/auto/powertrio.png",
        type: "BANCO AUTOMOTIVO",
        product: "POWER TRIO",
        description: "Borrifar produto + Extratora",
        delay: 0.25,
        size: 250,
        href: "/powertrio",
      },
      {
        image: "/auto/multic.png",
        type: "BANCO AUTOMOTIVO SEM IMPERMEABILIZAÇÃO",
        product: "MULTI-C",
        description: "Borrifar produto + Extratora",
        delay: 0.5,
        size: 100,
      },
      {
        image: "/auto/all01hydra.png",
        type: "BANCO DE COURO",
        product: "ALL-01 LIMPEZA & HYDRA LEDER HIDRATAÇÃO",
        description:
          "Borrifar ALL-01 + limpar com pano de microfibra + aplicar Hidra Leder na espuma",
        delay: 0.75,
        size: 200,
      },
    ],
  },
  {
    src: "/auto/plastico.jpg",
    alt: "Imagem do painel de um carro",
    type: "HIGIENIZAÇÃO DE PAINEL PLÁSTICO",
    products: [
      {
        image: "/produtos/allone.png",
        type: "PAINEL PLÁSTICO",
        product: "ALL-01",
        description: "Borrifar + pano de microfibra ou pincel",
        delay: 0.25,
        size: 100,
      },
    ],
  },
  {
    src: "/auto/teto.jpg",
    alt: "Imagem da parte interior do teto de um Carro",
    type: "HIGIENIZAÇÃO DE TETO",
    products: [
      {
        image: "/auto/pretira.png",
        type: "TETO",
        product: "PRE-IMER & TIRA MANCHAS",
        description: "Borrifar produto + passar pano de microfibra",
        delay: 0.25,
        size: 200,
      },
    ],
  },
  {
    src: "/auto/interior.jpg",
    alt: "Imagem da parte interior do carpete de um Carro",
    type: "HIGIENIZAÇÃO DE CARPETE",
    products: [
      {
        image: "/auto/multitira.png",
        type: "CARPETE",
        product: "MULTI-C & TIRA MANCHAS",
        description: "Borrifar produto + extratora",
        delay: 0.25,
        size: 200,
      },
    ],
  },
  {
    src: "/auto/roda.webp",
    alt: "Imagem da roda de um Carro",
    type: "HIGIENIZAÇÃO DE CAIXA DE RODA",
    products: [
      {
        image: "/auto/multic.png",
        type: "CAIXA DE RODA",
        product: "MULTI-C",
        description: "Borrifar produto + passar pano de microfibra",
        delay: 0.25,
        size: 100,
      },
    ],
  },
];

type ImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  objectFit?: "cover" | "contain";
};

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...props} ref={ref} />;
  }
);

const MotionComponent = motion(ExoticImage);

export default function Auto() {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50) {
      handleNext();
    } else if (deltaX < -50) {
      handlePrev();
    }
  };

  return (
    <MotionLayout title="Auto">
      <Box
        position={"relative"}
        h={"768px"}
        overflow={"hidden"}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Box
          position={"absolute"}
          top={"50%"}
          left={"0"}
          transform={"translateY(-50%)"}
          w={"100%"}
          h={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          zIndex={20}
          px={8}
        >
          <Button
            w={"50px"}
            h={"50px"}
            bg={"white"}
            borderRadius={"50%"}
            display={{ base: "none", md: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
            onClick={handlePrev}
          >
            <SlArrowLeft size={"20px"} />
          </Button>
          <Button
            w={"50px"}
            h={"50px"}
            bg={"white"}
            borderRadius={"50%"}
            display={{ base: "none", md: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
            onClick={handleNext}
          >
            <SlArrowRight size={"20px"} />
          </Button>
        </Box>
        <AnimatePresence>
          <MotionComponent
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            fill
            objectFit="cover"
            key={images[currentImage].src}
            style={{ filter: "grayscale(100%)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, filter: "none" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <Container
            maxW={"container.xl"}
            h={"100%"}
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            display={"flex"}
            alignItems={"center"}
            p={{ base: 4, md: 24, lg: 24, xl: 32, "2xl": 0 }}
          >
            {images[currentImage] && (
              <AnimatePresence>
                <AutoReveal
                  key={images[currentImage].text as unknown as string}
                >
                  <Text
                    fontSize={"6xl"}
                    fontWeight={"bold"}
                    color={"white"}
                    textShadow={"0 0 8px black"}
                    bg={"black"}
                    px={4}
                  >
                    {images[currentImage].text as unknown as string}
                  </Text>
                </AutoReveal>
              </AnimatePresence>
            )}
            <Box
              display={"flex"}
              gap={4}
              as={motion.div}
              justifyContent={"space-between"}
              flexDir={{ base: "column-reverse", md: "row-reverse" }}
            >
              <Box gap={4} display={"flex"} flexDir={"column"}>
                {images[currentImage].products &&
                  images[currentImage].products?.map((product) => (
                    <AnimatePresence key={product.product} mode="wait">
                      <AutoReveal key={product.product} delay={product.delay}>
                        <Box
                          bg={"white"}
                          borderRadius={"md"}
                          p={4}
                          display={"flex"}
                          alignItems={"center"}
                          boxShadow={"0 0 8px black"}
                          w={"500px"}
                          zIndex={20}
                        >
                          <Image
                            src={product.image}
                            alt={product.product}
                            width={product.size}
                            height={product.size}
                          />
                          <Box
                            ml={4}
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"space-between"}
                          >
                            <Text fontSize={"lg"} fontWeight={"bold"}>
                              {product.type}
                            </Text>
                            <Text fontSize={"md"} fontWeight={"semibold"}>
                              {product.product}
                            </Text>
                            <Text fontSize={"sm"}>{product.description}</Text>
                          </Box>
                        </Box>
                      </AutoReveal>
                    </AnimatePresence>
                  ))}
              </Box>
              {images[currentImage].type && (
                <AnimatePresence>
                  <Reveal
                    delay={0.3}
                    key={images[currentImage].type as unknown as string}
                  >
                    <Text
                      fontSize={"6xl"}
                      fontWeight={"bold"}
                      color={"white"}
                      textShadow={"0 0 8px black"}
                      align={"center"}
                      // black rbg with 0.9 opacity
                      bg={"rgba(0,0,0,0.7)"}
                      rounded={"md"}
                    >
                      {images[currentImage].type as unknown as string}
                    </Text>
                  </Reveal>
                </AnimatePresence>
              )}
            </Box>
          </Container>
        </AnimatePresence>
      </Box>
      <Container maxW={"container.xl"} px={{ base: 4, md: 0 }}>
        <Text
          id="saibamais"
          fontWeight={"bold"}
          fontSize={{ base: "md", md: "2xl" }}
          textAlign={"center"}
          textTransform={"uppercase"}
          py={8}
        >
          CONHEÇA OS PRODUTOS QUE VÃO REVOLUCIONAR A HIGIENIZAÇÃO AUTOMOTIVA
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
              rounded={"md"}
              boxShadow={"lg"}
              height={"100%"}
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
                Detergente com alto poder de remoção
              </Text>
            </Flex>
          </Reveal>
          <Reveal delay={0.2}>
            <Flex
              p={{ base: "0", md: "4" }}
              flexDirection={"column"}
              rounded={"md"}
              boxShadow={"lg"}
              height={"100%"}
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
                Limpador de sujidade inorgânica
              </Text>
            </Flex>
          </Reveal>
          <Reveal delay={0.3}>
            <Flex
              p={{ base: "0", md: "4" }}
              flexDirection={"column"}
              rounded={"md"}
              boxShadow={"lg"}
              height={"100%"}
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
          <Reveal delay={0.3}>
            <Flex
              p={{ base: "0", md: "4" }}
              flexDirection={"column"}
              rounded={"md"}
              boxShadow={"lg"}
              height={"100%"}
            >
              <Box alignSelf={"center"} p={4}>
                <Image
                  src="/produtos/multic.png"
                  alt="All in One"
                  width={100}
                  height={100}
                />
              </Box>
              <Text textAlign={"center"} fontSize={{ base: "md", sm: "sm" }}>
                Poderoso APC Alcalino
              </Text>
            </Flex>
          </Reveal>
          <Reveal delay={0.4}>
            <Flex
              p={{ base: "0", md: "4" }}
              flexDirection={"column"}
              rounded={"md"}
              boxShadow={"lg"}
              height={"100%"}
            >
              <Box alignSelf={"center"} p={4}>
                <Image
                  src="/produtos/hidraleder.png"
                  alt="All in One"
                  width={100}
                  height={100}
                />
              </Box>
              <Text textAlign={"center"} fontSize={{ base: "md", sm: "sm" }}>
                Hidratante de couro 4x1
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
          QUER SABER MAIS SOBRE OS PRODUTOS?
        </Text>
        <Reveal delay={0.5}>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            mb={4}
            gap={4}
          >
            <Flex flexDirection={"column"} w={"100%"} gap={4}>
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
                    <Text mb={4}>
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
                    <Text mb={4}>
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
                    <Text mb={4}>
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
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        MULTI-C
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel fontSize={"md"}>
                    <Text mb={4}>
                      Limpador multifuncional especialmente desenvolvido para
                      aplicações têxteis, indicado também para limpeza pesada de
                      superfícies em geral. Com alta capacidade de remoção de
                      gorduras, óleos, graxas e outras sujeiras de difícil
                      remoção Devido ao seu pH alcalino o produto não é indicado
                      para limpeza de superfícies que serão impermeabilizadas.
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
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"semibold"}
                      >
                        Hydra Leder
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel fontSize={"md"}>
                    <Text mb={4}>
                      LÓTUS HYDRA LEDER é um hidratante impermeabilizante de
                      couro que tem função 4x1, hidrata, revitaliza, limpa e
                      realiza a proteção com efeito hidrorrepelente (repelem
                      líquidos), além de causar sensível melhora ao toque e
                      elasticidade dos materiais que possuem essa
                      característica.
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
            </Flex>
          </Flex>
        </Reveal>
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
  );
}
