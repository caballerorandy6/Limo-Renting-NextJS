"use client";

//Custom Components
import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";
import ViewAllServicesButton from "@/components/shared/buttons/ViewAllServicesButton";
import { services } from "@/components/features/services/Services";
import Service from "@/components/features/services/Service";

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="w-full bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          <Heading>What We Offer</Heading>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Heading3>Our 5-Star Car Services</Heading3>
            <div className="hidden lg:block">
              <ViewAllServicesButton>View All Services</ViewAllServicesButton>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.slice(0, 3).map((item) => (
            <Service
              id={item.id}
              key={item.title}
              title={item.title}
              description={item.description}
              content={item.content}
              icon={item.icon}
              buttonName={item.buttonName}
              href={item.href}
              image={item.image}
            />
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="flex justify-center lg:hidden mt-8 md:mt-12">
          <ViewAllServicesButton>View All Services</ViewAllServicesButton>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
