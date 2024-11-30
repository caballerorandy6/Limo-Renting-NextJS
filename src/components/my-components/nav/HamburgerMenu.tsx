"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { menuArray } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useOpenMenuStore } from "@/store/openMenuStore";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import SocialMenu from "@/components/my-components/nav/SocialMenu";

const HamburgerMenu = () => {
  const { isOpen, setIsOpen } = useOpenMenuStore();
  const pathname = usePathname();

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex xl:hidden text-white">
      {/* Trigger Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="p-2"
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            <div
              className="flex flex-col w-6 h-5 md:w-8 md:h-8 gap-1.5"
              aria-hidden="true"
            >
              {/* Hamburger Icon */}
              <span
                className={cn(
                  "h-1 bg-white rounded-sm transition-all",
                  isOpen ? "transform rotate-45 translate-y-2 opacity-0" : ""
                )}
              ></span>
              <span
                className={cn(
                  "h-1 bg-white rounded-sm transition-all",
                  isOpen ? "opacity-0" : ""
                )}
              ></span>
              <span
                className={cn(
                  "h-1 bg-white rounded-sm transition-all",
                  isOpen ? "transform -rotate-45 -translate-y-2 opacity-0" : ""
                )}
              ></span>
            </div>
          </Button>
        </SheetTrigger>

        {/* Sheet Content */}
        <SheetContent
          side="right"
          className={cn(
            "bg-zinc-800 bg-opacity-90 z-50",
            "flex flex-col gap-6 p-6 text-white overflow-y-scroll"
          )}
        >
          <SheetHeader>
            <SheetTitle className="text-xl font-bold font-sans">
              Menu
            </SheetTitle>

            <SheetDescription></SheetDescription>
          </SheetHeader>

          <Separator className="text-white border" />

          {/* Navigation Links */}
          <NavigationMenu className="block">
            <NavigationMenuList className="flex flex-col items-start gap-4">
              {menuArray.map((link) => (
                <NavigationMenuItem key={link.id}>
                  <Link
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-mono font-bold hover:text-red-500 transition-colors text-lg",
                      pathname === link.url ? "text-red-500" : "text-white"
                    )}
                    onClick={handleClose}
                    href={link.url}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <SocialMenu />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerMenu;
