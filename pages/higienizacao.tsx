import MotionLayout from "@/components/MotionLayout"
import ProdItem from "@/components/ProdItem"
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react"
import { Catalog } from "@/components/Catalog"
import { CATALOG_ITEMS } from "@/components/Catalog/CATALOG_ITEMS"

export default function Higienização() {
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
          <SimpleGrid minChildWidth="200px" spacing="40px">
            <ProdItem
              bgImage="/produtos/allone.png"
              hoverColor="linear-gradient(0deg, rgba(245,92,33,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(245,92,33,1) 90%)"
              alt="All01"
              title="All01"
              description="Detergente Vegano indicado para todos os tipos tecidos e fibras, com alto poder de remoção de sujidades tais como: óleos, graxas, resíduos, fuligem, e outras sujeiras. Complexante de sujeiras, age como flotador, possui pH neutro, poderosa ação desengraxante/desengordurante e baixa espumação, facilitando o enxágue. Indicado para extratoras ou lavagem manuais."
              slogan="ALL-01-S DETERGENTE UNIVERSAL DE USO GERAL com alto poder de remoção"
            />
            <ProdItem
              bgImage="/produtos/preimper.png"
              hoverColor="linear-gradient(0deg, rgba(0,167,177,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(0,167,177,1) 90%)"
              alt="Pré Imper"
              title="Pré-Imper"
              description="Neutralizador de agentes tensoativos e surfactantes, que age contra resíduos que podem atrapalhar a sua impermeabilização. Atua também na retirada de manchas provenientes de urina, suor, oxidação metálica (Ferrugem), realça a cor dos tecidos e evita o amarelecimento dos tecidos de fibras naturais após o processo de higienização. A sua aplicação ajusta o pH do tecido tornando-o ideal para aplicação de impermeabilizantes. Pode ser utilizado inclusive em tecidos novos a fim de garantir a neutralização de diferentes residuais existentes no tecido antes da impermeabilização."
              slogan="ideal para aplicação de impermeabilizantes a base de água."
            />
            <ProdItem
              bgImage="/produtos/tiramancha.png"
              hoverColor="linear-gradient(0deg, rgba(255,102,160,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(255,102,160,1) 90%)"
              alt="Tira Manchas"
              title="Tira Manchas"
              description="Poderoso alvejante removedor de manchas e sujeiras, Vegano , a base de percarbonato de sódio. Através da sua reação com a água libera Oxigênio Ativo (Peroxido de hidrogênio) que realiza o processo de alvejamento , branqueamento , remoção de manchas , revitalização da cor do tecido e diminuição da ação mecânica devido a ação de flotação da sujidade no interior da fibra do tecido."
              slogan="Poderoso removedor e limpador de manchas e sujeiras."
            />
            <ProdItem
              bgImage="/produtos/maxfresh.png"
              hoverColor="linear-gradient(0deg, rgba(236,236,236,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(236,236,236,1) 90%)"
              alt="Max Fresh"
              title="Max Fresh"
              description="Neutralizador/eliminador de odores Vegano. Age na remoção/eliminação de odores desagradáveis, como, urina animal, humana, vômitos, umidade, derramamento de líquidos fermentados, odores causados por bactérias e fungos, etc. Também promove a ação de proteção prolongada, evitando que os maus odores voltem a contaminar o artigo tratado (efeito bacteriostático). Não interfere negativamente com impermeabilizantes, não mancha, não altera as características do tecido, possui odor agradável e aconchegante."
              slogan="MAX FRESH um composto sinergético, e um poderoso eliminador de odores"
            />
          </SimpleGrid>
        </Box>
        <Box w="full" backgroundColor={"#f8f8f8"} p={8} rounded={"md"}>
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
            {CATALOG_ITEMS.map((CatalogItem) => (
              <Catalog.Item
                bgImage={CatalogItem.bgImage}
                title={CatalogItem.title}
                slogan={CatalogItem.slogan}
                cor={CatalogItem.cor}
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
  )
}
