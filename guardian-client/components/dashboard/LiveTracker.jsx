"use client";

import { useEffect, useState } from "react";
import socket from "@/lib/socket";

export default function LiveTracker() {

  const [location, setLocation] = useState(null);
  const [previousLocation, setPreviousLocation] = useState(null);
  const [status, setStatus] = useState("Waiting...");

  useEffect(() => {

    socket.on("live-location", (data) => {

      if (location) {

        setPreviousLocation(location);

        if (
          location.latitude !== data.latitude ||
          location.longitude !== data.longitude
        ) {
          setStatus("Moving 🚶");
        } else {
          setStatus("Stationary 🛑");
        }
      }

      setLocation(data);

    });

    return () => {

      socket.off("live-location");

    };

  }, [location]);

  return (

    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-gray-800">

          🌍 Live GPS Tracker

        </h2>

        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">

          LIVE

        </span>

      </div>

      {

        location ?

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="bg-gray-50 rounded-xl p-4">

            <p className="text-gray-500 text-sm">

              Latitude

            </p>

            <h3 className="text-xl font-bold text-blue-600">

              {location.latitude}

            </h3>

          </div>

          <div className="bg-gray-50 rounded-xl p-4">

            <p className="text-gray-500 text-sm">

              Longitude

            </p>

            <h3 className="text-xl font-bold text-blue-600">

              {location.longitude}

            </h3>

          </div>

          <div className="bg-gray-50 rounded-xl p-4">

            <p className="text-gray-500 text-sm">

              Updated

            </p>

            <h3 className="text-lg font-semibold text-gray-800">

              {new Date(location.timestamp).toLocaleTimeString()}

            </h3>

          </div>

          <div className="bg-gray-50 rounded-xl p-4">

            <p className="text-gray-500 text-sm">

              Status

            </p>

            <h3 className="text-lg font-bold text-green-600">

              {status}

            </h3>

          </div>

          <div className="bg-gray-50 rounded-xl p-4">

            <p className="text-gray-500 text-sm">

              Accuracy

            </p>

            <h3 className="text-lg font-bold text-purple-600">

              {location.accuracy ? `${location.accuracy} m` : "Unknown"}

            </h3>

          </div>

          <div className="bg-gray-50 rounded-xl p-4">

            <p className="text-gray-500 text-sm">

              Previous Position

            </p>

            <h3 className="text-sm font-semibold text-gray-700">

              {

                previousLocation ?

                `${previousLocation.latitude.toFixed(5)}, ${previousLocation.longitude.toFixed(5)}`

                :

                "No Previous Location"

              }

            </h3>

          </div>

        </div>

        :

        <div className="text-center py-12">

          <div className="text-6xl mb-4">

            📡

          </div>

          <h2 className="text-xl font-bold text-gray-700">

            Waiting for GPS Signal...

          </h2>

          <p className="text-gray-500 mt-2">

            Please allow location permission to start live tracking.

          </p>

        </div>

      }

    </div>

  );

}