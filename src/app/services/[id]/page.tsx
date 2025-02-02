"use client";

import Image from "next/image";

//Custom Components
import { services } from "@/components/my-components/services/Services";
import ServicesSimpleAccordion from "@/components/my-components/services/ServicesSimpleAccordion";

//Arrays
import { servicesAccordionArray } from "@/components/my-components/services/ServicesMultipleAccordion";

//Interfaces
import { ServiceDetailsProps } from "@/app/services/[id]/interfaces";

const ServiceDetails = ({ params }: ServiceDetailsProps) => {
  // Encontrar el servicio basado en el ID
  const service = services.find((service) => service.id === params.id);

  // Encontrar el acordeón correspondiente al servicio
  const accordion = servicesAccordionArray.find(
    (accordion) => accordion?.id === service?.id
  );

  return (
    <div className="w-full lg:w-5/12 flex justify-center items-center flex-col">
      {service?.image && (
        <Image
          src={service.image}
          alt={service.image}
          width={1000}
          height={1000}
          className="rounded w-full h-auto mb-4 hidden lg:block"
          priority
        />
      )}
      {accordion && <ServicesSimpleAccordion {...accordion} />}
    </div>
  );
};

export default ServiceDetails;
