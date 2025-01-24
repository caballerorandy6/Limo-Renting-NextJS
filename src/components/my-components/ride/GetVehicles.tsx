"use client";

//Custom Components
import { useState } from "react";
import Link from "next/link";
import { MyCarousel } from "@/components/my-components/global-components/MyCarousel";
import PassengersIcon from "@/components/my-components/icons/PassengersIcon";
import BriefcaseIcon from "@/components/my-components/icons/BriefcaseIcon";
import Heading3 from "@/components/my-components/global-components/Heading3";
import RideInfoButton from "@/components/my-components/buttons/RideInfoButton";

//Arrays
import { vehicles } from "@/components/my-components/fleet/arrays";

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
import { useRideInfoStore } from "@/store/rideInfoStore";

//Libs
import { ridePrice } from "@/lib/utils";

const GetVehicles = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { duration, distance } = useRideInfoStore();

  return (
    <div className="w-10/12 mx-auto flex flex-col justify-center items-center mb-16">
      {vehicles.map((vehicle, index) => (
        <div key={index} className="flex justify-center gap-20 p-8">
          <MyCarousel images={vehicle.images} />
          <div className="w-6/12">
            <Heading3>{vehicle.name}</Heading3>
            <div className="flex items-center gap-8">
              <div className="flex items-center">
                <PassengersIcon />
                <span className="text-sm font-mono text-red-500">
                  {vehicle.quantityPassengers}
                </span>
              </div>
              <div className="flex items-center">
                <BriefcaseIcon />
                <span className="text-sm font-mono text-red-500">
                  {vehicle.quantityBaggage}
                </span>
              </div>
            </div>
            <p
              onClick={() => setOpenDialog(true)}
              className="text-blue-500 font-mono text-xl font-semibold cursor-pointer border-blue-500"
            >
              See More...
            </p>
            <Dialog
              open={openDialog}
              onOpenChange={(isOpen) => setOpenDialog(isOpen)}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-white font-sans flex justify-between">
                    Vehicle Details
                  </DialogTitle>
                  <DialogDescription className="text-white tracking-wide leading-relaxed text-lg">
                    {vehicle.description}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="w-3/12">
            {vehicles.length && (
              <div className="overflow-hidden">
                <Card className="flex flex-col justify-center items-center p-4 h-full">
                  <CardHeader>
                    <CardTitle className="text-3xl font-sans font-bold text-center">
                      $
                      {ridePrice(
                        Number(distance),
                        vehicle.pricePerMile,
                        Number(duration),
                        vehicle.pricePerHour
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RideInfoButton>Reserve This Ride</RideInfoButton>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/ride/ride-quote"
                      className="uppercase text-blue-500 hover:text-blue-600 font-mono hover:underline transition-colors text-center block"
                    >
                      Send Me Quote
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetVehicles;
