import { genPageMetadata } from "@/lib/genPageMetadata";
import { JsonLdForBreadcrumb } from "@/components/seo/JsonLdForBreadcrumb";
import { siteConfig } from "@/config/site";

export const metadata = genPageMetadata({
  title: "Contact Us | Miami Limousine Service | Get a Quote",
  description:
    "Contact American Transportation & Limo Services for luxury transportation in Miami. Call 305-885-5003 or 877-377-0347. Get instant quotes and book your ride today.",
  pageRoute: "/contacts",
  keywords: [
    "contact Miami limo",
    "Miami car service phone",
    "get limo quote",
    "Miami transportation contact",
    "book limousine Miami",
  ],
});

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "Contact", item: `${siteConfig.baseUrl}/contacts` },
  ];

  return (
    <>
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      {children}
    </>
  );
}
