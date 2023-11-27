import { useState, useEffect } from "react"

import { useSearchParams } from "next/navigation"
import {
  Box,
  Container,
  Text,
  Select,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Icon,
} from "@chakra-ui/react"
import { DownloadIcon } from "@chakra-ui/icons"
import { IoShareOutline } from "react-icons/io5"
import { AiOutlineArrowDown } from "react-icons/ai"
import MotionLayout from "@/components/MotionLayout"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
    transitioned: BeforeInstallPromptEvent
  }
}

export default function Calculadora() {
  const searchParams = useSearchParams()
  const proportionParam = searchParams.get("proportion")

  const [proportion, setProportion] = useState<number>(
    Number(proportionParam) || 0
  )
  const isProportionInvalid = proportion <= 0

  const [water, setWater] = useState<string>("")
  const isWaterInvalid = water.length <= 0
  const [measuaramentUnit, setMeasuaramentUnit] = useState<string>("")
  const isMeasuaramentUnitInvalid = measuaramentUnit.length <= 0
  const [result, setResult] = useState<number>(0)
  const isButtonDisabled =
    isProportionInvalid || isWaterInvalid || isMeasuaramentUnitInvalid
  const [beforeInstallPrompt, setBeforeInstallPrompt] =
    useState<BeforeInstallPromptEvent>()
  const [supportsPWA, setSupportsPWA] = useState<boolean>(false)
  const [isInstalled, setIsInstalled] = useState<boolean>()
  const [showIphoneInstallMessage, setShowIphoneInstallMessage] =
    useState<boolean>(false)

  const proportionCalc = (
    proportion: number,
    water: string,
    measuramentUnit: string
  ) => {
    if (!proportion || !water || measuaramentUnit.length < 0) return 0
    const waterFloat = parseFloat(water.replace(",", "."))

    if (measuramentUnit === "l") {
      const productQuantity = 1000 / proportion
      return waterFloat * productQuantity
    } else {
      const productQuantity = 1 / proportion
      return waterFloat * productQuantity
    }
  }

  const handleCalc = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult(proportionCalc(proportion, water, measuaramentUnit))
  }

  const proportions = [
    {
      title: "1 : 400",
      value: 400,
    },
    {
      title: "1 : 200",
      value: 200,
    },
    {
      title: "1 : 100",
      value: 100,
    },
    {
      title: "1 : 50",
      value: 50,
    },
    {
      title: "1 : 40",
      value: 40,
    },
    {
      title: "1 : 30",
      value: 30,
    },
    {
      title: "1 : 20",
      value: 20,
    },
    {
      title: "1 : 10",
      value: 10,
    },
    {
      title: "1 : 5",
      value: 5,
    },
  ]

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault()
      setBeforeInstallPrompt(e)
      setSupportsPWA(true)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("transitioned", handleBeforeInstallPrompt)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAppInstalled = window.matchMedia(
        "(display-mode: standalone)"
      ).matches
      setIsInstalled(isAppInstalled)
    }

    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase()
      return /iphone|ipad|ipod/.test(userAgent)
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone
    // Verifica se deve exibir notificação popup de instalação:
    if (isIos() && !isInStandaloneMode()) {
      setShowIphoneInstallMessage(true)
    }
  }, [])

  const installApp = async () => {
    if (beforeInstallPrompt) {
      beforeInstallPrompt.prompt()
      const { outcome } = await beforeInstallPrompt.userChoice
      if (outcome === "accepted") {
        setIsInstalled(true)
      }
      setBeforeInstallPrompt(undefined)
    }
  }

  return (
    <MotionLayout title="Calculadora de Diluição">
      <Container
        as="section"
        maxW={"container.xl"}
        py={4}
        position={"relative"}
      >
        <Text
          as="h1"
          fontSize={"2xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          mb={4}
        >
          Calculadora de diluição da G&S Home Solutions
        </Text>
        <Text as="p" mb={4}>
          Ao utilizar produtos de limpeza, ou qualquer outro produto químico, é
          importante saber as instruções de uso e principalmente de diluição de
          cada produto. Ao fazer a diluição de forma correta, você obterá o
          resultado esperado, conforme a qualidade do produto, e economizará,
          pois, se você diluir o produto em bastante água, ele não terá o efeito
          esperado.
        </Text>
        <Flex gap={4} flexDirection={{ base: "column" }}>
          <Box
            as="form"
            onSubmit={handleCalc}
            m={"auto"}
            w={{ base: "100%", md: "50%" }}
          >
            <FormControl isInvalid={isProportionInvalid}>
              <FormLabel
                htmlFor="proportion"
                fontSize={"lg"}
                fontWeight={"bold"}
                mb={2}
              >
                Selecione a proporção:
              </FormLabel>
              <Select
                id="proportion"
                placeholder="Selecionar..."
                mb={isProportionInvalid ? 0 : 4}
                required
                onChange={(event) => setProportion(Number(event.target.value))}
                value={proportion}
              >
                {proportions.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.title}
                  </option>
                ))}
              </Select>
              {isProportionInvalid && (
                <FormErrorMessage mb={4} fontWeight={"bold"}>
                  Selecione uma proporção
                </FormErrorMessage>
              )}
            </FormControl>
            <Box display={"flex"} gap={4}>
              <FormControl isInvalid={isWaterInvalid}>
                {/* <Text
                  as="label"
                  htmlFor="water"
                  fontSize={"lg"}
                  fontWeight={"bold"}
                  mb={2}
                >
                  Quantidade de água:
                </Text> */}
                <Input
                  id="water"
                  placeholder="Digite a quantidade de água"
                  mb={isWaterInvalid ? 0 : 4}
                  onChange={(event) => setWater(event.target.value)}
                  value={water}
                />
                {isWaterInvalid && (
                  <FormErrorMessage mb={4} fontWeight={"bold"}>
                    Digite a quantidade de água
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isMeasuaramentUnitInvalid} w={"25%"}>
                {/* <Text
                  as="label"
                  htmlFor="water"
                  fontSize={"lg"}
                  fontWeight={"bold"}
                  mb={2}
                >
                  UNID:
                </Text> */}
                <Select
                  placeholder="Selecione..."
                  onChange={(event) => setMeasuaramentUnit(event.target.value)}
                >
                  <option value="ml">ml</option>
                  <option value="l">L</option>
                </Select>
                {isMeasuaramentUnitInvalid && (
                  <FormErrorMessage mb={4} fontWeight={"bold"}>
                    Selecione a unidade de medida
                  </FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Button
              w={"full"}
              colorScheme="whatsapp"
              isDisabled={isButtonDisabled}
              type="submit"
              mb={result > 0 ? 4 : 0}
            >
              Calcular diluição
            </Button>
            {result > 0 && (
              <>
                <Text
                  as="label"
                  fontSize={"lg"}
                  fontWeight={"bold"}
                  mb={2}
                  id="result"
                  display={"block"}
                >
                  Resultado:
                </Text>
                <Input
                  id="result"
                  mb={4}
                  value={`${result.toFixed(2)} ml de produto.`}
                  readOnly
                  fontWeight={"bold"}
                />
              </>
            )}
          </Box>

          <Box
            m={"auto"}
            w={{ base: "100%", md: "50%" }}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"flex-end"}
          >
            {!showIphoneInstallMessage ? (
              <Button
                colorScheme="messenger"
                onClick={installApp}
                isDisabled={!supportsPWA}
                flexFlow={"row"}
                display={isInstalled ? "none" : "flex"}
              >
                <DownloadIcon mr={2} />
                Instalar App
              </Button>
            ) : null}
          </Box>
        </Flex>
        {showIphoneInstallMessage ? (
          <Box
            position={"fixed"}
            bottom={0}
            left={0}
            right={0}
            bg={"#f9f9f9"}
            p={4}
            display={showIphoneInstallMessage ? "flex" : "none"}
            flexDirection={"column"}
            zIndex={100}
            mx={4}
            my={4}
            shadow={"sm"}
            borderRadius={"md"}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Text as={"p"} fontSize={"md"} fontWeight={"bold"}>
                Instale nossa calculadora:
              </Text>
              <Box>
                <Text display={"inline"}>
                  clicando abaixo em{" "}
                  <Icon as={IoShareOutline} size={24} color={"#51A0D5"} /> e
                  depois
                  <Text as="span" fontWeight={"bold"}>
                    {" "}
                    &quot;Adicionar a tela de Inicio&quot;
                  </Text>
                </Text>
              </Box>
            </Box>
            <Box
              w={"full"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <AiOutlineArrowDown size={24} />
            </Box>
          </Box>
        ) : null}
      </Container>
    </MotionLayout>
  )
}
