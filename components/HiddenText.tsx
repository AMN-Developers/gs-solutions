import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react";

interface HiddenText {
  text: string;
  title: string;
  color: string;
  hover: string;
}

export default function HiddenText({ text, title, color, hover }: HiddenText) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Button
        onClick={onToggle}
        textTransform={"uppercase"}
        minW={"full"}
        bg={color}
        color={"white"}
        fontSize={"sm"}
        _hover={{
          bg: hover,
        }}
      >
        {title}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p={4}
          rounded="md"
          color={"black"}
          boxShadow={"xl"}
          fontWeight={"semibold"}
        >
          {text}
        </Box>
      </Collapse>
    </Box>
  );
}
