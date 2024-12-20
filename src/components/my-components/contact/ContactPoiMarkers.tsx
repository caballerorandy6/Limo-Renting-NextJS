"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import MyPin from "@/components/my-components/contact/ContactPin";
import { Circle } from "@/components/my-components/global-components/Circle";
import { locations } from "@/lib/utils";

const PoiMarkers = () => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const [circleCenter, setCircleCenter] = useState<google.maps.LatLng | null>(
    null
  );
  const clusterer = useRef<MarkerClusterer | null>(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  const handleClick = useCallback(
    (ev: google.maps.MapMouseEvent) => {
      if (!map) return;
      if (!ev.latLng) return;
      console.log("marker clicked:", ev.latLng.toString());
      map.panTo(ev.latLng);
      setCircleCenter(ev.latLng);
    },
    [map]
  );

  return (
    <>
      <Circle
        radius={800}
        center={circleCenter}
        strokeColor={"#0c4cb3"}
        strokeOpacity={1}
        strokeWeight={3}
        fillColor={"#3b82f6"}
        fillOpacity={0.3}
      />
      {locations.map((location) => (
        <AdvancedMarker
          key={location.key}
          position={location.location}
          ref={(marker) => setMarkerRef(marker, location.key)}
          clickable={true}
          onClick={handleClick}
        >
          <MyPin />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default PoiMarkers;
