"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import WeddingIcon from "@/components/my-components/icons/WeddingIcon";
import PartyIcon from "@/components/my-components/icons/PartyIcon";
import CorporateTransferIcon from "@/components/my-components/icons/CorporateTransferIcon";
import { MenuArray, WhyChooseUsCircleProps } from "@/lib/interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRangeUpto50 = () =>
  Array.from({ length: 50 }, (_, i) => i + 1)
    .toString()
    .split(",");

export const pickUpTimeArray = [
  "12:00 AM",
  "12:30 AM",
  "1:00 AM",
  "1:30 AM",
  "2:00 AM",
  "2:30 AM",
  "3:00 AM",
  "3:30 AM",
  "4:00 AM",
  "4:30 AM",
  "5:00 AM",
  "5:30 AM",
  "6:00 AM",
  "6:30 AM",
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
];

export const typeOfServiceArray = [
  "Geeter (meet and greet w/ sign)",
  "From Airport",
  "To Airport",
  "Charter",
  "Hourly/As Directed",
  "Point to Point",
  "From Seaport",
  "To Seaport",
  "Wedding",
];

export const menuArray: MenuArray[] = [
  {
    name: "Home",
    url: "/",
    id: "home",
  },
  {
    name: "About",
    url: "/info/about",
    id: "about",
  },
  {
    name: "Services",
    url: "/info/services",
    id: "services",
  },
  {
    name: "Fleet",
    url: "/info/fleet",
    id: "fleet",
  },
  {
    name: "Contact",
    url: "/info/contact",
    id: "contact",
  },
  {
    name: "Reservations",
    url: "/info/reservations",
    id: "reservations",
  },
];

export const whatWeOfferCardArray = [
  {
    title: "Weddings",
    description: "Service - 01",
    content:
      "No need to stress about logistics or coordinating rides on such a momentous occasion. We’ll handle all of that, leaving you free to focus on what truly matters – celebrating love and happiness.",
    icon: WeddingIcon,
    buttonName: "Discover More",
    href: "/services/weddings",
  },
  {
    title: "Corporate Transfers",
    description: "Service - 02",
    content:
      "Our professional chauffeurs are happy to pick you up and drop you off at the location of any corporate event, including one of the three local airports.",
    icon: CorporateTransferIcon,
    buttonName: "Discover More",
    href: "/services/corporate-transfers",
  },
  {
    title: "Party Bus Rentals",
    description: "Service - 03",
    content:
      "Our Miami party bus has room for up to 30 passengers with bench seating on each side. You can request music to relax or party to, alcoholic beverages for those over age 21, movies, and much more.",
    icon: PartyIcon,
    buttonName: "Discover More",
    href: "/services/party-bus-rentals",
  },
];

export const featuredVehiclesImages1: string[] = [
  "/featuredVehicles1.webp",
  "/featuredVehicles2.webp",
  "/featuredVehicles3.webp",
  "/featuredVehicles4.webp",
];

export const featuredVehiclesImages2: string[] = [
  "/featuredVehicles5.webp",
  "/featuredVehicles6.webp",
  "/featuredVehicles7.webp",
  "/featuredVehicles8.webp",
];

export const featuredVehiclesImages3: string[] = [
  "/featuredVehicles9.webp",
  "/featuredVehicles10.webp",
  "/featuredVehicles11.webp",
  "/featuredVehicles12.webp",
];

export const whyChooseUsArray: WhyChooseUsCircleProps[] = [
  {
    numberInfo: "98",
    symbol: "%",
    title: "Client Satisfaction",
    info: "Client satisfaction is our top priority, evident in our commitment to excellence and our dedication.",
  },
  {
    numberInfo: "1000",
    symbol: "+",
    title: "5-Star Review",
    info: "Our stellar reputation speaks about the unforgettable experiences we consistently deliver.",
  },
  {
    numberInfo: "100",
    symbol: "%",
    title: "Safe Journeys",
    info: "Our passengers safety & enjoyment is our priority.",
  },
];
