"use client";

import { Map } from "@vis.gl/react-google-maps";

//Custom Components
import PoiMarkers from "@/components/features/contact/ContactPoiMarkers";

const MyMap = () => {
  const myMapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

  return (
    <div className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Map
          defaultZoom={16}
          defaultCenter={{ lat: 25.80381, lng: -80.31653 }}
          mapId={myMapId}
          className="w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] rounded-lg shadow-lg"
        >
          <PoiMarkers />
        </Map>
      </div>
    </div>
  );
};

export default MyMap;
