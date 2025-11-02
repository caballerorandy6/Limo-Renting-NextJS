"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import VehicleForm from "./VehicleForm";

interface VehicleDialogProps {
  mode: "create" | "edit";
  vehicleId?: string;
}

export default function VehicleDialog({ mode, vehicleId }: VehicleDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {mode === "create" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-sans font-bold text-black hover:bg-gray-200 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Vehicle
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-400 hover:text-white transition-colors"
          title="Edit"
        >
          {/* Edit button content from parent */}
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsOpen(false)}
          />

          {/* Dialog */}
          <div className="relative z-10 w-full max-w-2xl rounded-lg border border-gray-800 bg-black p-6 shadow-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-sans font-bold text-white">
                {mode === "create" ? "Add New Vehicle" : "Edit Vehicle"}
              </h2>
              <p className="text-sm font-mono text-gray-400 mt-1">
                {mode === "create"
                  ? "Add a new vehicle to your fleet"
                  : "Update vehicle information"}
              </p>
            </div>

            <VehicleForm
              mode={mode}
              vehicleId={vehicleId}
              onSuccess={() => setIsOpen(false)}
              onCancel={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
