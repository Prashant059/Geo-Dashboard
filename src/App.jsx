import Layout from "./components/Layout";
import { useGeoData } from "./hooks/useGeoData";

function App() {
  const { data, selectedId, setSelectedId } = useGeoData();

  return (
    <Layout
      data={data}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />
  );
}

export default App;
