"use client";

import { BookingApiResponse } from "@/types/bookings";
import { cn, getBookingStatusColor } from "@/lib/utils";

interface RecentBookingsProps {
  bookings: BookingApiResponse[];
}

export default function RecentBookings({ bookings }: RecentBookingsProps) {

  return (
    <div className="rounded-lg border border-gray-800 bg-black p-6">
      <h2 className="text-lg font-semibold font-sans text-white mb-4">
        Recent Bookings
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 font-sans">No bookings yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div
              key={booking.id}
              className={cn(
                "flex items-center justify-between",
                index < bookings.length - 1 && "border-b border-gray-800 pb-4"
              )}
            >
              <div className="flex-1">
                <p className="font-medium font-sans text-white">
                  {booking.firstName} {booking.lastName}
                </p>
                <p className="text-sm font-mono text-gray-400">
                  {booking.vehicle.name} - Point to Point
                </p>
                <p className="text-xs font-mono text-gray-500 mt-1">
                  {new Date(booking.dateOfService).toLocaleDateString()} at{" "}
                  {booking.pickUpTime}
                </p>
              </div>
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-mono font-medium whitespace-nowrap ml-4",
                  getBookingStatusColor(booking.status)
                )}
              >
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
