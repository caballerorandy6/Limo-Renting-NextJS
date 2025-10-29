"use client";

//Custom Components
import { useState } from "react";
import Link from "next/link";
import { MyCarousel } from "@/components/shared/ui-common/MyCarousel";
import PassengersIcon from "@/components/shared/icons/PassengersIcon";
import BriefcaseIcon from "@/components/shared/icons/BriefcaseIcon";
import Heading3 from "@/components/shared/ui-common/Heading3";
import RideInfoButton from "@/components/shared/buttons/RideInfoButton";

//Arrays
import { vehicles } from "@/components/features/fleet/arrays";

//Shadcn Components
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

//Store
import { useRideInfoStore } from "@/stores/rideInfoStore";

//Libs
import { ridePrice } from "@/lib/utils";

const GetVehicles = () => {
  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);
  const { duration, distance, ride } = useRideInfoStore();

  // Filtrar vehículos por cantidad de pasajeros
  const requestedPassengers = parseInt(ride.passengers || "0");
  const filteredVehicles =
    requestedPassengers > 0
      ? vehicles.filter(
          (vehicle) =>
            parseInt(vehicle.quantityPassengers) >= requestedPassengers
        )
      : vehicles;

  return (
    <div className="w-full bg-white py-8 md:py-12">
      <div className="mx-auto w-11/12 md:w-10/12">
        <Heading3>Available Vehicles</Heading3>
        <p className="text-sm md:text-base text-gray-600 font-sans mt-2 mb-6">
          {requestedPassengers > 0
            ? `Showing vehicles for ${requestedPassengers} passenger${
                requestedPassengers > 1 ? "s" : ""
              }`
            : "Choose the perfect vehicle for your journey"}
        </p>

        {filteredVehicles.length === 0 ? (
          <div className="text-center py-12 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-lg font-mono text-red-600 mb-2">
              No vehicles available for {requestedPassengers} passengers
            </p>
            <p className="text-sm font-sans text-gray-600">
              Please adjust your passenger count or contact us for custom
              arrangements
            </p>
          </div>
        ) : (
          /* Grid responsivo: 1 columna centrada en móvil, 2 en tablet, 3 en desktop */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center md:justify-items-stretch">
            {filteredVehicles.map((vehicle, index) => (
              <Card
                key={index}
                className="w-full max-w-md md:max-w-none flex flex-col border-2 border-gray-200 hover:border-blue-500 transition-colors shadow-lg hover:shadow-xl"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-mono text-xl md:text-2xl font-bold text-gray-900">
                      {vehicle.name}
                    </CardTitle>
                    <span className="bg-red-500 text-white font-mono text-xs md:text-sm px-3 py-1 rounded-full font-bold whitespace-nowrap">
                      $
                      {ridePrice(
                        Number(distance),
                        vehicle.pricePerMile,
                        Number(duration),
                        vehicle.pricePerHour
                      )}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center justify-center">
                    <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                      <PassengersIcon />
                      <span className="text-xs md:text-sm font-mono font-semibold text-blue-600">
                        {vehicle.quantityPassengers} Passengers
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                      <BriefcaseIcon />
                      <span className="text-xs md:text-sm font-mono font-semibold text-blue-600">
                        {vehicle.quantityBaggage} Bags
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpenDialogIndex(index)}
                    className="text-center text-sm text-blue-500 hover:text-blue-600 font-mono font-semibold cursor-pointer hover:underline mt-2 transition-colors py-2"
                  >
                    See Details →
                  </button>

                  <Dialog
                    open={openDialogIndex === index}
                    onOpenChange={(isOpen) =>
                      setOpenDialogIndex(isOpen ? index : null)
                    }
                  >
                    <DialogContent className="max-w-lg bg-white ">
                      <DialogHeader>
                        <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-mono">
                          {vehicle.name}
                        </DialogTitle>
                        <DialogDescription className="text-gray-700 tracking-wide leading-relaxed text-sm md:text-base font-sans">
                          {vehicle.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <PassengersIcon />
                          <span className="text-sm font-sans">
                            <strong>{vehicle.quantityPassengers}</strong>{" "}
                            Passengers
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BriefcaseIcon />
                          <span className="text-sm font-sans">
                            <strong>{vehicle.quantityBaggage}</strong> Luggage
                          </span>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardHeader>

                <CardContent className="flex-grow flex justify-center items-center">
                  <MyCarousel images={vehicle.images} />
                </CardContent>

                <CardFooter className="flex flex-col gap-3 pt-4 border-t">
                  <RideInfoButton>Reserve This Ride</RideInfoButton>
                  <Link
                    href="/ride/ride-quote"
                    className="w-full text-center uppercase text-sm text-blue-500 hover:text-blue-600 font-mono hover:underline transition-colors"
                  >
                    Get a Quote
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetVehicles;
