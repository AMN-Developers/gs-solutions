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
      position={"relative"}
      _hover={{
        _before: {
          transform: "scaleX(1)",
        },
      }}
      _before={{
        content: '""',
        position: "absolute",
        display: "block",
        width: "100%",
        height: "2px",
        bottom: 0,
        left: 0,
        bg: "black",
        transform: "scaleX(0)",
        transition: "transform 0.3s ease",
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
