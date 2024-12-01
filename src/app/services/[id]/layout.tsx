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
      <div className="bg-gradient-to-tr from-gray-600 to-gray-800 w-full h-[30vh] sm:h-[40vh] md:h-[43vh] lg:h-[50vh] xl:h-[52vh] relative">
        <Image
          width="1000"
          height="1000"
          src="/service/serviceLayout.webp"
          alt="Limo Image"
          priority
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="relative flex flex-col items-center justify-center h-full pt-14 sm:pt-16 md:pt-24 lg:pt-30 xl:pt-36">
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

            {/* Titulo de la pagina */}
            {currentPage && (
              <span className="text-red-500 font-sans font-bold text-lg">
                {currentPage.title}
              </span>
            )}
          </div>
          <div className="flex justify-center items-center">
            <BookNowButton>Book Now</BookNowButton>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 w-full flex flex-col">
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center w-10/12 mx-auto">
          <HamburgerServiceMenu />
          <ServicesLayoutMenu />

          <div className="flex flex-col justify-between items-center">
            <video
              className="rounded w-10/12 lg:w-[60vh] xl:w-[70vh] 2xl:w-[80vh] h-auto"
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
            <div className="relative bg-gray-900 rounded w-10/12 lg:w-[60vh] xl:w-[70vh] 2xl:w-[80vh] h-auto p-8 mt-8">
              <Logo />
              <div className="relative flex justify-center flex-col items-center bg-white text-center rounded mt-8 mb-4">
                <h3 className="uppercase font-sans text-2xl mt-6 pt-4">
                  Arrive in <span className="text-red-500">style</span>
                </h3>
                <p className="font-mono pt-4">
                  Book Your <span className="text-red-500">Limo</span> Today
                </p>
                <div className="relative top-8">
                  <BookNowButton>Book Now</BookNowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-10 w-10/12 mt-8 mx-auto">
          {children}
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </>
  );
};

export default ServicesLayout;
