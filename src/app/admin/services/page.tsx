import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader";
import EmptyState from "@/components/admin/EmptyState";
import { Briefcase } from "lucide-react";
import { getServicesAdmin } from "@/actions/services";
import ServicesList from "@/components/admin/services/ServicesList";
import CreateServiceButton from "@/components/admin/services/CreateServiceButton";

export const metadata = {
  title: "Services - Admin Dashboard",
  description: "Manage service offerings",
};

export default async function ServicesPage() {
  const { userId, getToken } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const token = await getToken();
  if (!token) {
    redirect("/sign-in");
  }

  const services = await getServicesAdmin(token);

  return (
    <div>
      <PageHeader
        title="Services"
        description="Manage your service offerings"
        action={<CreateServiceButton />}
      />

      {services.length === 0 ? (
        <EmptyState
          icon={Briefcase}
          title="No services yet"
          description="Get started by adding your first service offering"
          action={<CreateServiceButton />}
        />
      ) : (
        <ServicesList initialServices={services} />
      )}
    </div>
  );
}
