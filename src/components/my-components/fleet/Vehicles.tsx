"use client";

import Vehicle from "@/components/my-components/fleet/Vehicle";
import Car2Icon from "@/components/my-components/icons/Car2Icon";
import CarSeatIcon from "@/components/my-components/icons/CarSeatIcon";
import MinibarIcon from "@/components/my-components/icons/MinibarIcon";
import { Carousel1 } from "@/components/my-components/fleet/Carousel1";
import { Carousel2 } from "@/components/my-components/fleet/Carousel2";
import { Carousel3 } from "@/components/my-components/fleet/Carousel3";
import { Carousel4 } from "@/components/my-components/fleet/Carousel4";
import { Carousel6 } from "@/components/my-components/fleet/Carousel6";
import { Carousel11 } from "@/components/my-components/fleet/Carousel11";
import { Carousel14 } from "@/components/my-components/fleet/Carousel14";
import { FeaturedVehiclesCardProps } from "@/lib/interfaces";

export const featuredVehiclesArray: FeaturedVehiclesCardProps[] = [
  {
    carousel: <Carousel1 />,
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
    carousel: <Carousel2 />,
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
    carousel: <Carousel3 />,
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
    carousel: <Carousel4 />,
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
    carousel: <Carousel6 />,
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
    carousel: <Carousel11 />,
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
    carousel: <Carousel14 />,
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
    <div className="flex w-10/12 flex-wrap gap-10 justify-center mx-auto mt-10 ">
      {featuredVehiclesArray.map((item, index) => (
        <Vehicle
          key={index}
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
  );
};

export default Vehicles;
