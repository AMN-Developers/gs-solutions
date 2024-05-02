import { useEffect, useRef, useState } from "react"
import { Box, Button, Container, Divider, Text } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"

import { Catalog } from "@/components/Catalog"
import MotionLayout from "@/components/MotionLayout"
import Product from "@/components/Product"
import { CATALOG_ITEMS_VEG } from "@/components/Catalog/CATALOG_ITEMS"
import { useSearchParams } from "next/navigation"

export default function Higienização() {
  const searchParams = useSearchParams()
  const veg = searchParams.get("veg")
  const productRef = useRef<HTMLDivElement>(null)
  const lastProductRef = useRef<HTMLDivElement>(null)

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
          Linha limpoo, Limpeza pós-obras
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
            Produtos Limpoo
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
      </Container>
    </MotionLayout>
  )
}
