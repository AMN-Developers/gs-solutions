import { Box } from "@chakra-ui/react"

interface CardSectionTitleProps {
  title: string
}

export default function CardSectionTitle({ title }: CardSectionTitleProps) {
  return (
    <Box
      as="h1"
      display={"flex"}
      justifyContent={"center"}
      fontSize={"2xl"}
      textTransform={"uppercase"}
      p={2}
      fontWeight={"bold"}
    >
      {title}
    </Box>
  )
}
