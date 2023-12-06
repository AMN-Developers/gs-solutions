import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Button } from "@chakra-ui/react";
import { Container, Box, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import MotionLayout from "@/components/MotionLayout";
import { forwardRef, useState } from "react";
import { Reveal } from "@/components/Auto/Reveal";

const images = [
  {
    src: "/auto/car.jpg",
    alt: "Imagem de um carro",
    text: "FAÇA UM TOUR DE HIGIENIZAÇÃO AUTOMOTIVA",
  },
  {
    src: "/auto/estofado.jpg",
    alt: "Imagem do interior de um carro",
    products: [
      {
        image: "/embalagens-auto.png",
        type: "BANCO POLIESTER",
        product: "POWER TRIO",
        description: "Borrifar produto + Extratora",
        delay: 0.25,
        size: 200,
      },
      {
        image: "/embalagens-auto.png",
        type: "BANCO SEM IMPER",
        product: "MULTI-C",
        description: "Borrifar produto + Extratora",
        delay: 0.5,
        size: 200,
      },
      {
        image: "/embalagens-auto.png",
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
    products: [
      {
        image: "/produtos/allone.png",
        type: "TETO",
        product: "PRE-IMER & TIRA MANCHAS",
        description: "Borrifar produto + passar pano de microfibra",
        delay: 0.25,
        size: 100,
      },
    ],
  },
  {
    src: "/auto/interior.webp",
    alt: "Imagem da parte interior do carpete de um Carro",
    products: [
      {
        image: "/produtos/allone.png",
        type: "CARPETE",
        product: "MULTI-C & TIRA MANCHAS",
        description: "Borrifar produto + extratora",
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
      // Swipe right, move to the next slide
      handleNext();
    } else if (deltaX < -50) {
      // Swipe left, move to the previous slide
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
            // hide on mobile
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
          >
            {images[currentImage] && (
              <AnimatePresence>
                <Reveal key={images[currentImage].text as unknown as string}>
                  <Text
                    fontSize={"4xl"}
                    fontWeight={"semibold"}
                    color={"white"}
                    textShadow={"0 0 8px black"}
                  >
                    {images[currentImage].text as unknown as string}
                  </Text>
                </Reveal>
              </AnimatePresence>
            )}
            <Box
              display={"flex"}
              flexDir={"column"}
              gap={4}
              as={motion.div}
              initial={"hidden"}
              animate={"visible"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 1.5,
                  },
                },
              }}
            >
              {images[currentImage].products &&
                images[currentImage].products?.map((product) => (
                  <AnimatePresence key={product.product} mode="wait">
                    <Reveal key={product.product} delay={product.delay}>
                      <Box
                        bg={"white"}
                        borderRadius={"md"}
                        p={4}
                        display={"flex"}
                        alignItems={"center"}
                        boxShadow={"0 0 8px black"}
                        w={"500px"}
                      >
                        <Image
                          src={product.image}
                          alt={product.product}
                          width={product.size}
                          height={product.size}
                        />
                        <Box ml={4}>
                          <Text fontSize={"lg"} fontWeight={"bold"}>
                            {product.type}
                          </Text>
                          <Text fontSize={"md"} fontWeight={"semibold"}>
                            {product.product}
                          </Text>
                          <Text fontSize={"sm"}>{product.description}</Text>
                        </Box>
                      </Box>
                    </Reveal>
                  </AnimatePresence>
                ))}
            </Box>
          </Container>
        </AnimatePresence>
      </Box>
    </MotionLayout>
  );
}
