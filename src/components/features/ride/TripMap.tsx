"use client";

import {
  GoogleMap,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { useRideInfoStore } from "@/stores";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = { lat: 29.7604, lng: -95.3698 }; // Houston

export default function TripMap() {
  const { ride } = useRideInfoStore();
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  // ✅ 1. Carga la API de Maps antes de usar `google`
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  // ✅ 2. Solo ejecutar cuando la API ya esté lista y haya datos de ride
  useEffect(() => {
    if (!isLoaded || !ride?.pickUpLocation || !ride?.dropOffLocation) return;

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: ride.pickUpLocation,
        destination: ride.dropOffLocation,
        waypoints: ride.stops?.map((stop) => ({ location: stop })) || [],
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  }, [isLoaded, ride]);

  // ✅ 3. Muestra un loader hasta que la API esté lista
  if (!isLoaded)
    return (
      <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white p-8 flex items-center justify-center">
        <p className="text-gray-600 font-mono text-sm sm:text-base">
          Loading map...
        </p>
      </div>
    );

  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white">
      <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-3 sm:p-4 border-b border-gray-200">
        <h4 className="text-base sm:text-lg md:text-xl font-mono font-bold text-gray-900">
          Trip Route Map
        </h4>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
}
