"use client";

import Image from "next/image";
import CarIcon from "@/components/my-components/icons/CarIcon";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LearnMoreButton from "../buttons/LearnMoreButton";
import CountUpReactHome from "./CountUpReactHome";

const AboutOurCompany = () => {
  return (
    <section id="about" className="flex justify-center gap-4 pt-16 pb-16">
      <div className="relative w-6/12 h-full flex justify-center">
        <Image
          src="/aboutOurCompany1.webp"
          alt="Limo About Page 1"
          width="200"
          height={1000}
          priority
          className="absolute object-cover w-[50vh] h-[50vh]"
        />
        <Image
          src="/aboutOurCompany2.webp"
          alt="Limo About Page 1"
          width={1000}
          height={1000}
          priority
          className="relative object-cover hidden xl:flex lg:w-[35vh] lg:h-[35vh] top-56 left-48 rounded-br-3xl"
        />
      </div>
      <div className="w-4/12">
        <div className="flex items-center gap-4">
          <CarIcon />
          <span className="font-mono font-bold text-xl">About Our Company</span>
        </div>
        <h1 className="text-black text-5xl font-sans font-bold mt-2">
          The Best Limo Service
        </h1>
        <p className="font-light font-sans text-lg mt-4">
          We offer top-quality limousine and car services while being swift and
          discreet. Our Chauffeurs are 100% certified and have years of
          experience in the field with an emphasis on hospitality and
          professionalism. American Transportation and Limo Services of Miami is
          reliable and ready to offer a VIP luxury car service experience to our
          prestigious clients.
        </p>
        <div className="flex justify-start gap-4 items-center mt-2">
          {/* Video */}
          <Card className="h-[20vh] flex items-center justify-center w-4/12 p-2">
            <CardHeader>
              <CardDescription className="text-lg font-sans">
                We Specialize in providing 5-star limo services in Miami, FL.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-[20vh]w-4/12 p-2 flex justify-center items-center">
            <CardHeader>
              <CardDescription>
                <CountUpReactHome />
              </CardDescription>
              <CardContent className="text-red-500 text-xl font-bold font-sans">
                <p>5-Star</p>
                <span>Reviews</span>
              </CardContent>
            </CardHeader>
          </Card>
          <div className="flex items-center justify-center w-4/12 p-2 rounded-md">
            <video
              className="object-cover w-full h-[20vh] flex items-center justify-center"
              src="/aboutOurCompany.webm"
              controls
              autoPlay
              muted
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
