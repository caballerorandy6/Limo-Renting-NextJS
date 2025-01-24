"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

//Custom Components
import ChevronRightIcon from "@/components/my-components/icons/ChevronRightIcon";
import BookNowButton from "@/components/my-components/buttons/BookNowButton";

//Libs
import { menuArray } from "@/lib/utils";

const LimoImageMenu = () => {
  const pathname = usePathname();

  const currentPage = menuArray.filter((item) => item.url === pathname);

  return (
    <div className="bg-gradient-to-tr from-gray-600 to-gray-800 w-full h-[30vh] sm:h-[40vh] md:h-[43vh] lg:h-[50vh] xl:h-[52vh] relative">
      <Image
        width={1000}
        height={1000}
        src="/limoAboutPage/limoAboutPage.webp"
        alt="Limo About Image"
        priority
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <div className="relative flex flex-col items-center justify-center h-full pt-14 sm:pt-16 md:pt-24 lg:pt-30 xl:pt-36">
        <div className="flex items-center gap-4 mb-4">
          <Link
            href="/"
            className="text-white uppercase font-bold font-sans underline hover:text-red-400 transition-colors"
          >
            Home
          </Link>

          <ChevronRightIcon />

          {/* Titulo de la pagina */}
          {currentPage && (
            <span className="text-red-400 font-sans font-bold text-lg rounded">
              {currentPage[0].name}
            </span>
          )}
        </div>
        <div className="flex justify-center items-center">
          <BookNowButton>Book Now</BookNowButton>
        </div>
      </div>
    </div>
  );
};

export default LimoImageMenu;
