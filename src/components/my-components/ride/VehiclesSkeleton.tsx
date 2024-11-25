import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CarouselSkeleton } from "@/components/my-components/ride/CarouselSkeleton";

const VehiclesSkeleton = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col justify-center items-center mb-16 bg-gray-50">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex w-full justify-center items-center gap-20 border p-24 shadow rounded"
        >
          {/* Carousel Skeleton */}
          <div className="w-3/12">
            <CarouselSkeleton />
          </div>

          {/* Text Section Skeleton */}
          <div className="w-6/12">
            {/* Vehicle Name */}
            <Skeleton width={200} height={30} className="mb-2" />
            {/* Icons with placeholders */}
            <div className="flex items-center gap-8 mb-2">
              <div className="flex items-center gap-2">
                <Skeleton circle width={24} height={24} />
                <Skeleton width={40} height={16} />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton circle width={24} height={24} />
                <Skeleton width={40} height={16} />
              </div>
            </div>
            {/* Description */}
            <Skeleton count={3} />
          </div>

          {/* Cost Section Skeleton */}
          <div className="w-3/12">
            <Skeleton width={100} height={30} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehiclesSkeleton;
