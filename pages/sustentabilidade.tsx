import MotionLayout from "@/components/MotionLayout"
import {
  Container,
  Flex,
  Text,
  Box,
  Divider,
  Icon,
  Tooltip,
} from "@chakra-ui/react"
import Image from "next/image"
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2"

export default function Sustentabilidade() {
  return (
    <MotionLayout title="Sustentabilidade">
      <Container maxW={"container.xl"}>
        <Text
          as="h1"
          maxW={"container.xl"}
          display={"flex"}
          justifyContent={"center"}
          fontSize={"xl"}
          textTransform={"uppercase"}
          py={8}
          fontWeight={"bold"}
        >
          Na G&S Home Solutions, acreditamos que o futuro de soluções é verde e
          sustentável.
        </Text>
        <Flex>
          <Box
            alignSelf={"center"}
            ml={"auto"}
            display={{ base: "none", lg: "flex" }}
          >
            <Image
              src={"/sustentabilidade.svg"}
              alt="Imagem de sustentabilidade"
              height={1000}
              width={1000}
            />
          </Box>
          <Flex flexDirection={"column"} gap={4} p={4}>
            <Text>
              O plano de melhoria para o meio ambiente implantado pela G&S Home
              Solutions são os 5 <strong>R’s</strong>
            </Text>
            <Text>
              <strong>Reduzir:</strong> O lixo, por isso controle o consumo!
              Evite exageros, usar somente o necessário e opte por produtos a
              favores da natureza como os de refil.
            </Text>
            <Text>
              <strong>Reutilizar:</strong> Reaproveite alguns produtos, use sua
              criatividade, muitas vezes fazemos coisas incríveis com o que
              menos imaginamos!
            </Text>
            <Text>
              <strong>Reciclar:</strong> Ajude a reciclar! Separe o papel, o
              plástico, o vidro, o metal e tudo aquilo que for lixo orgânico,
              ajude a transformar um lixo velho num produto novo!
            </Text>
            <Text>
              <strong>Recusar:</strong> Produtos que causam dano ao meio
              ambiente;
            </Text>
            <Text>
              <strong>Repensar:</strong> Cada produto que você utiliza passa por
              várias produções, matéria-prima, o manuseio, as condições que
              levam esse produto até você, e como será na hora de descartar esse
              produto? Então: Repense!
            </Text>
          </Flex>
        </Flex>
        <Divider borderColor={"blackAlpha.400"} />
        <Flex flexDirection={"column"} gap={2} p={4}>
          <Text>
            A <strong>G&S Home Solutions</strong>, comprometida com o meio
            ambiente, mantém pontos de coleta seletiva espalhados pela fábrica
            com o objetivo de especificar a destinação do resíduo interno. Desta
            forma, é estimulada a participação de colaboradores, fornecedores e
            prestadores de serviço, no descarte correto dos resíduos nos
            coletores identificados pelas cores:
          </Text>
          <Flex
            p={4}
            gap={2}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              bgColor={"yellow.400"}
              p={4}
              rounded={"md"}
            >
              <Icon as={HiOutlineArchiveBoxArrowDown} mx={2} />
              <Text as="h2" fontWeight={"bold"} fontSize={"sm"}>
                <Tooltip
                  label="Lata, Talheres de aço, panelas, fios, parafusos, pregos..."
                  aria-label="metal"
                >
                  Amarela (Metal)
                </Tooltip>
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              bgColor={"blue.400"}
              p={4}
              rounded={"md"}
            >
              <Icon as={HiOutlineArchiveBoxArrowDown} mx={2} />
              <Text as="h2" fontWeight={"bold"} fontSize={"sm"}>
                <Tooltip
                  label="Envelopes, cartões ou cartolinas, jornais, revistas..."
                  aria-label="papel"
                >
                  Azul (Papel)
                </Tooltip>
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              bgColor={"red.400"}
              p={4}
              rounded={"md"}
            >
              <Icon as={HiOutlineArchiveBoxArrowDown} mx={2} />
              <Text as="h2" fontWeight={"bold"} fontSize={"sm"}>
                <Tooltip
                  label="Garrafa pet, tampas, CD, DVD..."
                  aria-label="plastico"
                >
                  Vermelho (Plastico)
                </Tooltip>
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              bgColor={"green.400"}
              p={4}
              rounded={"md"}
            >
              <Icon as={HiOutlineArchiveBoxArrowDown} mx={2} />
              <Text as="h2" fontWeight={"bold"} fontSize={"sm"}>
                <Tooltip label="Garrafa, espelho, potes..." aria-label="vidro">
                  Verde (Vidro)
                </Tooltip>
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              bgColor={"gray.400"}
              p={4}
              rounded={"md"}
            >
              <Icon as={HiOutlineArchiveBoxArrowDown} mx={2} />
              <Text as="h2" fontWeight={"bold"} fontSize={"sm"}>
                <Tooltip
                  label="Papel-Carbono, Fotografia, Ceramica, Pilha, Lâmpadas..."
                  aria-label="nao reciclavel"
                >
                  Cinza (Não reciclavél)
                </Tooltip>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </MotionLayout>
  )
}
