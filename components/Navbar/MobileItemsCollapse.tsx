import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Text,
  Icon,
  Collapse,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

interface MobileItemsCollapseProps {
  label: string;
  children: React.ReactNode;
}

export default function MobileItemsCollapse({
  label,
  children,
}: MobileItemsCollapseProps) {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: false,
  });

  return (
    <Stack spacing={4} w={"100%"}>
      <Box
        onClick={onToggle}
        py={2}
        as={Button}
        variant={"unstyled"}
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

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0!important" }}
        unmountOnExit
      >
        <Stack
          mt={"-3"}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align={"start"}
        >
          {children}
        </Stack>
      </Collapse>
    </Stack>
  );
}
