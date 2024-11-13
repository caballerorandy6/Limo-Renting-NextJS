"use client";

import Image from "next/image";
import { services } from "@/components/my-components/services/Services";
import Heading3 from "@/components/my-components/global-components/Heading3";

interface ServiceDetailsProps {
  params: { id: string };
}

const ServiceDetails = ({ params }: ServiceDetailsProps) => {
  const service = services.find((service) => service.id === params.id);

  return (
    <div>
      {service?.image && (
        <Image
          src={service.image}
          alt={service.image}
          width={1000}
          height={1000}
          className="rounded mb-4"
          priority={false}
        />
      )}
      <Heading3>{`${service?.title}`}</Heading3>
      <h3 className="text-xl font-sans font-semibold text-red-500 mt-4 mb-4">{`${service?.title2}`}</h3>
      <p className="font-sans mb-8 tracking-wide leading-relaxed">
        {service?.text1}
      </p>
      <h3 className="text-xl font-sans font-semibold text-red-500 mb-4">{`${service?.title3}`}</h3>
      <p className="font-sans mb-8 tracking-wide leading-relaxed">
        {service?.text2}
      </p>
    </div>
  );
};

export default ServiceDetails;
