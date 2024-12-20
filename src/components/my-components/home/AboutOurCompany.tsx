"use client";

import Image from "next/image";
import Heading from "@/components/my-components/global-components/Heading";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import LearnMoreButton from "../buttons/LearnMoreButton";
import IncrementNumberHome from "@/components/my-components/home/IncrementNumberHome";
import Heading3 from "../global-components/Heading3";

const AboutOurCompany = () => {
  return (
    <div
      id="about"
      className="flex justify-start pt-16 pb-16 xl:pb-40 gap-16 xl:gap-32 w-10/12 mx-auto"
    >
      <div className="hidden relative w-6/12 h-full lg:flex justify-center">
        <Image
          src="/aboutOurCompany/aboutOurCompany1.webp"
          alt="About Our Company 1"
          width={1000}
          height={1000}
          priority={false}
          className="absolute object-cover w-[50vh] h-[50vh]"
        />
        <Image
          src="/aboutOurCompany/aboutOurCompany2.webp"
          alt="About Our Company 2"
          width={1000}
          height={1000}
          priority={false}
          className="relative object-cover hidden xl:flex lg:w-[35vh] lg:h-[35vh] top-80 left-64 rounded-br-3xl"
        />
        <Card className="relative left-20 top-10 bg-red-600 border-none h-[20vh] w-[20vh] p-2 justify-center items-center hidden xl:flex rounded-none">
          <CardHeader>
            <CardDescription className="mx-auto">
              <IncrementNumberHome />
            </CardDescription>
            <CardContent className="text-white text-xl font-bold font-sans">
              <p>5-Star</p>
              <span>Reviews</span>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
      <div className="w-full lg:w-6/12  justify-items-start">
        <Heading>About Our Company</Heading>
        <Heading3>The Best Limo Service</Heading3>
        <p className="font-light font-sans mt-4 mb-6 tracking-wide leading-relaxed">
          We offer top-quality limousine and car services while being swift and
          discreet. Our Chauffeurs are 100% certified and have years of
          experience in the field with an emphasis on hospitality and
          professionalism. American Transportation and Limo Services of Miami is
          reliable and ready to offer a VIP luxury car service experience to our
          prestigious clients.
        </p>

        <Image
          src="/aboutOurCompany/aboutOurCompany1.webp"
          alt="About Our Company 1"
          width={1000}
          height={1000}
          priority={false}
          className="object-cover w-full h-[50vh] mb-8 lg:hidden"
        />

        <div className="flex flex-col gap-4 items-center w-full">
          {/* Video */}
          <p className="text-lg font-sans tracking-wide leading-relaxed">
            We Specialize in providing 5-star limo services in Miami, FL.
          </p>
          <div className="flex items-center justify-center w-full">
            <video
              className="object-cover w-full h-[40vh] lg:h-[30vh] xl:h-[34vh] flex items-center justify-center"
              src="/aboutOurCompany/aboutOurCompany.mp4"
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
        <div className="mt-4">
          <LearnMoreButton>Learn More</LearnMoreButton>
        </div>
      </div>
    </div>
  );
};

export default AboutOurCompany;
