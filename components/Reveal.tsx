import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"

interface RevealProps {
  children: React.ReactNode
  delay: number
}

export default function Reveal({ children, delay }: RevealProps) {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeInOut", delay: delay },
      }}
      viewport={{ once: true }}
      w={"full"}
    >
      {children}
    </Box>
  )
}
