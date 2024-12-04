"use client";

import Image from "next/image";
import Link from "next/link";
import ChevronRightIcon from "@/components/my-components/icons/ChevronRightIcon";
import BookNowButton from "@/components/my-components/buttons/BookNowButton";
import FrequentlyAskedQuestions from "@/components/my-components/services/FrequentlyAskedQuestions";
import ServicesLayoutMenu from "@/components/my-components/services/ServicesLayoutMenu";
import Logo from "@/components/my-components/nav/Logo";
import { usePathname } from "next/navigation";
import { services } from "@/components/my-components/services/Services";
import HamburgerServiceMenu from "@/components/my-components/services/HamburgerServiceMenu";

const ServicesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const currentPage = services.find(
    (service) => `${service.href}/${service.id}` === pathname
  );

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-tr from-gray-600 to-gray-800 w-full h-[50vh] relative">
        <Image
          width="1000"
          height="1000"
          src="/service/serviceLayout.webp"
          alt="Limo Image"
          priority
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="relative flex flex-col items-center justify-center h-full pt-16">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="text-white uppercase font-bold font-sans underline hover:text-red-500 transition-colors"
            >
              Home
            </Link>
            <ChevronRightIcon />

            <Link
              href="/services"
              className="text-white uppercase font-bold font-sans underline hover:text-red-500 transition-colors"
            >
              Services
            </Link>

            <ChevronRightIcon />

            {currentPage && (
              <span className="text-red-500 font-bold text-lg">
                {currentPage.title}
              </span>
            )}
          </div>
          <BookNowButton>Book Now</BookNowButton>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-16 w-10/12 flex flex-col items-center">
        <h1 className="mb-4 w-full">
          {currentPage && (
            <span
              className="text-red-500 font-bold font-sans
             w-full text-4xl"
            >
              {currentPage.title}
            </span>
          )}
        </h1>
        <HamburgerServiceMenu />
        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full">
          <ServicesLayoutMenu />

          <div className="flex flex-col items-start w-full lg:w-7/12">
            <video
              className="rounded w-full"
              autoPlay
              controls
              muted
              loop
              preload="auto"
              playsInline
              crossOrigin="anonymous"
            >
              <source src="/service/serviceVideo1.mp4" type="video/mp4" />
            </video>
            <div className="relative bg-gray-900 rounded w-full p-8 mt-8 hidden lg:block">
              <Logo />
              <div className="flex flex-col items-center bg-white text-center rounded mt-8 p-4">
                <h3 className="uppercase text-2xl">
                  Arrive in <span className="text-red-500">style</span>
                </h3>
                <p className="mt-4">
                  Book Your <span className="text-red-500">Limo</span> Today
                </p>
                <div className="mt-6">
                  <BookNowButton>Book Now</BookNowButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg: items-start w-full mt-8">
          {children}
          <div className="font-sans border-none w-full lg:w-5/12 mb-16">
            <h3 className="mb-2 text-xl font-sans font-semibold text-red-500">
              Frequently Asked Questions
            </h3>
            <FrequentlyAskedQuestions />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesLayout;
