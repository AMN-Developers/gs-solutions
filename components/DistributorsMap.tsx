import { Flex } from "@chakra-ui/react";
import { DistributorCard } from "./DistributorCard";
import { Distributor } from "@/context/DISTRIBUTORS_ITEMS";

interface IDistributorMapProps {
  distributors: Distributor[];
  selectedDistributor: Distributor | null;
  onSelect: (distributor: Distributor) => void;
}

export const DistributorsMap = ({ distributors, selectedDistributor, onSelect }: IDistributorMapProps) => {
  return (
    <Flex flexDir={"column"} overflowY={"auto"} w={"100%"}>
      {distributors.map((store) => (
        <DistributorCard
          key={store.id}
          distributor={store}
          isSelected={selectedDistributor?.id === store.id}
          onSelect={onSelect}
        />
      ))}
    </Flex>
  );
};
