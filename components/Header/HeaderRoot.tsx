import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface HeaderRootProps {
  children: ReactNode
}

export default function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <Box as="header" position={"relative"} minH={{ base: "lg", md: "sm" }}>
      {children}
    </Box>
  )
}
