import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Button } from "@chakra-ui/react";
import { Container, Box, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import MotionLayout from "@/components/MotionLayout";
import { forwardRef, useState } from "react";

const images = [
  {
    src: "/auto/car.jpg",
    alt: "Carro",
  },
  {
    src: "/auto/estofado.jpg",
    alt: "Estofado",
  },
  {
    src: "/auto/plastico.jpg",
    alt: "Estofado",
  },
  {
    src: "/auto/roda.jpg",
    alt: "Estofado",
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

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <MotionLayout title="Auto">
      <Box position={"relative"} h={"768px"} overflow={"hidden"}>
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
          zIndex={50}
          px={8}
        >
          <Button
            w={"50px"}
            h={"50px"}
            bg={"white"}
            borderRadius={"50%"}
            display={"flex"}
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
            display={"flex"}
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
        </AnimatePresence>
      </Box>
    </MotionLayout>
  );
}
