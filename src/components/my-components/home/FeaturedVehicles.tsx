"use client";

import Heading from "@/components/my-components/global-components/Heading";
import Heading3 from "@/components/my-components/global-components/Heading3";
import ViewFullFleetButton from "@/components/my-components/buttons/ViewFullFleetButton";
import Vehicle from "../fleet/Vehicle";
import { featuredVehiclesArray } from "../fleet/Vehicles";

const FeaturedVehicles = () => {
  return (
    <div id="featured-vehicles" className="py-16 bg-gray-100">
      <div className="w-10/12 mx-auto">
        <Heading>Feutered Vehicles</Heading>
        <div className="flex justify-between items-center">
          <Heading3>Discover Our Luxury Fleet</Heading3>
          <ViewFullFleetButton>View Full Fleet</ViewFullFleetButton>
        </div>
        <div className="flex justify-center mx-auto gap-16 mt-4 w-10/12">
          {featuredVehiclesArray.slice(0, 3).map((item) => (
            <Vehicle
              key={item.title}
              carousel={item.carousel}
              title={item.title}
              carIcon={item.carIcon}
              exterior={item.exterior}
              color1={item.color1}
              carSeatIcon={item.carSeatIcon}
              interior={item.interior}
              color2={item.color2}
              minibarIcon={item.minibarIcon}
              features={item.features}
              featuresObject={item.featuresObject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedVehicles;
