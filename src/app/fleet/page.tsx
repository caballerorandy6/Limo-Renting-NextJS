//Custom Components
import FleetVideo from "@/components/features/fleet/FleetVideo";
import FleetInfo from "@/components/features/fleet/FleetInfo";
import Vehicles from "@/components/features/fleet/Vehicles";
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

const Fleet = () => {
  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "Fleet", item: `${siteConfig.baseUrl}/fleet` },
  ];

  return (
    <>
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      <section id="fleet" className="mb-16">
        <FleetVideo />
        <FleetInfo />
        <Vehicles />
      </section>
    </>
  );
};

export default Fleet;
