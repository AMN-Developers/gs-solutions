import Link from "next/link"
import {
  Box,
  IconButton,
  Text,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { CloseIcon } from "@chakra-ui/icons"
import { CustomImage } from "@/components/CustomImage"
import { useRouter } from "next/router"
import { Product } from "@/hooks/useProducts"

interface ProductProps {
  type: string
  param: string | null
  productRef: React.RefObject<HTMLDivElement>
  itemList: Product[]
}

export default function Product({
  type,
  productRef,
  itemList,
  param,
}: ProductProps) {
  const router = useRouter()
  const removeParam = (param: string) => {
    const { pathname, query } = router
    const params = new URLSearchParams(query as unknown as string)
    params.delete(param)
    router.replace({ pathname, query: params.toString() }, undefined, {
      shallow: true,
    })
  }

  return (
    <Box ref={productRef} pb={4} id={`${type}-${Number(param)}`}>
      {param
        ? itemList
            .filter((item) => item.id === Number(param))
            .map((selectedProduct) => (
              <Box
                as={motion.article}
                backgroundColor={"#fff"}
                bgImage={`linear-gradient(0deg, rgba(${selectedProduct.hover_color}) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 95%, rgba(${selectedProduct.hover_color}) 90%)`}
                rounded={"md"}
                p={8}
                py={{ base: 24, md: 12 }}
                key={selectedProduct.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: "1.5", ease: "easeIn" }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text fontSize={"2xl"} fontWeight={"bold"} as={"h2"}>
                    {selectedProduct.title}
                  </Text>
                  <IconButton
                    aria-label="Fechar detalhes do produto"
                    icon={<CloseIcon />}
                    onClick={() => {
                      removeParam(type)
                    }}
                  />
                </Box>
                <Box
                  w={"full"}
                  mt={4}
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  gap={4}
                >
                  <CustomImage
                    src={selectedProduct.large_image}
                    alt=""
                    width={183}
                    height={268}
                    mx={{ base: "auto", md: 0 }}
                  />
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                  >
                    <Text>{selectedProduct.description}</Text>
                    <Box
                      display={"flex"}
                      flexDirection={{ base: "column", md: "row" }}
                      justifyContent={"space-between"}
                    >
                      {selectedProduct.recomended && (
                        <Box>
                          <Text fontWeight={"bold"}>
                            Diluição recomendada: 1:{selectedProduct.recomended}
                          </Text>
                          <ChakraLink
                            color={`rgba(${selectedProduct.hover_color})`}
                            as={Link}
                            href={`/calculadora?proportion=${selectedProduct.recomended}`}
                          >
                            calculadora de diluição
                          </ChakraLink>
                        </Box>
                      )}
                      <Box display={"flex"} gap={4}>
                        <Button
                          onClick={() =>
                            window.open(selectedProduct.fiqasp, "_blank")
                          }
                          bgColor={`rgba(${selectedProduct.hover_color})`}
                          color={"white"}
                          _hover={{
                            bgColor: `rgba(${selectedProduct.hover_color})`,
                          }}
                          fontSize={{ base: "xx-small", md: "md" }}
                        >
                          FIQASP
                        </Button>
                        <Button
                          bgColor={`rgba(${selectedProduct.hover_color})`}
                          color={"white"}
                          _hover={{
                            bgColor: `rgba(${selectedProduct.hover_color})`,
                          }}
                          fontSize={{ base: "xx-small", md: "md" }}
                        >
                          BOLETIM TÉCNICO
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))
        : null}
    </Box>
  )
}
