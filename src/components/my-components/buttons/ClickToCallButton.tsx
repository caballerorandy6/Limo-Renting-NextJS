"use client";

import Link from "next/link";
import { ButtonProps } from "@/components/my-components/buttons/BookNowButton";
import ArrowRightIcon from "@/components/my-components/icons/ArrowRightIcon";

const ClickToCallButton = ({ children, icon }: ButtonProps) => {
  return (
    <Link
      href="tel: +1358855002"
      target="_blank"
      className="bg-red-600 hover:bg-white text-white hover:text-red-600 transition-colors text-xl font-sans font-bold rounded-br-2xl p-4 flex items-center justify-center"
    >
      {children}
      {icon ? icon : <ArrowRightIcon />}
    </Link>
  );
};

export default ClickToCallButton;
