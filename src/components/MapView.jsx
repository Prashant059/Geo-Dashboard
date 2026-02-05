import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom hook to zoom to selected marker
const MapFocus = ({ item }) => {
  const map = useMap();

  if (item) {
    map.setView([item.latitude, item.longitude], 10, {
      animate: true,
    });
  }

  return null;
};

// Default icon
const defaultIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
});

// Highlighted icon
const activeIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  iconSize: [32, 45],
});

const MapView = ({ data, selectedId, onSelect }) => {
  const selectedItem = data.find((d) => d.id === selectedId);

  return (
    <MapContainer center={[23, 78]} zoom={5} className="leaflet-container">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {selectedItem && <MapFocus item={selectedItem} />}

      {data.map((item) => (
        <Marker
          key={item.id}
          position={[item.latitude, item.longitude]}
          icon={selectedId === item.id ? activeIcon : defaultIcon}
          eventHandlers={{
            click: () => onSelect(item.id),
          }}
        >
          <Popup>
            <b>{item.projectName}</b>
            <br />
            Status: {item.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
