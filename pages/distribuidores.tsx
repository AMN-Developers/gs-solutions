import MotionLayout from "@/components/MotionLayout";
import { Container, Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import MapProvider from "@/context/mapContext";
import useMapContext from "@/hooks/useMapContext";
import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { DistributorCard } from "@/components/DistributorCard";
import { randomUUID } from "crypto";

const MapContainer = () => {
  const { zoom, centerLocation, distributors, filteredStores, userLocation } =
    useMapContext();

  return (
    <Box
      w={"100%"}
      h={"400px"}
      bg={"gray.100"}
      borderRadius={"md"}
      overflow={"hidden"}
    >
      <Map
        zoom={zoom}
        center={centerLocation}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
        fullscreenControl={false}
        zoomControl={false}
        mapTypeControl={false}
        streetViewControl={false}
      >
        {filteredStores.length > 0 ? (
          filteredStores.map((store) => (
            <AdvancedMarker
              position={{ lat: store.latitude, lng: store.longitude }}
              key={store.id}
            >
              <Pin
                background={"blue"}
                glyphColor={"white"}
                borderColor={"white"}
                scale={0.7}
              />
            </AdvancedMarker>
          ))
        ) : (
          <>
            {distributors.map((store) => (
              <AdvancedMarker
                position={{ lat: store.latitude, lng: store.longitude }}
                key={store.id}
              >
                <Pin
                  background={"blue"}
                  glyphColor={"white"}
                  borderColor={"white"}
                  scale={0.7}
                />
              </AdvancedMarker>
            ))}
          </>
        )}
        {userLocation && (
          <AdvancedMarker position={userLocation}>
            <Pin
              background={"transparent"}
              glyphColor={"blue"}
              borderColor={"white"}
              scale={0.7}
            />
          </AdvancedMarker>
        )}
      </Map>
    </Box>
  );
};

const StoreLocator = () => {
  const { userAddress, handleSearch, handleChangeAddress, inputRef } =
    useMapContext();

  return (
    <>
      <Box
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <Text mb={4} fontWeight={"bold"} fontSize={"2xl"} as="label">
          Encontre o distribuidor da G&S mais próximo de você!
        </Text>
        <Flex gap={4}>
          <Input
            placeholder="Digite seu endereço..."
            value={userAddress}
            onChange={handleChangeAddress}
            ref={inputRef}
            mb={4}
          />
          <Button mb={4} type="submit">
            Buscar
          </Button>
        </Flex>
      </Box>
      <MapContainer />
    </>
  );
};

export default function Distribuidores() {
  const { combinedDistributors } = useMapContext();

  return (
    <MotionLayout title="Distribuidores">
      <MapProvider>
        <Container maxW="container.xl" py="8">
          <Flex gap={4}>
            <Box w={"60%"}>
              <StoreLocator />
            </Box>
            <Flex flexDir={"column"}>
              <Flex flexDir={"column"} overflowY={"scroll"} maxH={"lg"} pr={4}>
                {combinedDistributors.map((distributor, index) => {
                  return (
                    <DistributorCard
                      distributor={distributor}
                      key={`${distributor.id}-${index}-${distributor.distance}`}
                    />
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </MapProvider>
    </MotionLayout>
  );
}
