"use client";

//Custom Components
import Vehicle from "@/components/features/fleet/Vehicle";
import Car2Icon from "@/components/shared/icons/Car2Icon";
import CarSeatIcon from "@/components/shared/icons/CarSeatIcon";
import MinibarIcon from "@/components/shared/icons/MinibarIcon";
import { MyCarousel } from "@/components/shared/ui-common/MyCarousel";

//Interfaces
import { FeaturedVehiclesCardProps } from "@/types/fleet";

//Arrays
import {
  featuredVehiclesImages1,
  featuredVehiclesImages2,
  featuredVehiclesImages3,
  featuredVehiclesImages4,
  featuredVehiclesImages5,
  featuredVehiclesImages6,
  featuredVehiclesImages7,
} from "@/components/features/fleet/carouselArrays";
export const featuredVehiclesArray: FeaturedVehiclesCardProps[] = [
  {
    imagesCarousel: <MyCarousel images={featuredVehiclesImages1} />,
    title: "White 20 Passenger Party Bus",
    carIcon: <Car2Icon />,
    exterior: "Exterior",
    color1: "White",
    carSeatIcon: <CarSeatIcon />,
    interior: "Interior",
    color2: "Black Leather",
    minibarIcon: <MinibarIcon />,
    features: "Features",
    featuresObject: "LED Minibar",
  },

  {
    imagesCarousel: <MyCarousel images={featuredVehiclesImages2} />,
    title: "Black 20 Passenger Party Bus",
    carIcon: <Car2Icon />,
    exterior: "Exterior",
    color1: "Black",
    carSeatIcon: <CarSeatIcon />,
    interior: "Interior",
    color2: "Black & White",
    minibarIcon: <MinibarIcon />,
    features: "Features",
    featuresObject: "Bluetooth Audio",
  },

  {
    imagesCarousel: <MyCarousel images={featuredVehiclesImages3} />,
    title: "23 Passenger Executive Bus",
    carIcon: <Car2Icon />,
    exterior: "Exterior",
    color1: "Black",
    carSeatIcon: <CarSeatIcon />,
    interior: "Interior",
    color2: "Black Leather",
    minibarIcon: <MinibarIcon />,
    features: "Features",
    featuresObject: "Bluetooth Audio",
  },

  {
    imagesCarousel: <MyCarousel images={featuredVehiclesImages4} />,
    title: "25 Passenger Party Bus",
    carIcon: <Car2Icon />,
    exterior: "Exterior",
    color1: "Black",
    carSeatIcon: <CarSeatIcon />,
    interior: "Interior",
    color2: "Black Leather",
    minibarIcon: <MinibarIcon />,
    features: "Features",
    featuresObject: "Bluetooth Audio",
  },

  {
    imagesCarousel: <MyCarousel images={featuredVehiclesImages5} />,
    title: "30 Passenger Party Bus",
    carIcon: <Car2Icon />,
    exterior: "Exterior",
    color1: "White",
    carSeatIcon: <CarSeatIcon />,
    interior: "Interior",
    color2: "Black Leather",
    minibarIcon: <MinibarIcon />,
    features: "Features",
    featuresObject: "LED Minibar",
  },

  {
    imagesCarousel: <MyCarousel images={featuredVehiclesImages6} />,
    title: "Mercedes Executive Sprinter",
    carIcon: <Car2Icon />,
    exterior: "Exterior",
    color1: "Black",
    carSeatIcon: <CarSeatIcon />,
    interior: "Interior",
    color2: "Black & White Leather",
    minibarIcon: <MinibarIcon />,
    features: "Features",
    featuresObject: "Two 40″ HD Smart TV’s",
  },

  {
    imagesCarousel: <MyCarousel images={featuredVehiclesImages7} />,
    title: "Cadillac Escalade Limo",
    carIcon: <Car2Icon />,
    exterior: "Exterior",
    color1: "White",
    carSeatIcon: <CarSeatIcon />,
    interior: "Interior",
    color2: "Black Leather",
    minibarIcon: <MinibarIcon />,
    features: "Features",
    featuresObject: "LED Minibar",
  },
];

const Vehicles = () => {
  return (
    <div className="w-10/12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8 mx-auto">
      {featuredVehiclesArray.map((item, index) => (
        <Vehicle
          key={index}
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
  );
};

export default Vehicles;
