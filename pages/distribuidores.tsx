import dynamic from 'next/dynamic'
import MotionLayout from '@/components/MotionLayout'
import {
  Container,
  Box,
  Flex,
  Text,
  Input,
  Button,
  Select,
} from '@chakra-ui/react'
import useMapContext from '@/hooks/useMapContext'
import { AdvancedMarker, Pin, APIProvider } from '@vis.gl/react-google-maps'
import { DistributorsMap } from '@/components/DistributorsMap'
import { DISTRIBUTORS_ITEMS } from '@/context/DISTRIBUTORS_ITEMS'

const MapWithNoSSR = dynamic(
  () => import('@vis.gl/react-google-maps').then((mod) => mod.Map),
  { ssr: false },
)

const MapContainer = () => {
  const { zoom, centerLocation, distributors, filteredStores, userLocation } =
    useMapContext()

  return (
    <Box
      w={'100%'}
      h={'400px'}
      bg={'gray.100'}
      borderRadius={'md'}
      overflow={'hidden'}
    >
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
        language="pt-BR"
      >
        <MapWithNoSSR
          zoom={zoom}
          center={centerLocation}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
          fullscreenControl={false}
          disableDefaultUI={true}
          zoomControl={false}
          mapTypeControl={false}
          streetViewControl={false}
        >
          {filteredStores.length > 0 ? (
            filteredStores.map((store) => {
              if (store.latitude !== 0 && store.longitude !== 0) {
                return (
                  <AdvancedMarker
                    position={{ lat: store.latitude, lng: store.longitude }}
                    key={store.id}
                    onClick={() => {
                      console.log(store)
                    }}
                  >
                    <Pin
                      background={'blue'}
                      glyphColor={'white'}
                      borderColor={'white'}
                      scale={0.7}
                    >
                      <Box position={'relative'}>
                        <Box
                          position={'absolute'}
                          top={'-50px'}
                          bg={'white'}
                          color={'black'}
                          p={2}
                          w={'max-content'}
                          borderRadius={'md'}
                          boxShadow={'md'}
                          zIndex={1000}
                        >
                          <Text fontWeight={'bold'}>{store.name}</Text>
                        </Box>
                      </Box>
                    </Pin>
                  </AdvancedMarker>
                )
              } else {
                return null
              }
            })
          ) : (
            <>
              {distributors.map((store) => {
                if (store.latitude !== 0 && store.longitude !== 0) {
                  return (
                    <AdvancedMarker
                      position={{ lat: store.latitude, lng: store.longitude }}
                      key={store.id}
                    >
                      <Pin
                        background={'blue'}
                        glyphColor={'white'}
                        borderColor={'white'}
                        scale={0.7}
                      />
                    </AdvancedMarker>
                  )
                } else {
                  return null
                }
              })}
            </>
          )}
          {userLocation && (
            <AdvancedMarker position={userLocation}>
              <Pin
                background={'transparent'}
                glyphColor={'blue'}
                borderColor={'white'}
                scale={0.7}
              />
            </AdvancedMarker>
          )}
        </MapWithNoSSR>
      </APIProvider>
    </Box>
  )
}

const StoreLocator = () => {
  const {
    userAddress,
    handleSearch,
    handleChangeAddress,
    inputRef,
    handleResetMap,
    error,
  } = useMapContext()

  return (
    <>
      <Box
        as="form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
      >
        <Text mb={4} fontWeight={'bold'} fontSize={'2xl'} as="label">
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
          <Button mb={4} onClick={handleResetMap}>
            Limpar
          </Button>
        </Flex>
      </Box>
      {error && (
        <Text color={'red.500'} fontWeight={'bold'}>
          {error}
        </Text>
      )}
      <MapContainer />
    </>
  )
}

export default function Distribuidores() {
  const {
    combinedDistributors,
    selectedState,
    setSelectedState,
    selectedCountry,
    onCountryChange,
    selectedProductLine,
    onProductLineChange,
  } = useMapContext()
  const distributorsStates = DISTRIBUTORS_ITEMS.map(
    (distributor) => distributor.state,
  )

  const uniqueDistributorsStates = Array.from(new Set(distributorsStates))

  return (
    <MotionLayout title="Distribuidores">
      <Container maxW="container.xl" py="8">
        <Flex gap={4} flexDir={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '100%', md: '60%' }}>
            <StoreLocator />
          </Box>
          <Flex flexDir={'column'} w={{ base: '100%', md: '40%' }}>
            <Select
              placeholder="Linha de produtos"
              mb={4}
              value={selectedProductLine}
              onChange={(e) => onProductLineChange(e)}
            >
              <option value="limpoo">
                LIMPOO - Linha de Limpeza Pesada/Pós Obra
              </option>
              <option value="lotus">
                LÓTUS - Linha de Higienização e Impermeabilização de Estofados
              </option>
            </Select>
            <Select
              placeholder="Filtrar por país"
              mb={4}
              value={selectedCountry}
              onChange={(e) => onCountryChange(e)}
            >
              <option value="br">Brasil</option>
              <option value="pt">Portugal</option>
            </Select>
            {selectedCountry === 'br' && (
              <Select
                placeholder="Filtrar por estado / Loja Virtual"
                mb={4}
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {uniqueDistributorsStates.map((distributor) => (
                  <option key={distributor} value={distributor}>
                    {distributor}
                  </option>
                ))}
              </Select>
            )}
            <DistributorsMap distributors={combinedDistributors} />
          </Flex>
        </Flex>
      </Container>
    </MotionLayout>
  )
}
