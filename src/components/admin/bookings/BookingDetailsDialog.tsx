"use client";

import { useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BookingApiResponse, BookingStatus } from "@/types/bookings";
import { cn, getBookingStatusColor } from "@/lib/utils";
import { updateBookingById } from "@/actions/bookings";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface BookingDetailsDialogProps {
  booking: BookingApiResponse | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  token: string;
}

export default function BookingDetailsDialog({
  booking,
  open,
  onOpenChange,
  token,
}: BookingDetailsDialogProps) {
  const [currentStatus, setCurrentStatus] = useState<BookingStatus>(
    booking?.status || "PENDING"
  );
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  if (!booking) return null;

  const handlerValueChange = (value: BookingStatus) =>{
    startTransition(async() =>{
      try {
        await updateBookingById(booking.id, { status: value } as any, token);
        setCurrentStatus(value);

        toast({
          title: "Booking Updated",
          description: "Booking status has been updated successfully",
          className: "bg-green-600 text-white font-sans",
        })

        router.refresh();
      } catch (error) {
        toast({
          title: "Error updating booking",
          description: "Failed to update booking status",
          variant: "destructive",
        });
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono text-white flex items-center gap-4">
            <span>Booking Details</span>
            <Select
              value={currentStatus}
              onValueChange={handlerValueChange}
              disabled={isPending}
            >
              <SelectTrigger
                className={cn(
                  "w-[160px] h-8 text-xs font-mono font-medium border-none",
                  getBookingStatusColor(currentStatus)
                )}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-black border-gray-800">
                <SelectItem
                  value="PENDING"
                  className="text-yellow-300 font-mono hover:bg-yellow-900"
                >
                  PENDING
                </SelectItem>
                <SelectItem
                  value="CONFIRMED"
                  className="text-green-300 font-mono hover:bg-green-900"
                >
                  CONFIRMED
                </SelectItem>
                <SelectItem
                  value="COMPLETED"
                  className="text-blue-300 font-mono hover:bg-blue-900"
                >
                  COMPLETED
                </SelectItem>
                <SelectItem
                  value="CANCELLED"
                  className="text-red-300 font-mono hover:bg-red-900"
                >
                  CANCELLED
                </SelectItem>
              </SelectContent>
            </Select>
          </DialogTitle>
          <DialogDescription className="text-gray-400 font-sans">
            View and edit booking information and status
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Booking Number & Customer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Booking Number */}
            <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
              <p className="text-xs font-mono text-gray-400 uppercase mb-2">
                Booking Number
              </p>
              <p className="text-lg font-mono font-bold text-blue-400">
                {booking.bookingNumber}
              </p>
            </div>

            {/* Booking Date */}
            <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
              <p className="text-xs font-mono text-gray-400 uppercase mb-2">
                Booking Created
              </p>
              <p className="text-sm font-mono text-white">
                {new Date(booking.createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          <Separator className="bg-gray-800" />

          {/* Customer Information */}
          <div>
            <h3 className="text-lg font-mono font-semibold text-white mb-4 flex items-center gap-2">
              👤 Customer Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                <p className="text-xs font-mono text-gray-400 uppercase mb-1">
                  Full Name
                </p>
                <p className="text-sm font-sans text-white">
                  {booking.firstName} {booking.lastName}
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                <p className="text-xs font-mono text-gray-400 uppercase mb-1">
                  Email
                </p>
                <p className="text-sm font-mono text-white">{booking.email}</p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                <p className="text-xs font-mono text-gray-400 uppercase mb-1">
                  Phone
                </p>
                <p className="text-sm font-mono text-white">{booking.phone}</p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                <p className="text-xs font-mono text-gray-400 uppercase mb-1">
                  Passengers
                </p>
                <p className="text-sm font-mono text-white">
                  {booking.passengers}
                </p>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800" />

          {/* Trip Details */}
          <div>
            <h3 className="text-lg font-mono font-semibold text-white mb-4 flex items-center gap-2">
              🚗 Trip Details
            </h3>
            <div className="space-y-4">
              {/* Pickup Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-900 flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
                <div className="flex-1 rounded-lg border border-gray-800 bg-gray-950 p-4">
                  <p className="text-xs font-mono text-gray-400 uppercase mb-1">
                    Pickup Location
                  </p>
                  <p className="text-sm font-sans text-white">
                    {booking.pickUpLocation}
                  </p>
                  <p className="text-xs font-mono text-gray-500 mt-2">
                    {new Date(booking.dateOfService).toLocaleDateString()} at{" "}
                    {booking.pickUpTime}
                  </p>
                </div>
              </div>

              {/* Stops */}
              {booking.stops.length > 0 && (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                    <span className="text-lg">🛑</span>
                  </div>
                  <div className="flex-1 rounded-lg border border-gray-800 bg-gray-950 p-4">
                    <p className="text-xs font-mono text-gray-400 uppercase mb-2">
                      Stops ({booking.stops.length})
                    </p>
                    {booking.stops.map((stop, index) => (
                      <p key={index} className="text-sm font-sans text-white">
                        {index + 1}. {stop}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Dropoff Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900 flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <div className="flex-1 rounded-lg border border-gray-800 bg-gray-950 p-4">
                  <p className="text-xs font-mono text-gray-400 uppercase mb-1">
                    Dropoff Location
                  </p>
                  <p className="text-sm font-sans text-white">
                    {booking.dropOffLocation}
                  </p>
                </div>
              </div>

              {/* Round Trip */}
              {booking.roundTrip && (
                <div className="rounded-lg border border-yellow-800 bg-yellow-950 p-4">
                  <p className="text-xs font-mono text-yellow-400 uppercase mb-1">
                    🔄 Round Trip
                  </p>
                  <p className="text-sm font-mono text-white">
                    Return:{" "}
                    {booking.returnDate &&
                      new Date(booking.returnDate).toLocaleDateString()}{" "}
                    at {booking.returnTime}
                  </p>
                </div>
              )}
            </div>
          </div>

          <Separator className="bg-gray-800" />

          {/* Vehicle & Service */}
          <div>
            <h3 className="text-lg font-mono font-semibold text-white mb-4 flex items-center gap-2">
              🚘 Vehicle & Service
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                <p className="text-xs font-mono text-gray-400 uppercase mb-1">
                  Vehicle
                </p>
                <p className="text-sm font-sans text-white">
                  {booking.vehicle.name}
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                <p className="text-xs font-mono text-gray-400 uppercase mb-1">
                  Service Type
                </p>
                <p className="text-sm font-sans text-white">
                  Point to Point
                </p>
              </div>
              {booking.service && (
                <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                  <p className="text-xs font-mono text-gray-400 uppercase mb-1">
                    Service Package
                  </p>
                  <p className="text-sm font-sans text-white">
                    {booking.service.name}
                  </p>
                </div>
              )}
            </div>
          </div>

          <Separator className="bg-gray-800" />

          {/* Add-ons */}
          {(booking.childSeat || booking.meetGreet || booking.champagne) && (
            <>
              <div>
                <h3 className="text-lg font-mono font-semibold text-white mb-4 flex items-center gap-2">
                  ➕ Add-ons
                </h3>
                <div className="flex flex-wrap gap-3">
                  {booking.childSeat && (
                    <div className="rounded-lg border border-blue-800 bg-blue-950 px-4 py-2">
                      <span className="text-sm font-mono text-blue-300">
                        👶 Child Seat
                      </span>
                    </div>
                  )}
                  {booking.meetGreet && (
                    <div className="rounded-lg border border-blue-800 bg-blue-950 px-4 py-2">
                      <span className="text-sm font-mono text-blue-300">
                        🪧 Meet & Greet
                      </span>
                    </div>
                  )}
                  {booking.champagne && (
                    <div className="rounded-lg border border-blue-800 bg-blue-950 px-4 py-2">
                      <span className="text-sm font-mono text-blue-300">
                        🥂 Champagne
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <Separator className="bg-gray-800" />
            </>
          )}

          {/* Pricing Details */}
          <div>
            <h3 className="text-lg font-mono font-semibold text-white mb-4 flex items-center gap-2">
              💰 Pricing Details
            </h3>
            <div className="space-y-3 rounded-lg border border-gray-800 bg-gray-950 p-4">
              <div className="flex justify-between text-sm">
                <span className="font-mono text-gray-400">Distance</span>
                <span className="font-mono text-white">
                  {booking.distance ? `${booking.distance} miles` : "N/A"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-mono text-gray-400">Duration</span>
                <span className="font-mono text-white">
                  {booking.duration ? `${booking.duration} mins` : "N/A"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-mono text-gray-400">Add-ons Total</span>
                <span className="font-mono text-white">
                  ${Number(booking.addOnsTotal).toFixed(2)}
                </span>
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex justify-between items-center pt-2">
                <span className="font-mono font-bold text-lg text-white">
                  TOTAL PRICE
                </span>
                <span className="font-mono font-bold text-2xl text-green-400">
                  ${Number(booking.totalPrice).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          {booking.specialInstructions && (
            <>
              <Separator className="bg-gray-800" />
              <div>
                <h3 className="text-lg font-mono font-semibold text-white mb-4 flex items-center gap-2">
                  📝 Special Instructions
                </h3>
                <div className="rounded-lg border border-yellow-800 bg-yellow-950 p-4">
                  <p className="text-sm font-sans text-white">
                    {booking.specialInstructions}
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Timestamps */}
          <Separator className="bg-gray-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="rounded-lg border border-gray-800 bg-gray-950 p-3">
              <p className="font-mono text-gray-400 uppercase mb-1">
                Created At
              </p>
              <p className="font-mono text-gray-300">
                {new Date(booking.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-950 p-3">
              <p className="font-mono text-gray-400 uppercase mb-1">
                Last Updated
              </p>
              <p className="font-mono text-gray-300">
                {new Date(booking.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
