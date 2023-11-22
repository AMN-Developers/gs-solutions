import { useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Container, Text, Box } from "@chakra-ui/react";
import { Catalog } from "@/components/Catalog";
import MotionLayout from "@/components/MotionLayout";
import { AnimatePresence } from "framer-motion";
import Product from "@/components/Product";
import { CATALOG_ITEMS_IMPER } from "@/components/Catalog/CATALOG_ITEMS";

export default function Impermeabilizantes() {
  const searchParams = useSearchParams();
  const imper = searchParams.get("imper");
  const max = searchParams.get("max");
  const productRef = useRef<HTMLDivElement>(null);
  const lastProductRef = useRef<HTMLDivElement>(null);

  return (
    <MotionLayout title="Impermeabilizantes">
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
          Linha de Impermeabilizantes
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
            {CATALOG_ITEMS_IMPER.map((Product) => (
              <Catalog.Item
                key={Product.id}
                thumbnail={Product.thumbnail}
                title={Product.title}
                slogan={Product.slogan}
                hover_color={Product.hover_color}
                lastProductRef={
                  Product.id === Number(max) ? lastProductRef : null
                }
                id={Product.id}
                type={"max"}
                href={`?max=${Product.id}#max-${Product.id}`}
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
          id="imper"
        >
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
              type={"imper"}
              param={imper}
              productRef={productRef}
              itemList={CATALOG_ITEMS_IMPER}
            />
          </AnimatePresence>
          <Catalog.Root>
            {CATALOG_ITEMS_IMPER.map((product) => (
              <Catalog.Item
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
      </Container>
    </MotionLayout>
  );
}
