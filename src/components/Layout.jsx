import DataTable from "./DataTable";
import MapView from "./MapView";

const Layout = ({ data, selectedId, setSelectedId }) => {
  return (
    <div className="app-container">
      <div className="table-container">
        <div className="header-title">Geo Data Dashboard</div>

        <DataTable
          data={data}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>

      <div className="map-container">
        <MapView
          data={data}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>
    </div>
  );
};

export default Layout;
