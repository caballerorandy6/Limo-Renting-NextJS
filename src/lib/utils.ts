"use client";

import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";
import { MenuArray, WhyChooseUsCircleProps, PoiProps } from "@/lib/interfaces";

//functions
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRangeUpto50 = () =>
  Array.from({ length: 50 }, (_, i) => i + 1)
    .toString()
    .split(",");

//Arrays
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
    url: "/about",
    id: "about",
  },
  {
    name: "Services",
    url: "/services",
    id: "services",
    url2: "/services/[id]",
  },
  {
    name: "Fleet",
    url: "/fleet",
    id: "fleet",
  },
  {
    name: "Contact",
    url: "/contacts",
    id: "contact",
  },
  {
    name: "Reservations",
    url: "/reservations",
    id: "reservations",
  },
];

export const featuredVehiclesImages1: string[] = [
  "/featuredVehicles/featuredVehicles1.webp",
  "/featuredVehicles/featuredVehicles2.webp",
  "/featuredVehicles/featuredVehicles3.webp",
  "/featuredVehicles/featuredVehicles4.webp",
];

export const featuredVehiclesImages2: string[] = [
  "/featuredVehicles/featuredVehicles5.webp",
  "/featuredVehicles/featuredVehicles6.webp",
  "/featuredVehicles/featuredVehicles7.webp",
  "/featuredVehicles/featuredVehicles8.webp",
];

export const featuredVehiclesImages3: string[] = [
  "/featuredVehicles/featuredVehicles9.webp",
  "/featuredVehicles/featuredVehicles10.webp",
  "/featuredVehicles/featuredVehicles11.webp",
  "/featuredVehicles/featuredVehicles12.webp",
];

export const featuredVehiclesImages4: string[] = [
  "/featuredVehicles/featuredVehicles16.webp",
  "/featuredVehicles/featuredVehicles13.webp",
  "/featuredVehicles/featuredVehicles14.webp",
  "/featuredVehicles/featuredVehicles15.webp",
];

export const featuredVehiclesImages5: string[] = [
  "/featuredVehicles/featuredVehicles17.webp",
  "/featuredVehicles/featuredVehicles18.webp",
  "/featuredVehicles/featuredVehicles19.webp",
  "/featuredVehicles/featuredVehicles20.webp",
  "/featuredVehicles/featuredVehicles21.webp",
];

export const featuredVehiclesImages6: string[] = [
  "/featuredVehicles/featuredVehicles22.webp",
  "/featuredVehicles/featuredVehicles23.webp",
  "/featuredVehicles/featuredVehicles24.webp",
];

export const featuredVehiclesImages7: string[] = [
  "/featuredVehicles/featuredVehicles25.webp",
  "/featuredVehicles/featuredVehicles26.webp",
  "/featuredVehicles/featuredVehicles27.webp",
  "/featuredVehicles/featuredVehicles28.webp",
  "/featuredVehicles/featuredVehicles29.webp",
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

export const locations: PoiProps[] = [
  {
    key: "American transportation & Limo services",
    location: { lat: 25.80381, lng: -80.31653 },
  },
];
