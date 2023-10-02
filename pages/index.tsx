import { Card } from "@/components/Card"
import {
  Box,
  Container,
  Text,
  AspectRatio,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react"
import { useState } from "react"
import Image from "next/image"
import { Certificated } from "@/components/Certificated"

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0)
  const [isImageClicked, setIsImageClicked] = useState(false)
  const embedID = "nQQ8AF8-otE"

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
  }

  return (
    <>
      <Card.Root>
        <Card.Tittle />
        <Card.Item />
      </Card.Root>
      <Box bgColor={"#263869"}>
        <Container maxW="container.xl" my={2} py={16} gap={2} as="section">
          <Text
            as="h2"
            fontWeight={"bold"}
            fontSize={"xl"}
            color={"white"}
            marginBottom={4}
          >
            Conheça a G&S Home Solutions
          </Text>
          <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
            <Box width={{ base: "100%", md: "50%" }}>
              <AspectRatio ratio={16 / 9}>
                {!isImageClicked ? (
                  <Box
                    as="button"
                    onClick={() => setIsImageClicked(true)}
                    position="relative"
                    width="100%"
                    height="100%"
                  >
                    <Box
                      as={Image}
                      src={`https://img.youtube.com/vi/${embedID}/sddefault.jpg`}
                      layout="fill"
                      objectFit="cover"
                      alt="yt thumbnail"
                      priority
                      rounded={"md"}
                    />
                    <Box position={"absolute"}>
                      <Image
                        src="http://addplaybuttontoimage.way4info.net/Images/Icons/7.png"
                        alt="play button"
                        width={50}
                        height={50}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box
                    as="iframe"
                    title="G&S Home Solutions"
                    aria-description="G&S Home Solutions video presentation"
                    src="https://www.youtube.com/embed/nQQ8AF8-otE?controls=2&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&fs=0&disablekb=1&autoplay=1"
                    allowFullScreen
                    loading="lazy"
                    rounded={"md"}
                  />
                )}
              </AspectRatio>
            </Box>
            <Flex
              width={{ base: "100%", md: "50%" }}
              flexDirection={"column"}
              justify={"space-between"}
            >
              <Box>
                <Text
                  as="h2"
                  fontSize={"lg"}
                  color={"white"}
                  fontWeight={"bold"}
                  marginBottom={{ base: 0, md: 2 }}
                >
                  Por que escolher a G&S ?
                </Text>
                <Text as="p" color={"white"}>
                  Nós somos a primeira empresa brasileira com a linha completa
                  de produtos profissionais voltada para o mercado têxtil de
                  higienização e impermeabilização.
                </Text>
              </Box>
              <Box minH={"65%"}>
                <Tabs
                  index={tabIndex}
                  onChange={handleTabsChange}
                  isLazy
                  color={"white"}
                  colorScheme="whatsapp"
                  fontSize={"xs"}
                  textAlign={"justify"}
                >
                  <TabList>
                    <Tab>2015</Tab>
                    <Tab>2016</Tab>
                    <Tab>2017</Tab>
                    <Tab>2018</Tab>
                    <Tab>2019</Tab>
                    <Tab>2020</Tab>
                    <Tab>2021</Tab>
                    <Tab>2022</Tab>
                    <Tab>2023</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Text as={"p"} marginBottom={2}>
                        Nasce na junção de dois sócios (Geraldo e Sidney) o
                        sonho de ter o próprio negócio de empreender e atuar no
                        mercado de produção e aplicação de impermeabilizantes
                        têxteis.
                      </Text>
                      <Text as={"p"}>
                        Pesquisas de oportunidades de mercado e a criação da G&S
                        Home Solutions. Junto com a sua criação vem o primeiro
                        lançamento, o Lótus HS 1000 IMPERTUDO em formato
                        Aerossol, com intuito de vender impermeabilizantes para
                        lojistas.
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <Text as={"p"} marginBottom={2}>
                        A G&amp;S começa a observar as necessidades do mercado
                        de higienização profissional e seu desenvolvimento como
                        nicho de mercado, e decide dividir o seu conhecimento de
                        anos na indústria química têxtil com os profissionais de
                        higienização e impermeabilização.
                      </Text>
                      <Text as={"p"}>
                        Vendo a necessidade de um produto ecológico e não
                        inflamável lança neste ano o Lótus HS 1000 ECO, e inicia
                        a venda de produtos a granel em embalagens de 20 litros,
                        diretamente voltado para o uso profissional.
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <Text as={"p"} marginBottom={2}>
                        Com o crescente aumento da demanda por novas
                        tecnologias, a G&amp;S completa a sua linha de
                        impermeabilização com o lançamento do Lótus HS 1000
                        SAFE, seu impermeabilizante a base de solvente não
                        inflamável.
                      </Text>
                      <Text as={"p"}>
                        Neste mesmo ano lança o seu exclusivo Lótus PRE-IMPER, o
                        primeiro produto do mercado brasileiro exclusivamente
                        pensado para a preparação do substrato têxtil, antes do
                        processo de impermeabilização. Revolucionando o mercado
                        de impermeabilização e levando novos conceitos técnicos
                        na resolução de muitos problemas antes existentes.
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <Text as={"p"} marginBottom={2}>
                        Com a necessidade de expandir suas tecnologias,
                        desenvolvimento de novos produtos e crescimento na
                        demanda de produção, a G&amp;S se muda para um novo
                        local de operações, maior e mais preparado para o
                        atendimento das necessidades do mercado.
                      </Text>
                      <Text as={"p"}>
                        Começa as pesquisas em produtos de higienização têxtil,
                        e no mesmo ano é lançado o Lótus ALL-01 e o Lótus
                        Tira-manchas, produtos especialmente desenvolvidos para
                        o mercado de higienização de tecidos, com baixo índice
                        de tensoativos e que pode ser utilizado em todos os
                        tipos de substratos têxteis, ideal para substratos que
                        passaram pelo processo de impermeabilização.
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <Text as={"p"} marginBottom={2}>
                        Sempre em busca da melhor qualidade para os seus
                        clientes, começa o processo de certificação ISO 9001, e
                        consegue sua certificação no final do ano.
                      </Text>
                      <Text as={"p"} marginBottom={2}>
                        Entendendo seu papel e responsabilidade social para com
                        o meio-ambiente, se afilia ao projeto Eu-reciclo,
                        levando a logística reserva e correto descarte de suas
                        embalagens para o mercado, se colocando em um importante
                        papel ambiental.
                      </Text>
                      <Text as={"p"}>
                        O lançamento do ano é o Lótus MAX-FRESH, o finalizador
                        de odores que não interfere em superfícies que irão ser
                        impermeabilizadas.
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <Text as={"p"} marginBottom={2}>
                        Mesmo em um ano muito desafiador para todos, a G&amp;S
                        continuo o seu processo de certificação e se tornou uma
                        empresa certificada ANVISA, além da notificação/registro
                        de sua linha completa de produtos. Trazendo ainda mais
                        segurança ao seu consumidor.
                      </Text>
                      <Text as={"p"}>
                        O Lótus Fireguard foi o lançamento do ano! O protetor
                        retardante de chamas de tecidos a base de água com
                        eficiência comprovada pelo IPT em aplicações têxteis.
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <Text as={"p"}>
                        Com a crescente procura por produtos bactericidas e
                        ambientes Bioseguros a G&amp;S trouxe 2 novos produtos
                        neste ano, o Lótus Desinfekt, poderoso desinfetante com
                        ação comprovada na remoção de bactérias gran positivas e
                        gran negativas e o inovador Lótus Tech Block, o
                        impermeabilizante com efeito bacteriostático e virucida.
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <Text as={"p"} marginBottom={2}>
                        Analisando e ouvindo as necessidades do mercado de
                        higienização e impermeabilização, a G&amp;S traz o
                        lançamento do complemento de sua linha de higienização.
                      </Text>
                      <Text as={"p"} marginBottom={2}>
                        Com o Lótus Multi-C, detergente alcalino multisuperfície
                        e o Lótus CitruSolv, um detergente solvente a base de
                        D’limoneno eficiente removedor de sujidades.
                      </Text>
                      <Text as={"p"}>
                        Neste mesmo ano completa a sua linha de
                        impermeabilizantes com o Lótus Acqua-Pro, o protetor a
                        base de água eficiente na proteção contra líquidos
                        aquosos.
                      </Text>
                      <Text as={"p"}>
                        Se tornando a primeira empresa brasileira com a linha
                        completa de produtos profissionais voltada para o
                        mercado têxtil de higienização e impermeabilização .
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <Text as={"p"}>
                        No início de 2020 a empresa G&amp;S inicia seu projeto
                        de construção de sua unidade fabril com mais de 2000 m2
                        e previsão de finalização no final do 1°semestre de
                        2023, esta nova unidade trará maior eficiência produtiva
                        além de rapidez logística e possibilidades de ampliação
                        de novos negócios!
                      </Text>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Certificated.Bar />
    </>
  )
}
