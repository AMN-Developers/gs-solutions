import { Distributor } from "@/context/DISTRIBUTORS_ITEMS";
import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { BsTelephoneFill, BsLink, BsArrow90DegLeft, BsFillPinMapFill } from "react-icons/bs";
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
      w={"full"}
    >
      <Flex alignItems={"center"}>
        <Text fontWeight={"bold"}>{distributor.name}</Text>
        {distributor.distance && (
          <Flex alignItems={"center"} ml={2} color={"blue.500"}>
            <Text mr={2}>{distributor.distance.toFixed(2)} km</Text>
            <BsFillPinMapFill />
          </Flex>
        )}
      </Flex>
      <Text textColor={"gray.500"}>{distributor.address}</Text>
      {distributor.phone.length > 0 && (
        <Flex alignItems={"center"} mt={2}>
          <BsTelephoneFill />
          <Text ml={2}>{distributor.phone}</Text>
        </Flex>
      )}
      {distributor.website && (
        <Flex alignItems={"center"} mt={2} color={"blue.500"}>
          <BsLink />
          <ChakraLink as={Link} href={distributor.website} ml={2}>
            {distributor.website}
          </ChakraLink>
        </Flex>
      )}
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
