"use client";

import GetVehicles from "@/components/features/ride/GetVehicles";
import SelectRide from "@/components/features/ride/SelectRide";
import VehiclesSkeleton from "@/components/features/ride/VehiclesSkeleton";
import { Suspense, useEffect, useState } from "react";

const RideContent = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait for hydration to complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHydrated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Show skeleton while hydrating
  if (!isHydrated) {
    return <VehiclesSkeleton />;
  }

  return (
    <>
      <SelectRide />
      <Suspense fallback={<VehiclesSkeleton />}>
        <GetVehicles />
      </Suspense>
    </>
  );
};

export default RideContent;
