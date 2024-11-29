"use client";

import SocialMenu from "@/components/my-components/nav/SocialMenu";
import ContactMenu from "@/components/my-components/nav/ContactMenu";
import Logo from "@/components/my-components/nav/Logo";
import HamburgerMenu from "@/components/my-components/nav/HamburgerMenu";
import MenuNavigation from "./MenuNavigation";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black font-mono p-4">
      <div className="flex justify-between xl:justify-around items-center">
        <Logo />
        <div className="flex xl:flex-col justify-between">
          <div className="xl:flex hidden justify-center gap-32 items-center p-2">
            <ContactMenu />
            <SocialMenu />
          </div>

          <HamburgerMenu />
          <MenuNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
