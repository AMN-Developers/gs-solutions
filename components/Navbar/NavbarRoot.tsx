import { Container } from "@chakra-ui/react"
import { ReactNode } from "react"

interface NavbarRootProps {
  children: ReactNode
}

export default function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <Container
      as="nav"
      bgColor="white"
      borderRadius={{ base: "none", xl: "md" }}
      py={{ base: 2 }}
      px={{ base: 4 }}
      maxW={{ base: "100%", lg: "container.xl" }}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      {children}
    </Container>
  )
}
