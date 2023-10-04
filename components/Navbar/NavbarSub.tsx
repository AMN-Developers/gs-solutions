import { Box, Stack, Text, Flex, Icon, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react"
import Link from "next/link"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Navbar } from "."

interface NavbarSubProps {
  label: string
  href?: string
  subLabel?: string
  children?: Array<NavbarSubProps>
}

export default function NavbarSub({
  label,
  href = "#",
  subLabel,
  children,
}: NavbarSubProps) {
  return (
    <Popover trigger={"hover"} placement={"auto-end"}>
      <PopoverTrigger>
        <Box
          as={Link}
          href={href}
          role={"group"}
          display={"block"}
          p={2}
          rounded={"md"}
          _hover={{ bg: "#20274D" }}
        >
          <Stack direction={"row"} align={"center"}>
            <Box>
              <Text
                transition={"all .3s ease"}
                _groupHover={{ color: "white" }}
                fontWeight={500}
              >
                {label}
              </Text>
              <Text fontSize={"sm"}>{subLabel}</Text>
            </Box>
            <Flex
              transition={"all .3s ease"}
              transform={"translateX(-10px)"}
              opacity={0}
              _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
              justify={"flex-end"}
              align={"center"}
              flex={1}
            >
              <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Box>
      </PopoverTrigger>
      {children && (
        <PopoverContent
          border={0}
          boxShadow={"xl"}
          bg="white"
          p={4}
          rounded={"xl"}
          minW={"sm"}
        >
          <Stack>
            {children.map((child) => (
              <Navbar.Sub key={child.label} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  )
}
