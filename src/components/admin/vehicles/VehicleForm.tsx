"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { vehicleSchema } from "@/lib/zod";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

type VehicleFormData = z.infer<typeof vehicleSchema>;

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
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VehicleFormData>({
    resolver: zodResolver(vehicleSchema),
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

      // Upload image to Vercel Blob first
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

      const { url: imageUrl } = await uploadResponse.json();

      // Prepare payload for backend
      const { image, ...restData } = data;
      const payload = {
        ...restData,
        images: [imageUrl],
      };

      if (mode === "edit" && vehicleId) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/${vehicleId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          toast({
            title: "Vehicle Updated",
            description: "The vehicle has been successfully updated",
            duration: 5000,
            variant: "custom",
          });
          router.refresh();
          onSuccess();
        } else {
          const errorData = await response.json();
          toast({
            title: "Failed to Update Vehicle",
            description: errorData.message || "Please try again later",
            duration: 5000,
            variant: "destructive",
          });
        }
      } else if (mode === "create") {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          toast({
            title: "Vehicle Created",
            description: "The vehicle has been successfully created",
            duration: 5000,
            variant: "custom",
          });
          router.refresh();
          onSuccess();
        } else {
          const errorData = await response.json();
          toast({
            title: "Failed to Create Vehicle",
            description: errorData.message || "Please try again later",
            duration: 5000,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        duration: 5000,
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-mono font-semibold text-white mb-2">
          Vehicle Name
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="e.g., Luxury Sedan"
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-mono text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
        />
        {errors.name && (
          <p className="mt-1 text-xs font-mono text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-mono font-semibold text-white mb-2">
          Description
        </label>
        <textarea
          {...register("description")}
          rows={3}
          placeholder="Brief description of the vehicle..."
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-mono text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white resize-none"
        />
        {errors.description && (
          <p className="mt-1 text-xs font-mono text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Capacity Section */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-mono font-semibold text-white mb-2">
            Passengers
          </label>
          <input
            {...register("quantityPassengers")}
            type="number"
            min="1"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-mono text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          />
          {errors.quantityPassengers && (
            <p className="mt-1 text-xs font-mono text-red-400">
              {errors.quantityPassengers.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-mono font-semibold text-white mb-2">
            Baggage
          </label>
          <input
            {...register("quantityBaggage")}
            type="number"
            min="0"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-mono text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          />
          {errors.quantityBaggage && (
            <p className="mt-1 text-xs font-mono text-red-400">
              {errors.quantityBaggage.message}
            </p>
          )}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-mono font-semibold text-white mb-2">
            Price per Hour ($)
          </label>
          <input
            {...register("pricePerHour")}
            type="number"
            step="0.01"
            min="1"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-mono text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          />
          {errors.pricePerHour && (
            <p className="mt-1 text-xs font-mono text-red-400">
              {errors.pricePerHour.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-mono font-semibold text-white mb-2">
            Price per Mile ($)
          </label>
          <input
            {...register("pricePerMile")}
            type="number"
            step="0.01"
            min="0.1"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-mono text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
          />
          {errors.pricePerMile && (
            <p className="mt-1 text-xs font-mono text-red-400">
              {errors.pricePerMile.message}
            </p>
          )}
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-mono font-semibold text-white mb-2">
          Vehicle Image
        </label>
        <input
          {...register("image")}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-mono text-white file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black hover:file:bg-gray-200"
        />
        {errors.image && (
          <p className="mt-1 text-xs font-mono text-red-400">
            {String(errors.image.message)}
          </p>
        )}
      </div>

      {/* Status Toggle */}
      <div className="flex items-center gap-3">
        <input
          {...register("isActive")}
          type="checkbox"
          id="isActive"
          className="h-4 w-4 rounded border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-white focus:ring-offset-0"
        />
        <label
          htmlFor="isActive"
          className="text-sm font-mono font-semibold text-white cursor-pointer"
        >
          Active (available for booking)
        </label>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-mono font-semibold text-white hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-white px-4 py-2 text-sm font-sans font-bold text-black hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? "Saving..."
            : mode === "create"
            ? "Create Vehicle"
            : "Update Vehicle"}
        </button>
      </div>
    </form>
  );
}
