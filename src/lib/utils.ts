"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MenuArray, WhyChooseUsCircleProps, PoiProps, VehicleProps } from '@/lib/interfaces';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRangeUpto50 = () =>
  Array.from({ length: 50 }, (_, i) => i + 1)
    .toString()
    .split(",");

export const toastDate = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Chicago",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
}).format(new Date());

export function dateModified(date: Date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US");
}

export const ridePrice = (
  distance: number,
  pricePerMiles: number,
  duration: number,
  pricePerHours: number
) => distance * pricePerMiles + duration * pricePerHours;

export const calculateDetailedPricing = (distance: number, duration: number, vehicle: VehicleProps, gratuityPercent: number, taxesAndFeesPercent: number) =>{
  const distanceCost = distance * vehicle.pricePerMile;
  const durationCost = duration * vehicle.pricePerHour;
  const subtotal = distanceCost + durationCost;
  const gratuity = subtotal * (gratuityPercent / 100);
  const taxesAndFees = subtotal * (taxesAndFeesPercent / 100);
  return {
    subtotal,
    gratuity,
    taxesAndFees,
    total: subtotal + gratuity + taxesAndFees
  };
}

//Arrays - Business Hours for Limousine Service (4:00 AM - 12:00 AM)
export const pickUpTimeArray = [
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
  "12:00 AM",
];

export const typeOfServiceArray = [
  "From Airport",
  "To Airport",
  "Point to Point",
  "Hourly/As Directed",
  "Charter",
  "From Seaport",
  "To Seaport",
  "Wedding",
  "Greeter (meet and greet w/ sign)",
];

// Houston Airports
export const houstonAirports = [
  "George Bush Intercontinental Airport (IAH) - 2800 N Terminal Rd, Houston, TX 77032",
  "William P. Hobby Airport (HOU) - 7800 Airport Blvd, Houston, TX 77061",
];

// Houston Seaports
export const houstonSeaports = [
  "Port of Houston - 111 E Loop N, Houston, TX 77029",
  "Galveston Cruise Terminal - 2502 Harborside Dr, Galveston, TX 77550",
  "Bayport Cruise Terminal - 8500 Bayport Blvd, Pasadena, TX 77507",
];

export const menuArray: MenuArray[] = [
  {
    name: "Home",
    url: "/",
    id: "home",
  },
  {
    name: "About Us",
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

// Booking Status Color Mapping
export const getBookingStatusColor = (status: string): string => {
  switch (status) {
    case "CONFIRMED":
      return "bg-green-900 text-green-300";
    case "PENDING":
      return "bg-yellow-900 text-yellow-300";
    case "COMPLETED":
      return "bg-blue-900 text-blue-300";
    case "CANCELLED":
      return "bg-red-900 text-red-300";
    default:
      return "bg-gray-700 text-gray-300";
  }
};
