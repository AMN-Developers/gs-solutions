import MotionLayout from "@/components/MotionLayout"
import ProdItem from "@/components/ProdItem"
import { Box, Container, Flex, Text } from "@chakra-ui/react"

export default function Lotus() {
  return (
    <MotionLayout title="Lotus">
      <Container maxW={"container.xl"}>This is my lotus content</Container>
    </MotionLayout>
  )
}
