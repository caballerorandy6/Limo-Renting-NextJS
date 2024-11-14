"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { ButtonProps } from "@/lib/interfaces";

const ViewFullFleetButton = ({ children, icon }: ButtonProps) => {
  const router = useRouter();

  return (
    <Button
      className="bg-red-600 hover:bg-black text-white transition-colors text-xl font-sans font-bold rounded-br-2xl p-8"
      onClick={() => router.push("/fleet")}
    >
      {children}
      {icon ? icon : <ArrowRightIcon />}
    </Button>
  );
};

export default ViewFullFleetButton;
