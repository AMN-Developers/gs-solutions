import { Box, Container, Text } from "@chakra-ui/react"
import { Typewriter } from "react-simple-typewriter"

export default function HeaderBanner() {
  return (
    <Container maxW={"container.xl"} color={"white"} py={8} px={0}>
      <Box
        as="div"
        background={"whiteAlpha.100"}
        padding={4}
        rounded={"md"}
        maxW={"full"}
        margin={{ base: 2, md: 0 }}
      >
        <Text as="h1" fontWeight={"bold"} fontSize={"2xl"}>
          G&S HOME SOLUTIONS{" "}
          
            <Text as="span" color={"#06EC46"}>
              {" "}
              <Typewriter
                words={[
                  "é a primeira empresa do Brasil com uma linha completa de higienização e impermeabilização de estofados",
                ]}
                cursor
                cursorStyle="_"
                typeSpeed={10}
              />
            </Text>
          
        </Text>
      </Box>
    </Container>
  )
}
