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
      <div className="flex justify-center w-8/12 mx-auto">
        <div className="flex flex-col gap-8 w-4/12">
          <Logo />
          <SocialMenu />
        </div>
        <div className="w-4/12 flex flex-col justify-center">
          <Heading4>Contact Info</Heading4>
          <Separator className="my-2 border border-red-500 w-5/12 mx-auto" />
          <ContactInfoCard />
        </div>
        <div className="w-3/12 flex flex-col text-center ">
          <Heading4>Quick Links</Heading4>
          <Separator className="my-2 border border-red-500 w-5/12 mx-auto" />
          <QuickLinks />
        </div>
      </div>
      <Separator className="mb-2 border border-gray-400f w-8/12 mx-auto" />
      <div className="flex justify-center items-center gap-8">
        <p className="text-white/80 font-sans text-xs">
          © {currentYear()} All Rights Reserved | American Transportation & Limo
          Services
        </p>
        <Link
          href="https://rcweb.dev"
          target="_blank"
          className="transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <Image src="/rcweb.webp" width={100} height={100} alt="rcweb logo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
