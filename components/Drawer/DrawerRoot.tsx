import { BiPhone, BiLogoWhatsapp, BiLogoInstagram } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Image,
  Link as ChakraLink,
  Icon,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

interface DrawerRootProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}

export default function DrawerRoot({ isOpen, onClose, btnRef }: DrawerRootProps) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color={"white"} />
        <DrawerHeader bgColor="#20274D" display={"flex"} justifyContent={"center"}>
          <Image src="/logo.png" alt="G&S Home Solutions" maxW={50} />
        </DrawerHeader>

        <DrawerBody display={"flex"} flexDirection={"column"} gap={2} marginTop={2}>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Icon as={FiMapPin} marginRight={2} />
            <Text as="h2" fontWeight={"bold"} fontSize={"md"}>
              Endereço
            </Text>
          </Box>
          <Text as="p" fontWeight={"light"} fontSize={"sm"}>
            Rua José do Patrocínio, 67 - Calmon Viana - CEP 08560-100 - SP
          </Text>

          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Icon as={HiOutlineMail} marginRight={2} />
            <Text as="h2" fontWeight={"bold"} fontSize={"md"}>
              Email
            </Text>
          </Box>

          <Text as="p" fontWeight={"light"} fontSize={"sm"}>
            gshomesolutions@hotmail.com
          </Text>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Icon as={BiPhone} marginRight={2} />

            <Text as="h2" fontWeight={"bold"} fontSize={"md"}>
              Telefone
            </Text>
          </Box>

          <Text as="p" fontWeight={"light"} fontSize={"sm"}>
            +55 (11) 4638-9079
          </Text>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Icon as={BiLogoWhatsapp} marginRight={2} />
            <Text as="h2" fontWeight={"bold"} fontSize={"md"}>
              Whatsapp
            </Text>
          </Box>

          <ChakraLink
            as={Link}
            fontWeight={"light"}
            fontSize={"sm"}
            href="https://api.whatsapp.com/send?phone=5511913591344&text=Ol%C3%A1,%20vim%20pelo%20Site%20Institucional.%20"
            target="_blank"
          >
            +55 (11) 98452-0087
          </ChakraLink>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Icon as={BiLogoInstagram} marginRight={2} />
            <Text as="h2" fontWeight={"bold"} fontSize={"md"}>
              Instagram
            </Text>
          </Box>

          <ChakraLink
            as={Link}
            fontWeight={"light"}
            fontSize={"sm"}
            href="https://www.instagram.com/gshomesolutions/"
            target="_blank"
          >
            @gshomesolutions
          </ChakraLink>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Icon as={AiOutlineYoutube} marginRight={2} />
            <Text as="h2" fontWeight={"bold"} fontSize={"md"}>
              Youtube
            </Text>
          </Box>

          <ChakraLink
            as={Link}
            fontWeight={"light"}
            fontSize={"sm"}
            href="https://www.youtube.com/c/GSHomeSolutions"
            target="_blank"
          >
            G&S Home Solutions
          </ChakraLink>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Fechar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
