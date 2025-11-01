import { use } from "react";
import Vehicle from "@/components/features/fleet/Vehicle";
import { VehicleApiResponse } from "@/types/fleet";
import Heading3 from "@/components/shared/ui-common/Heading3";

interface VehiclesProps {
  vehiclesPromise: Promise<VehicleApiResponse[]>;
}

const Vehicles = ({ vehiclesPromise }: VehiclesProps) => {
  const apiVehicles = use(vehiclesPromise);

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <Heading3>Available Vehicles</Heading3>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-sans">
          Choose from our premium selection of luxury vehicles
        </p>
      </div>

      {/* Vehicles Grid */}
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {apiVehicles.map((vehicle) => (
          <Vehicle key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
