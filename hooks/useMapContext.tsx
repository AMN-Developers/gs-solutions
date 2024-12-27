import { useContext } from "react";
import { MapContext } from "../context/mapContext";

const useMapContext = () => useContext(MapContext);

export default useMapContext;
