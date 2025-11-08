"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { createTripType, updateTripType, TripType } from "@/actions/tripTypes";

interface TripTypeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tripType: TripType | null;
}

export default function TripTypeDialog({
  open,
  onOpenChange,
  tripType,
}: TripTypeDialogProps) {
  const router = useRouter();
  const { getToken } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    isActive: true,
  });

  useEffect(() => {
    if (tripType) {
      setFormData({
        name: tripType.name,
        slug: tripType.slug,
        description: tripType.description || "",
        isActive: tripType.isActive,
      });
    } else {
      setFormData({
        name: "",
        slug: "",
        description: "",
        isActive: true,
      });
    }
  }, [tripType, open]);

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleNameChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = await getToken();
      if (!token) {
        throw new Error("Authentication required");
      }

      if (tripType) {
        await updateTripType(tripType.id, formData, token);
        toast({
          title: "Trip Type Updated",
          description: "The trip type has been successfully updated",
          variant: "custom",
          duration: 3000,
        });
      } else {
        await createTripType(formData, token);
        toast({
          title: "Trip Type Created",
          description: "The trip type has been successfully created",
          variant: "custom",
          duration: 3000,
        });
      }

      router.refresh();
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save trip type",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-gray-800 bg-black text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-sans font-bold text-white">
            {tripType ? "Edit Trip Type" : "Create Trip Type"}
          </DialogTitle>
          <DialogDescription className="text-sm font-mono text-gray-400">
            {tripType
              ? "Update the trip type information"
              : "Add a new trip type option"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-mono font-semibold text-white">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="e.g., Point to Point"
              required
              className="border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus-visible:ring-white font-mono"
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <Label htmlFor="slug" className="text-sm font-mono font-semibold text-white">
              Slug (URL)
            </Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, slug: e.target.value }))
              }
              placeholder="point-to-point"
              required
              className="border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus-visible:ring-white font-mono"
            />
            <p className="text-xs font-mono text-gray-500">
              Auto-generated from name, but can be edited
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-sm font-mono font-semibold text-white"
            >
              Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
              rows={3}
              placeholder="Brief description of this trip type..."
              className="border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus-visible:ring-white font-mono resize-none"
            />
          </div>

          {/* Status Toggle */}
          <div className="flex items-center gap-3">
            <Checkbox
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, isActive: checked as boolean }))
              }
              className="border-gray-700 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label
              htmlFor="isActive"
              className="text-sm font-mono font-semibold text-white cursor-pointer"
            >
              Active (available for selection)
            </Label>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="font-mono font-semibold border-gray-700 text-white hover:bg-gray-900"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-white text-black hover:bg-gray-200 font-sans font-bold"
            >
              {loading
                ? "Saving..."
                : tripType
                ? "Update Trip Type"
                : "Create Trip Type"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
