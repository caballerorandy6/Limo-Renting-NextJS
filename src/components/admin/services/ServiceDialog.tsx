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
import { createService, updateService, Service } from "@/actions/services";

interface ServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: Service | null;
}

export default function ServiceDialog({
  open,
  onOpenChange,
  service,
}: ServiceDialogProps) {
  const router = useRouter();
  const { getToken } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    image: "",
    isActive: true,
  });

  useEffect(() => {
    if (service) {
      setFormData({
        title: service.title,
        slug: service.slug,
        description: service.description || "",
        image: service.image || "",
        isActive: service.isActive,
      });
    } else {
      setFormData({
        title: "",
        slug: "",
        description: "",
        image: "",
        isActive: true,
      });
    }
  }, [service, open]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
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

      if (service) {
        await updateService(service.id, formData, token);
        toast({
          title: "Service Updated",
          description: "The service has been successfully updated",
          variant: "custom",
          duration: 3000,
        });
      } else {
        await createService(formData, token);
        toast({
          title: "Service Created",
          description: "The service has been successfully created",
          variant: "custom",
          duration: 3000,
        });
      }

      router.refresh();
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save service",
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
            {service ? "Edit Service" : "Create Service"}
          </DialogTitle>
          <DialogDescription className="text-sm font-mono text-gray-400">
            {service
              ? "Update the service information"
              : "Add a new service offering"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-mono font-semibold text-white">
              Title
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="e.g., Airport Transfer"
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
              placeholder="airport-transfer"
              required
              className="border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus-visible:ring-white font-mono"
            />
            <p className="text-xs font-mono text-gray-500">
              Auto-generated from title, but can be edited
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
              placeholder="Brief description of this service..."
              className="border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus-visible:ring-white font-mono resize-none"
            />
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <Label htmlFor="image" className="text-sm font-mono font-semibold text-white">
              Image URL
            </Label>
            <Input
              id="image"
              type="url"
              value={formData.image}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, image: e.target.value }))
              }
              placeholder="https://example.com/image.jpg"
              className="border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus-visible:ring-white font-mono"
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
                : service
                ? "Update Service"
                : "Create Service"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
