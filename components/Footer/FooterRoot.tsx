import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface FooterRootProps {
  children: ReactNode
}

export default function FooterRoot({ children }: FooterRootProps) {
  return (
    <Box
      as="footer"
      bg={
        "radial-gradient(circle, rgba(55,88,147,1) 0%, rgba(24,24,59,1) 93%, rgba(24,26,61,1) 100%);"
      }
    >
      {children}
    </Box>
  )
}
