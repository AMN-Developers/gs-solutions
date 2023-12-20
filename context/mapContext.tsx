import { ChangeEvent, createContext, useState, useRef, useMemo } from "react";
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
}

interface MapProviderProps {
  children: React.ReactNode;
}

export const MapContext = createContext({} as MapContextData);

const MapProvider = ({ children }: MapProviderProps) => {
  const initialCenterLocation = {
    lat: -14.235004,
    lng: -51.925282,
  };
  const [zoom, setZoom] = useState(3.5);
  const [centerLocation, setCenterLocation] = useState(initialCenterLocation);
  const [userAddress, setUserAddress] = useState("");
  const [filteredStores, setFilteredStores] = useState<Distributor[]>([]);
  const [selectedStore, setSelectedStore] = useState<Distributor | null>(null);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const onPlaceChanged = (place: any) => {
    if (place) {
      console.log(place);
      setUserAddress(place.formatted_address || place.name);
    }

    inputRef.current && inputRef.current.focus();
  };

  useAutocomplete({
    inputField: inputRef && inputRef.current,
    onPlaceChanged,
  });

  const handleSearch = async () => {
    try {
      const geocodingResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          userAddress
        )}&key=${
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as unknown as string
        }`
      );

      const geocodingData = await geocodingResponse.json();

      if (geocodingData.results && geocodingData.results.length > 0) {
        const location = geocodingData.results[0].geometry.location;

        // is stores in the range of 300 km?
        const filtered = DISTRIBUTORS_ITEMS.filter((store) => {
          const distance = calculateDistance(
            location.lat,
            location.lng,
            store.latitude,
            store.longitude
          );
          return distance <= 300;
        });

        const closestStore = filtered.sort((a, b) => {
          if (a.distance && b.distance) {
            return a.distance - b.distance;
          } else {
            return 0;
          }
        });

        closestStore.sort((a, b) => {
          if (a.distance && b.distance) {
            return a.distance - b.distance;
          } else {
            return 0;
          }
        });

        if (!closestStore) {
          setError(
            "Não encontramos nenhum distribuidor próximo a sua localização."
          );
          return;
        }
        filtered.forEach((store) => {
          store.distance = calculateDistance(
            location.lat,
            location.lng,
            store.latitude,
            store.longitude
          );
        });
        setFilteredStores(filtered);
        setCenterLocation({
          lat: closestStore[0].latitude,
          lng: closestStore[0].longitude,
        });
        setUserLocation(geocodingData.results[0].geometry.location);
        setZoom(8);
      } else {
        console.error("Geocoding API did not return valid results");
      }
    } catch (error) {
      console.error("Error during geocoding:", error);
    }
  };

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
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
    setCenterLocation(initialCenterLocation);
    setZoom(3.5);
    setSelectedStore(null);
    setUserLocation(null);
    setError("");
  };

  const combinedDistributors = useMemo(() => {
    if (filteredStores.length > 0) {
      const sortedStores = filteredStores.sort((a, b) => {
        if (a.distance && b.distance) {
          return a.distance - b.distance;
        } else {
          return 0;
        }
      });

      return sortedStores;
    } else {
      return DISTRIBUTORS_ITEMS;
    }
  }, [filteredStores]);

  return (
    <MapContext.Provider
      value={{
        zoom,
        centerLocation,
        userAddress,
        setUserAddress,
        filteredStores,
        distributors: DISTRIBUTORS_ITEMS,
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
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
