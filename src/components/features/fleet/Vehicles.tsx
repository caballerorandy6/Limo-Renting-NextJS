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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/* Section Header */}
      <div className="mb-10 md:mb-12 lg:mb-16 text-center space-y-3">
        <Heading3>Available Vehicles</Heading3>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-sans tracking-wide leading-relaxed">
          Choose from our premium selection of luxury vehicles
        </p>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {apiVehicles.map((vehicle) => (
          <Vehicle key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
