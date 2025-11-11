import { Suspense } from "react";
import { getVehicles } from "@/actions/vehicles";
import FleetVideo from "@/components/features/fleet/FleetVideo";
import FleetInfo from "@/components/features/fleet/FleetInfo";
import Vehicles from "@/components/features/fleet/Vehicles";
import VehiclesSkeleton from "@/components/features/fleet/VehiclesSkeleton";
import { genPageMetadata } from "@/lib/genPageMetadata";
import { JsonLdForBreadcrumb } from "@/components/seo/JsonLdForBreadcrumb";
import { siteConfig } from "@/config/site";

export const metadata = genPageMetadata({
  title: "Our Luxury Fleet | Premium Limousines & Vehicles Miami",
  description:
    "Explore our diverse fleet of luxury vehicles in Miami. From elegant limousines and spacious party buses to executive sedans and SUVs. All vehicles maintained to the highest standards.",
  pageRoute: "/fleet",
  keywords: [
    "Miami limo fleet",
    "luxury vehicles Miami",
    "party bus fleet",
    "executive cars",
    "Rolls Royce rental",
    "Mercedes Sprinter",
    "Cadillac Escalade",
  ],
});

const Fleet = async () => {
  const vehiclesPromise = getVehicles();
  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "Fleet", item: `${siteConfig.baseUrl}/fleet` },
  ];

  return (
    <>
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      <section id="fleet" className="w-full">
        <FleetVideo />

        {/* Info Section */}
        <div className="w-full py-16 md:py-20 lg:py-24">
          <FleetInfo />
        </div>

        {/* Vehicles Grid Section */}
        <div className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
          <Suspense fallback={<VehiclesSkeleton />}>
            <Vehicles vehiclesPromise={vehiclesPromise} />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Fleet;
