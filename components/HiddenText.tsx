import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react"

interface HiddenText {
  text: string
  title: string
  color: string
  hover: string
}

export default function HiddenText({ text, title, color, hover }: HiddenText) {
  const { isOpen, onToggle } = useDisclosure()

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
          mt={4}
          p={4}
          bg="gray.200"
          rounded="md"
          shadow="md"
          color={"black"}
          bgColor={color}
        >
          {text}
        </Box>
      </Collapse>
    </Box>
  )
}
