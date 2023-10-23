import { Container, SimpleGrid } from "@chakra-ui/react"
import { ReactNode } from "react"

interface CatalogRootProps {
  children: ReactNode
}

export default function CatalogRoot({ children }: CatalogRootProps) {
  return (
    <SimpleGrid minChildWidth="220px" spacing="40px">
      {children}
    </SimpleGrid>
  )
}
