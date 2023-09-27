import { EmailIcon, PhoneIcon, TriangleDownIcon } from "@chakra-ui/icons"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Image,
} from "@chakra-ui/react"

interface DrawerRootProps {
  isOpen: boolean
  onClose: () => void
  btnRef: React.RefObject<HTMLButtonElement>
}

export default function DrawerRoot({
  isOpen,
  onClose,
  btnRef,
}: DrawerRootProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color={"white"} />
        <DrawerHeader
          bgColor="#20274D"
          display={"flex"}
          justifyContent={"center"}
        >
          <Image src="/logo.png" alt="G&S Home Solutions" maxW={50} />
        </DrawerHeader>

        <DrawerBody>
          <Text as="h1" fontWeight={"bold"} fontSize={"md"} marginTop={5}>
            <TriangleDownIcon marginRight={2} fontSize={10} />
            Endereço
          </Text>
          <Text as="p" fontWeight={"light"} fontSize={"sm"}>
            Rua Teste da Silva, N 506
          </Text>
          <Text as="h1" fontWeight={"bold"} fontSize={"md"} marginTop={5}>
            <EmailIcon marginRight={2} fontSize={10} />
            Email
          </Text>
          <Text as="p" fontWeight={"light"} fontSize={"sm"}>
            gshomesolutions@hotmail.com
          </Text>
          <Text as="h1" fontWeight={"bold"} fontSize={"md"} marginTop={5}>
            <PhoneIcon marginRight={2} fontSize={10} />
            Whatsapp
          </Text>
          <Text as="p" fontWeight={"light"} fontSize={"sm"}>
            (99)99999-9999
          </Text>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Fechar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
