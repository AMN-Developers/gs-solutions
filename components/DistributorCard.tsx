import { Distributor } from "@/context/DISTRIBUTORS_ITEMS";
import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { BsTelephoneFill, BsLink, BsArrow90DegLeft, BsFillPinMapFill } from "react-icons/bs";
import Link from "next/link";
import useMapContext from "@/hooks/useMapContext";

interface IDistributorCardProps {
  distributor: Distributor;
  isSelected?: boolean;
  onSelect: (distributor: Distributor) => void;
}

export const DistributorCard = ({ distributor, isSelected, onSelect }: IDistributorCardProps) => {
  const { handleSelectStore } = useMapContext();

  const handleClick = () => {
    onSelect(distributor);
    handleSelectStore(distributor);
  };

  return (
    <Flex
      flexDir="column"
      rounded="md"
      p={4}
      mb={2}
      border="2px solid"
      borderColor={isSelected ? "blue.500" : "gray.200"}
      bg={isSelected ? "blue.50" : "white"}
      _hover={{ cursor: "pointer", borderColor: "blue.500" }}
      w="full"
      onClick={handleClick}
    >
      <Flex alignItems="center">
        <Text fontWeight="bold">{distributor.name}</Text>
        {distributor.distance && (
          <Flex alignItems="center" ml={2} color="blue.500">
            <Text mr={2}>{distributor.distance.toFixed(2)} km</Text>
            <BsFillPinMapFill />
          </Flex>
        )}
      </Flex>
      <Text color="gray.500">{distributor.address}</Text>
      {distributor.phone && (
        <Flex alignItems="center" mt={2}>
          <BsTelephoneFill />
          <Text ml={2}>{distributor.phone}</Text>
        </Flex>
      )}
      {distributor.website && (
        <Flex alignItems="center" mt={2} color="blue.500">
          <BsLink />
          <ChakraLink as={Link} href={distributor.website} ml={2} target="_blank">
            {distributor.website}
          </ChakraLink>
        </Flex>
      )}
    </Flex>
  );
};
