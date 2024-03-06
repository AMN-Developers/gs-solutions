import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface MobileNavItemProps {
  label: string;
  href?: string;
  toggleMainDrawer: () => void;
}

export default function MobileItems({
  label,
  href,
  toggleMainDrawer,
}: MobileNavItemProps) {
  return (
    <Box
      py={2}
      as={Link}
      href={href}
      justifyContent="space-between"
      onClick={toggleMainDrawer}
      alignItems="center"
      display={"flex"}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text fontWeight={600} color={"gray.600"}>
        {label}
      </Text>
    </Box>
  );
}
