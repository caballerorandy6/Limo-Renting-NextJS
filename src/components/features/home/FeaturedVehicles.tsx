import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";
import ViewFullFleetButton from "@/components/shared/buttons/ViewFullFleetButton";
import Vehicle from "@/components/features/fleet/Vehicle";
import { getVehicles } from "@/actions/vehicles";

const FeaturedVehicles = async () => {
  const vehicles = await getVehicles();

  return (
    <div id="featured-vehicles" className="py-16 bg-gray-100">
      <div className="w-10/12 mx-auto">
        <Heading>Featured Vehicles</Heading>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <Heading3>Discover Our Luxury Fleet</Heading3>
          <div className="w-full flex justify-start lg:justify-end">
            <ViewFullFleetButton>View Full Fleet</ViewFullFleetButton>
          </div>
        </div>
        <div className="w-full sm:gap-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8 mx-auto justify-center">
          {vehicles.slice(0, 3).map((vehicle) => (
            <Vehicle key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedVehicles;
