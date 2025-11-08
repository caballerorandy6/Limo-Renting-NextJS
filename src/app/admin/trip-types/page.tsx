import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader";
import EmptyState from "@/components/admin/EmptyState";
import { MapPin } from "lucide-react";
import { getTripTypesAdmin } from "@/actions/tripTypes";
import TripTypesList from "@/components/admin/trip-types/TripTypesList";
import CreateTripTypeButton from "@/components/admin/trip-types/CreateTripTypeButton";

export const metadata = {
  title: "Trip Types - Admin Dashboard",
  description: "Manage trip type options",
};

export default async function TripTypesPage() {
  const { userId, getToken } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const token = await getToken();
  if (!token) {
    redirect("/sign-in");
  }

  const tripTypes = await getTripTypesAdmin(token);

  return (
    <div>
      <PageHeader
        title="Trip Types"
        description="Manage trip type options"
        action={<CreateTripTypeButton />}
      />

      {tripTypes.length === 0 ? (
        <EmptyState
          icon={MapPin}
          title="No trip types yet"
          description="Get started by adding your first trip type"
          action={<CreateTripTypeButton />}
        />
      ) : (
        <TripTypesList initialTripTypes={tripTypes} />
      )}
    </div>
  );
}
