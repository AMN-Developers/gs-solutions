import { Box, Container, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

interface HeaderBannerProps {
  route: string
}

type banner = {
  [key: string]: () => JSX.Element
}

export default function HeaderBanner({ route }: HeaderBannerProps) {
  const banner: banner = {
    "/": () => {
      return (
        <Box
          key={route}
          maxW={"container.md"}
          mx={"auto"}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.5", ease: "easeInOut" }}
          px={{ base: 4, lg: 0 }}
          minH={40}
          alignItems={"center"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Text as="h1" fontWeight={"bold"} fontSize={"2xl"}>
            G&S HOME SOLUTIONS
          </Text>
          <Text color={"#06EC46"} fontWeight={"bold"} fontSize={"2xl"}>
            <Typewriter
              words={["Os melhores produtos para os melhores profissionais"]}
              typeSpeed={50}
            />
          </Text>
        </Box>
      )
    },

    "/higienizacao": () => {
      return (
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          px={{ base: 4, lg: 0 }}
          gap={{ base: 4, md: 0 }}
          key={route}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.5", ease: "easeInOut" }}
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
        </Flex>
      )
    },
    "/limpoo": () => {
      return (
        <Flex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
          px={{ base: 4, lg: 0 }}
          gap={{ base: 4, md: 0 }}
          key={route}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.5", ease: "easeInOut" }}
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
        </Flex>
      )
    },
  }

  return (
    <Container
      maxW={"container.xl"}
      color={"white"}
      py={8}
      px={0}
      display={{ base: "none", md: "block" }}
    >
      <AnimatePresence mode="wait">
        {route in banner ? banner[route]() : banner["/"]()}
      </AnimatePresence>
    </Container>
  )
}
