import PageHeader from "@/components/admin/PageHeader";
import EmptyState from "@/components/admin/EmptyState";
import ContactsList from "@/components/admin/contacts/ContactsList";
import { MessageSquare } from "lucide-react";
import { getAllContacts } from "@/actions/contacts";

/**
 * Admin Contacts Page (Server Component)
 * Fetches contacts from backend API and displays them
 */

// Force dynamic rendering for admin routes with authentication
export const dynamic = 'force-dynamic';

export default async function ContactsPage() {
  // Fetch contacts from backend
  const contacts = await getAllContacts();

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
        <ContactsList contacts={contacts} />
      )}
    </div>
  );
}
