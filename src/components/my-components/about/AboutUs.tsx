"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CountUpReact from "@/components/my-components/about/CountUp";
import Heading from "@/components/my-components/global-components/Heading";
import CheckIcon from "@/components/my-components/icons/CheckIcon";
import BookNowButton from "@/components/my-components/buttons/BookNowButton";
import LimoImageMenu from "@/components/my-components/global-components/LimoImageMenu";
import { AboutListProps } from "@/lib/interfaces";

const aboutUsArray: AboutListProps[] = [
  { title: "Experienced Local Drivers", icon: <CheckIcon /> },
  { title: "Seamless Transportation", icon: <CheckIcon /> },
  { title: "Safety Guaranteed", icon: <CheckIcon /> },
];

const AboutUs = () => {
  return (
    <>
      <LimoImageMenu />
      <div className="flex flex-col lg:flex-row justify-center py-16 lg:gap-20 xl:gap-10 w-10/12 mx-auto">
        <div className="hidden relative w-6/12 h-full lg:flex justify-start mb-16">
          <Image
            src="/limoAboutPage/limoAboutPage1.webp"
            alt="Limo About Page 1"
            width="200"
            height={1000}
            priority
            className="relative object-cover w-[50vh] lg:h-[45vh] h-[50vh]"
          />
          <Image
            src="/limoAboutPage/limoAboutPage2.webp"
            alt="Limo About Page 1"
            width={1000}
            height={1000}
            priority
            className="absolute object-cover hidden xl:flex lg:w-[35vh] lg:h-[35vh] top-60 left-1/3 rounded-br-3xl"
          />
        </div>
        <div className="w-full lg:w-6/12">
          <Heading>About Us</Heading>
          <h1 className="text-black text-4xl lg:text-5xl font-sans font-bold mt-2">
            The Best Limo Service in{" "}
            <span className="text-red-600">Miami, FL</span>
          </h1>
          <p className="font-sans mt-4 tracking-wide leading-relaxed">
            At American Transportation & Limo Services in Miami, FL, it’s our
            goal to ensure that your limo rental experience provides you with
            the highest level of luxury by offering highly customized service.
            We strive to always exceed your initial expectations. You can see
            for yourself how well we have achieved this goal by reading many
            five-star reviews of our company at Yelp, Google, and Facebook.
          </p>
          <div className="flex justify-start gap-4 items-center mt-4">
            <Card className="w-[18vh] shadow-xl">
              <CardContent className="flex flex-col justify-center items-center pt-4 font-sans font-bold gap-2">
                <CountUpReact />
                <span>Years</span>
                <span>Experience</span>
              </CardContent>
            </Card>
            <div className="flex flex-col gap-4 text-gray-400">
              {aboutUsArray.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-2 items-center tracking-wide leading-relaxed"
                >
                  {item.icon}
                  <span className="font-sans tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-8 border border-gray-400 w-full" />
          <BookNowButton>Book a Ride</BookNowButton>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
