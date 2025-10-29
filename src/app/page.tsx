import HomePage from "@/components/features/home/HomePage";
import WhatWeOffer from "@/components/features/home/WhatWeOffer";
import AboutOurCompany from "@/components/features/home/AboutOurCompany";
import FeaturedVehicles from "@/components/features/home/FeaturedVehicles";
import WhyChooseUs from "@/components/features/home/WhyChooseUs";
import Testimonials from "@/components/features/home/Testimonials";

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
