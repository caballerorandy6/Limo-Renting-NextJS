import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadata {
  title: string;
  description: string;
  pageRoute: string;
  ogImg?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: "website" | "article";
}

/**
 * Generates the metadata for a page, including the title, description,
 * canonical URL, and Open Graph and Twitter metadata.
 *
 * @param {Object} params - The metadata parameters.
 * @param {string} params.title - The title of the page.
 * @param {string} params.description - The description of the page.
 * @param {string} params.pageRoute - The URL route for the page.
 * @param {string} params.ogImg - The URL of the Open Graph image (optional).
 * @param {string[]} params.keywords - Array of keywords for the page (optional).
 * @param {boolean} params.noIndex - Whether to prevent indexing (optional).
 * @param {string} params.type - The Open Graph type (optional, defaults to "website").
 * @returns {Metadata} The generated metadata object.
 *
 * @example
 * export const metadata = genPageMetadata({
 *   title: "Wedding Limo Service Miami",
 *   description: "Premium wedding transportation services...",
 *   pageRoute: "/services/weddings",
 *   ogImg: "/og-weddings.jpg"
 * });
 */
export const genPageMetadata = ({
  title,
  description,
  pageRoute,
  ogImg = siteConfig.defaultOgImg,
  keywords = [],
  noIndex = false,
  type = "website",
}: PageMetadata): Metadata => {
  const allKeywords = [...keywords, ...siteConfig.keywords];

  return {
    title,
    description,
    keywords: allKeywords.join(", "),
    authors: [{ name: siteConfig.business.name }],
    creator: siteConfig.business.name,
    publisher: siteConfig.business.name,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: pageRoute,
    },
    openGraph: {
      title,
      description,
      url: pageRoute,
      siteName: siteConfig.siteName,
      images: [
        {
          url: ogImg,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImg],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
};
