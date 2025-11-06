"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BookingApiResponse } from "@/types/bookings";
import ViewBookingButton from "@/components/admin/bookings/ViewBookingButton";
import DeleteBookingButton from "./DeleteBookingButton";


interface BookingProps {
  booking: BookingApiResponse;
  token: string;
}

export default function Booking({ booking, token }: BookingProps) {
  return (
    <TableRow className="border-gray-800 hover:bg-gray-950">
      {/* Booking Number */}
      <TableCell>
        <div className="text-sm font-mono font-semibold text-white">
          {booking.bookingNumber ?? "BK-XXXXXXXX"}
        </div>
      </TableCell>

      {/* Customer Info */}
      <TableCell>
        <div className="text-sm font-sans font-semibold text-white">
          {booking.firstName ?? "John Doe"} {booking.lastName ?? "Doe"}
        </div>
        <div className="text-xs font-mono text-gray-400">
          {booking.email ?? "email@example.com"}
        </div>
      </TableCell>

      {/* Vehicle / Service */}
      <TableCell>
        <div className="text-sm font-sans text-white">
          {booking.vehicle.name ?? "Vehicle Name"}
        </div>
        <div className="text-xs font-mono text-gray-400">
          {booking.service?.name ?? "Service Type"}
        </div>
      </TableCell>

      {/* Date */}
      <TableCell>
        <div className="text-sm font-mono text-gray-400">
          {booking.dateOfService
            ? new Date(booking.dateOfService).toLocaleDateString()
            : "MM/DD/YYYY"}
        </div>
        <div className="text-xs font-mono text-gray-500">
          {booking.pickUpTime
            ? new Date(booking.pickUpTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "HH:MM AM/PM"}
        </div>
      </TableCell>

      {/* Price */}
      <TableCell>
        <div className="text-sm font-sans font-semibold text-white">
          {booking?.totalPrice
            ? `$${Number(booking.totalPrice).toFixed(2)}`
            : "$0.00"}
        </div>
      </TableCell>

      {/* Status */}
      <TableCell>
        <Badge
          variant="default"
          className="font-mono bg-gray-700 text-gray-300 hover:bg-gray-700"
        >
          {booking.status ?? "PENDING"}
        </Badge>
      </TableCell>

      {/* Actions */}
      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-2">
          <ViewBookingButton bookingId={booking.id} token={token} />
          <DeleteBookingButton bookingId={booking.id} token={token} />
        </div>
      </TableCell>
    </TableRow>
  );
}
