"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import WeddingIcon from "@/components/my-components/icons/WeddingIcon";
import PartyIcon from "@/components/my-components/icons/PartyIcon";
import CorporateTransferIcon from "@/components/my-components/icons/CorporateTransferIcon";
import WineGlassIcon from "@/components/my-components/icons/WineGlassIcon";
import BuildingIcon from "@/components/my-components/icons/BuildingIcon";
import PlaneIcon from "@/components/my-components/icons/PlaneIcon";
import GlobeIcon from "@/components/my-components/icons/GlobeIcon";
import PlanningIcon from "@/components/my-components/icons/PlanningIcon";
import Planning2Icon from "@/components/my-components/icons/Planning2Icon";
import SportsIcon from "@/components/my-components/icons/SportsIcon";
import BinocularsIcon from "@/components/my-components/icons/BinocularsIcon";
import {
  MenuArray,
  PartnersTestimonialsImagesProps,
  WhyChooseUsCircleProps,
  ServiceProps,
} from "@/lib/interfaces";

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
    url: "/info/contacts",
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
    buttonName: "Learn More",
    href: "/services/weddings",
  },
  {
    title: "Corporate Services",
    description: "Service - 02",
    content:
      "Our professional chauffeurs are happy to pick you up and drop you off at the location of any corporate event, including one of the three local airports.",
    icon: CorporateTransferIcon,
    buttonName: "Learn More",
    href: "/services/corporate-transfers",
  },
  {
    title: "Party Bus Rentals",
    description: "Service - 03",
    content:
      "Our Miami party bus has room for up to 30 passengers with bench seating on each side. You can request music to relax or party to, alcoholic beverages for those over age 21, movies, and much more.",
    icon: PartyIcon,
    buttonName: "Learn More",
    href: "/services/party-bus-rentals",
  },
  {
    title: "Bachelorette Parties",
    description: "Service - 04",
    content:
      "Bachelor and bachelorette parties have long been a tradition for people getting married soon to have one last night on the town as a single person with their wedding party and closest friends.",
    icon: WineGlassIcon,
    buttonName: "Learn More",
    href: "/services/bachelorette-parties",
  },
  {
    title: "Nights on the Town",
    description: "Service - 05",
    content:
      "With our professional chauffeurs at the wheel, you can relax and focus on creating lasting memories.",
    icon: BuildingIcon,
    buttonName: "Learn More",
    href: "/services/nights-on-the-town",
  },
  {
    title: "Airport Transfers",
    description: "Service - 06",
    content:
      "Looking for the best Miami airport transportation? Our local and experienced limo and MIA car service chauffeurs can help!",
    buttonName: "Learn More",
    icon: PlaneIcon,
    href: "/services/airport-transfers",
  },
  {
    title: "Global Services",
    description: "Service - 07",
    content:
      "Embark on seamless worldwide journeys with American Transportation's global services, where luxury and reliability transcend borders, ensuring unparalleled comfort and convenience for every traveler.",
    buttonName: "Learn More",
    icon: GlobeIcon,
    href: "/services/global-services",
  },
  {
    title: "Travel Planning",
    description: "Service - 08",
    content:
      "Let our expert team handle every detail of your travel plans with precision and care, ensuring a stress-free and unforgettable journey with American Transportation's comprehensive travel planning service.",
    buttonName: "Learn More",
    icon: PlanningIcon,
    href: "/services/travel-planning",
  },
  {
    title: "Event Planning",
    description: "Service - 09",
    content:
      "From weddings and corporate events to family reunions and more, American Transportation offers a range of luxury transportation services to elevate your special event experience.",
    buttonName: "Learn More",
    icon: Planning2Icon,
    href: "/services/event-planning",
  },
  {
    title: "SportingEvents",
    description: "Service - 10",
    content:
      "Cheer on your favorite Miami sports teams in VIP style with American Transportation, where our luxurious vehicles and experienced chauffeurs ensure a game day experience like no other.",
    buttonName: "Discover More",
    icon: SportsIcon,
    href: "/services/sporting-events",
  },
  {
    title: "Tours / Sight Seeing",
    description: "Service - 11",
    content:
      "Experience the vibrant sights and sounds of Miami like never before with American Transportation's expertly curated tours and sightseeing experiences, showcasing the city's iconic landmarks and hidden treasures in unparalleled comfort and style.",
    buttonName: "Discover More",
    icon: BinocularsIcon,
    href: "/services/tours-sight-seeing",
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

export const marqueeTestimonialsArray: PartnersTestimonialsImagesProps[] = [
  {
    src: "/testimonials1.webp",
    alt: "Florida Limousine Association",
    href: "https://www.floridalimousine.com/",
  },
  {
    src: "/testimonials2.webp",
    alt: "National Limousine Association",
    href: "https://www.limo.org/",
  },
  {
    src: "/testimonials3.webp",
    alt: "Better Bussiness Bureau",
    href: "https://www.bbb.org/search",
  },
  {
    src: "/testimonials4.webp",
    alt: "National Association of Wedding Professionals",
    href: "https://www.nawp.com/",
  },
  {
    src: "/testimonials5.webp",
    alt: "MPI Academy",
    href: "https://www.mpi.org/",
  },
  {
    src: "/testimonials6.webp",
    alt: "Greater Miami and Miami Beach",
    href: "https://www.miamiandbeaches.com/",
  },
];

export const servicesArray: ServiceProps[] = [
  {
    service: "Corporate Services",
    title: "Corporate Transportation Services",
    image: "/service1.webp",
    url: "/info/services/service-options/corporate-services",
    buttonName: "Book Now",
  },
  {
    service: "Weddings",
    title: "Wedding Transportation in Miami",
    image: "/limoAboutPage2.webp",
    url: "/info/services/service-options/weddings",
    buttonName: "Book Now",
  },
];
