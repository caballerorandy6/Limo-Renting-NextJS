import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const VehicleSkeleton = () => {
  return (
    <Card className="w-full flex flex-col overflow-hidden bg-white shadow-lg border border-gray-200 rounded-lg">
      {/* Image Skeleton */}
      <div className="relative overflow-hidden bg-gray-100">
        <Skeleton className="h-56 w-full" />
      </div>

      {/* Content Skeleton */}
      <CardHeader className="pb-3 pt-5 px-5">
        <Skeleton className="h-7 w-4/5" />
      </CardHeader>

      <CardContent className="px-5 pb-6 pt-2">
        <div className="space-y-3">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <div className="pt-2 border-t border-gray-200">
            <Skeleton className="h-5 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const VehiclesSkeleton = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      {/* Section Header Skeleton */}
      <div className="mb-12 text-center">
        <Skeleton className="h-10 w-80 mx-auto mb-3" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>

      {/* Vehicles Grid Skeleton */}
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <VehicleSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default VehiclesSkeleton;
