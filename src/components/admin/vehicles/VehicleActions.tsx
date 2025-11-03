"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteVehicle } from "@/actions/vehicles";
import VehicleDialog from "./VehicleDialog";
import VehicleViewDialog from "./VehicleViewDialog";

interface VehicleActionsProps {
  vehicleId: string;
}

export default function VehicleActions({ vehicleId }: VehicleActionsProps) {
  const { getToken } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleView = () => {
    setIsViewOpen(true);
  };

  const handleEdit = () => {
    setIsEditOpen(true);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const token = await getToken();
      if (!token) {
        toast({
          title: "Authentication Error",
          description: "Unable to get authentication token",
          duration: 5000,
          variant: "destructive",
        });
        return;
      }

      await deleteVehicle(vehicleId, token);
      toast({
        title: "Vehicle Deleted",
        description: "The vehicle has been successfully deleted",
        duration: 3000,
        variant: "custom",
      });
      router.refresh(); // Force refresh to show changes
    } catch (error) {
      toast({
        title: "Delete Vehicle Error",
        description: "Unable to delete vehicle",
        duration: 5000,
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleView}
          className="text-gray-400 hover:text-white transition-colors h-8 w-8"
          title="View"
        >
          <Eye className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleEdit}
          className="text-gray-400 hover:text-white transition-colors h-8 w-8"
          title="Edit"
        >
          <Edit className="h-4 w-4" />
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-red-400 transition-colors h-8 w-8"
              title="Delete"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="border-gray-800 bg-black text-white">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl font-sans font-bold text-white">
                Delete Vehicle
              </AlertDialogTitle>
              <AlertDialogDescription className="text-sm font-mono text-gray-400">
                Are you sure you want to delete this vehicle? This action cannot
                be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="font-mono border-gray-700 text-white hover:bg-gray-900">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                disabled={isDeleting}
                className="bg-red-600 hover:bg-red-700 text-white font-mono"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* View Dialog */}
      <VehicleViewDialog
        vehicleId={vehicleId}
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
      />

      {/* Edit Dialog */}
      <VehicleDialog
        mode="edit"
        vehicleId={vehicleId}
        isOpen={isEditOpen}
        onOpenChange={setIsEditOpen}
      />
    </>
  );
}
