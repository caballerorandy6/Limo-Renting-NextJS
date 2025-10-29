"use client";

import Link from "next/link";

//Custom Components
import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";

//Interfaces
import { ButtonProps } from "@/types/buttons";

const ReviewsButton = ({ children, icon }: ButtonProps) => {
  return (
    <Link
      target="_blank"
      className="bg-red-600 hover:bg-black text-white transition-colors text-xl font-sans font-bold rounded-br-2xl p-4 flex items-center mt-4"
      href="https://www.google.com/search?hl=en-US&gl=us&q=American+Transportation+%26+Limo+services,+3319+NW+74th+Ave,+Miami,+FL+33122&ludocid=13424118040074998325&lsig=AB86z5X8nxH6Sx8XvpKdCR-bvzik#"
    >
      {children}
      {icon ? icon : <ArrowRightIcon />}
    </Link>
  );
};

export default ReviewsButton;
