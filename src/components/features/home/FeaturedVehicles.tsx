import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";
import ViewFullFleetButton from "@/components/shared/buttons/ViewFullFleetButton";
import Vehicle from "@/components/features/fleet/Vehicle";
import { getVehicles } from "@/actions/vehicles";

const FeaturedVehicles = async () => {
  const vehicles = await getVehicles();

  return (
    <section id="featured-vehicles" className="w-full bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          <Heading>Featured Vehicles</Heading>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Heading3>Discover Our Luxury Fleet</Heading3>
            <div className="w-full sm:w-auto">
              <ViewFullFleetButton>View Full Fleet</ViewFullFleetButton>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vehicles.slice(0, 3).map((vehicle) => (
            <Vehicle key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
