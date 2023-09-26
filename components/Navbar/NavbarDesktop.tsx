import { Flex, Stack } from "@chakra-ui/react"

interface NavbarDesktopProps {
  children: React.ReactNode
}

export default function NavbarDesktop({ children }: NavbarDesktopProps) {
  return (
    <Flex display={{ base: "none", lg: "flex" }}>
      <Stack
        direction={"row"}
        spacing={4}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {children}
      </Stack>
    </Flex>
  )
}
