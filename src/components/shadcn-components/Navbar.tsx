import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import SocialMenu from "./SocialMenu";
import ContactMenu from "./ContactMenu";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import ArrowRightIcon from "./ArrowRightIcon";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black font-mono">
      <div className="flex justify-around">
        <Logo />
        <div>
          <div className="flex justify-around items-center gap-">
            <ContactMenu />
            <SocialMenu />
          </div>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Home</MenubarTrigger>
              <MenubarTrigger>About Us</MenubarTrigger>
              <MenubarTrigger>Services</MenubarTrigger>
              <MenubarTrigger>Fleet</MenubarTrigger>
              <MenubarTrigger>Contact</MenubarTrigger>
              <MenubarTrigger>Reservations</MenubarTrigger>
            </MenubarMenu>

            <Button className="bg-red-500 hover:bg-white text-white hover:text-red-500 text-xl font-bold rounded-br-2xl p-8">
              Book Now
              <ArrowRightIcon />
            </Button>
          </Menubar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
