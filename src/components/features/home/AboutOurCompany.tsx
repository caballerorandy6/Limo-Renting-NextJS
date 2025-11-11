"use client";

import Image from "next/image";

//Shadcn Components
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

//Custom Components
import LearnMoreButton from "@/components/shared/buttons/LearnMoreButton";
import IncrementNumberHome from "@/components/features/home/IncrementNumberHome";
import Heading3 from "@/components/shared/ui-common/Heading3";
import Heading from "@/components/shared/ui-common/Heading";

const AboutOurCompany = () => {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-20 lg:py-24 xl:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          {/* Left Section - Images (Desktop Only) */}
          <div className="hidden lg:flex relative w-full lg:w-1/2 h-full justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/aboutOurCompany/aboutOurCompany1.webp"
                alt="About Our Company 1"
                width={500}
                height={500}
                priority={false}
                className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-xl"
              />
              <Image
                src="/aboutOurCompany/aboutOurCompany2.webp"
                alt="About Our Company 2"
                width={350}
                height={350}
                priority={false}
                className="hidden xl:block absolute -bottom-12 -right-12 object-cover w-3/5 aspect-square rounded-br-3xl rounded-tl-3xl shadow-2xl border-4 border-white"
              />
              <Card className="hidden xl:flex absolute -top-8 -left-8 bg-red-600 border-none w-48 h-48 p-4 flex-col justify-center items-center rounded-none shadow-2xl">
                <CardHeader className="p-0">
                  <CardDescription className="flex justify-center">
                    <IncrementNumberHome />
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white text-center p-2 mt-2">
                  <p className="text-xl font-bold font-sans">5-Star</p>
                  <span className="text-lg font-sans">Reviews</span>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <Heading>About Our Company</Heading>
              <Heading3>The Best Limo Service</Heading3>
            </div>

            <p className="text-base md:text-lg font-light font-sans tracking-wide leading-relaxed text-gray-700">
              We offer top-quality limousine and car services while being swift and
              discreet. Our Chauffeurs are 100% certified and have years of
              experience in the field with an emphasis on hospitality and
              professionalism. American Transportation and Limo Services of Miami is
              reliable and ready to offer a VIP luxury car service experience to our
              prestigious clients.
            </p>

            {/* Mobile Image */}
            <div className="lg:hidden">
              <Image
                src="/aboutOurCompany/aboutOurCompany1.webp"
                alt="About Our Company 1"
                width={1000}
                height={1000}
                priority={false}
                className="object-cover w-full h-[40vh] sm:h-[50vh] rounded-lg shadow-lg"
              />
            </div>

            {/* Video Section */}
            <div className="space-y-4">
              <p className="text-base md:text-lg font-sans tracking-wide leading-relaxed text-center lg:text-left text-gray-700">
                We Specialize in providing 5-star limo services in Miami, FL.
              </p>
              <div className="w-full overflow-hidden rounded-lg shadow-lg">
                <video
                  className="w-full h-[35vh] sm:h-[40vh] lg:h-[30vh] xl:h-[34vh] object-cover"
                  src="/aboutOurCompany/aboutOurCompany.webm"
                  autoPlay
                  muted
                  controls
                  loop
                  preload="metadata"
                  playsInline
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            <div className="pt-4">
              <LearnMoreButton>Learn More</LearnMoreButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurCompany;
