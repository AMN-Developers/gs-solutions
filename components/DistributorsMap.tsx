import { Flex } from "@chakra-ui/react";
import { DistributorCard } from "./DistributorCard";
import { Distributor } from "@/context/DISTRIBUTORS_ITEMS";

interface IDistributorMapProps {
  distributors: Distributor[];
}

export const DistributorsMap = ({ distributors }: IDistributorMapProps) => {
  return (
    <Flex flexDir={"column"} overflowY={"scroll"} h={"sm"} pr={4} w={"100%"}>
      {distributors.map((store) => (
        <DistributorCard key={store.id} distributor={store} />
      ))}
    </Flex>
  );
};
