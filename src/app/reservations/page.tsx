//Custom Components
import FormQuote from "@/components/shared/forms/FormQuote";
import PageHeader from "@/components/shared/ui-common/PageHeader";
import { genPageMetadata } from "@/lib/genPageMetadata";
import { JsonLdForBreadcrumb } from "@/components/seo/JsonLdForBreadcrumb";
import { siteConfig } from "@/config/site";

//Server Actions
import { getServices, getTripTypes } from "@/actions/services";

export const metadata = genPageMetadata({
  title: "Book Your Limo | Miami Luxury Transportation | Get Instant Quote",
  description:
    "Book your luxury limousine in Miami. Get instant quotes, select your vehicle, and reserve premium transportation. Easy online booking for all occasions.",
  pageRoute: "/reservations",
  keywords: [
    "book Miami limo",
    "reserve limousine",
    "luxury car booking",
    "instant quote Miami",
    "online limo reservation",
  ],
});

const Reservations = async () => {
  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "Reservations", item: `${siteConfig.baseUrl}/reservations` },
  ];

  // Fetch services and trip types in parallel (Server Component)
  const [services, tripTypes] = await Promise.all([
    getServices(),
    getTripTypes(),
  ]);

  return (
    <>
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      <section id="book-now" className="bg-black">
        <PageHeader pageName="Reservations" />
        <div className="py-16 w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto">
          <FormQuote services={services} tripTypes={tripTypes} />
        </div>
      </section>
    </>
  );
};

export default Reservations;
