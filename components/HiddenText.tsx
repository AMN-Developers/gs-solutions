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
        bg={
          "radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"
        }
        color={"white"}
        fontSize={"sm"}
        _hover={{
          bg: "radial-gradient(circle, rgba(154,42,42,0.9) 0%, rgba(71,1,1,0.9) 93%, rgba(71,1,1,0.9) 100%);",
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
          bgColor={
            "radial-gradient(circle, rgba(154,42,42,1) 0%, rgba(71,1,1,1) 93%, rgba(71,1,1,1) 100%);"
          }
        >
          {text}
        </Box>
      </Collapse>
    </Box>
  )
}
