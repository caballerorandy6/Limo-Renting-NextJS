"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CountUpReact from "@/components/my-components/about/CountUp";
import CarIcon from "@/components/my-components/icons/CarIcon";
import CheckIcon from "@/components/my-components/icons/CheckIcon";
import BookNowButton from "@/components/my-components/buttons/BookNowButton";

const About = () => {
  return (
    <section id="about" className="flex justify-center gap-4 pt-36">
      <div className="relative w-6/12 h-full pt-16 flex justify-center">
        <Image
          src="/limoAboutPage1.webp"
          alt="Limo About Page 1"
          width="200"
          height={1000}
          priority
          className="absolute object-cover w-[50vh] h-[50vh]"
        />
        <Image
          src="/limoAboutPage2.webp"
          alt="Limo About Page 1"
          width={1000}
          height={1000}
          priority
          className="relative object-cover hidden xl:flex lg:w-[35vh] lg:h-[35vh] top-56 left-48 rounded-br-3xl"
        />
      </div>
      <div className="w-4/12 pt-16">
        <div className="flex items-center gap-4">
          <CarIcon />
          <span className="font-mono font-bold text-xl">About Us</span>
        </div>
        <h1 className="text-black text-5xl font-sans font-bold mt-2">
          The Best Limo Service in{" "}
          <span className="text-red-600">Miami, FL</span>
        </h1>
        <p className="font-light font-sans text-lg mt-4">
          At American Transportation & Limo Services in Miami, FL, it’s our goal
          to ensure that your limo rental experience provides you with the
          highest level of luxury by offering highly customized service. We
          strive to always exceed your initial expectations. You can see for
          yourself how well we have achieved this goal by reading many five-star
          reviews of our company at Yelp, Google, and Facebook.
        </p>
        <div className="flex justify-start gap-4 items-center mt-2">
          <Card className="w-[18vh] shadow-xl">
            <CardContent className="flex flex-col justify-center items-center pt-4 font-sans font-bold gap-2">
              <CountUpReact />
              <span>Years</span>
              <span>Experience</span>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-4 text-gray-400">
            <div className="flex gap-2 items-center">
              <CheckIcon />
              <span className="font-sans text-lg">
                Experienced Local Drivers
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <CheckIcon />
              <span className="font-sans text-lg">Seamless Transportation</span>
            </div>
            <div className="flex gap-2 items-center">
              <CheckIcon />
              <span className="font-sans text-lg">Safety Guaranteed</span>
            </div>
          </div>
        </div>
        <Separator className="my-8 border border-gray-400 w-full" />
        <BookNowButton>Book a Ride</BookNowButton>
      </div>
    </section>
  );
};

export default About;
