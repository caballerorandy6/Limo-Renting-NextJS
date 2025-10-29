import GetVehicles from "@/components/features/ride/GetVehicles";
import SelectRide from "@/components/features/ride/SelectRide";
import VehiclesSkeleton from "@/components/features/ride/VehiclesSkeleton";
import { Suspense } from "react";
import { genPageMetadata } from "@/lib/genPageMetadata";
import { JsonLdForBreadcrumb } from "@/components/seo/JsonLdForBreadcrumb";
import { siteConfig } from "@/config/site";

export const metadata = genPageMetadata({
  title: "Book Your Ride | Miami Luxury Transportation | Instant Quotes",
  description:
    "Book your luxury transportation in Miami. Get instant quotes for our premium limo service, party buses, and executive cars. Professional chauffeurs, competitive rates, and exceptional service.",
  pageRoute: "/ride",
  keywords: [
    "book Miami limo",
    "luxury car booking",
    "instant quote",
    "Miami transportation booking",
    "reserve limousine",
    "book party bus",
  ],
});

const Ride = () => {
  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "Book a Ride", item: `${siteConfig.baseUrl}/ride` },
  ];

  return (
    <section id="ride" className="pt-24 lg:pt-32">
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      <SelectRide />
      <Suspense fallback={<VehiclesSkeleton />}>
        <GetVehicles />
      </Suspense>
    </section>
  );
};

export default Ride;
