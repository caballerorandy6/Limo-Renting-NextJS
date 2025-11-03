"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import VehicleForm from "./VehicleForm";

interface VehicleDialogProps {
  mode: "create" | "edit";
  vehicleId?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function VehicleDialog({
  mode,
  vehicleId,
  isOpen: externalIsOpen,
  onOpenChange,
}: VehicleDialogProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const router = useRouter();

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onOpenChange || setInternalIsOpen;

  const handleSuccess = () => {
    setIsOpen(false);
    router.refresh(); // Force refresh to show changes
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Only show button for create mode (no external control) */}
      {mode === "create" && externalIsOpen === undefined && (
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 font-sans font-bold">
            <Plus className="h-4 w-4" />
            Add Vehicle
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="max-w-2xl border-gray-800 bg-black text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-sans font-bold text-white">
            {mode === "create" ? "Add New Vehicle" : "Edit Vehicle"}
          </DialogTitle>
          <DialogDescription className="text-sm font-mono text-gray-400">
            {mode === "create"
              ? "Add a new vehicle to your fleet"
              : "Update vehicle information"}
          </DialogDescription>
        </DialogHeader>

        <VehicleForm
          mode={mode}
          vehicleId={vehicleId}
          onSuccess={handleSuccess}
          onCancel={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
