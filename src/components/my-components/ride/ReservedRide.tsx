import React, { useEffect, useRef } from "react";

const GoogleMapsDistanceMatrix = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<HTMLPreElement>(null);
  const responseRef = useRef<HTMLPreElement>(null);
  const markersArray = useRef<google.maps.Marker[]>([]);

  const deleteMarkers = () => {
    markersArray.current.forEach((marker) => marker.setMap(null));
    markersArray.current = [];
  };

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      const bounds = new google.maps.LatLngBounds();
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 55.53, lng: 9.4 },
        zoom: 10,
      });

      const geocoder = new google.maps.Geocoder();
      const service = new google.maps.DistanceMatrixService();

      // Build the request
      const origin1 = { lat: 55.93, lng: -3.118 };
      const origin2 = "Greenwich, England";
      const destinationA = "Stockholm, Sweden";
      const destinationB = { lat: 50.087, lng: 14.421 };

      const request = {
        origins: [origin1, origin2],
        destinations: [destinationA, destinationB],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      };

      if (requestRef.current) {
        requestRef.current.innerText = JSON.stringify(request, null, 2);
      }

      service.getDistanceMatrix(request).then((response) => {
        if (responseRef.current) {
          responseRef.current.innerText = JSON.stringify(response, null, 2);
        }

        const originList = response.originAddresses;
        const destinationList = response.destinationAddresses;

        deleteMarkers();

        const showGeocodedAddressOnMap = (asDestination: boolean) => {
          return ({ results }: google.maps.GeocoderResponse) => {
            map.fitBounds(bounds.extend(results[0].geometry.location));
            markersArray.current.push(
              new google.maps.Marker({
                map,
                position: results[0].geometry.location,
                label: asDestination ? "D" : "O",
              })
            );
          };
        };

        for (let i = 0; i < originList.length; i++) {
          const results = response.rows[i].elements;

          geocoder
            .geocode({ address: originList[i] })
            .then(showGeocodedAddressOnMap(false));

          for (let j = 0; j < results.length; j++) {
            geocoder
              .geocode({ address: destinationList[j] })
              .then(showGeocodedAddressOnMap(true));
          }
        }
      });
    };

    initMap();
  }, []);

  return (
    <div>
      <div
        id="map"
        ref={mapRef}
        style={{ width: "100%", height: "400px", marginBottom: "20px" }}
      ></div>
      <pre id="request" ref={requestRef}></pre>
      <pre id="response" ref={responseRef}></pre>
    </div>
  );
};

export default GoogleMapsDistanceMatrix;
