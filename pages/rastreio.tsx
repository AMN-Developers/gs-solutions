import { FormEvent, useState } from "react"
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Icon,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react"
import { useMutation } from 'react-query'
import MotionLayout from "@/components/MotionLayout"
import { Carousel } from "@/components/Carousel/"
import { CAR_ITEMS } from "@/components/Carousel/CAR_ITEMS"
import { Carousel as CarouselReact } from "@trendyol-js/react-carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { baseApi } from '@/libs/api'
import { TrackingData } from './api/rastreio'

interface RastreioProps {
  cnpj: string;
  nro_nf: string;
}

export default function Rastreio() {
  const [cnpj, setCnpj] = useState('');
  const regex = /^\d{11}$|^\d{14}$/;
  const isErrorCnpj = !regex.test(cnpj)
  console.log(isErrorCnpj)
  const [nf, setNf] = useState('');
  const isErrorNf = nf.length === 0;
  const [tracking, setTracking] = useState<TrackingData>();

  const stepObjects = [
    {
      title: tracking?.stepperData?.[0]?.ocorrencia ?? "Pedido recebido pela transportadora.",
      description: tracking?.stepperData?.[0]?.descricao ?? "Seu pedido foi recebido pela transportadora e está sendo preparado para envio.",
    },
    {
      title: tracking?.stepperData?.[1]?.ocorrencia ?? "Pedido em trânsito",
      description: tracking?.stepperData?.[1]?.descricao ?? "Seu pedido está em trânsito.",
    },
    {
      title: tracking?.stepperData?.[2]?.ocorrencia ?? "Pedido entregue",
      description: tracking?.stepperData?.[2]?.descricao ?? "Seu pedido foi entregue com sucesso.",
    }
  ]

  const { activeStep, setActiveStep } = useSteps({
    count: stepObjects.length,
  })

  const getTracking = async ({ cnpj, nro_nf }: RastreioProps): Promise<TrackingData> => {
    const { data } = await baseApi.post('/rastreio', { cnpj, nro_nf })
    return data
  }

  const rastrearPedido = useMutation(getTracking, {
    onSuccess: (data) => {
      console.log(data)
      setTracking(data)
      setActiveStep(data.activeStep ?? data.activeStep as unknown as number)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    rastrearPedido.mutate({ cnpj, nro_nf: nf })
  }

  return (
    <MotionLayout title="Rastreio">
      <Container maxW={"container.xl"} as="section">
        <Text
          as="h1"
          maxW={"container.xl"}
          display={"flex"}
          justifyContent={"center"}
          fontSize={"xl"}
          textTransform={"uppercase"}
          py={8}
          fontWeight={"bold"}
        >
          A G&S Home Solutions está em busca de praticidade no acompanhamento de
          seus pedidos.
        </Text>
        <Container
          maxW="container.xl"
          p={8}
          bg={
            "radial-gradient(circle, rgba(55,88,147,1) 0%, rgba(24,24,59,1) 93%, rgba(24,26,61,1) 100%);"
          }
          rounded={"md"}
        >
          <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
            <Box width={{ base: "100%", md: "40%" }} as='form' textColor={'white'} onSubmit={(e) => handleSubmit(e)} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
              <Flex flexDirection={'column'}>
                <FormControl mb={4} isInvalid={isErrorCnpj} isRequired>
                  <FormLabel>
                    CNPJ ou CPF
                  </FormLabel>
                  <Input colorScheme="gray" variant={'filled'} color={'black'} _focus={{
                    bgColor: 'white'
                  }} type="text" placeholder='Digite seu CNPJ...' value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                  {!isErrorCnpj ? (
                    <FormHelperText textColor={'gray.400'}>
                      Digite o CNPJ da sua empresa ou um CPF sem pontos ou traços.
                    </FormHelperText>
                  ) : (
                    <FormHelperText textColor={'red.400'}>
                      Digite um CNPJ ou um CPF válido.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl isInvalid={isErrorNf} isRequired>
                  <FormLabel>
                    Número da NF
                  </FormLabel>
                  <Input colorScheme="gray" variant={'filled'} _focus={{
                    bgColor: 'white'
                  }} color='black' type="text" placeholder='Digite o número da NF...' value={nf} onChange={(e) => setNf(e.target.value)} />
                  {!isErrorNf ? (
                    <FormHelperText textColor={'gray.400'}>
                      Digite o número da nota fiscal sem pontos ou traços.
                    </FormHelperText>
                  ) : (
                    <FormHelperText textColor={'red.400'}>
                      Digite um número de nota fiscal.
                    </FormHelperText>
                  )}
                </FormControl>
              </Flex>
              <Button
                mt={4}
                textTransform={"uppercase"}
                type='submit'
                isLoading={rastrearPedido.isLoading}
                isDisabled={isErrorCnpj || isErrorNf}
                w={'100%'}
              >
                Rastrear pedido
              </Button>
              {tracking?.success === false ? (
                <Text as="p" color={"red.500"} mt={4}>
                  {tracking.message}, verifique os dados e tente novamente.
                </Text>
              ) : (null)}
            </Box>
            <Flex
              width={{ base: "100%", md: "60%" }}
              flexDirection={"column"}
              justify={"space-between"}
            >
              <Box>
                <Text
                  as="h2"
                  fontSize={"lg"}
                  color={"white"}
                  fontWeight={"bold"}
                  mb={2}
                >
                  Duvidas de como rastrear seu pedido?
                </Text>
                <Text as="p" color={"white"}>
                  Com o número da nota fiscal em mãos, escolha a opção de
                  pesquisa pelo DESTINATÁRIO insira seu CPF/CNPJ e clique em
                  RASTREAR.
                </Text>
                {tracking && tracking.success === true ? (
                  <Stepper index={activeStep} colorScheme='green' orientation='vertical' mt={4} height={'250px'}>
                    {stepObjects.map((step, index) => (
                      <Step key={index}>
                        <StepIndicator color="white">
                          <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                          />
                        </StepIndicator>

                        <Box>
                          <Text
                            color={"white"}
                            as={StepTitle}
                            fontWeight={"bold"}
                          >
                            {step.title}
                          </Text>
                          <Text
                            color={"gray.400"}
                            as={StepDescription}
                          >
                            {step.description}
                          </Text>
                        </Box>

                        <StepSeparator />
                      </Step>
                    ))}
                  </Stepper>
                ) : (null)}
              </Box>
            </Flex>
          </Flex>
        </Container>
        <Text
          display={"flex"}
          justifyContent={"center"}
          fontSize={"lg"}
          py={8}
          fontWeight={"bold"}
        >
          As Transportadoras abaixo não possuem nenhum sistema de rastreio e
          podem ser contatadas pelos telefones abaixo:
        </Text>
      </Container>

      <Carousel.Root>
        <Box
          as={CarouselReact}
          show={2}
          slide={1}
          swiping={true}
          leftArrow={<Icon as={ChevronLeftIcon} w={10} h={30} />}
          rightArrow={<Icon as={ChevronRightIcon} w={10} h={30} />}
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
        >
          {CAR_ITEMS.map((carouselItem) => (
            <Carousel.Item
              key={carouselItem.alt}
              image={carouselItem.image}
              label={carouselItem.label}
              alt={carouselItem.alt}
            />
          ))}
        </Box>
      </Carousel.Root>
      <Container
        maxW={"container.xl"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        py={4}
        textAlign={"center"}
        gap={2}
      >
        <Text as="p" fontWeight={"bold"}>
          Siga as Recomendações:
        </Text>
        <Text>
          Caso você siga todos os passos anteriores e não tenha obtido sucesso
          entre em contato conosco, teremos o prazer em auxilia-lo:
          (11)96622-6224
        </Text>
      </Container>
    </MotionLayout>
  )
}
