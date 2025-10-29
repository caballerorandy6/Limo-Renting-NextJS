"use client";

import { useRouter } from "next/navigation";

//Shadcn Components
import { Button } from "@/components/ui/button";

//Custom Components
import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";

//Interfaces
import { ServiceOptionsButtonProps } from "@/types/buttons";

const ServiceOptionsButton = ({
  children,
  icon,
  href,
}: ServiceOptionsButtonProps) => {
  const router = useRouter();

  return (
    <Button
      className="bg-red-600 hover:bg-black text-white hover:text-white text-xl font-sans font-bold rounded-br-2xl p-8 mx-auto"
      onClick={() => router.push(href)}
    >
      {children}
      {icon ? icon : <ArrowRightIcon />}
    </Button>
  );
};

export default ServiceOptionsButton;
