"use client";

//Custom Components
import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";
import ViewFullFleetButton from "@/components/shared/buttons/ViewFullFleetButton";
import Vehicle from "@/components/features/fleet/Vehicle";

//Arrays
import { featuredVehiclesArray } from "@/components/features/fleet/Vehicles";

const FeaturedVehicles = () => {
  return (
    <div id="featured-vehicles" className="py-16 bg-gray-100">
      <div className="w-10/12 mx-auto">
        <Heading>Featured Vehicles</Heading>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <Heading3>Discover Our Luxury Fleet</Heading3>
          <div className="w-full flex justify-start lg:justify-end">
            <ViewFullFleetButton>View Full Fleet</ViewFullFleetButton>
          </div>
        </div>
        <div className="w-full sm:gap-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8 mx-auto justify-center">
          {featuredVehiclesArray.slice(0, 3).map((item) => (
            <Vehicle
              key={item.title}
              imagesCarousel={item.imagesCarousel}
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
