import { useEffect, useState } from "react";
import { fetchGeoData } from "../api/mockApi";

export const useGeoData = () => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchGeoData().then((res) => setData(res.data));
  }, []);

  return {
    data,
    selectedId,
    setSelectedId,
  };
};
