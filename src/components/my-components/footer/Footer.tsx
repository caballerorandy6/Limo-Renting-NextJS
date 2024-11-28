import Heading4 from "../global-components/Heading4";
import Logo from "../nav/Logo";
import SocialMenu from "../nav/SocialMenu";
import ContactInfoCard from "./ContactInfoCard";
import { Separator } from "@/components/ui/separator";
import QuickLinks from "./QuickLinks";
import Image from "next/image";
import Link from "next/link";

export interface CurrentYearProps {
  currentYear: () => number;
}

const Footer = () => {
  const currentYear: CurrentYearProps["currentYear"] = () =>
    new Date().getFullYear();

  return (
    <footer id="footer" className="bg-black flex flex-col py-16 w-full">
      <div className="flex flex-col md:flex-row md:gap-28 items-center justify-center w-10/12 md:w-10/12 mx-auto">
        <div className="flex flex-col gap-8 w-10/12 mb-8">
          <Logo />
          <SocialMenu />
        </div>
        <div className="w-full md:w-4/12 flex flex-col justify-center">
          <Heading4>Contact Info</Heading4>
          <Separator className="my-2 border border-red-500 w-5/12 mx-auto" />
          <ContactInfoCard />
        </div>
        <div className="md:w-4/12 flex flex-col text-center ">
          <Heading4>Quick Links</Heading4>
          <Separator className="my-2 border border-red-500 w-5/12 mx-auto" />
          <QuickLinks />
        </div>
      </div>
      <Separator className="md:mb-4 my-8 border border-gray-400 w-10/12 md:w-11/12 mx-auto" />
      <div className="flex flex-col md:justify-center w-10/12 mx-auto items-center md:flex-row md:gap-8">
        <p className="text-white/80 font-sans text-xs w-10/12 md:w-6/12 text-center">
          © {currentYear()} All Rights Reserved | American Transportation & Limo
          Services
        </p>
        <Link
          href="https://rcweb.dev"
          target="_blank"
          className="transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center gap-2"
        >
          <Image
            src="/logo/rcweb.webp"
            width={100}
            height={100}
            alt="rcweb logo"
            className="w-auto h-auto"
          />
        </Link>
        <p className="text-white/80 font-sans text-xs">
          Website designed and developed by RC Web
        </p>
      </div>
    </footer>
  );
};

export default Footer;
