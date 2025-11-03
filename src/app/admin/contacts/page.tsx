"use client";

import PageHeader from "@/components/admin/PageHeader";
import EmptyState from "@/components/admin/EmptyState";
import { MessageSquare, Eye, Trash2, Mail, Phone } from "lucide-react";

export default function ContactsPage() {
  // TODO: Fetch real contacts data from API
  const contacts = [
    {
      id: "1",
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+1 (555) 123-4567",
      message: "Hello, I would like to inquire about your pricing for a corporate event with 50 attendees...",
      status: "NEW",
      createdAt: "2024-11-02T10:30:00",
    },
    {
      id: "2",
      name: "Robert Brown",
      email: "robert@example.com",
      phone: "+1 (555) 234-5678",
      message: "Do you have availability for a wedding on December 15th? We need transportation for 8 people...",
      status: "READ",
      createdAt: "2024-11-01T15:45:00",
    },
    {
      id: "3",
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "+1 (555) 345-6789",
      message: "I'm interested in setting up a corporate account for our company...",
      status: "REPLIED",
      createdAt: "2024-10-30T09:15:00",
    },
  ];

  const handleViewContact = (id: string) => {
    // TODO: Implement view contact logic
    console.log("View contact:", id);
  };

  const handleDeleteContact = (id: string) => {
    // TODO: Implement delete contact logic
    console.log("Delete contact:", id);
  };

  const handleMarkAsRead = (id: string) => {
    // TODO: Implement mark as read logic
    console.log("Mark as read:", id);
  };

  const handleReply = (id: string) => {
    // TODO: Implement reply logic
    console.log("Reply to:", id);
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
    <div>
      <PageHeader
        title="Contact Messages"
        description="Manage customer inquiries and messages"
      />

      {contacts.length === 0 ? (
        <EmptyState
          icon={MessageSquare}
          title="No messages yet"
          description="Customer contact messages will appear here"
        />
      ) : (
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
                  {contact.message}
                </p>

                <p className="text-xs font-mono text-gray-500">
                  {formatDate(contact.createdAt)}
                </p>
              </div>

              <div className="flex items-center gap-2 p-4 border-t border-gray-800">
                <button
                  onClick={() => handleViewContact(contact.id)}
                  className="flex-1 rounded-lg border border-gray-700 px-3 py-2 text-sm font-mono font-semibold text-white hover:bg-gray-900 transition-colors"
                  title="View"
                >
                  <Eye className="h-4 w-4 mx-auto" />
                </button>
                <button
                  onClick={() => handleReply(contact.id)}
                  className="flex-1 rounded-lg bg-white px-3 py-2 text-sm font-sans font-bold text-black hover:bg-gray-200 transition-colors"
                >
                  Reply
                </button>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className="flex-1 rounded-lg border border-gray-700 px-3 py-2 text-sm font-mono font-semibold text-white hover:bg-red-900 hover:border-red-900 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4 mx-auto" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
