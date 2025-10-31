"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { confirmAndBookRideAction } from "@/actions/ride";
import type { BookingConfirmationData } from "@/actions/ride";

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

  const handleConfirmBooking = async () => {
    setIsProcessing(true);

    try {
      // Step 1: Validating
      toast({
        title: "⏳ Validating booking details...",
        description: "Please wait while we confirm your information",
      });

      await new Promise((resolve) => setTimeout(resolve, 600));

      // Step 2: Saving
      toast({
        title: "💾 Saving your reservation...",
        description: "Creating your booking in our system",
      });

      await new Promise((resolve) => setTimeout(resolve, 900));

      // Step 3: Sending email
      toast({
        title: "📧 Sending confirmation email...",
        description: `Email being sent to ${bookingData.emailAddress}`,
      });

      await new Promise((resolve) => setTimeout(resolve, 1100));

      // Step 4: Notifying admin
      toast({
        title: "🔔 Notifying our team...",
        description: "Your booking is being assigned to a driver",
      });

      await new Promise((resolve) => setTimeout(resolve, 700));

      // Step 5: Processing payment
      toast({
        title: "💳 Processing payment...",
        description: "Finalizing your booking",
      });

      // Call the actual server action
      const result = await confirmAndBookRideAction(bookingData);

      if (result.success) {
        // Success notification
        toast({
          title: "✅ Booking Confirmed!",
          description: result.message || "Your ride has been successfully booked!",
          variant: "default",
        });

        // Log booking ID
        console.log("Booking ID:", result.bookingId);

        // Optional: Redirect to success page after 2 seconds
        setTimeout(() => {
          // window.location.href = "/booking-success";
        }, 2000);
      } else {
        // Error notification
        toast({
          title: "❌ Booking Failed",
          description: result.error || "Something went wrong. Please try again.",
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
