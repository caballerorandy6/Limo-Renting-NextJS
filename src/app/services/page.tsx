import LimoImageMenu from "@/components/shared/ui-common/LimoImageMenu";
import ServicesInfo from "@/components/features/services/ServicesInfo";
import Services from "@/components/features/services/Services";
import { genPageMetadata } from "@/lib/genPageMetadata";
import { JsonLdForBreadcrumb } from "@/components/seo/JsonLdForBreadcrumb";
import { siteConfig } from "@/config/site";

export const metadata = genPageMetadata({
  title: "Miami Limousine Services | Premium Car & Transportation Services",
  description:
    "Discover our comprehensive range of luxury transportation services in Miami. From weddings and corporate events to airport transfers and party buses. Professional chauffeurs and premium vehicles.",
  pageRoute: "/services",
  keywords: [
    "Miami limo services",
    "luxury car service",
    "wedding transportation",
    "corporate limo",
    "airport transfers",
    "party bus rental",
    "Miami chauffeur service",
  ],
});

const AllServices = () => {
  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "Services", item: `${siteConfig.baseUrl}/services` },
  ];

  return (
    <>
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      <section id="services" className="w-full">
        <LimoImageMenu />
        <ServicesInfo />
        <Services />
      </section>
    </>
  );
};

export default AllServices;
