"use client";

import Link from "next/link";

//Custom Components
import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";

//Interfaces
import { ButtonProps } from "@/types/buttons";

const ClickToCallButton = ({ children, icon }: ButtonProps) => {
  return (
    <Link
      href="tel:(555)123-4567"
      target="_blank"
      className="bg-red-600 hover:bg-white text-white hover:text-red-600 transition-colors text-xl font-sans font-bold rounded-br-2xl p-4 flex items-center justify-center w-full md:w-6/12 md:mx-auto lg:w-5/12 xl:mx-0 xl:w-6/12"
    >
      {children}
      {icon ? icon : <ArrowRightIcon />}
    </Link>
  );
};

export default ClickToCallButton;
