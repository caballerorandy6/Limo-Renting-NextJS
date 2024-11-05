"use client";

import Car2Icon from "@/components/my-components/icons/Car2Icon";
import CarSeatIcon from "@/components/my-components/icons/CarSeatIcon";
import MinibarIcon from "@/components/my-components/icons/MinibarIcon";
import { Carousel1 } from "@/components/my-components/home/Carousel1";
import { Carousel2 } from "@/components/my-components/home/Carousel2";
import { Carousel3 } from "@/components/my-components/home/Carousel3";
import { FeaturedVehiclesCardProps } from "@/lib/interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ViewFullFleetButton from "@/components/my-components/buttons/ViewFullFleetButton";
import Heading from "../global-components/Heading";
import Heading3 from "@/components/my-components/global-components/Heading3";

export const featuredVehiclesArray: FeaturedVehiclesCardProps[] = [
  {
    carousel: <Carousel1 />,
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
    carousel: <Carousel2 />,
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
    carousel: <Carousel3 />,
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

const FeaturedVehicles = () => {
  return (
    <section id="featured-vehicles" className="py-16 bg-gray-100">
      <div className="w-8/12 mx-auto">
        <Heading>Feutered Vehicles</Heading>
        <div className="flex justify-between items-center">
          <Heading3>Discover Our Luxury Fleet</Heading3>
          <ViewFullFleetButton>View Full Fleet</ViewFullFleetButton>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {featuredVehiclesArray.map((item, index) => (
            <Card key={index} className="bg-white w-4/12">
              <CardHeader>
                <div className="flex justify-center">{item.carousel}</div>
                <CardTitle className="font-sans text-xl font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="flex items-center gap-2 font-sans mb-2">
                    <span>{item.carIcon}</span>
                    <span className=" font-semibold">{`${item.exterior}:`}</span>
                    <span>{item.color1}</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans mb-2">
                    <span>{item.carSeatIcon}</span>
                    <span className=" font-semibold">{`${item.interior}:`}</span>
                    <span>{item.color2}</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans">
                    <span>{item.minibarIcon}</span>
                    <span className=" font-semibold">{`${item.features}:`}</span>
                    <span>{item.featuresObject}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
