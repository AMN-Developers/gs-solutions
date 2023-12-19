import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import theme from "@/libs/theme";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Layout from "@/components/Layout";
import Head from "next/head";
import MapProvider from "@/context/mapContext";
import { APIProvider } from "@vis.gl/react-google-maps";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        <meta name="pwa-gs" content="pwa-gs" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="pwa-gs" />
        <meta name="description" content="pwa-gs" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#263869" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#263869" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics />
      <ChakraProvider theme={theme}>
        <Layout route={router.route}>
          <AnimatePresence mode="wait">
            <QueryClientProvider client={queryClient}>
              <APIProvider
                apiKey={
                  process.env
                    .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as unknown as string
                }
                libraries={["places"]}
              >
                <MapProvider>
                  <Component {...pageProps} key={router.route} />
                </MapProvider>
              </APIProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
}
