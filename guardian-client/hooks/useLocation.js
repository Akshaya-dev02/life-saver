"use client";

import { useEffect, useState } from "react";
import socket from "@/lib/socket";

export default function useLocation() {
  const [location, setLocation] = useState({
    lat: 17.385,
    lng: 78.4867,
    permission: false,
    loading: true,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("geolocation" in navigator)) {
      console.warn("Geolocation is not supported.");

    SetLocation({
        lat: 17.385,
        lng: 78.4867,
        permission: false,
        loading: false,
      });

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const data = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          permission: true,
          loading: false,
        };

        setLocation(data);

        socket.emit("location-update", {
          latitude: data.lat,
          longitude: data.lng,
          timestamp: Date.now(),
        });
      },

      () => {
        console.warn("Location permission denied.");

        setLocation({
          lat: 17.385,
          lng: 78.4867,
          permission: false,
          loading: false,
        });
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return location;
}