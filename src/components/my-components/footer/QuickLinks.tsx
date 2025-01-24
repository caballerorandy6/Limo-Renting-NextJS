"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

//Shadcn Components
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

//Libs
import { menuArray } from "@/lib/utils";
import { cn } from "@/lib/utils";

const QuickLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center mt-2">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col">
          {menuArray
            .filter(
              (link) => link.name !== "Contact" && link.name !== "Reservations"
            )
            .map((link) => (
              <NavigationMenuItem key={link.id}>
                <Link href={link.url} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-mono font-bold hover:text-red-500 transition-colors text-lg flex justify-center",
                      pathname === link.url ? "text-red-500" : "text-white"
                    )}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default QuickLinks;
