"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Phone, Calendar, Trash2 } from "lucide-react";
import { Contact, updateContactStatus, deleteContact } from "@/actions/contacts";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactDetailClientProps {
  contact: Contact;
}

export default function ContactDetailClient({ contact: initialContact }: ContactDetailClientProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [contact, setContact] = useState(initialContact);
  const [isLoading, setIsLoading] = useState(false);

  const handleStatusChange = async (newStatus: "NEW" | "READ" | "REPLIED" | "ARCHIVED") => {
    // Optimistic update - actualizar UI inmediatamente
    const previousStatus = contact.status;
    setContact({ ...contact, status: newStatus });
    setIsLoading(true);

    const result = await updateContactStatus(contact.id, newStatus);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: "Status updated",
        description: result.message,
        variant: "custom",
      });
      router.refresh(); // Revalidar datos del servidor
    } else {
      // Revertir al estado anterior si falla
      setContact({ ...contact, status: previousStatus });
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete this contact from ${contact.name}?`)) {
      return;
    }

    setIsLoading(true);
    const result = await deleteContact(contact.id);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: "Contact deleted",
        description: result.message,
        variant: "custom",
      });
      router.push("/admin/contacts");
      router.refresh();
    } else {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  const handleReply = () => {
    const subject = encodeURIComponent(`Re: Contact from ${contact.name}`);
    const body = encodeURIComponent(
      `Hi ${contact.name},\n\nThank you for contacting us.\n\n---\nOriginal message:\n${contact.message || "No message"}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    // Mark as read automatically
    if (contact.status === "NEW") {
      handleStatusChange("READ");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "NEW":
        return "bg-blue-900 text-blue-300 border-blue-700";
      case "READ":
        return "bg-gray-700 text-gray-300 border-gray-600";
      case "REPLIED":
        return "bg-green-900 text-green-300 border-green-700";
      case "ARCHIVED":
        return "bg-gray-800 text-gray-400 border-gray-700";
      default:
        return "bg-gray-700 text-gray-300 border-gray-600";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-mono">Back to Contacts</span>
        </button>
      </div>

      {/* Contact Card */}
      <div className="rounded-lg border border-gray-800 bg-black p-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold font-sans text-white">{contact.name}</h1>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-mono font-semibold border ${getStatusColor(
                  contact.status
                )}`}
              >
                {contact.status}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleReply}
              disabled={isLoading}
              className="bg-white text-black hover:bg-gray-200 font-sans font-bold"
            >
              <Mail className="h-4 w-4 mr-2" />
              Reply
            </Button>
            <Button
              onClick={handleDelete}
              disabled={isLoading}
              variant="outline"
              className="border-red-900 text-red-500 hover:bg-red-900 hover:text-white"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-800">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-mono text-gray-400">Email</label>
              <div className="flex items-center gap-2 mt-1">
                <Mail className="h-4 w-4 text-gray-500" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white hover:text-gray-300 font-mono"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <div>
              <label className="text-sm font-mono text-gray-400">Phone</label>
              <div className="flex items-center gap-2 mt-1">
                <Phone className="h-4 w-4 text-gray-500" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-white hover:text-gray-300 font-mono"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-mono text-gray-400">Received</label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-white font-mono text-sm">
                  {formatDate(contact.createdAt)}
                </span>
              </div>
            </div>

            <div>
              <label className="text-sm font-mono text-gray-400">Status</label>
              <Select
                value={contact.status}
                onValueChange={(value) =>
                  handleStatusChange(value as "NEW" | "READ" | "REPLIED" | "ARCHIVED")
                }
                disabled={isLoading}
              >
                <SelectTrigger className="mt-1 bg-black border-gray-800 text-white font-mono hover:border-[#e11d48] transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black border-gray-800">
                  <SelectItem value="NEW" className="text-white font-mono hover:bg-[#e11d48] hover:text-white focus:bg-[#e11d48] focus:text-white">
                    NEW
                  </SelectItem>
                  <SelectItem value="READ" className="text-white font-mono hover:bg-[#e11d48] hover:text-white focus:bg-[#e11d48] focus:text-white">
                    READ
                  </SelectItem>
                  <SelectItem value="REPLIED" className="text-white font-mono hover:bg-[#e11d48] hover:text-white focus:bg-[#e11d48] focus:text-white">
                    REPLIED
                  </SelectItem>
                  <SelectItem value="ARCHIVED" className="text-white font-mono hover:bg-[#e11d48] hover:text-white focus:bg-[#e11d48] focus:text-white">
                    ARCHIVED
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Message Section */}
        <div className="pt-4 border-t border-gray-800">
          <label className="text-sm font-mono text-gray-400">Message</label>
          <div className="mt-2 p-4 rounded-lg bg-gray-900 border border-gray-800">
            <p className="text-white font-mono text-sm whitespace-pre-wrap">
              {contact.message || "No message provided"}
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="pt-4 border-t border-gray-800">
          <p className="text-xs font-mono text-gray-500">
            Last updated: {formatDate(contact.updatedAt)}
          </p>
        </div>
      </div>
    </div>
  );
}
