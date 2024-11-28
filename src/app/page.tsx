import HomePage from "@/components/my-components/home/HomePage";
import WhatWeOffer from "@/components/my-components/home/WhatWeOffer";
import AboutOurCompany from "@/components/my-components/home/AboutOurCompany";
import FeaturedVehicles from "@/components/my-components/home/FeaturedVehicles";
import WhyChooseUs from "@/components/my-components/home/WhyChooseUs";
import Testimonials from "@/components/my-components/home/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HomePage />
      <WhatWeOffer />
      <AboutOurCompany />
      <FeaturedVehicles />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
