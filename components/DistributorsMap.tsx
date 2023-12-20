import { Flex } from "@chakra-ui/react";
import { DistributorCard } from "./DistributorCard";
import { Distributor } from "@/context/DISTRIBUTORS_ITEMS";

interface IDistributorMapProps {
  distributors: Distributor[];
}

export const DistributorsMap = ({ distributors }: IDistributorMapProps) => {
  return (
    // hide scrollbar
    <Flex
      flexDir={"column"}
      overflowY={"scroll"}
      maxH={"lg"}
      pr={4}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {distributors.map((store) => (
        <DistributorCard key={store.id} distributor={store} />
      ))}
    </Flex>
  );
};
