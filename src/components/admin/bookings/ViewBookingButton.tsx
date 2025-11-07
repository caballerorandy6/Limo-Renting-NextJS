"use client";

import { useState, useTransition } from "react";
import { getBookingById } from "@/actions/bookings";
import { BookingApiResponse } from "@/types/bookings";
import { Eye } from "lucide-react";
import BookingDetailsDialog from "./BookingDetailsDialog";

interface ViewBookingButtonProps {
  bookingId: string;
  token: string;
}

export default function ViewBookingButton({
  bookingId,
  token,
}: ViewBookingButtonProps) {
  const [open, setOpen] = useState(false);
  const [booking, setBooking] = useState<BookingApiResponse | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleViewBookingDetails = () => {
    startTransition(async () => {
      try {
        const bookingDetails = await getBookingById(bookingId, token);
        if (bookingDetails) {
          setBooking(bookingDetails);
          setOpen(true);
        } else {
          console.error("Booking not found");
        }
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    });
  };

  return (
    <>
      <button
        onClick={handleViewBookingDetails}
        disabled={isPending}
        className="text-gray-400 hover:text-white transition-colors p-1 disabled:opacity-50"
        title="View Details"
      >
        <Eye className={`h-4 w-4 ${isPending ? 'animate-pulse' : ''}`} />
      </button>

      <BookingDetailsDialog
        booking={booking}
        open={open}
        onOpenChange={setOpen}
        token={token}
      />
    </>
  );
}
