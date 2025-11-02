"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MyCarousel } from "@/components/shared/ui-common/MyCarousel";
import Car2Icon from "@/components/shared/icons/Car2Icon";
import CarSeatIcon from "@/components/shared/icons/CarSeatIcon";
import MinibarIcon from "@/components/shared/icons/MinibarIcon";
import { VehicleApiResponse } from "@/types/fleet";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface VehicleProps {
  vehicle: VehicleApiResponse;
}

const Vehicle = ({ vehicle }: VehicleProps) => {
  return (
    <Card className="w-full flex flex-col overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg group">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-100">
        <div className="transform transition-transform duration-300 group-hover:scale-105">
          <MyCarousel images={vehicle.images} />
        </div>
      </div>

      {/* Content Section */}
      <CardHeader className="pb-3 pt-5 px-5">
        <CardTitle className="font-sans text-xl md:text-2xl font-bold text-gray-900 line-clamp-2 leading-tight">
          {vehicle.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-5 pb-6 pt-2">
        <div className="space-y-3">
          {/* Passengers */}
          <div className="flex items-center gap-3 font-sans text-gray-700">
            <span className="text-gray-500 flex-shrink-0">
              <Car2Icon />
            </span>
            <span className="font-semibold text-sm">Passengers:</span>
            <span className="text-sm ml-auto">
              {vehicle.quantityPassengers} pax
            </span>
          </div>

          {/* Baggage */}
          <div className="flex items-center gap-3 font-sans text-gray-700">
            <span className="text-gray-500 flex-shrink-0">
              <CarSeatIcon />
            </span>
            <span className="font-semibold text-sm">Baggage:</span>
            <span className="text-sm ml-auto">
              {vehicle.quantityBaggage} bags
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 font-sans pt-2 border-t border-gray-200">
            <span className="text-gray-500 flex-shrink-0">
              <MinibarIcon />
            </span>
            <span className="font-semibold text-sm">Price:</span>
            <span className="text-sm font-bold text-red-600 ml-auto">
              ${vehicle.pricePerHour}/hour
            </span>
          </div>

          {/* View Details Button */}
          <div className="pt-4">
            <Link href={`/fleet/${vehicle.id}`} className="w-full">
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition-colors duration-200 font-sans"
                variant="default"
              >
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Vehicle;
