import MotionLayout from "@/components/MotionLayout"
import ProdItem from "@/components/ProdItem"
import { Box, Container, Flex, Text } from "@chakra-ui/react"

export default function Lotus() {
  return (
    <MotionLayout title="Lotus">
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
        <Box w="full" backgroundColor={"#f8f8f8"} p={8} my={4} rounded={"md"}>
          <Text
            as="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={"xl"}
            pb={4}
          >
            Linha VEGANA
          </Text>
          <Flex flexDirection={{ base: "column", sm: "row" }} gap={4}>
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
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
            </Flex>
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
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
            </Flex>
          </Flex>
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
          <Flex flexDirection={{ base: "column", sm: "row" }} gap={4}>
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
              <ProdItem
                bgImage="/produtos/preimper.png"
                hoverColor=""
                alt="Fix Float"
                title="Fix Float"
                description="LÓTUS FIX-FLOT é um flotador extremamente concentrado com espumação controlada e com ativos anti-migrantes, através da tecnologia “Lótus Omni FIX”, especialmente desenvolvido para limpeza de todos os tipos de tapetes e carpetes. Com alta capacidade na remoção das mais variadas sujidades, além de revitalizar a coloração e o toque natural da fibra. É extremamente seguro para realizar a higienização de tapetes persas, orientais, kilim, fibras naturais, fibras sintéticas e carpetes, sem risco de migração/transferência de cor."
                slogan="Flotador extremamente concentrado com espumação controlada e com ativos anti-migrantes"
              />

              <ProdItem
                bgImage="/produtos/multic.png"
                hoverColor="linear-gradient(0deg, rgba(0,81,133,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(0,81,133,1) 90%)"
                alt="Multi C"
                title="Multi-C"
                description="Limpador multifuncional especialmente desenvolvido para aplicações têxteis, indicado também para limpeza pesada de superfícies em geral. Com alta capacidade de remoção de gorduras, óleos, graxas e outras sujeiras de difícil remoção Devido ao seu pH alcalino o produto não é indicado para limpeza de superfícies que serão impermeabilizadas."
                slogan="Especialmente para a higienização de estofados que não serão impermeabilizados."
              />
            </Flex>
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
              <ProdItem
                bgImage="/produtos/desinfekt.png"
                hoverColor="linear-gradient(0deg, rgba(86,237,251,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(86,237,251,1) 90%)"
                alt="Desinfekt"
                title="DESINFEKT"
                description="desinfetante e sanitizante concentrado para alta diluição, com efeito bactericida, bacteriostático e virucida concentrado e de baixa toxidade, a base de quaternário de amônia de 5° geração, em sinergia com agentes bacteriostáticos. Extremamente eficaz na eliminação de microrganismos tais como: bactérias, vírus, fungos, algas e leveduras. Produto de nível hospitalar e registrado na Anvisa."
                slogan="Desinfetante e sanitizante concentrado para alta diluição"
              />
              <ProdItem
                bgImage="/produtos/citrusolv.png"
                hoverColor="linear-gradient(0deg, rgba(0,133,65,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(0,133,65,1) 90%)"
                alt="citrusolv"
                title="citrusolv"
                description="Detergente solvente natural e ecologicamente correto extremamente concentrado a base de D’limoneno, tensoativos biodegradáveis e auxiliares antiredepositantes que não agridem o meio ambiente. Com alto poder de limpeza, remove rapidamente a sujidade sem alterar as características do substrato e de fácil remoção por enxague."
                slogan="Detergente solvente natural e ecologicamente correto"
              />
            </Flex>
          </Flex>
        </Box>
        <Box w="full" backgroundColor={"#f8f8f8"} p={8} rounded={"md"}>
          <Flex flexDirection={{ base: "column", sm: "row" }} gap={4}>
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
              <ProdItem
                bgImage="/produtos/cleanprot.png"
                hoverColor="linear-gradient(0deg, rgba(162,218,212,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(162,218,212,1) 90%)"
                alt="Clean Protect"
                title="Clean Protect"
                description="Foi desenvolvido para a realização de limpezas de estofados e tecidos que já passaram pelo processo de impermeabilização, e que por qualquer motivo ainda apresentam sombreamentos ou sujidades superficiais após a remoção do excesso da sujidade derramado."
                slogan="Realização de limpezas de estofados e tecidos que já passaram pelo processo de impermeabilização"
              />
              <ProdItem
                bgImage="/produtos/hidraleder.png"
                hoverColor="linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(0,0,0,1) 90%)"
                alt="hidra leder"
                title="hidra leder"
                description="LÓTUS HYDRA LEDER é um hidratante impermeabilizante de couro que tem função 4x1, hidrata, revitaliza, limpa e realiza a proteção com efeito hidrorrepelente (repelem líquidos), além de causar sensível melhora ao toque e elasticidade dos materiais que possuem essa característica."
                slogan="hidratante impermeabilizante: hidrata, revitaliza, limpa e realiza a proteção com efeito hidrorrepelente."
              />
            </Flex>
          </Flex>
        </Box>
        <Box w="full" backgroundColor={"#f8f8f8"} p={8} rounded={"md"}>
          <Text
            as="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={"xl"}
            pb={4}
          >
            Não deixe de conhecer nossa linha Imper
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
        </Box>
      </Container>
    </MotionLayout>
  )
}
