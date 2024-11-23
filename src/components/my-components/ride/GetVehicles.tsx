import { MyCarousel } from "../global-components/MyCarousel";
import PassengersIcon from "../icons/PassengersIcon";
import BriefcaseIcon from "../icons/BriefcaseIcon";
import { prisma } from "@/lib/prisma";
export const getVehicles = async () => await prisma.vehicle.findMany();

const GetVehicles = async () => {
  const vehicles = await getVehicles();

  const costTrip = (
    miles: number,
    pricePerMile: number,
    hours: number,
    pricePerHour: number
  ) => miles * pricePerMile + hours * pricePerHour;

  return (
    <div className="w-10/12 mx-auto flex flex-col justify-center items-center mb-16 bg-gray-50">
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
          <div>
            {vehicles.length &&
              costTrip(1, vehicle.pricePerMile, 1, vehicle.pricePerHour)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetVehicles;
