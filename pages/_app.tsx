import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/libs/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} key={router.pathname} />
    </ChakraProvider>
  )
}