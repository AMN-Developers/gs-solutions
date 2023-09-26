import { Container } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'

export default function HeaderBanner() {
  return (
    <Container
      maxW={'container.xl'}
      color={'white'}
      centerContent
      py={8}
    >
      <Typewriter
        options={{
          strings: [
            'G&S Home Solutions',
            'É a primeira empresa do Brasil com uma linha completa de higienização e impermeabilização de estofados!'
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </Container>
  )
}