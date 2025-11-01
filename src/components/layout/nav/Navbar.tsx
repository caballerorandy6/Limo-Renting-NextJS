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
    <nav className="fixed w-full bg-black font-mono p-4">
      <div className="flex justify-between xl:justify-around items-center">
        <Logo />
        <div className="flex xl:flex-col justify-between">
          <div className="xl:flex hidden justify-center gap-8 items-center p-2">
            <ContactMenu />
            <SocialMenu />
            <UserAuth />
          </div>

          <HamburgerMenu />
          <MenuNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
