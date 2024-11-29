import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import BookNowButton from "@/components/my-components/buttons/BookNowButton";
import { cn } from "@/lib/utils";
import { menuArray } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MenuNavigation = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden xl:flex mx-auto mt-2  z-50">
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
  );
};

export default MenuNavigation;
