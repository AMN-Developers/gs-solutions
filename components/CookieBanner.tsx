import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Text,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "@/libs/storageHelper"
import Link from "next/link"

export default function CookieBanner() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    const isAccepted = getLocalStorage("cookie_consent", null)

    if (isAccepted === null) {
      onOpen()
    }
  }, [onOpen])

  useEffect(() => {
    const newValue = isAccepted ? "granted" : "denied"

    if (typeof window.gtag !== "undefined") {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      })
    }
  }, [isAccepted])

  const handleAccept = () => {
    setLocalStorage("cookie_consent", true)
    setIsAccepted(true)
    onClose()
  }

  const handleReject = () => {
    setLocalStorage("cookie_consent", false)
    setIsAccepted(false)
    onClose()
  }

  if (isAccepted) {
    return null
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        colorScheme="orange"
      >
        <DrawerContent>
          <DrawerHeader>Aviso</DrawerHeader>

          <DrawerBody>
            <Text>
              Nós e os terceiros selecionados coletamos informações pessoais e
              usamos cookies ou tecnologias similares para finalidades técnicas
              e, com seu consentimento, para as finalidades de medição. Negar
              consentimento pode tornar as funcionalidades relacionadas
              indisponíveis.
            </Text>
            <Text>
              Você pode livremente dar, negar ou retirar seu consentimento a
              qualquer momento.
            </Text>
            <Text>
              Use o botão “Aceitar” para consentir. Use o botão “Recusar” para
              continuar sem aceitar.
            </Text>
            <Text>
              Saiba mais em:{" "}
              <ChakraLink as={Link} href={"/privacy"} color={"#44DA4A"}>
                política de privacidade
              </ChakraLink>
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={handleReject}>
              Recusar
            </Button>
            <Button colorScheme="green" onClick={handleAccept}>
              Aceitar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
