import { Metadata } from "next";
import RideQuoteContent from "@/components/features/ride/RideQuoteContent";

export const metadata: Metadata = {
  title: "Request a Quote | Premium Limousine Service",
  description:
    "Request a detailed quote for your luxury limousine service. Get personalized pricing within 2 hours. No commitment required.",
  openGraph: {
    title: "Request a Quote | Premium Limousine Service",
    description:
      "Request a detailed quote for your luxury limousine service. Get personalized pricing within 2 hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote | Premium Limousine Service",
    description:
      "Request a detailed quote for your luxury limousine service. Get personalized pricing within 2 hours.",
  },
};

/**
 * RideQuote Page - Request Quote via Email (Server Component)
 *
 * SEO-optimized wrapper for the quote request page.
 * All interactive functionality is handled by Client Components.
 */
const RideQuotePage = () => {
  return (
    <section id="ride-quote" className="py-32 lg:py-40">
      <RideQuoteContent />
    </section>
  );
};

export default RideQuotePage;
