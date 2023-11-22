import { useRef } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Catalog } from "@/components/Catalog";
import MotionLayout from "@/components/MotionLayout";
import Product from "@/components/Product";
import {
  CATALOG_ITEMS_HIGI,
  CATALOG_ITEMS_VEG,
} from "@/components/Catalog/CATALOG_ITEMS";
import { useSearchParams } from "next/navigation";

export default function Higienização() {
  const searchParams = useSearchParams();
  const higi = searchParams.get("higi");
  const veg = searchParams.get("veg");
  const productRef = useRef<HTMLDivElement>(null);
  const lastProductRef = useRef<HTMLDivElement>(null);

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
          my={4}
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
            {CATALOG_ITEMS_VEG.map((Product) => (
              <Catalog.Item
                key={Product.id}
                thumbnail={Product.thumbnail}
                title={Product.title}
                slogan={Product.slogan}
                hover_color={Product.hover_color}
                lastProductRef={
                  Product.id === Number(veg) ? lastProductRef : null
                }
                id={Product.id}
                type={"veg"}
                href={`?veg=${Product.id}#veg-${Product.id}`}
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
            {CATALOG_ITEMS_HIGI.map((Product) => (
              <Catalog.Item
                key={Product.id}
                thumbnail={Product.thumbnail}
                title={Product.title}
                slogan={Product.slogan}
                hover_color={Product.hover_color}
                lastProductRef={
                  Product.id === Number(higi) ? lastProductRef : null
                }
                id={Product.id}
                type={"higi"}
                href={`?higi=${Product.id}#higi-${Product.id}`}
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
            Não deixe de conhecer nossa linha Imper
          </Text>
        </Box>
      </Container>
    </MotionLayout>
  );
}
