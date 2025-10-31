import RideContent from "@/components/features/ride/RideContent";
import { JsonLdForBreadcrumb } from "@/components/seo/JsonLdForBreadcrumb";
import { siteConfig } from "@/config/site";
import { genPageMetadata } from "@/lib/genPageMetadata";

export const metadata = genPageMetadata({
  title: "Select Your Vehicle | Miami Luxury Transportation",
  description:
    "Choose from our premium fleet of luxury vehicles. View available cars, compare prices, and complete your reservation for Miami limousine service.",
  pageRoute: "/ride",
  keywords: [
    "select vehicle Miami",
    "luxury car selection",
    "limo pricing",
    "Miami transportation options",
    "premium fleet",
  ],
});

const Ride = () => {
  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "Book a Ride", item: `${siteConfig.baseUrl}/ride` },
  ];

  return (
    <section id="ride" className="py-24 lg:pt-32">
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      <RideContent />
    </section>
  );
};

export default Ride;
