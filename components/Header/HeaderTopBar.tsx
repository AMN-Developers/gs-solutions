import { Box, Container } from '@chakra-ui/react'
import { Image, Link } from '@chakra-ui/react'

export default function HeaderTopBar() {
  return (
    <Container maxW='container.xl' py={4} display='flex' justifyContent='space-between' alignItems='center'>
      <Image src='/logo.png' alt='G&S Home Solutions' maxW={100} />
      {/* Glowing moving border around that button */}
      <Link
        href='#'
        px={6}
        py={1}
        borderRadius={12}
        bgImage={`linear-gradient(90deg, #06ec46 0%, #8CDB95 40%, #093A0F 100%)`}
        animation={`anime 1s linear infinite`}
        __css={{
          '@keyframes anime': {
            '0%': {
              backgroundPosition: '100%'
            },
            '100%': {
              backgroundPosition: '300%'
            }
          },
          '--webkit-animation': 'anime 1s linear infinite',
        }}
      >
        <Box as='span' textColor='white'>FAÇA UMA COTAÇÃO</Box>
      </Link>
    </Container >
  )
}