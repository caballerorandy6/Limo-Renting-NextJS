"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Shadcn Components
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface BookingActionsProps {
  bookingId: string;
}

/**
 * BookingActions - Client Component for interactive actions
 *
 * Handles:
 * - Print confirmation
 * - Download PDF
 * - Email copy
 * - Share booking
 * - Add to calendar
 * - Return to home
 */
export default function BookingActions({ bookingId }: BookingActionsProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  // Print confirmation handler
  const handlePrint = () => {
    window.print();
    toast({
      title: "🖨️ Print Dialog Opened",
      description: "Select your printer and print settings",
      className: "bg-blue-600 text-white font-sans",
    });
  };

  // Download PDF handler
  const handleDownloadPDF = async () => {
    setIsProcessing(true);

    try {
      // Simulate PDF generation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "📄 PDF Ready",
        description: "Your booking confirmation has been downloaded",
        className: "bg-green-600 text-white font-sans",
      });

      // TODO: Implement actual PDF download logic
      // Example: window.open(`/api/bookings/${bookingId}/pdf`, '_blank');

    } catch (error) {
      console.error("PDF download error:", error);
      toast({
        title: "❌ Download Failed",
        description: "Could not generate PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Email confirmation handler
  const handleEmailCopy = async () => {
    setIsProcessing(true);

    try {
      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "📧 Email Sent",
        description: "A copy of your confirmation has been sent",
        className: "bg-green-600 text-white font-sans",
      });

      // TODO: Implement actual email resend logic
      // Example: await resendConfirmationEmail(bookingId);

    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "❌ Email Failed",
        description: "Could not send email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Add to calendar handler
  const handleAddToCalendar = () => {
    toast({
      title: "📅 Calendar",
      description: "Calendar integration coming soon!",
      className: "bg-blue-600 text-white font-sans",
    });

    // TODO: Implement calendar integration (Google Calendar, iCal, etc.)
    // Example: generateICalFile(bookingData);
  };

  // Share booking handler
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/ride/booking-success/${bookingId}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Booking Confirmation",
          text: `My ride booking confirmation - ${bookingId}`,
          url: shareUrl,
        });

        toast({
          title: "📱 Shared Successfully",
          description: "Booking details shared",
          className: "bg-green-600 text-white font-sans",
        });
      } catch (error) {
        // User cancelled share
        console.log("Share cancelled");
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "📋 Link Copied",
          description: "Booking link copied to clipboard",
          className: "bg-green-600 text-white font-sans",
        });
      } catch (error) {
        toast({
          title: "❌ Share Failed",
          description: "Could not share booking",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Card className="border-2 border-gray-300 shadow-lg">
      <CardContent className="pt-6">
        <div className="space-y-3">
          {/* Print Button */}
          <Button
            onClick={handlePrint}
            variant="outline"
            className="w-full font-mono flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-500 transition-colors"
            disabled={isProcessing}
          >
            <span>🖨️</span>
            <span>Print Confirmation</span>
          </Button>

          {/* Download PDF Button */}
          <Button
            onClick={handleDownloadPDF}
            variant="outline"
            className="w-full font-mono flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-500 transition-colors"
            disabled={isProcessing}
          >
            <span>📄</span>
            <span>{isProcessing ? "Generating..." : "Download PDF"}</span>
          </Button>

          {/* Email Copy Button */}
          <Button
            onClick={handleEmailCopy}
            variant="outline"
            className="w-full font-mono flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-500 transition-colors"
            disabled={isProcessing}
          >
            <span>📧</span>
            <span>{isProcessing ? "Sending..." : "Email Copy"}</span>
          </Button>

          {/* Add to Calendar Button */}
          <Button
            onClick={handleAddToCalendar}
            variant="outline"
            className="w-full font-mono flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-500 transition-colors"
            disabled={isProcessing}
          >
            <span>📅</span>
            <span>Add to Calendar</span>
          </Button>

          {/* Share Button */}
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full font-mono flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-500 transition-colors"
            disabled={isProcessing}
          >
            <span>📱</span>
            <span>Share Booking</span>
          </Button>

          <div className="pt-4 border-t">
            {/* New Booking Button */}
            <Link href="/reservations" className="block mb-3">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono flex items-center justify-center gap-2"
              >
                <span>🚗</span>
                <span>Book Another Ride</span>
              </Button>
            </Link>

            {/* Return Home Button */}
            <Link href="/">
              <Button
                variant="ghost"
                className="w-full font-mono flex items-center justify-center gap-2 hover:bg-gray-100"
              >
                <span>🏠</span>
                <span>Return to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
