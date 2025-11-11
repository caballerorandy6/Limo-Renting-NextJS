import Link from "next/link";
import Image from "next/image";

//Shadcn Components
import { Separator } from "@/components/ui/separator";

//Custom Components
import Heading4 from "@/components/shared/ui-common/Heading4";
import SocialMenu from "@/components/layout/nav/SocialMenu";
import ContactInfoCard from "@/components/layout/footer/ContactInfoCard";
import QuickLinks from "@/components/layout/footer/QuickLinks";

//Interfaces
import { CurrentYearProps } from "@/types/footer";

const Footer = () => {
  const currentYear: CurrentYearProps["currentYear"] = () =>
    new Date().getFullYear();

  return (
    <footer id="footer" className="bg-black py-12 md:py-16 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="transition-transform hover:scale-105">
              <Image
                src="/logo/logo.webp"
                width={250}
                height={100}
                alt="American Transportation & Limo Services Logo"
                className="w-auto h-auto max-w-[250px]"
                priority
              />
            </Link>
            <SocialMenu />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <Heading4>Contact Info</Heading4>
            <Separator className="mt-2 mb-4 border border-red-500 w-16" />
            <ContactInfoCard />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <Heading4>Quick Links</Heading4>
            <Separator className="mt-2 mb-4 border border-red-500 w-16" />
            <QuickLinks />
          </div>
        </div>

        {/* Bottom Section */}
        <Separator className="my-8 border-gray-800" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Copyright */}
          <p className="text-gray-400 font-sans text-sm">
            © {currentYear()} All Rights Reserved | American Transportation & Limo Services
          </p>

          {/* Developer Credit with Logo */}
          <p className="text-gray-400 font-sans text-sm flex items-center gap-2">
            Designed & Developed by{" "}
            <Link
              href="https://rcweb.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:scale-110 inline-block"
            >
              <Image
                src="/logo/rcweb.webp"
                width={120}
                height={40}
                alt="RC Web Development Logo"
                priority={false}
                className="w-auto h-auto max-h-10"
              />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
