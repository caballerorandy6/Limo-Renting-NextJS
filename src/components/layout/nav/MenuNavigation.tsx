"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

//Shadcn Components
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

//Custom Components
import BookNowButton from "@/components/shared/buttons/BookNowButton";

//Libs
import { cn } from "@/lib/utils";
import { menuArray } from "@/lib/utils";

const MenuNavigation = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="flex items-center gap-2">
      <NavigationMenuList className="gap-1">
        {menuArray.map((link) => (
          <NavigationMenuItem key={link.id}>
            <NavigationMenuLink asChild>
              <Link
                href={link.url}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-mono font-semibold hover:text-red-500 transition-all duration-200 text-sm px-4 py-2 rounded-md",
                  pathname === link.url
                    ? "text-red-500 bg-red-500/10"
                    : "text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <div className="ml-2">
        <BookNowButton variant="navbar">Book Now</BookNowButton>
      </div>
    </NavigationMenu>
  );
};

export default MenuNavigation;
