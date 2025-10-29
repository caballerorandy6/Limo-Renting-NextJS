"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

//Custom Components
import ChevronRightIcon from "@/components/shared/icons/ChevronRightIcon";
import BookNowButton from "@/components/shared/buttons/BookNowButton";
import Footer from "@/components/layout/footer/Footer";

//Libs
import { menuArray } from "@/lib/utils";

//Interfaces
import { InfoLayoutProps } from "@/app/info/interfaces";

const InfoLayout = ({ children }: InfoLayoutProps) => {
  const pathname = usePathname();

  const currentPage = menuArray.filter((item) => item.url === pathname);

  return (
    <div className="bg-gradient-to-tr from-gray-600 to-gray-800 w-full h-[50vh] relative">
      <Image
        width="1000"
        height="1000"
        src="/limoAboutPage.webp"
        alt="Limo About Image"
        priority
        className="w-full h-full object-cover absolute mix-blend-overlay"
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
          {/* Titulo de la pagina */}
          {currentPage && (
            <span className="text-red-500 font-sans font-bold text-lg rounded">
              {currentPage[0].name}
            </span>
          )}
        </div>
        <div className="flex justify-center items-center mt-6">
          <BookNowButton>Book Now</BookNowButton>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default InfoLayout;
