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
    <div className="w-full relative">
      <Image
        width="1000"
        height="1000"
        src="/serviceLayout.webp"
        alt="Limo About Image"
        priority
        className="w-full h-[52vh] object-cover absolute mix-blend-overlay"
      />
      <div className="pt-60 relative">
        <div className="flex justify-center items-center gap-4 pt-10">
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
        <div className="flex justify-center items-center mt-6">
          <BookNowButton>Book Now</BookNowButton>
        </div>
      </div>
      <div className="flex justify-center mx-auto w-8/12 gap-8 mt-44 mb-16">
        <div className="flex flex-col items-center w-1/3 rounded font-sans font-semibold">
          <ServicesLayoutMenu />
          <video
            className="rounded mt-8"
            autoPlay
            controls
            muted
            loop
            preload="auto"
            playsInline
            crossOrigin="anonymous"
          >
            <source src="/serviceVideo1.mp4" type="video/mp4" />
          </video>
          <div className="relative bg-gray-900 mt-8 rounded p-8">
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
        <div className="w-2/3">
          {children}
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
