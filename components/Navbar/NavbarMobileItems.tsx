import {
  Box,
  Stack,
  Text,
  Icon,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react"
import Link from "next/link"
import { ChevronDownIcon } from "@chakra-ui/icons"

import { NavItem } from "./NAV_ITEMS"
import { Navbar } from "."

interface MobileNavItemProps {
  label: string
  href?: string
  children?: Array<NavItem>
  onChangeRoute?: () => void
}

export default function NavbarMobileItems({
  label,
  href,
  children,
  onChangeRoute,
}: MobileNavItemProps) {
  const { isOpen, onToggle } = useDisclosure()
  const handleToggle = (e) => {
    return e.preventDefault(), onToggle()
  }
  return (
    <Stack spacing={4} w={"100%"}>
      <Box
        onClick={children ? handleToggle : onChangeRoute}
        py={2}
        as={Link}
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        display={"flex"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"gray.600"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={"-3"}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Navbar.MobileItems
                key={child.label}
                {...child}
                onChangeRoute={onToggle}
              />
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
