"use client";

import Link from "next/link";
import CarIcon from "@/components/my-components/icons/CarIcon";
import ViewAllServicesButton from "@/components/my-components/buttons/ViewAllServicesButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DiscoverMoreButton from "@/components/my-components/buttons/DiscoverMoreButton";

import { whatWeOfferCardArray } from "@/lib/utils";

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="w-full mx-auto bg-gray-100">
      <div className="w-8/12 mx-auto pt-16">
        <div className="flex gap-4">
          <CarIcon />
          <span className="font-mono font-bold text-xl">What We Offer</span>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-5xl mb-6 text-black mt-2 font-sans font-semibold">
            Our 5-Star Car Services
          </h1>
          <ViewAllServicesButton>View All Services</ViewAllServicesButton>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {whatWeOfferCardArray.map((item) => (
            <Card key={item.title} className="bg-white w-4/12">
              <CardHeader className="grid grid-flow-col justify-start items-center gap-6">
                <Link href={item.href}>
                  <item.icon />
                </Link>

                <div>
                  <CardTitle className="font-sans text-xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="font-mono ">
                    {item.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="font-sans">{item.content}</CardContent>
              <CardFooter>
                <DiscoverMoreButton>{item.buttonName}</DiscoverMoreButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
