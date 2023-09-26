import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '@/libs/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  )
}