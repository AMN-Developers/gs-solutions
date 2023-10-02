import { Flex, Container } from "@chakra-ui/react"
import { ReactNode } from "react"

interface CardRootProps {
  children: ReactNode
}

export default function CardRoot({ children }: CardRootProps) {
  return (
    <Container as="section" maxW={"container.xl"} py={4} display={'flex'} flexDirection={'column'}>
      {children}
    </Container>
  )
}
