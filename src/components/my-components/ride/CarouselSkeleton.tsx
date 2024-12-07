import Skeleton from "react-loading-skeleton";

export const CarouselSkeleton = () => {
  return (
    <div className="relative w-full mx-auto">
      <div className="flex overflow-hidden h-[150px] w-full gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-full">
            <Skeleton
              width={500}
              height={150}
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
      {/* Skeleton for the Previous Button */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <Skeleton circle width={30} height={30} />
      </div>
      {/* Skeleton for the Next Button */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Skeleton circle width={30} height={30} />
      </div>
    </div>
  );
};
