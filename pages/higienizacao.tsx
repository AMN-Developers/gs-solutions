import { useEffect, useRef, useState } from "react"
import { Box, Button, Container, Divider, Text } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"

import { Catalog } from "@/components/Catalog"
import MotionLayout from "@/components/MotionLayout"
import Product from "@/components/Product"
import {
  CATALOG_ITEMS_HIGI,
  CATALOG_ITEMS_IMPER,
  CATALOG_ITEMS_VEG,
} from "@/components/Catalog/CATALOG_ITEMS"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Reveal from "@/components/Reveal"
import { useMemo } from "react"

export default function Higienização() {
  const searchParams = useSearchParams()
  const imper = searchParams.get("imper")
  const higi = searchParams.get("higi")
  const veg = searchParams.get("veg")
  const productRef = useRef<HTMLDivElement>(null)
  const lastProductRef = useRef<HTMLDivElement>(null)
  const imperShuffle = useMemo(() => {
    const productCopy = [...CATALOG_ITEMS_IMPER]
    productCopy.sort(() => Math.random() - 0.5)
    return productCopy.slice(0, 4)
  }, [CATALOG_ITEMS_IMPER])

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <MotionLayout title="Higienização">
      <Container maxW={"container.xl"}>
        <Text
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
          py={4}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          fontSize={"2xl"}
          
        >
          Linha de Higienização
        </Text>
        <Box
          w="full"
          backgroundColor={"#f8f8f8"}
          p={8}
          my={4}
          mb={8}
          rounded={"md"}
          id="veg"
        >
          <Text
            as="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={"xl"}
            py={4}
          >
            Linha VEGANA
          </Text>
          <AnimatePresence mode="wait">
            <Product
              type={"veg"}
              param={veg}
              productRef={productRef}
              itemList={CATALOG_ITEMS_VEG}
            />
          </AnimatePresence>
          <Catalog.Root>
            {CATALOG_ITEMS_VEG.map((product) => (
              <Catalog.Item
                chamada={product.chamada}
                key={product.id}
                thumbnail={product.thumbnail}
                title={product.title}
                slogan={product.slogan}
                hover_color={product.hover_color}
                lastProductRef={
                  product.id === Number(veg) ? lastProductRef : null
                }
                id={product.id}
                type={"veg"}
                href={`?veg=${product.id}#veg-${product.id}`}
              />
            ))}
          </Catalog.Root>
        </Box>
        <Box w="full" backgroundColor={"#f8f8f8"} p={8} rounded={"md"} mb={4}>
          <Text
            as="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={"xl"}
            pb={4}
          >
            Produtos
          </Text>
          <AnimatePresence mode="wait">
            <Product
              type={"higi"}
              param={higi}
              productRef={productRef}
              itemList={CATALOG_ITEMS_HIGI}
            />
          </AnimatePresence>
          <Catalog.Root>
            {CATALOG_ITEMS_HIGI.map((product) => (
              <Catalog.Item
                chamada={product.chamada}
                key={product.id}
                thumbnail={product.thumbnail}
                title={product.title}
                slogan={product.slogan}
                hover_color={product.hover_color}
                lastProductRef={
                  product.id === Number(higi) ? lastProductRef : null
                }
                id={product.id}
                type={"higi"}
                href={`?higi=${product.id}#higi-${product.id}`}
              />
            ))}
          </Catalog.Root>
        </Box>

        <Box w="full" backgroundColor={"#f8f8f8"} p={8} rounded={"md"} mt={16}>
          <Text
            as="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={"xl"}
            pb={4}
          >
            Não deixe de conhecer nossa linha de Impermeabilizantes
          </Text>
          <AnimatePresence mode="wait">
            <Product
              type={"imper"}
              param={imper}
              productRef={productRef}
              itemList={CATALOG_ITEMS_IMPER}
            />
          </AnimatePresence>

          <Catalog.Root>
            {isClient
              ? imperShuffle.map((product) => (
                  <Catalog.Item
                    chamada={product.chamada}
                    key={product.id}
                    thumbnail={product.thumbnail}
                    title={product.title}
                    slogan={product.slogan}
                    hover_color={product.hover_color}
                    lastProductRef={
                      product.id === Number(imper) ? lastProductRef : null
                    }
                    id={product.id}
                    type={"imper"}
                    href={`?imper=${product.id}#imper-${product.id}`}
                  />
                ))
              : null}
          </Catalog.Root>

          <Button
            as={Link}
            href={"/impermeabilizantes"}
            p={4}
            my={4}
            w={"full"}
            colorScheme="facebook"
            size={"md"}
            textTransform={"uppercase"}
          >
            Conheça toda a linha
          </Button>
        </Box>
      </Container>
    </MotionLayout>
  )
}
