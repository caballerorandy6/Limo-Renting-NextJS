import Image from "next/image";
import { Metadata } from "next";

//Custom Components
import ServicesSimpleAccordion from "@/components/features/services/ServicesSimpleAccordion";

// Data
import { servicesData } from "@/config/services-data";

//Arrays
import { servicesAccordionArray } from "@/components/features/services/ServicesMultipleAccordion";

//Interfaces
import { ServiceDetailsProps } from "@/app/services/[id]/interfaces";

// SEO Components
import { JsonLdForBreadcrumb } from "@/components/seo/JsonLdForBreadcrumb";
import { JsonLdForService } from "@/components/seo/JsonLdForService";

// Config
import { siteConfig, servicesMetadata } from "@/config/site";
import { genPageMetadata } from "@/lib/genPageMetadata";

/**
 * Generate static params for all service pages
 * This enables static generation at build time
 */
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

/**
 * Generate metadata for each service page
 * This creates unique SEO metadata for each service
 */
export async function generateMetadata({
  params,
}: ServiceDetailsProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.id === params.id);

  if (!service) {
    return genPageMetadata({
      title: "Service Not Found",
      description: "The requested service could not be found.",
      pageRoute: `/services/${params.id}`,
    });
  }

  const metadata = servicesMetadata[params.id as keyof typeof servicesMetadata];

  return genPageMetadata({
    title: metadata?.title || `${service.title} | Miami Limo Service`,
    description:
      metadata?.description ||
      service.content ||
      "Premium limousine service in Miami",
    pageRoute: `/services/${params.id}`,
    ogImg: metadata?.ogImg || siteConfig.defaultOgImg,
    keywords: metadata?.keywords || [],
  });
}

const ServiceDetails = ({ params }: ServiceDetailsProps) => {
  // Encontrar el servicio basado en el ID
  const service = servicesData.find((service) => service.id === params.id);

  // Encontrar el acordeón correspondiente al servicio
  const accordion = servicesAccordionArray.find(
    (accordion) => accordion?.id === service?.id
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "Services", item: `${siteConfig.baseUrl}/services` },
    { name: service.title, item: `${siteConfig.baseUrl}/services/${params.id}` },
  ];

  return (
    <>
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      <JsonLdForService
        serviceName={service.title}
        serviceDescription={service.content}
        serviceType="Limousine Service"
        serviceUrl={`/services/${params.id}`}
      />
      <div className="w-full lg:w-5/12 flex justify-center items-center flex-col">
        {service?.image && (
          <Image
            src={service.image}
            alt={service.title}
            width={1000}
            height={1000}
            className="rounded w-full h-auto mb-4 hidden lg:block"
            priority
          />
        )}
        {accordion && <ServicesSimpleAccordion {...accordion} />}
      </div>
    </>
  );
};

export default ServiceDetails;
