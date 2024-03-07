import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Stack,
  Box,
  PlacementWithLogical,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  href?: string;
  children: React.ReactNode;
  placement?: PlacementWithLogical | undefined;
};

function NavPopover({ href, label, children, placement }: Props) {
  return (
    <Popover trigger={"hover"} placement={placement}>
      <PopoverTrigger>
        <Box
          as={Link}
          p={2}
          href={href ?? "#"}
          fontSize={"sm"}
          color="black"
          __css={{
            textTransform: "uppercase",
          }}
          _hover={{
            fontWeight: "semibold",
          }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {label}
          <ChevronDownIcon marginLeft={2} />
        </Box>
      </PopoverTrigger>
      <PopoverContent
        border={0}
        boxShadow={"xl"}
        bg="white"
        p={4}
        rounded={"xl"}
        minW={"sm"}
      >
        <Stack>{children}</Stack>
      </PopoverContent>
    </Popover>
  );
}

export default NavPopover;
