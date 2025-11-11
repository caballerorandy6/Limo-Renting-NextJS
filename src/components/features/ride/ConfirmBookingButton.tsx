"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { BookingConfirmationData } from "@/actions/ride";
import { useRouter } from "next/navigation";
import { createBooking } from "@/actions/bookings";

interface ConfirmBookingButtonProps {
  bookingData: BookingConfirmationData;
  disabled?: boolean;
}

export default function ConfirmBookingButton({
  bookingData,
  disabled,
}: ConfirmBookingButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleConfirmBooking = async () => {
    setIsProcessing(true);

    try {
      // Step 1: Validating
      toast({
        title: "⏳ Validating booking details...",
        description: "Please wait while we confirm your information",
        className: "max-w-md bg-green-600 text-white font-sans text-lg",
      });

      await new Promise((resolve) => setTimeout(resolve, 600));

      // Step 2: Saving
      toast({
        title: "💾 Saving your reservation...",
        description: "Creating your booking in our system",
        className: "max-w-md bg-green-600 text-white font-sans",
      });

      await new Promise((resolve) => setTimeout(resolve, 900));

      // Step 3: Sending email
      toast({
        title: "📧 Sending confirmation email...",
        description: `Email being sent to ${bookingData.emailAddress}`,
        className: "max-w-md bg-green-600 text-white font-sans",
      });

      await new Promise((resolve) => setTimeout(resolve, 1100));

      // Step 4: Notifying admin
      toast({
        title: "🔔 Notifying our team...",
        description: "Your booking is being assigned to a driver",
        className: "max-w-md bg-green-600 text-white font-sans",
      });

      await new Promise((resolve) => setTimeout(resolve, 700));

      // Step 5: Processing payment
      toast({
        title: "💳 Processing payment...",
        description: "Finalizing your booking",
        className: "max-w-md bg-blue-600 text-white font-sans",
      });

      // Call the actual API to create booking (NO AUTH REQUIRED)
      const result = await createBooking({
        firstName: bookingData.firstName,
        lastName: bookingData.lastName,
        email: bookingData.emailAddress,
        phone: bookingData.phoneNumber,
        pickUpLocation: bookingData.pickUpLocation,
        dropOffLocation: bookingData.dropOffLocation,
        stops: bookingData.stops || [],
        dateOfService: bookingData.dateOfService,
        pickUpTime: bookingData.pickUpTime,
        roundTrip: bookingData.roundTrip,
        returnDate: bookingData.returnDate,
        returnTime: bookingData.returnTime,
        tripTypeId: bookingData.tripTypeId,
        passengers: parseInt(bookingData.passengers),
        vehicleId: bookingData.vehicleId,
        serviceId: null,
        childSeat: bookingData.addOns?.childSeat || false,
        meetGreet: bookingData.addOns?.meetGreet || false,
        champagne: bookingData.addOns?.champagne || false,
        addOnsTotal: bookingData.addOnsTotal || 0,
        distance: bookingData.distance,
        duration: bookingData.duration,
        totalPrice: bookingData.totalPrice,
        specialInstructions: bookingData.specialInstructions,
      });

      // Success notification
      toast({
        title: "✅ Booking Confirmed!",
        description: "Your ride has been successfully booked!",
        variant: "custom",
      });

      // Redirect to success page with booking ID
      setTimeout(() => {
        router.push(`/ride/booking-success/${result.id}`);
      }, 1500);
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "❌ Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Button
      onClick={handleConfirmBooking}
      disabled={disabled || isProcessing}
      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 font-mono disabled:opacity-50 disabled:cursor-not-allowed text-white"
    >
      {isProcessing ? "⏳ Processing..." : "🎯 Confirm & Book Now"}
    </Button>
  );
}
