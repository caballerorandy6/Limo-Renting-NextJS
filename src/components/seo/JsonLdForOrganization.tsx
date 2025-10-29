import { siteConfig } from "@/config/site";

/**
 * Generates the JSON-LD structured data for the organization.
 * This should be included in the root layout or homepage.
 *
 * @example
 *  <JsonLdForOrganization />
 */
export const JsonLdForOrganization = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}/logo.png`,
    foundingDate: siteConfig.business.founded,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "Customer Service",
      areaServed: siteConfig.business.areaServed,
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "25.7617",
        longitude: "-80.1918",
      },
      geoRadius: "50000", // 50km radius
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
