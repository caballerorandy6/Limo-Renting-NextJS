"use client";

import Image from "next/image";

// Shadcn Components
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Custom Components
import IncrementNumber from "@/components/features/about/IncrementNumber";
import Heading from "@/components/shared/ui-common/Heading";
import CheckIcon from "@/components/shared/icons/CheckIcon";
import BookNowButton from "@/components/shared/buttons/BookNowButton";
import LimoImageMenu from "@/components/shared/ui-common/LimoImageMenu";

// Interfaces
import { AboutListProps } from "@/types/about";

// Data
const aboutUsArray: AboutListProps[] = [
  { title: "Experienced Local Drivers", icon: <CheckIcon /> },
  { title: "Seamless Transportation", icon: <CheckIcon /> },
  { title: "Safety Guaranteed", icon: <CheckIcon /> },
];

const AboutUs = () => {
  return (
    <>
      <LimoImageMenu />
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
            {/* Left Section - Images (Desktop Only) */}
            <div className="hidden lg:flex relative w-full lg:w-1/2 h-full justify-start">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/limoAboutPage/limoAboutPage1.webp"
                  alt="Limo About Page 1"
                  width={500}
                  height={500}
                  priority
                  className="relative object-cover w-full aspect-square rounded-lg shadow-xl"
                />
                <Image
                  src="/limoAboutPage/limoAboutPage2.webp"
                  alt="Limo About Page 2"
                  width={350}
                  height={350}
                  priority
                  className="hidden xl:block absolute -bottom-12 -right-12 object-cover w-3/5 aspect-square rounded-br-3xl rounded-tl-3xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <div className="space-y-4">
                <Heading>About Us</Heading>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-900 leading-tight">
                  The Best Limo Service in{" "}
                  <span className="text-red-600">Miami, FL</span>
                </h1>
              </div>

              <p className="text-base md:text-lg font-sans tracking-wide leading-relaxed text-gray-700">
                At American Transportation & Limo Services in Miami, FL, it's our
                goal to ensure that your limo rental experience provides you with
                the highest level of luxury by offering highly customized service.
                We strive to always exceed your initial expectations. You can see
                for yourself how well we have achieved this goal by reading many
                five-star reviews of our company at Yelp, Google, and Facebook.
              </p>

              {/* Features Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 pt-4">
                <Card className="w-full sm:w-36 md:w-40 shadow-md rounded-none flex-shrink-0">
                  <CardContent className="flex flex-col justify-center items-center py-6 md:py-8 font-sans font-bold space-y-2">
                    <IncrementNumber />
                    <span className="text-sm">Years</span>
                    <span className="text-sm">Experience</span>
                  </CardContent>
                </Card>

                <div className="flex flex-col gap-3 md:gap-4 text-gray-600">
                  {aboutUsArray.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 tracking-wide leading-relaxed"
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="font-sans text-sm md:text-base">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6 md:my-8 border-gray-300" />

              <div className="pt-2">
                <BookNowButton>Book a Ride</BookNowButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
