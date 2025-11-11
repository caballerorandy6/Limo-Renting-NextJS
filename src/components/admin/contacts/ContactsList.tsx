"use client";

import { useState } from "react";
import { Eye, Trash2, Mail, Phone } from "lucide-react";
import {
  deleteContact,
  updateContactStatus,
  type Contact,
} from "@/actions/contacts";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface ContactsListProps {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleViewContact = (id: string) => {
    router.push(`/admin/contacts/${id}`);
  };

  const handleDeleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) {
      return;
    }

    setLoadingId(id);
    const result = await deleteContact(id);
    setLoadingId(null);

    if (result.success) {
      toast({
        title: "Contact deleted",
        description: result.message,
        variant: "custom",
      });
      router.refresh(); // Revalidar datos
    } else {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  const handleMarkAsRead = async (id: string) => {
    setLoadingId(id);
    const result = await updateContactStatus(id, "READ");
    setLoadingId(null);

    if (result.success) {
      toast({
        title: "Status updated",
        description: result.message,
        variant: "custom",
      });
      router.refresh();
    } else {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  const handleReply = (contact: Contact) => {
    // Abrir cliente de email con los datos
    const subject = encodeURIComponent(`Re: Contact from ${contact.name}`);
    const body = encodeURIComponent(
      `Hi ${
        contact.name
      },\n\nThank you for contacting us.\n\n---\nOriginal message:\n${
        contact.message || "No message"
      }`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    // Marcar como leído automáticamente
    handleMarkAsRead(contact.id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "NEW":
        return "bg-blue-900 text-blue-300";
      case "READ":
        return "bg-gray-700 text-gray-300";
      case "REPLIED":
        return "bg-green-900 text-green-300";
      case "ARCHIVED":
        return "bg-gray-800 text-gray-400";
      default:
        return "bg-gray-700 text-gray-300";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="rounded-lg border border-gray-800 bg-black hover:border-gray-700 transition-colors flex flex-col"
        >
          <div className="p-6 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-lg font-semibold font-sans text-white">
                {contact.name}
              </h3>
              <span
                className={`inline-flex rounded-full px-2 py-1 text-xs font-mono font-semibold ${getStatusColor(
                  contact.status
                )}`}
              >
                {contact.status}
              </span>
            </div>

            <div className="space-y-2 text-sm font-mono text-gray-400 mb-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{contact.phone}</span>
              </div>
            </div>

            <p className="text-sm font-mono text-gray-300 mb-3 line-clamp-3">
              {contact.message || "No message provided"}
            </p>

            <p className="text-xs font-mono text-gray-500">
              {formatDate(contact.createdAt)}
            </p>
          </div>

          <div className="flex items-center gap-2 p-4 border-t border-gray-800">
            <button
              onClick={() => handleViewContact(contact.id)}
              className="flex-1 rounded-lg border border-gray-700 px-3 py-2 text-sm font-mono font-semibold text-white hover:bg-gray-900 transition-colors disabled:opacity-50"
              title="View"
              disabled={loadingId === contact.id}
            >
              <Eye className="h-4 w-4 mx-auto" />
            </button>
            <button
              onClick={() => handleReply(contact)}
              className="flex-1 rounded-lg bg-white px-3 py-2 text-sm font-sans font-bold text-black hover:bg-gray-200 transition-colors disabled:opacity-50"
              disabled={loadingId === contact.id}
            >
              Reply
            </button>
            <button
              onClick={() => handleDeleteContact(contact.id)}
              className="flex-1 rounded-lg border border-gray-700 px-3 py-2 text-sm font-mono font-semibold text-white hover:bg-red-900 hover:border-red-900 transition-colors disabled:opacity-50"
              title="Delete"
              disabled={loadingId === contact.id}
            >
              <Trash2 className="h-4 w-4 mx-auto" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
