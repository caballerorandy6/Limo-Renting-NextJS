import { MyCarousel } from "../global-components/MyCarousel";
import PassengersIcon from "../icons/PassengersIcon";
import BriefcaseIcon from "../icons/BriefcaseIcon";
// import RidePrice from "./RidePrice";
import { prisma } from "@/lib/prisma";

export const getVehicles = async () => await prisma.vehicle.findMany();

const GetVehicles = async () => {
  const vehicles = await getVehicles();

  return (
    <div className="w-10/12 mx-auto p-8 border shadow rounded">
      {vehicles.map((vehicle, index) => (
        <div
          key={index}
          className="flex justify-center items-center gap-20 w-10/12 mb-8 border p-8 shadow rounded"
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
        </div>
      ))}
    </div>
  );
};

export default GetVehicles;
