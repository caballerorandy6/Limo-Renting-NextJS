//Custom Components
import AboutUs from "@/components/features/about/AboutUs";
import BookUsAbout from "@/components/features/about/BookUsAbout";
import WhyChooseUpAbout from "@/components/features/about/WhyChooseUpAbout";
import { genPageMetadata } from "@/lib/genPageMetadata";
import { JsonLdForBreadcrumb } from "@/components/seo/JsonLdForBreadcrumb";
import { siteConfig } from "@/config/site";

export const metadata = genPageMetadata({
  title: "About Us | Premier Miami Limousine Service Since 2000",
  description:
    "Learn about American Transportation & Limo Services, Miami's trusted luxury transportation provider. Over 20 years of excellence in chauffeur services, corporate transportation, and special events.",
  pageRoute: "/about",
  keywords: [
    "about American Transportation",
    "Miami limo company",
    "luxury transportation Miami",
    "professional chauffeurs",
    "trusted car service",
  ],
});

const About = () => {
  const breadcrumbItems = [
    { name: "Home", item: siteConfig.baseUrl },
    { name: "About", item: `${siteConfig.baseUrl}/about` },
  ];

  return (
    <>
      <JsonLdForBreadcrumb itemList={breadcrumbItems} />
      <section id="about" className="min-h-screen">
        <AboutUs />
        <BookUsAbout />
        <WhyChooseUpAbout />
      </section>
    </>
  );
};

export default About;
