import { Suspense } from "react";
import HomePage from "@/components/features/home/HomePage";
import WhatWeOffer from "@/components/features/home/WhatWeOffer";
import AboutOurCompany from "@/components/features/home/AboutOurCompany";
import FeaturedVehicles from "@/components/features/home/FeaturedVehicles";
import FeaturedVehiclesSkeleton from "@/components/features/home/FeaturedVehiclesSkeleton";
import WhyChooseUs from "@/components/features/home/WhyChooseUs";
import Testimonials from "@/components/features/home/Testimonials";
import { getServices, getTripTypes } from "@/actions/services";

export default async function Home() {
  // Fetch services and trip types for the form
  const [services, tripTypes] = await Promise.all([
    getServices(),
    getTripTypes(),
  ]);

  return (
    <main className="overflow-x-hidden">
      <HomePage services={services} tripTypes={tripTypes} />
      <WhatWeOffer />
      <AboutOurCompany />
      <Suspense fallback={<FeaturedVehiclesSkeleton />}>
        <FeaturedVehicles />
      </Suspense>
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
