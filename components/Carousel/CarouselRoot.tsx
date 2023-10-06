import { Container } from "@chakra-ui/react"
import { ReactNode } from "react"

interface CarouselRootProps {
  children: ReactNode
}

export default function CarouselRoot({ children }: CarouselRootProps) {
  return (
    <Container maxW={"container.xl"} my={4}>
      {children}
    </Container>
  )
}
