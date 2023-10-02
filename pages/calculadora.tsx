import { Box, Container, Text } from '@chakra-ui/react'
import MotionLayout from '@/components/MotionLayout'

type Proportion = {
  Produto: string;
  Agua: string;
}

const oneFor400: Proportion[] = [
  {
    Produto: '2,5ml',
    Agua: '1L'
  },
  {
    Produto: '12,5ml',
    Agua: '5L',
  },
  {
    Produto: '25ml',
    Agua: '10L',
  },
  {
    Produto: '37,5ml',
    Agua: '15L',
  },
  {
    Produto: '50ml',
    Agua: '20L',
  },
  {
    Produto: '62,5ml',
    Agua: '25L',
  },
  {
    Produto: '75ml',
    Agua: '30L',
  },
  {
    Produto: '85,5ml',
    Agua: '35L',
  },
  {
    Produto: '100ml',
    Agua: '40L',
  },
  {
    Produto: '112,5ml',
    Agua: '45L',
  },
  {
    Produto: '125ml',
    Agua: '50L',
  },
]

export default function Calculadora() {
  return (
    <MotionLayout title='Calculadora de Diluição'>
      <Box >

      </Box>
      <Container
        as='section'
        maxW={"container.xl"}
        py={4}
      >
        <Text as="h1" fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} mb={4}>Calculadora de diluição da G&S Home Solutions</Text>
        <Text as="p">Ao utilizar produtos de limpeza, ou qualquer outro produto químico, é importante saber as instruções de uso e principalmente de diluição de cada produto. Ao fazer a diluição de forma correta, você obterá o resultado esperado, conforme a qualidade do produto, e economizará, pois, se você diluir o produto em bastante água, ele não terá o efeito esperado.</Text>
      </Container>
    </MotionLayout >
  )
}