import { Distributor } from "@/context/DISTRIBUTORS_ITEMS";
import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { BsTelephoneFill, BsLink, BsArrow90DegLeft } from "react-icons/bs";
import Link from "next/link";
import useMapContext from "@/hooks/useMapContext";

interface IDistributorCardProps {
  distributor: Distributor;
}

export const DistributorCard = ({ distributor }: IDistributorCardProps) => {
  const { handleSelectStore } = useMapContext();

  return (
    <Flex
      flexDir={"column"}
      rounded={"md"}
      p={4}
      mb={2}
      border={"2px solid"}
      borderColor={"gray.200"}
      _hover={{ cursor: "pointer" }}
    >
      <Flex alignItems={"center"}>
        <Text fontWeight={"bold"}>{distributor.name}</Text>
        {distributor.distance && (
          <Text ml={2} color={"gray.500"} fontSize={"sm"}>
            {parseFloat(distributor.distance.toFixed(2))} km de distância
          </Text>
        )}
      </Flex>
      <Text textColor={"gray.500"}>{distributor.address}</Text>
      <Flex alignItems={"center"} mt={2}>
        <BsTelephoneFill />
        <Text ml={2}>{distributor.phone}</Text>
      </Flex>
      <Flex alignItems={"center"} mt={2} color={"blue.500"}>
        <BsLink />
        <ChakraLink as={Link} href={distributor.website} ml={2}>
          {distributor.website}
        </ChakraLink>
      </Flex>
      {distributor.latitude !== 0 && distributor.longitude !== 0 && (
        <Flex
          alignItems={"center"}
          mt={2}
          _hover={{
            textDecoration: "underline",
          }}
          color={"blue.500"}
        >
          <BsArrow90DegLeft />
          <Text ml={2} onClick={() => handleSelectStore(distributor)}>
            mostrar no mapa
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
