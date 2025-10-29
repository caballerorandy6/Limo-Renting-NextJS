import { siteConfig } from "@/config/site";

interface JsonLdForServiceProps {
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  serviceUrl: string;
}

/**
 * Generates the JSON-LD structured data for a service.
 *
 * @prop {string} serviceName - The name of the service.
 * @prop {string} serviceDescription - The description of the service.
 * @prop {string} serviceType - The type of service.
 * @prop {string} serviceUrl - The URL of the service page.
 *
 * @example
 *  <JsonLdForService
 *    serviceName="Wedding Limousine Service"
 *    serviceDescription="Premium wedding transportation services in Miami..."
 *    serviceType="Limousine Service"
 *    serviceUrl="/services/weddings"
 *  />
 */
export const JsonLdForService = ({
  serviceName,
  serviceDescription,
  serviceType,
  serviceUrl,
}: JsonLdForServiceProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    serviceType,
    url: `${siteConfig.baseUrl}${serviceUrl}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.business.name,
      telephone: siteConfig.contact.phone,
      url: siteConfig.baseUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Miami",
      containedIn: {
        "@type": "State",
        name: "Florida",
      },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      availabilityStarts: "2000-01-01",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
