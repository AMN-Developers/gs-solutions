import dynamic from "next/dynamic";
import MotionLayout from "@/components/MotionLayout";
import {
  Container,
  Box,
  Flex,
  Text,
  Input,
  Button,
  Select,
  SimpleGrid,
  Grid,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  AlertTitle,
  Stack,
  Collapse,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon, RepeatIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import useMapContext from "@/hooks/useMapContext";
import { AdvancedMarker, Pin, APIProvider } from "@vis.gl/react-google-maps";
import { DistributorsMap } from "@/components/DistributorsMap";
import { Distributor, DISTRIBUTORS_ITEMS } from "@/context/DISTRIBUTORS_ITEMS";
import { useEffect, useState } from "react";
import { BsTelephoneFill, BsFillPinMapFill } from "react-icons/bs";

const MapWithNoSSR = dynamic(() => import("@vis.gl/react-google-maps").then((mod) => mod.Map), { ssr: false });

interface MapContainerProps {
  selectedDistributor: Distributor | null;
  onMarkerClick: (distributor: Distributor) => void;
}

const MapContainer = ({ selectedDistributor, onMarkerClick }: MapContainerProps) => {
  const { zoom, centerLocation, distributors, filteredStores, userLocation } = useMapContext();

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <MapWithNoSSR
        zoom={zoom}
        center={centerLocation}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
        disableDefaultUI={true}
        zoomControl={true}
      >
        {(filteredStores.length > 0 ? filteredStores : distributors).map((store) => {
          if (store.latitude === 0 && store.longitude === 0) return null;

          const isSelected = selectedDistributor?.id === store.id;

          return (
            <AdvancedMarker
              position={{ lat: store.latitude, lng: store.longitude }}
              key={store.id}
              onClick={() => onMarkerClick(store)}
            >
              <Box position="relative">
                <Pin background="blue" glyphColor="white" borderColor="white" scale={isSelected ? 1.2 : 1} />

                {isSelected && (
                  <Box
                    position="absolute"
                    top="-130px"
                    left="50%"
                    transform="translateX(-50%)"
                    bg="white"
                    p={3}
                    borderRadius="md"
                    boxShadow="lg"
                    minW="250px"
                    zIndex={1000}
                  >
                    <Text fontWeight="bold" mb={1}>
                      {store.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600" mb={1}>
                      {store.address}
                    </Text>
                    {store.phone && (
                      <Flex align="center" fontSize="sm" color="gray.600" mb={1}>
                        <BsTelephoneFill size={12} style={{ marginRight: "6px" }} />
                        {store.phone}
                      </Flex>
                    )}
                    {store.distance && (
                      <Flex align="center" fontSize="sm" color="blue.500">
                        <BsFillPinMapFill size={12} style={{ marginRight: "6px" }} />
                        {store.distance.toFixed(2)} km
                      </Flex>
                    )}
                  </Box>
                )}
              </Box>
            </AdvancedMarker>
          );
        })}

        {userLocation && (
          <AdvancedMarker position={userLocation}>
            <Pin background="green.500" glyphColor="white" borderColor="white" scale={1} />
          </AdvancedMarker>
        )}
      </MapWithNoSSR>
    </APIProvider>
  );
};

export default function Distribuidores() {
  const {
    combinedDistributors,
    selectedState,
    setSelectedState,
    selectedCountry,
    onCountryChange,
    selectedProductLine,
    onProductLineChange,
    userAddress,
    handleSearch,
    handleChangeAddress,
    handleResetMap,
    error,
    selectedStore,
    inputRef,
    storeType,
    onStoreTypeChange,
  } = useMapContext();

  const [selectedDistributor, setSelectedDistributor] = useState<Distributor | null>(null);
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  useEffect(() => {
    if (selectedStore) {
      setSelectedDistributor(selectedStore);
    }
  }, [selectedStore]);

  return (
    <MotionLayout title="Distribuidores">
      <Container maxW="container.xl" py={4}>
        <Box mb={6}>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={4}>
            Encontre um distribuidor
          </Text>

          {/* Mobile Filter Toggle */}
          <Box display={{ base: "block", md: "none" }} mb={4}>
            <Button
              onClick={onToggle}
              width="full"
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              variant="outline"
            >
              {isOpen ? "Ocultar Filtros" : "Mostrar Filtros"}
            </Button>
          </Box>

          <Collapse in={isOpen}>
            <Stack spacing={6}>
              {/* Search Address Section - Always visible first */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
              >
                <Flex gap={4} direction={{ base: "column", md: "row" }} mb={4}>
                  <FormControl flex={1}>
                    <FormLabel>Buscar por endereço</FormLabel>
                    <Input
                      ref={inputRef}
                      placeholder="Digite um endereço para buscar distribuidores próximos..."
                      value={userAddress}
                      onChange={handleChangeAddress}
                    />
                  </FormControl>
                  <Stack direction={{ base: "row" }} spacing={2} alignSelf="flex-end">
                    <Button
                      type="submit"
                      colorScheme="blue"
                      leftIcon={<SearchIcon />}
                      isDisabled={!userAddress}
                      width={{ base: "full", md: "auto" }}
                    >
                      Buscar
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleResetMap}
                      leftIcon={<RepeatIcon />}
                      width={{ base: "full", md: "auto" }}
                    >
                      Limpar
                    </Button>
                  </Stack>
                </Flex>
              </form>

              {/* Filter Grid */}
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
                <FormControl>
                  <FormLabel>País</FormLabel>
                  <Select value={selectedCountry} onChange={onCountryChange}>
                    <option value="">Selecione um país</option>
                    <option value="br">Brasil</option>
                    <option value="pt">Portugal</option>
                  </Select>
                </FormControl>

                {selectedCountry === "br" && (
                  <FormControl>
                    <FormLabel>Estado</FormLabel>
                    <Select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                      <option value="">Todos os estados</option>
                      {Array.from(new Set(DISTRIBUTORS_ITEMS.map((d) => d.state)))
                        .filter((state) => state !== "LOJA VIRTUAL")
                        .sort()
                        .map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                    </Select>
                  </FormControl>
                )}

                <FormControl>
                  <FormLabel>Linha de produtos</FormLabel>
                  <Select value={selectedProductLine} onChange={onProductLineChange}>
                    <option value="">Todas as linhas</option>
                    <option value="limpoo">LIMPOO - Limpeza Pesada</option>
                    <option value="lotus">LÓTUS - Higienização</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Tipo de Loja</FormLabel>
                  <Select value={storeType} onChange={onStoreTypeChange}>
                    <option value="">Todas</option>
                    <option value="physical">Loja Física</option>
                    <option value="virtual">Loja Virtual</option>
                  </Select>
                </FormControl>
              </SimpleGrid>
            </Stack>
          </Collapse>

          {error && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
        </Box>

        <Grid templateColumns={{ base: "1fr", lg: "3fr 2fr" }} gap={4} height={{ base: "auto", md: "700px" }}>
          <Box
            position="relative"
            borderRadius="xl"
            overflow="hidden"
            borderWidth="1px"
            borderColor="gray.200"
            height={{ base: "400px", md: "100%" }}
          >
            <MapContainer selectedDistributor={selectedDistributor} onMarkerClick={setSelectedDistributor} />
          </Box>

          <Box
            position="relative"
            height={{ base: "400px", md: "100%" }}
            overflowY="auto"
            borderRadius="xl"
            borderWidth="1px"
            borderColor="gray.200"
            p={4}
          >
            <DistributorsMap
              distributors={combinedDistributors}
              selectedDistributor={selectedDistributor}
              onSelect={setSelectedDistributor}
            />
          </Box>
        </Grid>
      </Container>
    </MotionLayout>
  );
}
