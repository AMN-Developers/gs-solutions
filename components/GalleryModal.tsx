import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import Image from "next/image"

interface GalleryModalProps {
  alt: string
  src: string
}

export default function GalleryModal({ alt, src }: GalleryModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Box
        onClick={onOpen}
        bgColor={"gray.200"}
        boxSize={"fit-content"}
        p={4}
        rounded={"md"}
      >
        <Image width={64} height={64} alt={alt} src={src} />
      </Box>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="scale">
        <ModalOverlay />
        <ModalContent>
          <Box mx={"auto"} p={4}>
            <Image alt={alt} src={src} width={283} height={368} />
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  )
}
