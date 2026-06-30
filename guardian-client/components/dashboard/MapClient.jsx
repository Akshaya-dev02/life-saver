"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useMemo } from "react";
import useLocation from "@/hooks/useLocation";

export default function MapClient() {
  const location = useLocation();

  const markerIcon = useMemo(() => {
    return new L.Icon({
      iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  }, []);

  if (!location) {
    return (
      <div className="bg-white h-[500px] rounded-xl flex items-center justify-center">
        Loading...
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
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[location.lat, location.lng]} icon={markerIcon}>
        <Popup>You are here 📍</Popup>
      </Marker>
    </MapContainer>
  );
}