"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Booking from "./Booking";
import { BookingApiResponse } from "@/types/bookings";

interface BookingListProps {
  bookings: BookingApiResponse[];
  token: string;
}

export default function BookingList({ bookings, token }: BookingListProps) {

  return (
    <div className="rounded-lg border border-gray-800 bg-black overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-950">
          <TableRow className="border-gray-800 hover:bg-gray-950">
            <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              Booking #
            </TableHead>
            <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              Customer
            </TableHead>
            <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              Vehicle / Service
            </TableHead>
            <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              Date
            </TableHead>
            <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              Price
            </TableHead>
            <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              Status
            </TableHead>
            <TableHead className="text-right text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <Booking key={booking.id} booking={booking} token={token} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
