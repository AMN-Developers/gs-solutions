import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  href: string;
  route: string;
  label: string;
};

function NavItem({ href, route, label }: Props) {
  return (
    <Box
      as={Link}
      p={2}
      href={href ?? "#"}
      fontSize={"sm"}
      fontWeight={href === route ? "semibold" : "normal"}
      _hover={{
        fontWeight: "semibold",
      }}
      color="black"
      __css={{
        textTransform: "uppercase",
      }}
    >
      {label}
    </Box>
  );
}

export default NavItem;
