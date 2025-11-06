"use client";

import { useState, useTransition } from "react";
import { Trash2 } from "lucide-react";
import { deleteBookingById } from "@/actions/bookings";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteBookingButtonProps {
  bookingId: string;
  token: string;
}

export default function DeleteBookingButton({
  bookingId,
  token,
}: DeleteBookingButtonProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteBookingById(bookingId, token);

        toast({
          title: "✅ Booking Deleted",
          description: "The booking has been successfully deleted.",
          className: "bg-green-600 text-white font-sans",
        });

        setOpen(false);
        router.refresh(); // Refresh the page to update the list
      } catch (error) {
        console.error("Error deleting booking:", error);
        toast({
          title: "❌ Error",
          description: "Failed to delete booking. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={isPending}
        className="text-gray-400 hover:text-red-400 transition-colors p-1 disabled:opacity-50"
        title="Delete Booking"
      >
        <Trash2 className={`h-4 w-4 ${isPending ? "animate-pulse" : ""}`} />
      </button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="bg-black border-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white font-mono">
              Are you sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400 font-sans">
              This action cannot be undone. This will permanently delete this
              booking from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              disabled={isPending}
              className="bg-gray-800 text-white hover:bg-gray-700 border-gray-700 font-sans"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isPending}
              className="bg-red-600 text-white hover:bg-red-700 font-sans"
            >
              {isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
