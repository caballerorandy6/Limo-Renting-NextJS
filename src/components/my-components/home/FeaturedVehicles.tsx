"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import CarIcon from "@/components/my-components/icons/CarIcon";
import { featuredVehiclesArray } from "@/lib/utils";

const FeaturedVehicles = () => {
  return (
    <section id="featured-vehicles" className="py-16 bg-gray-200">
      <div className="w-8/12 mx-auto ">
        <div className="flex gap-4">
          <CarIcon />
          <span className="font-mono font-bold text-xl">Featured Vehicles</span>
        </div>
        <h1 className="text-black text-5xl font-sans font-bold mt-2 mb-4">
          The Best Limo Service
        </h1>
        <div className="flex">
          {featuredVehiclesArray.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
