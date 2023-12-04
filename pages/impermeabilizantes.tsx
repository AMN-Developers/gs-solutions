import { useRef, useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Container, Text, Box, Button } from "@chakra-ui/react"
import { Catalog } from "@/components/Catalog"
import MotionLayout from "@/components/MotionLayout"
import { AnimatePresence } from "framer-motion"
import Product from "@/components/Product"
import {
  CATALOG_ITEMS_HIGI,
  CATALOG_ITEMS_IMPER,
  CATALOG_ITEMS_IMPER_MAX,
} from "@/components/Catalog/CATALOG_ITEMS"
import Link from "next/link"

export default function Impermeabilizantes() {
  const searchParams = useSearchParams()
  const imper = searchParams.get("imper")
  const higi = searchParams.get("higi")
  const max = searchParams.get("max")
  const productRef = useRef<HTMLDivElement>(null)
  const lastProductRef = useRef<HTMLDivElement>(null)
  const higiShuffle = useMemo(() => {
    const productCopy = [...CATALOG_ITEMS_HIGI]
    productCopy.sort(() => Math.random() - 0.5)
    return productCopy.slice(0, 4)
  }, [CATALOG_ITEMS_HIGI])

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <MotionLayout title="Impermeabilizantes">
      <Container maxW={{ base: "full", md: "container.xl" }}>
        <Text
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
          py={4}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          fontSize={"2xl"}
          my={4}
        >
          Linha de Impermeabilizantes
        </Text>

        <Box
          w="full"
          backgroundColor={"#f8f8f8"}
          p={{ base: 4, md: 8 }}
          my={4}
          mb={8}
          rounded={"md"}
          id="imper"
        >
          <Text
            as="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={"xl"}
            pb={4}
            id="productFocus"
          >
            Produtos
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
            {CATALOG_ITEMS_IMPER.map((product) => (
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
            ))}
          </Catalog.Root>
        </Box>
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
            Linha MAX
          </Text>
          <AnimatePresence mode="wait">
            <Product
              type={"max"}
              param={max}
              productRef={productRef}
              itemList={CATALOG_ITEMS_IMPER}
            />
          </AnimatePresence>
          <Catalog.Root>
            {CATALOG_ITEMS_IMPER_MAX.map((product) => (
              <Catalog.Item
                chamada={product.chamada}
                key={product.id}
                thumbnail={product.thumbnail}
                title={product.title}
                slogan={product.slogan}
                hover_color={product.hover_color}
                lastProductRef={
                  product.id === Number(max) ? lastProductRef : null
                }
                id={product.id}
                type={"max"}
                href={`?max=${product.id}#max-${product.id}`}
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
            Não deixe de conhecer nossa linha de Higienização
          </Text>
          <Product
            type={"higi"}
            param={higi}
            productRef={productRef}
            itemList={CATALOG_ITEMS_HIGI}
          />
          <Catalog.Root>
            {isClient
              ? higiShuffle.map((product) => (
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
                ))
              : null}
          </Catalog.Root>
          <Button
            as={Link}
            href={"/higienizacao"}
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
