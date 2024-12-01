"use client";

import Heading from "../global-components/Heading";
import Heading3 from "@/components/my-components/global-components/Heading3";
import ViewAllServicesButton from "@/components/my-components/buttons/ViewAllServicesButton";
import { services } from "@/components/my-components/services/Services";
import Service from "@/components/my-components/services/Service";

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="w-full mx-auto bg-gray-100 pb-16">
      <div className="w-10/12 mx-auto pt-16">
        <Heading>What We Offer</Heading>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Heading3>Our 5-Star Car Services</Heading3>
          <div className="hidden lg:flex">
            <ViewAllServicesButton>View All Services</ViewAllServicesButton>
          </div>
        </div>
        <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
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
        <div className="flex justify-center md:justify-start lg:hidden mt-4">
          <ViewAllServicesButton>View All Services</ViewAllServicesButton>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
