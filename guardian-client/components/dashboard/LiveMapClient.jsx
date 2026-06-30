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

export default function LiveMapClient() {
  const location = useLocation();

  if (location.loading) {
    return (
      <div className="bg-white h-[500px] rounded-xl shadow flex items-center justify-center">
        Getting your location...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      {!location.permission && (
        <div className="bg-yellow-100 text-yellow-800 text-center py-3 font-medium">
          Location permission denied. Showing default location.
        </div>
      )}

      <MapContainer
        center={[location.lat, location.lng]}
        zoom={15}
        className="h-[500px] w-full"
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[location.lat, location.lng]}
          icon={markerIcon}
        >
          <Popup>
            {location.permission
              ? "Your Current Location"
              : "Default Location"}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}