import { useRef, useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { Box, Button, Container, IconButton, Skeleton, Text, Link as ChakraLink } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"
import { Catalog } from "@/components/Catalog"
import MotionLayout from "@/components/MotionLayout"
import { CustomImage } from '@/components/CustomImage'
import useProducts, { Product } from '@/hooks/useProducts'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

export default function Impermeabilizantes() {
  const router = useRouter()

  const { data, isLoading } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const productRef = useRef<HTMLDivElement>(null)
  const productListRef = useRef<HTMLDivElement>(null)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product)
    productRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
    router.push(`/impermeabilizantes#${product.id}`, undefined, { shallow: true })
  }

  const handleGoBack = () => {
    setSelectedProduct(undefined)
    productListRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
    // remove hash from url
    router.push(`/impermeabilizantes`, undefined, { shallow: true })
  }

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const id = Number(router.asPath.split('#')[1])
      const product = data?.find((product) => product.id === id)
      setSelectedProduct(product)
    }
  }, [data, router.asPath])


  return (
    <MotionLayout title="Impermeabilizantes">
      <Container maxW={"container.xl"}>
        <AnimatePresence mode='wait'>
          <Box ref={productRef} pt={4}>
            {selectedProduct && (
              <Box
                as={motion.article}
                backgroundColor={"#f8f8f8"}
                rounded={'md'}
                p={8}
                key={selectedProduct.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: '0.5', ease: 'easeInOut' }}
              >
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Text fontSize={'2xl'} fontWeight={'bold'} as={'h2'}>{selectedProduct.title}</Text>
                  <IconButton aria-label='Fechar detalhes do produto' icon={<CloseIcon />} onClick={() => handleGoBack()} />
                </Box>
                <Box
                  w={'full'}
                  mt={4}
                  display={'flex'}
                  flexDirection={{ base: 'column', md: 'row' }}
                  gap={4}
                >
                  <CustomImage src={selectedProduct.large_image} alt='' width={183} height={268} mx={{ base: 'auto', md: 0 }} />
                  <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <Text>{selectedProduct.description}</Text>
                    <Box>
                      <Text fontWeight={'bold'}>Diluição recomendada: 1 : 200</Text>
                      <ChakraLink as={Link} href='/calculadora'>acesse nossa calculadora</ChakraLink>
                    </Box>
                    <Box mt={{ base: 4, md: 0 }}>
                      <Box display={'flex'} gap={4}>
                        <Button
                          colorScheme='whatsapp'
                          onClick={() => window.open(selectedProduct.fiqasp, '_blank')}
                        >
                          FIQASP
                        </Button>
                        <Button
                          colorScheme='whatsapp'
                        >
                          BOLETIM TÉCNICO
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </AnimatePresence>
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
        <Box w="full" backgroundColor={"#f8f8f8"} p={8} rounded={"md"} ref={productListRef}>
          <Text
            as="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={"xl"}
            pb={4}
          >
            Produtos
          </Text>
          <Catalog.Root>
            {data?.map((Product) => (
              <Catalog.Item
                key={Product.id}
                thumbnail={Product.thumbnail}
                title={Product.title}
                slogan={Product.slogan}
                hover_color={Product.hover_color}
                onClick={() => handleSelectProduct(Product)}
              />
            ))}
            {isLoading && (
              skeletons.map((skeleton) => (
                <Skeleton key={skeleton} rounded={"md"}
                  overflow={"hidden"}
                  color={"white"}
                  bgSize={{ base: "contain", md: "auto" }}
                  bgRepeat={"no-repeat"}
                  bgPosition={"center"}
                  textColor={"transparent"}
                  h={"290px"}
                  p={4}
                />
              ))
            )}
          </Catalog.Root>
        </Box>
        {/* <Box w="full" backgroundColor={"#f8f8f8"} p={8} rounded={"md"} mb={4}>
          <Text
            as="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={"xl"}
            pb={4}
          >
            Não deixe de conhecer nossa linha de Higienização
          </Text>
          <Flex flexDirection={{ base: "column", sm: "row" }} gap={4}>
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
              <ProdItem
                bgImage="/produtos/hidraleder.png"
                hoverColor="linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(0,0,0,1) 90%)"
                alt="hidra leder"
                title="hidra leder"
                description="É um detergente com alto poder de remoção de sujidades tais como: óleos, graxas, resíduos, fuligem e outras sujeiras e complexante de sujeiras, age como flotador, possui Ph balanceado e pode ser utilizado em todos os tipos de fibras e suas misturas. Indicado para extratoras ou lavagens manuais. O rendimento do ALL-01-S DETERGENTE UNIVERSAL DE USO GERAL depende do tipo de superfície a ser aplicada, no entando a diluição pode ser: sujeiras leves (1:100) sujeiras médias (1:50), sujeiras pesadas (1:10) ou até mesmo aplicações spot."
                slogan="ALL-01-S DETERGENTE UNIVERSAL DE USO GERAL com alto poder de remoção"
              />
              <ProdItem
                bgImage="/produtos/multic.png"
                hoverColor="linear-gradient(0deg, rgba(0,81,133,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(0,81,133,1) 90%)"
                alt="Multi C"
                title="Multi-C"
                description="LÓTUS MULTI-C é o novo detergente alcalino da G&S, especialmente desenvolvido para a higienização de estofados que não serão impermeabilizados, removendo sujidades pesadas do substrato como graxas,óleos, manchas de molhos e demais sujidades. Seu nome “MULTI” Ja diz tudo! Podendo ser usado nas mais variadas superfícies têxteis e também em superfícies metálicas."
                slogan="Especialmente para a higienização de estofados que não serão impermeabilizados."
              />
            </Flex>
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
              <ProdItem
                bgImage="/produtos/desinfekt.png"
                hoverColor="linear-gradient(0deg, rgba(86,237,251,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(86,237,251,1) 90%)"
                alt="Desinfekt"
                title="DESINFEKT"
                description="Extremamente eficaz na eliminação de microrganismos tais como: bactérias, vírus, fungos, algas e leveduras. Produto de fácil manipulação e aplicação que poderá ser realizado por sistema de spray, atomização ou até mesmo de forma manual. Age na destruição das proteínas atuando na parede celular das bactérias e outros microrganismos. Possui um alto espectro de ação antimicrobiana para limpeza, desinfeção e sanitização de vários ambientes, instrumentos e superfícies. Eficácia comprovada através de laudos por laboratórios credenciados e aprovados pela ANVISA, conforme RDC nº 014/2007e do Laboratório de Virologia / Instituto de Biologia da Universidade Estadual de Campinas – Unicamp. O Desinfekt é um produto para uso em vários segmentos como: Uso Hospitalar, em tecidos e roupas, uso de roupas hospitalares e seu uso geral. E o mesmo está destinado a fazer a desinfeção, eliminação ou a redução de microrganismos desses ambientes."
                slogan="Desinfetante e sanitizante concentrado para alta diluição"
              />
              <ProdItem
                bgImage="/produtos/citrusolv.png"
                hoverColor="linear-gradient(0deg, rgba(0,133,65,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(0,133,65,1) 90%)"
                alt="citrusolv"
                title="citrusolv"
                description="É utilizado para eliminar odores desagradáveis e também promover a ação de impedir que os maus odores voltem a contaminar o artigo tratado, possui odor agradável de uma combinação de fragrâncias desenvolvidas exclusivamente para promover o bem estar. Para a utilização do LÓTUS MAX FRESH como eliminador de odores, deve-se fazer o uso antes da limpeza, logo após a aspiração, para que o produto aja junto as bactérias ou outros agentes que estão causando o mau odor, ou caso seja para inibir os maus odores após a higienização e evitar a proliferação de bactérias, deverá ser aplicado sobre o móvel após este estar totalmente limpo. Para a utilização do LÓTUS MAX FRESH após a lavagem e higienização orientamos que para obtenção de um melhor resultado e uma neutralização completa do substrato, deverá ser utilizado também, o PRÉ IMPER LÓTUS.Após a neutralização do tecido por completo,realizar uma extração eficiente afim de deixar o tecido com o mínimo de umidade possível, caso vá impermeabilizar com produtos a base de água como o LÒTUS HS 1000 ECO, pulverizar antes LÓTUS MAX FRESH, aguardar por 20 minutos, e depois fazer o procedimento de impermeabilização normalmente, caso seja utilizados impermeabilizantes base solventes, LÓTUS HS 1000 IMPER TUDO, ou LÓTUS HS 1000 SAFE, estes só poderão ser aplicados após a total secagem do material, importante seguir orientação sobre impermeabilizantes em seus devidos boletins técnicos."
                slogan="Detergente solvente natural e ecologicamente correto"
              />
            </Flex>
          </Flex>
        </Box> */}
      </Container>
    </MotionLayout>
  )
}
