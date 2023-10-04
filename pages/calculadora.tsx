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
} from '@chakra-ui/react'
import MotionLayout from '@/components/MotionLayout'
import { useState } from 'react'

export default function Calculadora() {
  const [proportion, setProportion] = useState<number>(0)
  const isProportionInvalid = proportion <= 0
  const [water, setWater] = useState<string>('');
  const isWaterInvalid = water.length <= 0
  const [measuaramentUnit, setMeasuaramentUnit] = useState<string>('');
  const isMeasuaramentUnitInvalid = measuaramentUnit.length <= 0
  const [result, setResult] = useState<number>(0)
  const isButtonDisabled = isProportionInvalid || isWaterInvalid || isMeasuaramentUnitInvalid



  const proportionCalc = (proportion: number, water: string, measuramentUnit: string) => {
    if (!proportion || !water || measuaramentUnit.length < 0) return 0

    if (measuramentUnit === 'l') {
      const waterFloat = parseFloat(water.replace(',', '.'))
      const productQuantity = 1000 / proportion
      return waterFloat * productQuantity
    } else {
      const waterFloat = parseFloat(water.replace(',', '.'))
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
      title: '1 x 400',
      value: 400
    },
    {
      title: '1 x 200',
      value: 200
    },
    {
      title: '1 x 100',
      value: 100
    },
    {
      title: '1 x 50',
      value: 50
    },
    {
      title: '1 x 40',
      value: 40
    },
    {
      title: '1 x 20',
      value: 20
    },
    {
      title: '1 x 10',
      value: 10
    },
    {
      title: '1 x 5',
      value: 5
    },
  ]

  return (
    <MotionLayout title='Calculadora de Diluição'>
      <Container
        as='section'
        maxW={"container.xl"}
        py={4}
      >
        <Text as="h1" fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} mb={4}>Calculadora de diluição da G&S Home Solutions</Text>
        <Text as="p" mb={4}>Ao utilizar produtos de limpeza, ou qualquer outro produto químico, é importante saber as instruções de uso e principalmente de diluição de cada produto. Ao fazer a diluição de forma correta, você obterá o resultado esperado, conforme a qualidade do produto, e economizará, pois, se você diluir o produto em bastante água, ele não terá o efeito esperado.</Text>
        <Flex gap={4} flexDirection={{ base: 'column', md: 'row' }}>
          <Box as='form' onSubmit={handleCalc} w={{ base: '100%', md: '50%' }}>
            <FormControl isInvalid={isProportionInvalid}>
              <FormLabel
                htmlFor='proportion'
                fontSize={'lg'}
                fontWeight={'bold'}
                mb={2}
              >
                Selecione a proporção:
              </FormLabel>
              <Select
                id='proportion'
                placeholder='Selecionar...'
                mb={isProportionInvalid ? 0 : 4}
                required
                onChange={(event) => setProportion(Number(event.target.value))}
              >
                {proportions.map((item, index) => (
                  <option key={index} value={item.value}>{item.title}</option>
                ))}
              </Select>
              {isProportionInvalid && (
                <FormErrorMessage mb={4}>
                  Selecione uma proporção
                </FormErrorMessage>
              )}
            </FormControl>
            <Box display={'flex'} gap={4}>
              <FormControl isInvalid={isWaterInvalid}>
                <Text
                  as='label'
                  htmlFor='water'
                  fontSize={'lg'}
                  fontWeight={'bold'}
                  mb={2}
                >
                  Quantidade de água:
                </Text>
                <Input
                  id='water'
                  placeholder='Digite a quantidade de água'
                  mb={isWaterInvalid ? 0 : 4}
                  onChange={(event) => setWater(event.target.value)}
                  value={water}
                />
                {isWaterInvalid && (
                  <FormErrorMessage mb={4}>
                    Digite a quantidade de água
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isMeasuaramentUnitInvalid} w={'25%'}>
                <Text
                  as='label'
                  htmlFor='water'
                  fontSize={'lg'}
                  fontWeight={'bold'}
                  mb={2}
                >
                  UNID:
                </Text>
                <Select
                  placeholder='Selecione...'
                  onChange={(event) => setMeasuaramentUnit(event.target.value)}
                >
                  <option value='ml'>mL</option>
                  <option value='l'>L</option>
                </Select>
                {isMeasuaramentUnitInvalid && (
                  <FormErrorMessage mb={4}>
                    Selecione a unidade de medida
                  </FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Button w={'full'} colorScheme='whatsapp' isDisabled={isButtonDisabled} type='submit' mb={result > 0 ? 4 : 0}>
              Calcular diluição
            </Button>
            {result > 0 && (
              <>
                <Text
                  as='label'
                  fontSize={'lg'}
                  fontWeight={'bold'}
                  mb={2}
                  id="result"
                  display={'block'}
                >
                  Resultado:
                </Text>
                <Input
                  id='result'
                  mb={4}
                  value={`${result.toFixed(2)} mL de produto.`}
                  readOnly
                  fontWeight={'bold'}
                />
              </>
            )
            }
          </Box>
          <Box w={{ base: '100%', md: '50%' }}>
            <Text as="p">
              Para saber a quantidade correta de produto à ser utilizado na limpeza, insira nos campos da Calculadora a recomendação de diluição do produto (que, geralmente, está descrita na embalagem de cada produto) e a quantidade de água que você vai utilizar (a capacidade do seu balde). Após inserir estes dados, o resultado irá aparecer logo abaixo.
            </Text>
          </Box>
        </Flex>
      </Container>
    </MotionLayout >
  )
}