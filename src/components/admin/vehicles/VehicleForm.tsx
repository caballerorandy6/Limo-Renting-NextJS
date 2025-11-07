"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { vehicleSchema, vehicleSchemaCreate } from "@/lib/zod";
import { useAuth } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { createVehicle, updateVehicle, getVehicleById } from "@/actions/vehicles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";

type VehicleFormData = z.infer<typeof vehicleSchema>;
type VehicleFormDataCreate = z.infer<typeof vehicleSchemaCreate>;

interface VehicleFormProps {
  mode: "create" | "edit";
  vehicleId?: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function VehicleForm({
  mode,
  vehicleId,
  onSuccess,
  onCancel,
}: VehicleFormProps) {
  const { getToken } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(mode === "edit");
  const [currentImageUrl, setCurrentImageUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VehicleFormData>({
    resolver: zodResolver(mode === "create" ? vehicleSchemaCreate : vehicleSchema),
    defaultValues: {
      name: "",
      quantityPassengers: 4,
      quantityBaggage: 3,
      description: "",
      pricePerHour: 80,
      pricePerMile: 4,
      isActive: true,
    },
  });

  const isActive = watch("isActive");

  // Load vehicle data in edit mode
  useEffect(() => {
    if (mode === "edit" && vehicleId) {
      setLoading(true);
      getVehicleById(vehicleId)
        .then((vehicle) => {
          if (!vehicle) {
            toast({
              title: "Error",
              description: "Vehicle not found",
              duration: 5000,
              variant: "destructive",
            });
            onCancel();
            return;
          }

          setCurrentImageUrl(vehicle.images[0] || "");
          reset({
            name: vehicle.name,
            quantityPassengers: vehicle.quantityPassengers,
            quantityBaggage: vehicle.quantityBaggage,
            description: vehicle.description,
            pricePerHour: Number(vehicle.pricePerHour),
            pricePerMile: Number(vehicle.pricePerMile),
            isActive: vehicle.isActive,
            image: undefined, // Image is optional on edit
          });
        })
        .catch((error) => {
          console.error("Error loading vehicle:", error);
          toast({
            title: "Error",
            description: "Failed to load vehicle data",
            duration: 5000,
            variant: "destructive",
          });
        })
        .finally(() => setLoading(false));
    }
  }, [mode, vehicleId, reset, toast, onCancel]);

  const onSubmit = async (data: VehicleFormData) => {
    try {
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

      let imageUrl = currentImageUrl; // Use existing image by default

      // Only upload new image if one was selected
      if (data.image && data.image.length > 0) {
        const file = data.image[0];
        const uploadFormData = new FormData();
        uploadFormData.append("file", file);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: uploadFormData,
        });

        if (!uploadResponse.ok) {
          toast({
            title: "Upload Failed",
            description: "Failed to upload image",
            duration: 5000,
            variant: "destructive",
          });
          return;
        }

        const uploadResult = await uploadResponse.json();
        imageUrl = uploadResult.url;
      }

      // Separate image from form data
      const { image, ...formData } = data;

      if (mode === "edit" && vehicleId) {
        await updateVehicle(vehicleId, imageUrl, formData, token);
        toast({
          title: "Vehicle Updated",
          description: "The vehicle has been successfully updated",
          duration: 5000,
          variant: "custom",
        });
        onSuccess();
      } else if (mode === "create") {
        await createVehicle(imageUrl, formData, token);
        toast({
          title: "Vehicle Created",
          description: "The vehicle has been successfully created",
          duration: 5000,
          variant: "custom",
        });
        onSuccess();
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        duration: 5000,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {/* Name Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24 bg-gray-800" />
          <Skeleton className="h-9 w-full bg-gray-800" />
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24 bg-gray-800" />
          <Skeleton className="h-20 w-full bg-gray-800" />
        </div>

        {/* Capacity Section Skeleton */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-20 bg-gray-800" />
            <Skeleton className="h-9 w-full bg-gray-800" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20 bg-gray-800" />
            <Skeleton className="h-9 w-full bg-gray-800" />
          </div>
        </div>

        {/* Pricing Section Skeleton */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32 bg-gray-800" />
            <Skeleton className="h-9 w-full bg-gray-800" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-32 bg-gray-800" />
            <Skeleton className="h-9 w-full bg-gray-800" />
          </div>
        </div>

        {/* Image Upload Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-28 bg-gray-800" />
          <Skeleton className="h-9 w-full bg-gray-800" />
        </div>

        {/* Checkbox Skeleton */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4 bg-gray-800" />
          <Skeleton className="h-4 w-48 bg-gray-800" />
        </div>

        {/* Buttons Skeleton */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
          <Skeleton className="h-9 w-20 bg-gray-800" />
          <Skeleton className="h-9 w-32 bg-gray-800" />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-mono font-semibold text-white">
          Vehicle Name
        </Label>
        <Input
          id="name"
          {...register("name")}
          type="text"
          placeholder="e.g., Luxury Sedan"
          className="border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus-visible:ring-white font-mono"
        />
        {errors.name && (
          <p className="text-xs font-mono text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-mono font-semibold text-white">
          Description
        </Label>
        <Textarea
          id="description"
          {...register("description")}
          rows={3}
          placeholder="Brief description of the vehicle..."
          className="border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus-visible:ring-white font-mono resize-none"
        />
        {errors.description && (
          <p className="text-xs font-mono text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Capacity Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="quantityPassengers" className="text-sm font-mono font-semibold text-white">
            Passengers
          </Label>
          <Input
            id="quantityPassengers"
            {...register("quantityPassengers")}
            type="number"
            min="1"
            className="border-gray-700 bg-gray-900 text-white focus-visible:ring-white font-mono"
          />
          {errors.quantityPassengers && (
            <p className="text-xs font-mono text-red-400">
              {errors.quantityPassengers.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantityBaggage" className="text-sm font-mono font-semibold text-white">
            Baggage
          </Label>
          <Input
            id="quantityBaggage"
            {...register("quantityBaggage")}
            type="number"
            min="0"
            className="border-gray-700 bg-gray-900 text-white focus-visible:ring-white font-mono"
          />
          {errors.quantityBaggage && (
            <p className="text-xs font-mono text-red-400">
              {errors.quantityBaggage.message}
            </p>
          )}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="pricePerHour" className="text-sm font-mono font-semibold text-white">
            Price per Hour ($)
          </Label>
          <Input
            id="pricePerHour"
            {...register("pricePerHour")}
            type="number"
            step="0.01"
            min="1"
            className="border-gray-700 bg-gray-900 text-white focus-visible:ring-white font-mono"
          />
          {errors.pricePerHour && (
            <p className="text-xs font-mono text-red-400">
              {errors.pricePerHour.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="pricePerMile" className="text-sm font-mono font-semibold text-white">
            Price per Mile ($)
          </Label>
          <Input
            id="pricePerMile"
            {...register("pricePerMile")}
            type="number"
            step="0.01"
            min="0.1"
            className="border-gray-700 bg-gray-900 text-white focus-visible:ring-white font-mono"
          />
          {errors.pricePerMile && (
            <p className="text-xs font-mono text-red-400">
              {errors.pricePerMile.message}
            </p>
          )}
        </div>
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <Label htmlFor="image" className="text-sm font-mono font-semibold text-white">
          Vehicle Image {mode === "edit" && "(Optional - leave empty to keep current)"}
        </Label>
        {mode === "edit" && currentImageUrl && (
          <div className="mb-2">
            <p className="text-xs font-mono text-gray-400 mb-2">Current image:</p>
            <img
              src={currentImageUrl}
              alt="Current vehicle"
              className="h-20 w-32 object-cover rounded border border-gray-700"
            />
          </div>
        )}
        <Input
          id="image"
          {...register("image")}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="border-gray-700 bg-gray-900 text-white font-mono file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black hover:file:bg-gray-200"
        />
        {errors.image && (
          <p className="text-xs font-mono text-red-400">
            {String(errors.image.message)}
          </p>
        )}
      </div>

      {/* Status Toggle */}
      <div className="flex items-center gap-3">
        <Checkbox
          id="isActive"
          checked={isActive}
          onCheckedChange={(checked) => setValue("isActive", checked as boolean)}
          className="border-gray-700 data-[state=checked]:bg-white data-[state=checked]:text-black"
        />
        <Label
          htmlFor="isActive"
          className="text-sm font-mono font-semibold text-white cursor-pointer"
        >
          Active (available for booking)
        </Label>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
        <Button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          variant="outline"
          className="font-mono font-semibold border-gray-700 text-white hover:bg-gray-900"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-black hover:bg-gray-200 font-sans font-bold"
        >
          {isSubmitting
            ? "Saving..."
            : mode === "create"
            ? "Create Vehicle"
            : "Update Vehicle"}
        </Button>
      </div>
    </form>
  );
}
