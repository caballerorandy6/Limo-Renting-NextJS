import { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import BookingList from "@/components/admin/bookings/BookingList";
import { getAllBookingsAdmin } from "@/actions/bookings";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Bookings | Admin Dashboard",
  description: "Manage customer bookings and reservations",
  keywords: [
    "bookings",
    "reservations",
    "admin",
    "dashboard",
    "limo rental",
    "car service",
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function BookingsPage() {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    redirect("/sign-in");
  }

  const bookings = await getAllBookingsAdmin(token);

  return (
    <div>
      <PageHeader
        title="Bookings"
        description="Manage customer bookings and reservations"
      />

      <BookingList bookings={bookings} token={token} />
    </div>
  );
}
