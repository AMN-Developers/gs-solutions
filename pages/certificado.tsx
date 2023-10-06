import MotionLayout from "@/components/MotionLayout"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"

export default function Cartificado() {
  return (
    <MotionLayout title="Certificado e Homologação">
      <Container maxW="container.xl">
        <Text
          as="h1"
          textAlign={"center"}
          py={8}
          fontSize={"2xl"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Certificados e Homologações
        </Text>
        <Text as="h2" py={4} fontWeight={"semibold"} fontSize={"lg"}>
          Preocupação com o meio ambiente
        </Text>
        <Flex gap={4} flexDirection={{ base: "column", md: "row" }}>
          <Image
            src="/eureciclo-logo.png"
            alt="Eu Reciclo"
            width={245}
            height={319}
          />
          <Flex flexDirection={"column"} p={4} gap={4}>
            <Text as="p">
              Você sabia que a G&S Home Solutions possui o selo eureciclo?
            </Text>
            <Text as="p">
              Isso significa que apoiamos e investimos em reciclagem no Brasil O
              selo eureciclo foi idealizado para solucionar dois grandes
              problemas: a destinação final de embalagens geradas por empresas e
              a marginalização dos agentes da cadeia de reciclagem. É daí que
              vem a ideia da compensação ambiental: as empresas pagam as
              cooperativas para retirarem do ambiente uma quantidade equivalente
              de material ao das embalagens de seus produtos. Em 2017, iniciamos
              as operações no Chile com o selo todos reciclamos e agora estamos
              em todo território nacional.
            </Text>
          </Flex>
        </Flex>
        <Divider borderColor={"blackAlpha.400"} />
        <Text as="h2" py={4} fontWeight={"semibold"} fontSize={"lg"}>
          Sistema de Gestão de Qualidade
        </Text>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Flex
            flexDirection={"column"}
            p={4}
            gap={4}
            w={{ base: "100%", md: "70%" }}
          >
            <Text>
              O objetivo da norma, é trazer confiança ao cliente de que os
              produtos e serviços da empresa serão criados de modo repetitivo e
              consistente, afim de que adquira uma qualidade, de acordo com
              aquilo que foi definido pela empresa
            </Text>
            <Text fontWeight={"semibold"}>
              Aprovação de funcionamento especial e notificação de todos os
              produtos:
            </Text>
            <Text>
              Tem por finalidade institucional promover a proteção da saúde da
              população, por intermédio do controle sanitário da produção e
              consumo de produtos e serviços submetidos à vigilância sanitária,
              inclusive dos ambientes, dos processos, dos insumos e das
              tecnologias a eles relacionados, bem com o controle de portos,
              aeroportos, fronteiras e recintos alfandegados..
            </Text>
          </Flex>
          <Flex
            flexDirection={{ base: "row", md: "column" }}
            gap={4}
            mx={"auto"}
            display={{ base: "none", md: "flex" }}
          >
            <Image
              src={"/iso-logo.svg"}
              alt="Iso 9001 Logo"
              width={200}
              height={200}
            />
            <Image
              src={"/anvisa.png"}
              alt="Iso 9001 Logo"
              width={200}
              height={200}
            />
          </Flex>
        </Flex>
        <Divider borderColor={"blackAlpha.400"} />
        <Text as="h2" py={4} fontWeight={"semibold"} fontSize={"lg"}>
          Autorização para produção de produtos controlados
        </Text>
        <Flex gap={4} flexDirection={{ base: "column", md: "row" }}>
          <Flex
            justifyContent={"space-between"}
            w={{ base: "100%", md: "40%" }}
            p={4}
            display={{ base: "none", lg: "flex" }}
          >
            <Image
              src={"/policiacivil.png"}
              alt="Iso 9001 Logo"
              width={150}
              height={150}
            />
            <Image
              src={"/policiafederal.png"}
              alt="Iso 9001 Logo"
              width={140}
              height={150}
            />
            <Image
              src={"/cetesb.png"}
              alt="Iso 9001 Logo"
              width={150}
              height={100}
            />
          </Flex>
          <Flex w={{ base: "100%", md: "60%" }} py={4} px={10}>
            <Text>
              Através da Divisão de Controle e Fiscalização de Produtos Químicos
              (DCPQ) a Policia Federal realiza o controle e a fiscalização da
              fabricação, produção, armazenamento, transformação, embalagem,
              compra, venda, comercialização, aquisição, posse, doação,
              empréstimo, permuta, remessa, transporte, distribuição,
              importação, exportação, reexportação, cessão, reaproveitamento,
              reciclagem, transferência e utilização de produtos químicos
            </Text>
          </Flex>
        </Flex>
      </Container>
    </MotionLayout>
  )
}
