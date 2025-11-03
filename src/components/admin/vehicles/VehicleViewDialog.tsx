"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getVehicleById } from "@/actions/vehicles";
import { VehicleApiResponse } from "@/types/fleet";

interface VehicleViewDialogProps {
  vehicleId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VehicleViewDialog({
  vehicleId,
  isOpen,
  onClose,
}: VehicleViewDialogProps) {
  const [vehicle, setVehicle] = useState<VehicleApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && vehicleId) {
      setLoading(true);
      getVehicleById(vehicleId)
        .then((data) => setVehicle(data))
        .catch((error) => console.error("Error loading vehicle:", error))
        .finally(() => setLoading(false));
    }
  }, [isOpen, vehicleId]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl border-gray-800 bg-black text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-sans font-bold text-white">
            Vehicle Details
          </DialogTitle>
          <DialogDescription className="text-sm font-mono text-gray-400">
            View vehicle information
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-400 font-mono">Loading...</p>
          </div>
        ) : vehicle ? (
          <div className="space-y-4">
            {/* Vehicle Image */}
            {vehicle.images[0] && (
              <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-900">
                <Image
                  width={500}
                  height={300}
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Vehicle Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-xs font-mono font-bold text-gray-400 uppercase mb-1">
                  Name
                </Label>
                <p className="text-sm font-sans font-semibold text-white">
                  {vehicle.name}
                </p>
              </div>

              <div>
                <Label className="text-xs font-mono font-bold text-gray-400 uppercase mb-1">
                  Status
                </Label>
                <div>
                  <Badge
                    variant={vehicle.isActive ? "default" : "secondary"}
                    className={`font-mono ${
                      vehicle.isActive
                        ? "bg-green-900 text-green-300 hover:bg-green-900"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {vehicle.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>

              <div>
                <Label className="text-xs font-mono font-bold text-gray-400 uppercase mb-1">
                  Passengers
                </Label>
                <p className="text-sm font-mono text-white">
                  {vehicle.quantityPassengers}
                </p>
              </div>

              <div>
                <Label className="text-xs font-mono font-bold text-gray-400 uppercase mb-1">
                  Baggage
                </Label>
                <p className="text-sm font-mono text-white">
                  {vehicle.quantityBaggage}
                </p>
              </div>

              <div>
                <Label className="text-xs font-mono font-bold text-gray-400 uppercase mb-1">
                  Price per Hour
                </Label>
                <p className="text-sm font-mono text-white">
                  ${vehicle.pricePerHour}
                </p>
              </div>

              <div>
                <Label className="text-xs font-mono font-bold text-gray-400 uppercase mb-1">
                  Price per Mile
                </Label>
                <p className="text-sm font-mono text-white">
                  ${vehicle.pricePerMile}
                </p>
              </div>
            </div>

            <div>
              <Label className="text-xs font-mono font-bold text-gray-400 uppercase mb-1">
                Description
              </Label>
              <Textarea
                defaultValue={vehicle.description}
                rows={6}
                readOnly
                className="text-sm font-mono text-gray-300 resize-none bg-gray-950 border-gray-800"
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400 font-mono">Vehicle not found</p>
          </div>
        )}

        <DialogFooter className="border-t border-gray-800 pt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="font-mono font-semibold border-gray-700 text-white hover:bg-gray-900"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
