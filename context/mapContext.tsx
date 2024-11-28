import { ChangeEvent, createContext, useState, useRef, useMemo, useCallback, useEffect } from "react";
import { Distributor, DISTRIBUTORS_ITEMS } from "./DISTRIBUTORS_ITEMS";
import { useAutocomplete } from "@vis.gl/react-google-maps";
interface MapContextData {
  zoom: number;
  centerLocation: {
    lat: number;
    lng: number;
  };
  userAddress: string;
  setUserAddress: (address: string) => void;
  filteredStores: Distributor[];
  distributors: Distributor[];
  handleSearch: () => void;
  selectedStore: Distributor | null;
  setSelectedStore: (store: Distributor | null) => void;
  handleChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  userLocation: {
    lat: number;
    lng: number;
  } | null;
  inputRef: React.RefObject<HTMLInputElement>;
  handleSelectStore: (store: Distributor) => void;
  handleResetMap: () => void;
  combinedDistributors: Distributor[];
  setCenterLocation: (location: { lat: number; lng: number }) => void;
  setZoom: (zoom: number) => void;
  setUserLocation: (location: { lat: number; lng: number } | null) => void;
  error: string;
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedProductLine: string;
  setSelectedProductLine: (productLine: string) => void;
  onCountryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onProductLineChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  storeType: string;
  onStoreTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface MapProviderProps {
  children: React.ReactNode;
}

export const MapContext = createContext({} as MapContextData);

const MapProvider = ({ children }: MapProviderProps) => {
  const initialCenterLocation = {
    br: {
      lat: -14.235004,
      lng: -51.925282,
    },
    pt: {
      lat: 39.399872,
      lng: -8.224454,
    },
  };
  const [zoom, setZoom] = useState(3.5);
  const [userAddress, setUserAddress] = useState("");
  const [filteredStores, setFilteredStores] = useState<Distributor[]>([]);
  const [selectedStore, setSelectedStore] = useState<Distributor | null>(null);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("br");
  const [selectedProductLine, setSelectedProductLine] = useState("");
  const [storeType, setStoreType] = useState<string>("");
  const [centerLocation, setCenterLocation] = useState(
    initialCenterLocation[selectedCountry as unknown as "br" | "pt"]
  );
  const distributors = useMemo(() => DISTRIBUTORS_ITEMS, []);
  const onPlaceChanged = (place: any) => {
    if (place) {
      setUserAddress(place.formatted_address || place.name);
    }

    inputRef.current && inputRef.current.focus();
  };

  const onCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedState("");
    setSelectedCountry(e.target.value);
    setCenterLocation(initialCenterLocation[e.target.value as unknown as "br" | "pt"]);
  };

  const onProductLineChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProductLine(e.target.value);
  };

  const onStoreTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStoreType(e.target.value);
  };

  useAutocomplete({
    inputField: inputRef && inputRef.current,
    onPlaceChanged,
  });

  const handleSearch = async () => {
    try {
      if (error) {
        setError("");
      }

      const geocodingResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(userAddress)}&key=${
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as unknown as string
        }`
      );

      const geocodingData = await geocodingResponse.json();

      if (geocodingData.results && geocodingData.results.length > 0) {
        const location = geocodingData.results[0].geometry.location;

        // Filter stores within 450km range and calculate distances
        const filtered = DISTRIBUTORS_ITEMS.filter((store) => {
          const distance = calculateDistance(location.lat, location.lng, store.latitude, store.longitude);
          store.distance = distance; // Add distance to each store
          return distance <= 450;
        });

        if (filtered.length === 0) {
          setError("Não encontramos nenhum distribuidor próximo a sua localização.");
          return;
        }

        // Sort by distance and get the closest store
        const sortedStores = filtered.sort((a, b) => (a.distance || 0) - (b.distance || 0));
        const closestStore = sortedStores[0];

        setFilteredStores(sortedStores);
        setCenterLocation({ lat: closestStore.latitude, lng: closestStore.longitude });
        setUserLocation(location);
        setZoom(10);
        setSelectedStore(closestStore); // Select the closest store
      } else {
        setError("Não foi possível encontrar o endereço informado.");
      }
    } catch (error) {
      console.error("Error in handleSearch:", error);
      setError("Ocorreu um erro ao buscar o endereço.");
    }
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAddress(e.target.value);
  };

  const handleSelectStore = (store: Distributor) => {
    setCenterLocation({
      lat: store.latitude,
      lng: store.longitude,
    });
    setZoom(14);
  };

  const handleResetMap = () => {
    setUserAddress("");
    setFilteredStores([]);
    setCenterLocation(initialCenterLocation[selectedCountry as "br" | "pt"]);
    setZoom(3.5);
    setSelectedStore(null);
    setUserLocation(null);
    setError("");
    setSelectedState("");
    setSelectedProductLine("");
    setStoreType("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const filteredDistributors = useMemo(() => {
    return DISTRIBUTORS_ITEMS.filter((distributor) => {
      const matchesCountry = !selectedCountry || distributor.country === selectedCountry;
      const matchesState = !selectedState || distributor.state === selectedState;
      const matchesProductLine = !selectedProductLine || distributor.product_line.includes(selectedProductLine);
      return matchesCountry && matchesState && matchesProductLine;
    });
  }, [selectedCountry, selectedState, selectedProductLine]);

  const combinedDistributors = useMemo(() => {
    if (filteredStores.length > 0) {
      return filteredStores;
    }
    return filteredDistributors;
  }, [filteredStores, filteredDistributors]);

  const filterDistributors = useCallback(() => {
    let filtered = [...DISTRIBUTORS_ITEMS];

    // Filter by product line
    if (selectedProductLine) {
      filtered = filtered.filter((store) => store.product_line.includes(selectedProductLine));
    }

    // Filter by country
    if (selectedCountry) {
      filtered = filtered.filter((store) => store.country === selectedCountry);
    }

    // Filter by state
    if (selectedState) {
      filtered = filtered.filter((store) => store.state === selectedState);
    }

    // Filter by store type
    if (storeType) {
      filtered = filtered.filter((store) => {
        const isVirtual = store.address === "LOJA VIRTUAL" || store.state === "LOJA VIRTUAL";
        return storeType === "virtual" ? isVirtual : !isVirtual;
      });
    }

    setFilteredStores(filtered);
  }, [selectedProductLine, selectedCountry, selectedState, storeType]);

  useEffect(() => {
    filterDistributors();
  }, [filterDistributors]);

  return (
    <MapContext.Provider
      value={{
        zoom,
        centerLocation,
        userAddress,
        setUserAddress,
        filteredStores,
        distributors,
        handleSearch,
        selectedStore,
        setSelectedStore,
        handleChangeAddress,
        userLocation,
        inputRef,
        handleSelectStore,
        handleResetMap,
        combinedDistributors,
        setCenterLocation,
        setZoom,
        setUserLocation,
        error,
        selectedState,
        setSelectedState,
        selectedCountry,
        setSelectedCountry,
        onCountryChange,
        selectedProductLine,
        setSelectedProductLine,
        onProductLineChange,
        storeType,
        onStoreTypeChange,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
