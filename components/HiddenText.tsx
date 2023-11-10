import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react"

interface HiddenText {
  text: string
  title: string
}

export default function HiddenText({ text, title }: HiddenText) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Button
        onClick={onToggle}
        textTransform={"uppercase"}
        minW={"full"}
        bgColor={"#A22C37"}
        color={"white"}
        fontSize={"sm"}
      >
        {title}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          mt={4}
          p={4}
          bg="whiteAlpha.300"
          rounded="md"
          shadow="md"
          color={"white"}
          bgColor={"#A22C37"}
        >
          {text}
        </Box>
      </Collapse>
    </Box>
  )
}
