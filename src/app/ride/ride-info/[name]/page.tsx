"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Shadcn Components
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom Components
import Heading from "@/components/shared/ui-common/Heading";
import PassengersIcon from "@/components/shared/icons/PassengersIcon";
import BriefcaseIcon from "@/components/shared/icons/BriefcaseIcon";
import LocationIcon from "@/components/shared/icons/LocationIcon";
import CalendarIcon from "@/components/shared/icons/CalendarIcon";
import ConfirmBookingButton from "@/components/features/ride/ConfirmBookingButton";
import RideInfoSkeleton from "@/components/features/ride/RideInfoSkeleton";

//Store
import { useRideInfoStore } from "@/stores";

//utils
import { ridePrice } from "@/lib/utils";
import { vehicles } from "@/components/features/fleet/arrays";
import { v4 as uuidv4 } from "uuid";

type Params = Promise<{ name: string }>;

/**
 * RideInfo Page - Confirmation & Checkout Page
 *
 * TODO: Implement the following logic:
 * - Get ride data from store (useRideInfoStore)
 * - Get selected vehicle data
 * - Calculate final price with breakdown
 * - Handle form submission for booking confirmation
 * - Send confirmation email
 * - Redirect to success page
 */

const RideInfoPage = (props: { params: Params }) => {
  // Get vehicle name from URL params
  const params = use(props.params);

  // Decode the vehicle name from URL (Next.js does NOT decode params automatically)
  const vehicleName = decodeURIComponent(params.name);

  // Get data from store
  const { ride, distance, duration } = useRideInfoStore();
  const router = useRouter();

  // Track hydration state to prevent premature redirect
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait for hydration to complete before checking ride data
  useEffect(() => {
    // Mark as hydrated after a small delay to ensure localStorage data is loaded
    const timer = setTimeout(() => {
      setIsHydrated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Protect route: redirect if no valid ride data exists AFTER hydration
  useEffect(() => {
    if (!isHydrated) return; // Don't check until hydration is complete

    const hasValidRide =
      ride.pickUpLocation &&
      ride.dropOffLocation &&
      ride.dateOfService &&
      ride.passengers;

    if (!hasValidRide) {
      console.warn("⚠️ No valid ride data found. Redirecting to home...");
      router.push("/");
    }
  }, [ride, router, isHydrated]);

  // Find selected vehicle by name
  const selectedVehicle = vehicles.find((v) => v.name === vehicleName);

  // Add-ons state
  const [addOns, setAddOns] = useState({
    childSeat: false,
    meetGreet: false,
    champagne: false,
  });

  // Special instructions state
  const [specialInstructions, setSpecialInstructions] = useState("");

  // Add-ons prices
  const addOnsPrices = {
    childSeat: 10,
    meetGreet: 15,
    champagne: 25,
  };

  // Calculate total add-ons price
  const addOnsTotal =
    (addOns.childSeat ? addOnsPrices.childSeat : 0) +
    (addOns.meetGreet ? addOnsPrices.meetGreet : 0) +
    (addOns.champagne ? addOnsPrices.champagne : 0);

  // Check if ride data is valid before rendering
  const hasValidRide =
    ride.pickUpLocation &&
    ride.dropOffLocation &&
    ride.dateOfService &&
    ride.passengers;

  // Show loading while hydrating or redirecting
  if (!isHydrated || !hasValidRide) {
    return <RideInfoSkeleton />;
  }

  // Handle case where vehicle is not found
  if (!selectedVehicle) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Vehicle Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The selected vehicle could not be found.
          </p>
          <Link href="/reservations">
            <Button>Back to Reservations</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Calculate pricing
  const totalPrice = ridePrice(
    Number(distance),
    selectedVehicle.pricePerMile,
    Number(duration) / 60, // Convert minutes to hours
    selectedVehicle.pricePerHour
  );

  return (
    <div className="w-full bg-gray-50 min-h-screen py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Heading>Confirm Your Ride</Heading>
          <p className="text-gray-600 font-sans mt-2">
            Review your booking details and confirm your reservation
          </p>
        </div>

        {/* Progress Steps (Optional) */}
        <div className="mb-8 flex items-center justify-center gap-2 md:gap-4 font-sans">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <span className="ml-2 text-sm font-mono hidden md:inline">
              Select Vehicle
            </span>
          </div>
          <div className="w-12 md:w-24 h-1 bg-green-500"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <span className="ml-2 text-sm font-mono hidden md:inline">
              Enter Details
            </span>
          </div>
          <div className="w-12 md:w-24 h-1 bg-blue-500"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              3
            </div>
            <span className="ml-2 text-sm font-mono hidden md:inline">
              Confirm
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Summary Card */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50">
                <CardTitle className="flex items-center justify-between">
                  <span className="font-mono text-xl">Trip Details</span>
                  <Link href="/reservations">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-blue-500 hover:text-white font-sans hover:bg-blue-600 transition-colors border border-blue-500 hover:border-blue-600 "
                    >
                      New Search 🔍
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Pickup */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <LocationIcon />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono text-gray-500 uppercase">
                        Pickup Location
                      </p>
                      <p className="font-sans font-semibold text-gray-900">
                        {ride?.pickUpLocation || "Not specified"}
                      </p>
                      <p className="text-sm text-gray-600 font-sans">
                        <CalendarIcon />{" "}
                        {ride?.dateOfService
                          ? new Date(ride.dateOfService).toLocaleDateString()
                          : "N/A"}{" "}
                        at {ride?.pickUpTime || "Not specified"}
                      </p>
                    </div>
                  </div>

                  {/* Stops */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      📍
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono text-gray-500 uppercase">
                        Stops
                      </p>
                      <p className="font-sans font-semibold text-gray-900">
                        {ride.stops && ride.stops.length > 0
                          ? ride.stops.map((stop, index) => (
                              <span key={index}>
                                {stop}
                                {index < ride.stops.length - 1 && ", "}
                              </span>
                            ))
                          : "No stops requested"}
                      </p>
                    </div>
                  </div>

                  {/* Dropoff */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      🎯
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono text-gray-500 uppercase">
                        Dropoff Location
                      </p>
                      <p className="font-sans font-semibold text-gray-900">
                        {ride?.dropOffLocation || "Not specified"}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Trip Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        {distance || "N/A"}
                      </p>
                      <p className="text-xs text-gray-600 font-mono">Miles</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        {duration || "N/A"}
                      </p>
                      <p className="text-xs text-gray-600 font-mono">Minutes</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        {ride?.passengers || "N/A"}
                      </p>
                      <p className="text-xs text-gray-600 font-mono">
                        Passengers
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        {ride?.roundTrip ? "Yes" : "No"}
                      </p>
                      <p className="text-xs text-gray-600 font-mono">
                        Round Trip
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Card */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50">
                <CardTitle className="font-mono text-xl">
                  Your Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Vehicle Image */}
                  <div className="md:w-1/3">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-gray-200">
                      <Image
                        src={selectedVehicle.images[0]}
                        alt={selectedVehicle.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="md:w-2/3 space-y-4">
                    <h3 className="text-2xl font-bold font-mono text-gray-900">
                      {selectedVehicle.name}
                    </h3>

                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                        <PassengersIcon />
                        <span className="font-mono text-sm">
                          {selectedVehicle.quantityPassengers} Passengers
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                        <BriefcaseIcon />
                        <span className="font-mono text-sm">
                          {selectedVehicle.quantityBaggage} Bags
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-sans text-gray-700">
                        <strong>Description:</strong>
                      </p>
                      <p className="text-sm font-sans text-gray-600">
                        {selectedVehicle.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-sans text-gray-700">
                        <strong>Pricing:</strong>
                      </p>
                      <p className="text-sm font-sans text-gray-600">
                        ${selectedVehicle.pricePerMile}/mile • $
                        {selectedVehicle.pricePerHour}/hour
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information Card */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50">
                <CardTitle className="flex items-center justify-between">
                  <span className="font-mono text-xl">Contact Information</span>
                  <Link href="/reservations">
                    <Button variant="ghost" size="sm" className="text-blue-500">
                      New Search 🔍
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">
                      Full Name
                    </p>
                    <p className="font-sans font-semibold">
                      {ride?.firstName || ride?.lastName
                        ? `${ride?.firstName || ""} ${
                            ride?.lastName || ""
                          }`.trim()
                        : "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">
                      Email
                    </p>
                    <p className="font-sans font-semibold">
                      {ride?.emailAddress || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">
                      Phone
                    </p>
                    <p className="font-sans font-semibold">
                      {ride?.phoneNumber || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">
                      Service Type
                    </p>
                    <p className="font-sans font-semibold">
                      {ride?.typeOfService || "Not specified"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Optional Extras */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50">
                <CardTitle className="font-mono text-xl">
                  Optional Add-Ons
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="child-seat"
                        checked={addOns.childSeat}
                        onCheckedChange={(checked) =>
                          setAddOns({ ...addOns, childSeat: !!checked })
                        }
                      />
                      <label htmlFor="child-seat" className="cursor-pointer">
                        <p className="font-sans font-semibold">Child Seat</p>
                        <p className="text-sm text-gray-600">
                          Safety seat for children
                        </p>
                      </label>
                    </div>
                    <span className="font-mono font-bold text-blue-600">
                      +${addOnsPrices.childSeat}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="meet-greet"
                        checked={addOns.meetGreet}
                        onCheckedChange={(checked) =>
                          setAddOns({ ...addOns, meetGreet: !!checked })
                        }
                      />
                      <label htmlFor="meet-greet" className="cursor-pointer">
                        <p className="font-sans font-semibold">
                          Meet & Greet Sign
                        </p>
                        <p className="text-sm text-gray-600">
                          Driver holds personalized sign
                        </p>
                      </label>
                    </div>
                    <span className="font-mono font-bold text-blue-600">
                      +${addOnsPrices.meetGreet}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="champagne"
                        checked={addOns.champagne}
                        onCheckedChange={(checked) =>
                          setAddOns({ ...addOns, champagne: !!checked })
                        }
                      />
                      <label htmlFor="champagne" className="cursor-pointer">
                        <p className="font-sans font-semibold">
                          Champagne Service
                        </p>
                        <p className="text-sm text-gray-600">
                          Premium champagne on ice
                        </p>
                      </label>
                    </div>
                    <span className="font-mono font-bold text-blue-600">
                      +${addOnsPrices.champagne}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Instructions */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50">
                <CardTitle className="font-mono text-xl">
                  Special Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Textarea
                  placeholder="Any special requests or instructions for your driver..."
                  className="min-h-[100px] font-sans"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                />
                <p className="text-xs text-gray-500 font-sans mt-2">
                  Let us know about flight numbers, special needs, or any other
                  important details
                </p>
              </CardContent>
            </Card>

            {/* Policies Accordion */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50">
                <CardTitle className="font-mono text-xl">
                  Important Policies
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="cancellation">
                    <AccordionTrigger className="font-sans font-semibold">
                      Cancellation Policy
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-gray-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Free cancellation up to 24 hours before scheduled
                          pickup
                        </li>
                        <li>50% charge for cancellations within 24 hours</li>
                        <li>
                          No refund for no-shows or cancellations within 2 hours
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="payment">
                    <AccordionTrigger className="font-sans font-semibold">
                      Payment Policy
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-gray-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>We accept all major credit cards and PayPal</li>
                        <li>Payment is charged upon booking confirmation</li>
                        <li>15% gratuity is recommended but not included</li>
                        <li>Receipts sent automatically to your email</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="terms">
                    <AccordionTrigger className="font-sans font-semibold">
                      Terms & Conditions
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-gray-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Driver will wait up to 15 minutes for airport pickups
                        </li>
                        <li>Additional wait time charged at $1 per minute</li>
                        <li>Maximum 2 additional stops without extra charge</li>
                        <li>
                          Vehicle cleanliness fees may apply for excessive mess
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Right Side (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Summary Card */}
              <Card className="border-2 border-blue-500 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardTitle className="font-mono text-xl">
                    Price Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">
                        Distance ({distance} mi × $
                        {selectedVehicle.pricePerMile}
                        /mi)
                      </span>
                      <span className="font-semibold">
                        $
                        {(
                          Number(distance) * selectedVehicle.pricePerMile
                        ).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">
                        Time ({duration} min × ${selectedVehicle.pricePerHour}
                        /hr)
                      </span>
                      <span className="font-semibold">
                        $
                        {(
                          (Number(duration) / 60) *
                          selectedVehicle.pricePerHour
                        ).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">Add-ons</span>
                      <span className="font-semibold">
                        ${addOnsTotal.toFixed(2)}
                      </span>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">
                        ${(totalPrice + addOnsTotal).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">Gratuity (15%)</span>
                      <span className="font-semibold">
                        ${((totalPrice + addOnsTotal) * 0.15).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">Taxes & Fees (10%)</span>
                      <span className="font-semibold">
                        ${((totalPrice + addOnsTotal) * 0.1).toFixed(2)}
                      </span>
                    </div>

                    <Separator className="border-2" />

                    <div className="flex justify-between items-center">
                      <span className="font-mono text-lg font-bold">TOTAL</span>
                      <span className="font-mono text-2xl font-bold text-blue-600">
                        $
                        {(
                          totalPrice +
                          addOnsTotal +
                          (totalPrice + addOnsTotal) * 0.15 +
                          (totalPrice + addOnsTotal) * 0.1
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mt-6">
                    <div className="flex gap-2">
                      <Input placeholder="Promo Code" className="font-mono" />
                      <Button variant="outline" className="font-mono">
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 border-t pt-6">
                  <ConfirmBookingButton
                    bookingData={{
                      rideId: uuidv4(),
                      pickUpLocation: ride.pickUpLocation,
                      dropOffLocation: ride.dropOffLocation,
                      stops: ride.stops || [],
                      dateOfService: ride.dateOfService,
                      pickUpTime: ride.pickUpTime,
                      typeOfService: ride.typeOfService,
                      passengers: ride.passengers,
                      firstName: ride.firstName,
                      lastName: ride.lastName,
                      emailAddress: ride.emailAddress,
                      phoneNumber: ride.phoneNumber,
                      roundTrip: ride.roundTrip || false,
                      returnDate: ride.returnDate,
                      returnTime: ride.returnTime,
                      distance: Number(distance),
                      duration: Number(duration),
                      vehicleName: selectedVehicle.name,
                      vehiclePrice: totalPrice,
                      addOns: addOns,
                      addOnsTotal: addOnsTotal,
                      totalPrice:
                        totalPrice +
                        addOnsTotal +
                        (totalPrice + addOnsTotal) * 0.15 +
                        (totalPrice + addOnsTotal) * 0.1,
                      specialInstructions: specialInstructions || undefined,
                    }}
                  />
                  <Link href="/reservations" className="w-full">
                    <Button variant="outline" className="w-full font-mono">
                      🔍 New Search
                    </Button>
                  </Link>
                  <Link href="/ride/ride-quote" className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full font-mono text-blue-600"
                    >
                      💬 Request Quote Instead
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Trust Badges */}
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-4 text-center">
                    <div className="flex items-center justify-center gap-3 text-green-600">
                      <span className="text-2xl">🔒</span>
                      <span className="font-sans font-semibold">
                        Secure Payment
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-blue-600">
                      <span className="text-2xl">✅</span>
                      <span className="font-sans font-semibold">
                        Best Price Guarantee
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-yellow-600">
                      <span className="text-2xl">⭐</span>
                      <span className="font-sans font-semibold">
                        5-Star Rated Service
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-red-600">
                      <span className="text-2xl">📞</span>
                      <span className="font-sans font-semibold">
                        24/7 Support
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Need Help */}
              <Card className="border-2 border-gray-200 shadow-lg bg-gradient-to-br from-gray-50 to-blue-50">
                <CardContent className="pt-6">
                  <h4 className="font-mono font-bold text-center mb-3">
                    Need Help?
                  </h4>
                  <p className="text-sm font-sans text-gray-600 text-center mb-4">
                    Our team is available 24/7
                  </p>
                  <div className="text-center space-y-2">
                    <p className="font-mono font-bold text-blue-600">
                      (555) 123-4567
                    </p>
                    <p className="text-sm font-sans text-gray-600">
                      info@example.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideInfoPage;
