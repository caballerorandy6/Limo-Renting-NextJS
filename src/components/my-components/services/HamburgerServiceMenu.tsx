"use client";

import { useState } from "react";
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
import { services } from "./Services";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import SocialMenu from "@/components/my-components/nav/SocialMenu";
import OpenFolderIcon from "@/components/my-components/icons/OpenFolderIcon";

const HamburgerServiceMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex lg:hidden justify-start w-full text-white pb-4">
      {/* Trigger Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
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
                  "h-1 bg-black rounded-sm transition-all",
                  isOpen ? "transform rotate-45 translate-y-2 opacity-0" : ""
                )}
              ></span>
              <span
                className={cn(
                  "h-1 bg-black rounded-sm transition-all",
                  isOpen ? "opacity-0" : ""
                )}
              ></span>
              <span
                className={cn(
                  "h-1 bg-black rounded-sm transition-all",
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
              Services Menu
            </SheetTitle>

            <SheetDescription></SheetDescription>
          </SheetHeader>

          <Separator className="text-white border" />

          {/* Navigation Links */}
          {/* Navigation Links */}
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-start gap-4">
              {services.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <div className="flex items-center gap-2">
                    <OpenFolderIcon />
                    <Link
                      href={`${item.href}/${item.id}`}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-mono font-bold hover:text-red-500 transition-colors text-lg",
                        pathname === item.href ? "text-red-500" : "text-white"
                      )}
                      onClick={handleClose}
                    >
                      {item.title}
                    </Link>
                  </div>
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

export default HamburgerServiceMenu;
