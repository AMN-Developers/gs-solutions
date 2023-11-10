import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  IconButton,
  Skeleton,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Catalog } from "@/components/Catalog";
import MotionLayout from "@/components/MotionLayout";
import { CustomImage } from "@/components/CustomImage";
import useProducts, { Product } from "@/hooks/useProducts";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Impermeabilizantes() {
  const router = useRouter();

  const { data, isLoading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const productRef = useRef<HTMLDivElement>(null);
  const productListRef = useRef<HTMLDivElement>(null);
  const lastProductRef = useRef<HTMLDivElement>(null);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    productRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    router.push(`/impermeabilizantes#${product.id}`, undefined, {
      shallow: true,
    });
  };

  const handleGoBack = () => {
    lastProductRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    setSelectedProduct(undefined);
  };

  useEffect(() => {
    console.log(router.asPath);
    if (router.asPath.includes("#")) {
      const id = Number(router.asPath.split("#")[1]);
      const product = data?.find((product) => product.id === id);
      setSelectedProduct(product);
    }
  }, [data, router.asPath]);

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
      </Container>
    </MotionLayout>
  );
}
