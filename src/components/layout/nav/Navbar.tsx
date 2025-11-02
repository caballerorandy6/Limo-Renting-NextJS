"use client";

//Custom Components
import SocialMenu from "@/components/layout/nav/SocialMenu";
import ContactMenu from "@/components/layout/nav/ContactMenu";
import Logo from "@/components/layout/nav/Logo";
import HamburgerMenu from "@/components/layout/nav/HamburgerMenu";
import MenuNavigation from "@/components/layout/nav/MenuNavigation";
import UserAuth from "@/components/layout/nav/UserAuth";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black border-b border-gray-900 font-mono">
      {/* Desktop Layout (xl: 1280px and up) */}
      <div className="hidden xl:block">
        <div className="container mx-auto px-6 py-3">
          {/* Top Row: Contact, Social, Auth */}
          <div className="flex items-center justify-end gap-6 pb-3 border-b border-gray-900">
            <ContactMenu />
            <div className="h-4 w-px bg-gray-700" />
            <SocialMenu />
            <div className="h-4 w-px bg-gray-700" />
            <UserAuth />
          </div>

          {/* Bottom Row: Logo and Navigation */}
          <div className="flex items-center justify-between pt-3">
            <Logo />
            <MenuNavigation />
          </div>
        </div>
      </div>

      {/* Tablet and Mobile Layout (below xl: 1280px) */}
      <div className="xl:hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Logo />
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
