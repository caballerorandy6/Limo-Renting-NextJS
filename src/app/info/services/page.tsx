"use client";

import Link from "next/link";
import Heading from "@/components/my-components/global-components/Heading";
import Heading3 from "@/components/my-components/global-components/Heading3";
import ServiceOptionsButton from "@/components/my-components/buttons/ServiceOptionsButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { whatWeOfferCardArray } from "@/lib/utils";

const Services = () => {
  return (
    <section id="services" className="py-40 pb-20 w-full">
      <div className="w-8/12 mx-auto flex justify-between">
        <div className="w-6/12">
          <Heading>What We Offer</Heading>
          <Heading3>Our 5-Star Services</Heading3>
        </div>
        <Card className="w-6/12 p-4 shadow-md font-sans">
          <CardContent>
            At American Transportation, our 5-star chauffeured car services in
            Miami are synonymous with luxury, reliability, and personalized
            attention. From our meticulously maintained fleet to our
            professional chauffeurs, we go above and beyond to exceed our
            clients&apos; expectations at every turn. Experience the epitome of
            luxury chauffeured transportation with American
            Transportation&apos;s unparalleled 5-star car services in Miami,
            Florida.
          </CardContent>
        </Card>
      </div>
      <div className="flex w-10/12 flex-wrap gap-10 justify-center mx-auto mt-10">
        {whatWeOfferCardArray.map((item) => (
          <Card key={item.title} className="bg-white w-3/12 shadow-md">
            <CardHeader className="grid grid-flow-col justify-start items-center gap-6">
              <Link href={item.href}>
                <item.icon />
              </Link>

              <div>
                <CardTitle className="font-sans text-xl">
                  {item.title}
                </CardTitle>
                <CardDescription className="font-mono">
                  {item.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="font-sans">{item.content}</CardContent>
            <CardFooter>
              <ServiceOptionsButton>{item.buttonName}</ServiceOptionsButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
