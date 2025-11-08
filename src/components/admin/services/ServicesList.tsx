"use client";

import { useState, useTransition } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Edit, Trash2, Briefcase, AlertCircle } from "lucide-react";
import { deleteService, toggleServiceStatus, Service } from "@/actions/services";
import { useToast } from "@/hooks/use-toast";
import ServiceDialog from "./ServiceDialog";
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

interface ServicesListProps {
  initialServices: Service[];
}

export default function ServicesList({ initialServices }: ServicesListProps) {
  const router = useRouter();
  const { getToken } = useAuth();
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleEditService = (service: Service) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  const handleCloseDialog = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setSelectedService(null);
    }
  };

  const handleDeleteService = async () => {
    if (!serviceToDelete) return;

    startTransition(async () => {
      try {
        const token = await getToken();
        if (!token) return;

        await deleteService(serviceToDelete, token);
        router.refresh();

        toast({
          title: "Service Deleted",
          description: "The service has been successfully deleted",
          variant: "custom",
          duration: 3000,
        });
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message || "Failed to delete service",
          variant: "destructive",
          duration: 3000,
        });
      } finally {
        setDeleteDialogOpen(false);
        setServiceToDelete(null);
      }
    });
  };

  const handleToggleStatus = async (serviceId: string, currentStatus: boolean) => {
    startTransition(async () => {
      try {
        const token = await getToken();
        if (!token) return;

        await toggleServiceStatus(serviceId, !currentStatus, token);
        router.refresh();

        toast({
          title: "Status Updated",
          description: `Service is now ${!currentStatus ? "active" : "inactive"}`,
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

  const openDeleteDialog = (serviceId: string) => {
    setServiceToDelete(serviceId);
    setDeleteDialogOpen(true);
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {initialServices.map((service) => (
          <div
            key={service.id}
            className="rounded-lg border border-gray-800 bg-black p-6 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-full bg-gray-900 p-2">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <button
                onClick={() => handleToggleStatus(service.id, service.isActive)}
                disabled={isPending}
                className={`inline-flex rounded-full px-3 py-1 text-xs font-mono font-semibold transition-colors ${
                  service.isActive
                    ? "bg-green-900 text-green-300 hover:bg-green-800"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {service.isActive ? "Active" : "Inactive"}
              </button>
            </div>

            <h3 className="text-lg font-semibold font-sans text-white mb-2">
              {service.title}
            </h3>
            <p className="text-sm font-mono text-gray-400 mb-2">/{service.slug}</p>
            <p className="text-sm font-mono text-gray-400 mb-4 line-clamp-2">
              {service.description || "No description"}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-4">
              <AlertCircle className="h-3 w-3" />
              <span>{service._count.bookings} bookings</span>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
              <button
                onClick={() => handleEditService(service)}
                disabled={isPending}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm font-mono font-semibold text-white hover:bg-gray-900 transition-colors disabled:opacity-50"
              >
                <Edit className="h-4 w-4" />
                Edit
              </button>
              <button
                onClick={() => openDeleteDialog(service.id)}
                disabled={isPending || service._count.bookings > 0}
                className="rounded-lg border border-gray-700 px-3 py-2 text-sm font-mono font-semibold text-white hover:bg-red-900 hover:border-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title={
                  service._count.bookings > 0
                    ? "Cannot delete service with existing bookings"
                    : "Delete service"
                }
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <ServiceDialog
        open={dialogOpen}
        onOpenChange={handleCloseDialog}
        service={selectedService}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-black border-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white font-sans">
              Delete Service
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400 font-mono">
              Are you sure you want to delete this service? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gray-700 text-white hover:bg-gray-900 font-mono">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteService}
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
