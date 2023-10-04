import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface FooterRootProps {
  children: ReactNode
}

export default function FooterRoot({ children }: FooterRootProps) {
  return (
    <Box
      as="footer"
      bgImage={"/home-banner.svg"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      {children}
    </Box>
  )
}
