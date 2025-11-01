import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";
import ViewFullFleetButton from "@/components/shared/buttons/ViewFullFleetButton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const VehicleCardSkeleton = () => {
  return (
    <Card className="w-full h-[50vh] lg:[45vh] xl:h-[50vh] flex flex-col justify-center items-center rounded-none bg-white shadow-md">
      <CardHeader className="flex justify-start items-center w-full">
        <div className="flex justify-center w-full">
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
        <Skeleton className="h-6 w-3/4 mt-4" />
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <div className="flex flex-col justify-start lg:mb-4 gap-2 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedVehiclesSkeleton = () => {
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
          {Array.from({ length: 3 }).map((_, index) => (
            <VehicleCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedVehiclesSkeleton;
