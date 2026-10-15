import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface HeaderBannerProps {
  route: string;
}

type banner = {
  [key: string]: () => JSX.Element;
};

export default function HeaderBanner({ route }: HeaderBannerProps) {
  const banner: banner = {
    "/blog": () => {
      return (
        <MotionBox
          key={route}
          maxW="container.xl"
          mx="auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          px={{ base: 5, lg: 0 }}
          py={{ base: 10, md: 16 }}
        >
          <Text
            color="#06EC46"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="widest"
            fontSize="sm"
            mb={3}
          >
            Conteúdos G&S
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            maxW="3xl"
            lineHeight="shorter"
          >
            Conhecimento para cuidar melhor de cada superfície.
          </Heading>
          <Text
            mt={5}
            maxW="2xl"
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.900"
          >
            Dicas, orientações e informações para profissionais e clientes que
            buscam resultados mais seguros e duradouros.
          </Text>
        </MotionBox>
      );
    },

    "/higienizacao": () => {
      return (
        <MotionFlex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          px={{ base: 4, lg: 0 }}
          gap={{ base: 4, md: 0 }}
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          minH={40}
        >
          <Box minH={100}>
            <Image
              width={445}
              height={100}
              src="/logo-lotus.svg"
              alt="Lotus logo"
            />
          </Box>
          <Box
            color="black"
            fontSize={"xl"}
            textAlign={{ base: "left", md: "right" }}
          >
            <Text as="h1" fontWeight={"bold"}>
              G&S HOME SOLUTIONS
            </Text>
            <Text as="h2" fontWeight={"semibold"}>
              Uma linha completa de higienização e impermeabilização de
              estofados
            </Text>
          </Box>
        </MotionFlex>
      );
    },
    "/impermeabilizantes": () => {
      return (
        <MotionFlex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          px={{ base: 4, lg: 0 }}
          gap={{ base: 4, md: 0 }}
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          minH={40}
        >
          <Box minH={100}>
            <Image
              width={445}
              height={100}
              src="/logo-lotus.svg"
              alt="Lotus logo"
            />
          </Box>
          <Box
            color="black"
            fontSize={"xl"}
            textAlign={{ base: "left", md: "right" }}
          >
            <Text as="h1" fontWeight={"bold"}>
              G&S HOME SOLUTIONS
            </Text>
            <Text as="h2" fontWeight={"semibold"}>
              Uma linha completa de higienização e impermeabilização de
              estofados
            </Text>
          </Box>
        </MotionFlex>
      );
    },
    "/lotus": () => {
      return (
        <MotionFlex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          px={{ base: 4, lg: 0 }}
          gap={{ base: 4, md: 0 }}
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          minH={40}
        >
          <Box minH={100}>
            <Image
              width={445}
              height={100}
              src="/logo-lotus.svg"
              alt="Lotus logo"
            />
          </Box>
          <Box
            color="black"
            fontSize={"xl"}
            textAlign={{ base: "left", md: "right" }}
          >
            <Text as="h1" fontWeight={"bold"}>
              G&S HOME SOLUTIONS
            </Text>
            <Text as="h2" fontWeight={"semibold"}>
              Uma linha completa de higienização e impermeabilização de
              estofados
            </Text>
          </Box>
        </MotionFlex>
      );
    },
    "/limpoo": () => {
      return (
        <MotionFlex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
          px={{ base: 4, lg: 0 }}
          gap={{ base: 4, md: 0 }}
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          minH={40}
        >
          <Box
            minH={130}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            {/* <Image
              width={455}
              height={130}
              src="/logo-limpoo.svg"
              alt="Limpoo logo"
            /> */}
          </Box>
          <Box
            color="white"
            fontSize={"xl"}
            textAlign={{ base: "left", md: "right" }}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            <Text as="h1" fontWeight={"bold"}>
              G&S HOME SOLUTIONS
            </Text>
            <Text as="h2" fontWeight={"semibold"}>
              NOVIDADES EM BREVE
            </Text>
          </Box>
        </MotionFlex>
      );
    },
    "/produtoslimpoo": () => {
      return (
        <MotionFlex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
          px={{ base: 4, lg: 0 }}
          gap={{ base: 4, md: 0 }}
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          minH={40}
        >
          <Box
            minH={130}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            <Image
              width={455}
              height={130}
              src="/logo-limpoo.svg"
              alt="Limpoo logo"
            />
          </Box>
          <Box
            color="white"
            fontSize={"xl"}
            textAlign={{ base: "left", md: "right" }}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            <Text as="h1" fontWeight={"bold"}>
              G&S HOME SOLUTIONS
            </Text>
            <Text as="h2" fontWeight={"semibold"}>
              SUJOU? LIMPOO!
            </Text>
          </Box>
        </MotionFlex>
      );
    },
    "/pine": () => {
      return <MotionFlex></MotionFlex>;
    },
    "/desincrustante": () => {
      return <MotionFlex></MotionFlex>;
    },

    "/fixflot": () => {
      return <MotionFlex></MotionFlex>;
    },
    "/powertrio": () => {
      return <MotionFlex></MotionFlex>;
    },
    "/fireguard": () => {
      return <MotionFlex></MotionFlex>;
    },
    "/hidro": () => {
      return <MotionFlex></MotionFlex>;
    },
  };

  if (
    !(route in banner) ||
    [
      "/pine",
      "/desincrustante",
      "/fixflot",
      "/powertrio",
      "/fireguard",
      "/hidro",
    ].includes(route)
  )
    return null;

  return (
    <Container
      maxW={"container.xl"}
      color={"white"}
      py={8}
      px={0}
      display={route === "/blog" ? "block" : { base: "none", md: "block" }}
    >
      <AnimatePresence mode="wait">{banner[route]()}</AnimatePresence>
    </Container>
  );
}
