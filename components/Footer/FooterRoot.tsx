import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface FooterRootProps {
  children: ReactNode
}

export default function FooterRoot({ children }: FooterRootProps) {
  return (
    <Box as="footer" bgColor="#20274D">
      {children}
    </Box>
  )
}
