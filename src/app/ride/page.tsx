"use client";

import GetVehicles from "@/components/features/ride/GetVehicles";
import SelectRide from "@/components/features/ride/SelectRide";
import VehiclesSkeleton from "@/components/features/ride/VehiclesSkeleton";
import { Suspense, useEffect, useState } from "react";
import { JsonLdForBreadcrumb } from "@/components/seo/JsonLdForBreadcrumb";
import { siteConfig } from "@/config/site";
import { useRideInfoStore } from "@/stores/rideInfoStore";

const Ride = () => {
  const { ride } = useRideInfoStore();
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait for hydration to complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHydrated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Show loading while hydrating
  if (!isHydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 font-mono">Loading...</p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "Book a Ride", item: `${siteConfig.baseUrl}/ride` },
  ];

  return (
    <section id="ride" className="py-24 lg:pt-32">
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      <SelectRide />

      <Suspense fallback={<VehiclesSkeleton />}>
        <GetVehicles />
      </Suspense>
    </section>
  );
};

export default Ride;
