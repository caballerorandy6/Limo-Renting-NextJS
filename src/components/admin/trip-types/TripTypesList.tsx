"use client";

import { useState, useTransition } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Edit, Trash2, MapPin, AlertCircle } from "lucide-react";
import { deleteTripType, toggleTripTypeStatus, TripType } from "@/actions/tripTypes";
import { useToast } from "@/hooks/use-toast";
import TripTypeDialog from "./TripTypeDialog";
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

interface TripTypesListProps {
  initialTripTypes: TripType[];
}

export default function TripTypesList({ initialTripTypes }: TripTypesListProps) {
  const router = useRouter();
  const { getToken } = useAuth();
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTripType, setSelectedTripType] = useState<TripType | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [tripTypeToDelete, setTripTypeToDelete] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleEditTripType = (tripType: TripType) => {
    setSelectedTripType(tripType);
    setDialogOpen(true);
  };

  const handleDeleteTripType = async () => {
    if (!tripTypeToDelete) return;

    startTransition(async () => {
      try {
        const token = await getToken();
        if (!token) return;

        await deleteTripType(tripTypeToDelete, token);
        router.refresh();

        toast({
          title: "Trip Type Deleted",
          description: "The trip type has been successfully deleted",
          variant: "custom",
          duration: 3000,
        });
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message || "Failed to delete trip type",
          variant: "destructive",
          duration: 3000,
        });
      } finally {
        setDeleteDialogOpen(false);
        setTripTypeToDelete(null);
      }
    });
  };

  const handleToggleStatus = async (tripTypeId: string, currentStatus: boolean) => {
    startTransition(async () => {
      try {
        const token = await getToken();
        if (!token) return;

        await toggleTripTypeStatus(tripTypeId, !currentStatus, token);
        router.refresh();

        toast({
          title: "Status Updated",
          description: `Trip type is now ${!currentStatus ? "active" : "inactive"}`,
          variant: "custom",
          duration: 3000,
        });
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message || "Failed to update status",
          variant: "destructive",
          duration: 3000,
        });
      }
    });
  };

  const openDeleteDialog = (tripTypeId: string) => {
    setTripTypeToDelete(tripTypeId);
    setDeleteDialogOpen(true);
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {initialTripTypes.map((tripType) => (
          <div
            key={tripType.id}
            className="rounded-lg border border-gray-800 bg-black p-6 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-full bg-gray-900 p-2">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <button
                onClick={() => handleToggleStatus(tripType.id, tripType.isActive)}
                disabled={isPending}
                className={`inline-flex rounded-full px-3 py-1 text-xs font-mono font-semibold transition-colors ${
                  tripType.isActive
                    ? "bg-green-900 text-green-300 hover:bg-green-800"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {tripType.isActive ? "Active" : "Inactive"}
              </button>
            </div>

            <h3 className="text-lg font-semibold font-sans text-white mb-2">
              {tripType.name}
            </h3>
            <p className="text-sm font-mono text-gray-400 mb-2">/{tripType.slug}</p>
            <p className="text-sm font-mono text-gray-400 mb-4 line-clamp-2">
              {tripType.description || "No description"}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-4">
              <AlertCircle className="h-3 w-3" />
              <span>{tripType._count.bookings} bookings</span>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
              <button
                onClick={() => handleEditTripType(tripType)}
                disabled={isPending}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm font-mono font-semibold text-white hover:bg-gray-900 transition-colors disabled:opacity-50"
              >
                <Edit className="h-4 w-4" />
                Edit
              </button>
              <button
                onClick={() => openDeleteDialog(tripType.id)}
                disabled={isPending || tripType._count.bookings > 0}
                className="rounded-lg border border-gray-700 px-3 py-2 text-sm font-mono font-semibold text-white hover:bg-red-900 hover:border-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title={
                  tripType._count.bookings > 0
                    ? "Cannot delete trip type with existing bookings"
                    : "Delete trip type"
                }
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <TripTypeDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        tripType={selectedTripType}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-black border-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white font-sans">
              Delete Trip Type
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400 font-mono">
              Are you sure you want to delete this trip type? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gray-700 text-white hover:bg-gray-900 font-mono">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteTripType}
              disabled={isPending}
              className="bg-red-600 text-white hover:bg-red-700 font-mono"
            >
              {isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
