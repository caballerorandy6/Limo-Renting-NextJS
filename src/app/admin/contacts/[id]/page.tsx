import { getContactById, getAllContacts } from "@/actions";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ContactDetailClient from "@/components/admin/contacts/ContactDetailClient";

interface ContactDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ContactDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const contact = await getContactById(id);

  if (!contact) {
    return {
      title: "Contact Not Found",
    };
  }

  return {
    title: `${contact.name} - Contact Details`,
    description: `View details for contact ${contact.name}`,
  };
}

export async function generateStaticParams() {
  try {
    const contacts = await getAllContacts();
    return contacts.map((contact) => ({
      id: contact.id,
    }));
  } catch (error) {
    console.warn("Failed to fetch contacts for static params, will use ISR:", error);
    return [];
  }
}

const ContactDetailPage = async ({ params }: ContactDetailPageProps) => {
  const { id } = await params;
  const contact = await getContactById(id);

  if (!contact) {
    notFound();
  }

  return <ContactDetailClient contact={contact} />;
};

export default ContactDetailPage;
