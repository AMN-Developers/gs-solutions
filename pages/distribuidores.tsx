import { useState } from "react";
import MotionLayout from "@/components/MotionLayout";
import { Container, Box, Flex, Select } from "@chakra-ui/react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Marker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Distribuidores() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistributor, setSelectedDistributor] = useState("");
  const distributors = [
    {
      state: "SP",
      lat: -23.6814347,
      lng: -46.9249393,
      zoom: 7,
      cities: [
        {
          city: "São Paulo",
          lat: -23.533773,
          lng: -46.62529,
        },
        {
          city: "Guarulhos",
          lat: -22.303074,
          lng: -49.065628,
        },
      ],
      dealers: [
        {
          name: "QUICK CLEAN",
          address: "RUA TABAJARA, 124 - VILA SÃO JORGE - GUARULHOS / SP",
          phone: "(11) 2414-4145",
          website: "https://www.quickclean.com.br/",
          city: "Guarulhos",
          lat: -23.46517,
          lng: -46.52364,
          zoom: 14,
        },
        {
          name: "LOJA DO PROFISSIONAL",
          address: "Rua Guaicurus, 101 - Água Branca - São Paulo / SP",
          phone: "(11) 3863-7200",
          website: "https://www.lojadoprofissional.com.br/",
          city: "São Paulo",
          lat: -23.52348,
          lng: -46.68671,
          zoom: 14,
        },
        {
          name: "JATO SUPER",
          address: "Av. Feira De Santana, 71 – Jardim Vale Do Sol, SP",
          phone: "(12) 3931-0594",
          website: "https://www.jatosuper.com.br/",
          city: "São Paulo",
          lat: -23.25721,
          lng: -45.91123,
          zoom: 14,
        },
        {
          name: "ARTWAX",
          address: "LOJA VIRTUAL",
          phone: "(12) 3931-0594",
          website: "https://www.artwax.com.br/",
          city: "São Paulo",
          lat: 0,
          lng: 0,
        },
      ],
    },
    {
      state: "RJ",
      lat: -22.0582339,
      lng: -44.2428579,
      zoom: 8,
      cities: [
        {
          city: "Rio de Janeiro",
          lat: -23.533773,
          lng: -46.62529,
        },
      ],
      dealers: [
        {
          name: "Distribuidor 3",
          address: "Rua 3, 123",
          phone: "11 1234-5678",
          city: "Rio de Janeiro",
          lat: -23.533773,
          lng: -46.62529,
        },
      ],
    },
  ];

  let filteredDistributors = distributors.filter(
    (distributor) => distributor.state === selectedState
  );

  let filteredDistributor =
    filteredDistributors[0]?.dealers.filter(
      (dealer) => dealer.name === selectedDistributor
    ) || [];
  console.log(filteredDistributor[0]);
  const position = {
    lat:
      filteredDistributor[0]?.lat || filteredDistributors[0]?.lat || -23.533773,
    lng:
      filteredDistributor[0]?.lng || filteredDistributors[0]?.lng || -46.62529,
  };
  return (
    <MotionLayout title="Distribuidores">
      <APIProvider
        apiKey={
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as unknown as string
        }
      >
        <Container maxW="container.xl" px={0} py={4}>
          <Flex gap={4}>
            <Box height={"lg"} width={"50%"} rounded={"md"} overflow={"hidden"}>
              <Map
                zoom={
                  filteredDistributor[0]?.zoom ||
                  filteredDistributors[0]?.zoom ||
                  4
                }
                center={position}
                mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
              >
                {filteredDistributors[0]?.dealers.map((dealer) => {
                  return (
                    <AdvancedMarker
                      key={dealer.name}
                      position={{ lat: dealer.lat, lng: dealer.lng }}
                    >
                      <Pin
                        background={"blue"}
                        borderColor={"green"}
                        glyphColor={"white"}
                      />
                      <InfoWindow>
                        <div>
                          <h1>{dealer.name}</h1>
                          <p>{dealer.address}</p>
                          <p>{dealer.phone}</p>
                          <p>{dealer.website}</p>
                        </div>
                      </InfoWindow>
                    </AdvancedMarker>
                  );
                })}
              </Map>
            </Box>
            <Box w="50%">
              <Flex flexDir={"column"} gap={4}>
                <Select
                  placeholder="Selecione um estado"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  {distributors.map((state) => {
                    return <option key={state.state}>{state.state}</option>;
                  })}
                </Select>
                {selectedState && (
                  <Select
                    placeholder="Selecione um distribuidor"
                    value={selectedDistributor}
                    onChange={(e) => setSelectedDistributor(e.target.value)}
                  >
                    {filteredDistributors[0]?.dealers.map((dealer) => {
                      return (
                        <option key={dealer.address}>{dealer.name}</option>
                      );
                    })}
                  </Select>
                )}
              </Flex>
            </Box>
          </Flex>
        </Container>
      </APIProvider>
    </MotionLayout>
  );
}
