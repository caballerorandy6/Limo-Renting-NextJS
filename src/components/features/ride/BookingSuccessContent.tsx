"use client";

import { Suspense } from "react";
import Link from "next/link";

// Shadcn Components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Icons
import LocationIcon from "@/components/shared/icons/LocationIcon";
import CalendarIcon from "@/components/shared/icons/CalendarIcon";

// Client Components
import BookingActions from "@/components/features/ride/BookingActions";
import Heading from "@/components/shared/ui-common/Heading";

import { useRideInfoStore } from "@/stores";

interface BookingSuccessContentProps {
  bookingId: string;
}

/**
 * BookingSuccessContent - Client Component
 *
 * 🔴 IMPORTANTE - DATOS DEL STORE:
 * Este componente maneja los datos de la reserva confirmada.
 * Conecta con el store para obtener los datos reales de la reserva.
 *
 * TODO: Conectar con el store real (useRideInfoStore o backend)
 * Por ahora usa datos mock de ejemplo
 */
export default function BookingSuccessContent({
  bookingId,
}: BookingSuccessContentProps) {
  // 🔴 Obtener TODOS los datos del store
  const {
    ride,
    distance,
    duration,
    vehicleName,
    vehiclePrice,
    vehicleImage,
    addOns,
    addOnsTotal,
    totalPrice,
    specialInstructions,
  } = useRideInfoStore();

  // Datos de la reserva (combinando store + fallbacks por si faltan datos)
  const mockBookingData = {
    // Información del cliente
    firstName: ride?.firstName || "John",
    lastName: ride?.lastName || "Doe",
    emailAddress: ride?.emailAddress || "customer@example.com",
    phoneNumber: ride?.phoneNumber || "(555) 123-4567",

    // Información del viaje
    pickUpLocation: ride?.pickUpLocation || "Pick up location",
    dropOffLocation: ride?.dropOffLocation || "Drop off location",
    stops: ride?.stops || [],
    // ✅ Convertir dateOfService a Date (viene como string del localStorage)
    dateOfService: ride?.dateOfService
      ? new Date(ride.dateOfService)
      : new Date(),
    pickUpTime: ride?.pickUpTime || "12:00 PM",

    // Información del vehículo (✅ Ahora vienen del STORE)
    vehicleName: vehicleName || "Luxury Vehicle",
    vehicleImage: vehicleImage || "/images/vehicles/default.jpg",
    vehiclePrice: vehiclePrice || 150.0,

    // Precios (✅ Ahora vienen del STORE)
    distance: distance || 25.5,
    duration: duration || 45,
    addOns: addOns || {
      childSeat: false,
      meetGreet: true,
      champagne: true,
    },
    addOnsTotal: addOnsTotal || 40,
    totalPrice: totalPrice || 268.13,

    // Extras
    typeOfService: ride?.typeOfService || "Airport Transfer",
    passengers: ride?.passengers || "2",
    roundTrip: ride?.roundTrip || false,
    specialInstructions: specialInstructions || "",
  };

  // Calcular desglose de precios
  const subtotal = mockBookingData.vehiclePrice + mockBookingData.addOnsTotal;
  const gratuity = subtotal * 0.15;
  const taxes = subtotal * 0.1;

  return (
    <div className="w-full bg-gradient-to-b from-green-50 via-white to-gray-50 min-h-screen py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-4">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 animate-bounce">
            <span className="text-5xl">✅</span>
          </div>
          <div className="flex justify-center">
            <Heading>Booking Confirmed!</Heading>
          </div>

          <p className="text-xl text-gray-700 font-sans mt-4">
            Your ride has been successfully booked
          </p>
          <p className="text-sm text-gray-500 font-mono mt-2">
            Confirmation Number:{" "}
            <strong className="text-blue-600">{bookingId}</strong>
          </p>

          {/* Email confirmation notice */}
          <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 border-2 border-blue-200 rounded-lg px-6 py-3">
            <span className="text-2xl">📧</span>
            <p className="text-sm font-sans text-gray-700">
              A confirmation email has been sent to{" "}
              <strong className="text-blue-600">
                {mockBookingData.emailAddress}
              </strong>
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-12 flex items-center justify-center gap-2 md:gap-4 font-sans">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <span className="ml-2 text-sm font-mono hidden md:inline text-green-600">
              Select Vehicle
            </span>
          </div>
          <div className="w-12 md:w-24 h-1 bg-green-500"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <span className="ml-2 text-sm font-mono hidden md:inline text-green-600">
              Enter Details
            </span>
          </div>
          <div className="w-12 md:w-24 h-1 bg-green-500"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <span className="ml-2 text-sm font-mono hidden md:inline text-green-600">
              Confirmed
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Summary Card */}
            <Card className="border-2 border-green-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-gray-50">
                <CardTitle className="flex items-center justify-between">
                  <span className="font-mono text-xl flex items-center gap-2">
                    <span>🚗</span> Trip Details
                  </span>
                  <span className="text-sm font-sans text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    Confirmed
                  </span>
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
                        {mockBookingData.pickUpLocation}
                      </p>
                      <p className="text-sm text-gray-600 font-sans flex items-center gap-1">
                        <CalendarIcon />{" "}
                        {mockBookingData.dateOfService.toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}{" "}
                        at {mockBookingData.pickUpTime}
                      </p>
                    </div>
                  </div>

                  {/* Stops */}
                  {mockBookingData.stops.length > 0 && (
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        📍
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-mono text-gray-500 uppercase">
                          Stops ({mockBookingData.stops.length})
                        </p>
                        <div className="font-sans font-semibold text-gray-900">
                          {mockBookingData.stops.map((stop, index) => (
                            <p key={index} className="text-sm">
                              {index + 1}. {stop}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

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
                        {mockBookingData.dropOffLocation}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Trip Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans">
                    <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                      <p className="text-2xl font-bold text-blue-600">
                        {mockBookingData.distance}
                      </p>
                      <p className="text-xs text-gray-600 font-mono">Miles</p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                      <p className="text-2xl font-bold text-blue-600">
                        {mockBookingData.duration}
                      </p>
                      <p className="text-xs text-gray-600 font-mono">Minutes</p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                      <p className="text-2xl font-bold text-blue-600">
                        {mockBookingData.passengers}
                      </p>
                      <p className="text-xs text-gray-600 font-mono">
                        Passengers
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                      <p className="text-2xl font-bold text-blue-600">
                        {mockBookingData.roundTrip ? "Yes" : "One-Way"}
                      </p>
                      <p className="text-xs text-gray-600 font-mono">
                        Trip Type
                      </p>
                    </div>
                  </div>

                  {/* Special Instructions */}
                  {mockBookingData.specialInstructions && (
                    <>
                      <Separator />
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                        <p className="text-xs font-mono text-yellow-700 uppercase mb-1">
                          Special Instructions
                        </p>
                        <p className="font-sans text-gray-800">
                          {mockBookingData.specialInstructions}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Card */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50">
                <CardTitle className="font-mono text-xl flex items-center gap-2">
                  <span>🚘</span> Your Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Vehicle Image */}
                  <div className="md:w-1/3">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-100">
                      {/* Placeholder - replace with actual vehicle image */}
                      <div className="flex items-center justify-center h-full">
                        <span className="text-6xl">🚗</span>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="md:w-2/3 space-y-4">
                    <h3 className="text-2xl font-bold font-mono text-gray-900">
                      {mockBookingData.vehicleName}
                    </h3>

                    <div className="space-y-2">
                      <p className="text-sm font-sans text-gray-700">
                        <strong>Service Type:</strong>{" "}
                        {mockBookingData.typeOfService}
                      </p>
                      <p className="text-sm font-sans text-gray-700">
                        <strong>Capacity:</strong> Up to{" "}
                        {mockBookingData.passengers} passengers
                      </p>
                    </div>

                    {/* Add-ons included */}
                    {mockBookingData.addOnsTotal > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-sans text-gray-700">
                          <strong>Add-ons Included:</strong>
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {mockBookingData.addOns.childSeat && (
                            <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-sans">
                              👶 Child Seat
                            </span>
                          )}
                          {mockBookingData.addOns.meetGreet && (
                            <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-sans">
                              🪧 Meet & Greet
                            </span>
                          )}
                          {mockBookingData.addOns.champagne && (
                            <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-sans">
                              🥂 Champagne Service
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information Card */}
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50">
                <CardTitle className="font-mono text-xl flex items-center gap-2">
                  <span>👤</span> Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">
                      Full Name
                    </p>
                    <p className="font-sans font-semibold text-gray-900">
                      {mockBookingData.firstName} {mockBookingData.lastName}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">
                      Email
                    </p>
                    <p className="font-sans font-semibold text-gray-900">
                      {mockBookingData.emailAddress}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">
                      Phone
                    </p>
                    <p className="font-sans font-semibold text-gray-900">
                      {mockBookingData.phoneNumber}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs font-mono text-gray-500 uppercase mb-1">
                      Booking ID
                    </p>
                    <p className="font-mono font-semibold text-blue-600">
                      {bookingId}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Next Card */}
            <Card className="border-2 border-blue-300 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50">
                <CardTitle className="font-mono text-xl flex items-center gap-2">
                  <span>📋</span> What&apos;s Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-gray-900">
                        Check your email
                      </p>
                      <p className="text-sm text-gray-600 font-sans">
                        You&apos;ll receive a confirmation email with all
                        booking details
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-gray-900">
                        Driver assignment
                      </p>
                      <p className="text-sm text-gray-600 font-sans">
                        We&apos;ll assign your driver and send you their details
                        24 hours before pickup
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-gray-900">
                        Track your ride
                      </p>
                      <p className="text-sm text-gray-600 font-sans">
                        On the day of service, you can track your driver in
                        real-time
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-gray-900">
                        Enjoy your ride
                      </p>
                      <p className="text-sm text-gray-600 font-sans">
                        Sit back, relax, and let us take care of everything!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Right Side (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Summary Card */}
              <Card className="border-2 border-green-500 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardTitle className="font-mono text-xl flex items-center gap-2">
                    <span>💰</span> Payment Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">Vehicle Base Price</span>
                      <span className="font-semibold">
                        ${mockBookingData.vehiclePrice.toFixed(2)}
                      </span>
                    </div>

                    {mockBookingData.addOnsTotal > 0 && (
                      <div className="flex justify-between font-sans text-sm">
                        <span className="text-gray-600">Add-ons</span>
                        <span className="font-semibold">
                          ${mockBookingData.addOnsTotal.toFixed(2)}
                        </span>
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">Gratuity (15%)</span>
                      <span className="font-semibold">
                        ${gratuity.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-gray-600">Taxes & Fees (10%)</span>
                      <span className="font-semibold">${taxes.toFixed(2)}</span>
                    </div>

                    <Separator className="border-2" />

                    <div className="flex justify-between items-center bg-green-50 p-4 rounded-lg">
                      <span className="font-mono text-lg font-bold">
                        TOTAL PAID
                      </span>
                      <span className="font-mono text-2xl font-bold text-green-600">
                        ${mockBookingData.totalPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mt-4">
                      <p className="text-xs font-sans text-blue-800 flex items-center gap-2">
                        <span className="text-lg">💳</span>
                        <span>Payment processed successfully</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons - Client Component */}
              <Suspense fallback={<div>Loading...</div>}>
                <BookingActions bookingId={bookingId} />
              </Suspense>

              {/* Support Card */}
              <Card className="border-2 border-gray-200 shadow-lg bg-gradient-to-br from-gray-50 to-blue-50">
                <CardContent className="pt-6">
                  <h4 className="font-mono font-bold text-center mb-3 flex items-center justify-center gap-2">
                    <span>📞</span> Need Help?
                  </h4>
                  <p className="text-sm font-sans text-gray-600 text-center mb-4">
                    Our team is available 24/7
                  </p>
                  <div className="text-center space-y-2">
                    <p className="font-mono font-bold text-blue-600">
                      (555) 123-4567
                    </p>
                    <p className="text-sm font-sans text-gray-600">
                      support@limousine.com
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-center">
                    <Link
                      href="/contact"
                      className="text-sm font-sans text-blue-600 hover:text-blue-700 underline"
                    >
                      Contact Support
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-3 text-center">
                    <div className="flex items-center justify-center gap-3 text-green-600">
                      <span className="text-2xl">✅</span>
                      <span className="font-sans font-semibold text-sm">
                        Booking Confirmed
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-blue-600">
                      <span className="text-2xl">🔒</span>
                      <span className="font-sans font-semibold text-sm">
                        Secure Payment
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-yellow-600">
                      <span className="text-2xl">⭐</span>
                      <span className="font-sans font-semibold text-sm">
                        5-Star Service
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-purple-600">
                      <span className="text-2xl">🚗</span>
                      <span className="font-sans font-semibold text-sm">
                        Professional Drivers
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
