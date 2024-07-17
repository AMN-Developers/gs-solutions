import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface HiddenText {
  text: string;
  title: string;
  color: string;
  hover: string;
  buttonTextColor?: string;
}

export default function HiddenText({ text, title, color, hover, buttonTextColor }: HiddenText) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Button
        onClick={onToggle}
        textTransform={"uppercase"}
        minW={"full"}
        bg={color}
        color={buttonTextColor}
        fontSize={"sm"}
        _hover={{
          bg: hover,
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        {title} {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p={4} rounded="md" color={"black"} boxShadow={"xl"} fontWeight={"semibold"}>
          {text}
        </Box>
      </Collapse>
    </Box>
  );
}
