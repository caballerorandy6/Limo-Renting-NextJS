"use client";

import { Map } from "@vis.gl/react-google-maps";

//Custom Components
import PoiMarkers from "@/components/features/contact/ContactPoiMarkers";

const MyMap = () => {
  const myMapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

  return (
    <Map
      defaultZoom={16}
      defaultCenter={{ lat: 25.80381, lng: -80.31653 }}
      mapId={myMapId}
      className="w-10/12 h-[60vh] mt-8 mb-16 mx-auto shadow-md"
    >
      <PoiMarkers />
    </Map>
  );
};

export default MyMap;
