import {
  Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Box,
  Flex,
} from "@chakra-ui/react"
import Image from "next/image"

export default function TableRoot() {
  return (
    <Container maxW={"container.xl"} display={{ md: "none" }}>
      <TableContainer>
        <Table variant="striped" colorScheme="facebook" size={"sm"}>
          <TableCaption>Transportadoras</TableCaption>
          <Thead>
            <Tr>
              <Th>Transportadoras</Th>
              <Th>Telefone</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/aceville.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>
                <Flex flexDirection={"column"}>
                  <Box>(11)4280-2876</Box>
                  <Box>(11)4280-2870</Box>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/apucarana.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>(11)2207-7466</Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/tecmar.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>(11)3238-1400</Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/ouronegro.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>(11)2085-5121</Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/binho.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>(11)98455-0050</Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/rodomac.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>(22)99999-1100</Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/exlog.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>(11)2967-5656</Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/alfa.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>(11)2595-0880</Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/wrj.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>(11)2413-1480</Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/aceville.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>
                <Flex flexDirection={"column"}>
                  <Box>(11)2085-7233</Box>
                  <Box>(47)3130-7350</Box>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/velocargas.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>(11)2412-1212</Td>
            </Tr>
            <Tr>
              <Td w={150} h={50}>
                <Image
                  src={"/trans/exata.png"}
                  alt={"tranportadora Aceville"}
                  width={240}
                  height={98}
                />
              </Td>
              <Td>
                <Flex flexDirection={"column"}>
                  <Box>(92)4009-0000</Box>
                  <Box>(11)2085-5771</Box>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Transportadoras</Th>
              <Th>Telefone</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  )
}
