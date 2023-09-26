import { Container, Text } from "@chakra-ui/react"
import { Typewriter } from "react-simple-typewriter"

export default function HeaderBanner() {
  return (
    <Container maxW={"container.sm"} color={"white"} centerContent py={8}>
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
            onLoopDone={() => console.log(`Done after 5 loops!`)}
          />
        </Text>
      </Text>
    </Container>
  )
}
