"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { confirmAndBookRideAction } from "@/actions/ride";
import type { BookingConfirmationData } from "@/actions/ride";
import { useRouter } from "next/navigation";

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

      // Call the actual server action
      const result = await confirmAndBookRideAction(bookingData);

      if (result.success) {
        // Success notification
        toast({
          title: "✅ Booking Confirmed!",
          description:
            result.message || "Your ride has been successfully booked!",
          variant: "custom",
        });

        // Log booking ID
        console.log("Booking ID:", result.bookingId);

        // Redirect to success page with booking ID
        setTimeout(() => {
          router.push(`/ride/booking-success/${result.bookingId}`);
        }, 1500);
      } else {
        // Error notification
        toast({
          title: "❌ Booking Failed",
          description:
            result.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
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
      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 font-mono disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isProcessing ? "⏳ Processing..." : "🎯 Confirm & Book Now"}
    </Button>
  );
}
