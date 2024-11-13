"use client";

import Image from "next/image";
import Heading from "@/components/my-components/global-components/Heading";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LearnMoreButton from "../buttons/LearnMoreButton";
import CountUpReactHome from "./CountUpReactHome";
import Heading3 from "../global-components/Heading3";

const AboutOurCompany = () => {
  return (
    <section
      id="about"
      className="flex justify-center pt-16 pb-40 gap-40 w-full mx-auto"
    >
      <div className="relative w-4/12 h-full flex justify-center">
        <Image
          src="/aboutOurCompany1.webp"
          alt="About Our Company 1"
          width={1000}
          height={1000}
          priority={false}
          className="absolute object-cover w-[50vh] h-[50vh]"
        />
        <Image
          src="/aboutOurCompany2.webp"
          alt="About Our Company 2"
          width={1000}
          height={1000}
          priority={false}
          className="relative object-cover hidden xl:flex lg:w-[35vh] lg:h-[35vh] top-80 left-64 rounded-br-3xl"
        />
        <Card className="relative left-20 top-10 bg-red-600 border-none h-[20vh] w-[20vh] p-2 flex justify-center items-center">
          <CardHeader>
            <CardDescription>
              <CountUpReactHome />
            </CardDescription>
            <CardContent className="text-white text-xl font-bold font-sans">
              <p>5-Star</p>
              <span>Reviews</span>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
      <div className="w-4/12">
        <Heading>About Our Company</Heading>
        <Heading3>The Best Limo Service</Heading3>
        <p className="font-light font-sans text-lg mt-4 mb-6">
          We offer top-quality limousine and car services while being swift and
          discreet. Our Chauffeurs are 100% certified and have years of
          experience in the field with an emphasis on hospitality and
          professionalism. American Transportation and Limo Services of Miami is
          reliable and ready to offer a VIP luxury car service experience to our
          prestigious clients.
        </p>
        <div className="flex justify-start gap-4 items-center mt-2">
          {/* Video */}
          <Card className="h-[20vh] flex items-center justify-center w-6/12 p-2">
            <CardHeader>
              <CardDescription className="text-lg font-sans">
                We Specialize in providing 5-star limo services in Miami, FL.
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="flex items-center justify-center w-6/12">
            <video
              className="object-cover w-full h-[20vh] flex items-center justify-center rounded-xl"
              src="/aboutOurCompany.webm"
              autoPlay
              muted
              controls
              loop
              preload="auto"
              playsInline
              crossOrigin="anonymous"
            />
          </div>
        </div>
        <Separator className="my-8 border border-gray-400 w-full" />
        <LearnMoreButton>Learn More</LearnMoreButton>
      </div>
    </section>
  );
};

export default AboutOurCompany;
