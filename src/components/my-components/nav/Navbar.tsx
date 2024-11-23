"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import SocialMenu from "@/components/my-components/nav/SocialMenu";
import ContactMenu from "@/components/my-components/nav/ContactMenu";
import Logo from "@/components/my-components/nav/Logo";
import BookNowButton from "../buttons/BookNowButton";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { menuArray } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-black font-mono p-4">
      <div className="flex justify-around">
        <Logo />
        <div>
          <div className="flex justify-around items-center p-4">
            <ContactMenu />
            <SocialMenu />
          </div>

          <NavigationMenu className="mt-2">
            <NavigationMenuList>
              {menuArray.map((link) => (
                <NavigationMenuItem key={link.id}>
                  <Link href={link.url} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-mono font-bold hover:text-red-500 transition-colors text-lg",
                        pathname === link.url ? "text-red-500" : "text-white"
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <BookNowButton>Book Now</BookNowButton>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
