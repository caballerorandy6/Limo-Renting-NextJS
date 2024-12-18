"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ArrowRightIcon from "../icons/ArrowRightIcon";

export interface ButtonProps {
  children: string;
  icon?: JSX.Element;
}

const BookNowButton = ({ children, icon }: ButtonProps) => {
  const router = useRouter();

  return (
    <Button
      className="bg-red-600 hover:bg-white text-white hover:text-red-600 transition-colors text-xl font-sans font-bold rounded-br-2xl p-8"
      onClick={() => router.push("/reservations")}
    >
      {children}
      {icon ? icon : <ArrowRightIcon />}
    </Button>
  );
};

export default BookNowButton;
