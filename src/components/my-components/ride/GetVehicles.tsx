import { MyCarousel } from "../global-components/MyCarousel";
import PassengersIcon from "../icons/PassengersIcon";
import BriefcaseIcon from "../icons/BriefcaseIcon";
import { prisma } from "@/lib/prisma";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import RideInfoButton from "../buttons/RideInfoButton";
import Link from "next/link";

export const getVehicles = async () => await prisma.vehicle.findMany();

const GetVehicles = async () => {
  const vehicles = await getVehicles();

  const costRide = (
    miles: number,
    pricePerMile: number,
    hours: number,
    pricePerHour: number
  ) => miles * pricePerMile + hours * pricePerHour;

  return (
    <div className="w-10/12 mx-auto flex flex-col justify-center items-center mb-16">
      {vehicles.map((vehicle, index) => (
        <div
          key={index}
          className="flex justify-center items-center gap-20 border p-8 shadow rounded"
        >
          <MyCarousel images={vehicle.images} />
          <div className="w-6/12">
            <h1 className="text-3xl font-bold font-sans mb-2">
              {vehicle.name}
            </h1>
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
            <p className="font-sans tracking-wide leading-relaxed myclamp">
              {vehicle.description}
            </p>
          </div>
          <div className="w-3/12">
            {vehicles.length && (
              <div className="overflow-hidden">
                <Card className="flex flex-col justify-center items-center p-4 h-full">
                  <CardHeader>
                    <CardTitle className="text-3xl font-sans font-bold text-center">
                      $
                      {costRide(
                        1,
                        vehicle.pricePerMile,
                        1,
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
