import Image from "next/image";
import {
  Container,
  Box,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import MotionLayout from "@/components/MotionLayout";

export default function Auto() {
  return (
    <MotionLayout title="Auto">
      <Container maxW={"container.xl"} p={0}>
        <Box h={"2xl"} position="relative">
          <Image src="/car.png" alt="Auto" fill />
          <Box
            position="absolute"
            left={`480px`}
            top={`${460}px`}
            cursor="pointer"
            display="inline-block"
          >
            <Popover trigger="hover">
              <PopoverTrigger>
                <Box
                  as={motion.div}
                  whileHover={{ scale: 1.2 }}
                  bg="whatsapp.600"
                  borderRadius="100%"
                  w="20px"
                  h="20px"
                  display="inline-block"
                />
              </PopoverTrigger>
              <PopoverContent borderColor={"whatsapp.600"} bgColor={"white"}>
                <PopoverArrow />
                <PopoverHeader borderColor={"whatsapp.600"}>
                  <Text fontWeight={"bold"}>CARPETES</Text>
                </PopoverHeader>
                <PopoverBody>
                  <Text fontWeight={"bold"}>MULTI-C - TIRA-MANCHAS</Text>
                  <Text>Borrifar produto + Extratora</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
      </Container>
    </MotionLayout>
  );
}
