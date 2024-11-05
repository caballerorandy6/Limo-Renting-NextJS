import { Link } from "lucide-react";
import { ButtonProps } from "@/lib/interfaces";
import ArrowRightIcon from "../icons/ArrowRightIcon";

const ReviewsButton = ({ children, icon }: ButtonProps) => {
  return (
    <Link
      href="https://www.google.com"
      className="bg-red-600 hover:bg-black text-white hover:text-white text-xl font-sans font-bold rounded-br-2xl p-8 w-6/12 flex items-center justify-center"
    >
      {children}
      {icon ? icon : <ArrowRightIcon />}
    </Link>
  );
};

export default ReviewsButton;
