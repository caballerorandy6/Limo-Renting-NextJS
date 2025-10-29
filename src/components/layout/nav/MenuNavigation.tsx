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
    <NavigationMenu className="hidden xl:flex mx-auto mt-2  z-50">
      <NavigationMenuList>
        {menuArray.map((link) => (
          <NavigationMenuItem key={link.id}>
            <NavigationMenuLink asChild>
              <Link
                href={link.url}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-mono font-bold hover:text-red-500 transition-colors text-lg",
                  pathname === link.url ? "text-red-500" : "text-white"
                )}
              >
                {link.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <BookNowButton>Book Now</BookNowButton>
    </NavigationMenu>
  );
};

export default MenuNavigation;
