"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import useLocation from "@/hooks/useLocation";

const markerIcon = new Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function LeafletMap() {
  const location = useLocation();

  if (
    !location ||
    location.lat === undefined ||
    location.lng === undefined
  ) {
    return (
      <div className="bg-white h-[500px] rounded-xl flex justify-center items-center">
        Getting your location...
      </div>
    );
  }

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={16}
      className="h-[500px] rounded-xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[location.lat, location.lng]}
        icon={markerIcon}
      >
        <Popup>You are here 📍</Popup>
      </Marker>
    </MapContainer>
  );
}