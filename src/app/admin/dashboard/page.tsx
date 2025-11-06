import { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import StatCard from "@/components/admin/StatCard";
import {
  Car,
  Calendar,
  Briefcase,
  MessageSquare,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { getVehiclesAdmin } from "@/actions/vehicles";
import { getAllBookingsAdmin } from "@/actions/bookings";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import RecentBookings from "@/components/admin/dashboard/RecentBookings";


export const metadata: Metadata = {
  title: "Dashboard | Admin Panel",
  description: "Admin dashboard overview with business statistics, recent bookings, and contact messages for limousine rental service",
  keywords: [
    "admin dashboard",
    "business statistics",
    "bookings overview",
    "revenue tracking",
    "fleet management",
  ],
  robots: {
    index: false, // Don't index admin pages
    follow: false,
  },
};



export default async function AdminDashboard() {
  // Get Clerk auth token
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    redirect("/sign-in");
  }

  // Fetch data from backend
  const vehicles = await getVehiclesAdmin();
  const totalVehicles = vehicles.length;

  const bookings = await getAllBookingsAdmin(token);
  const totalBookings = bookings.length;

  // Calculate active bookings (PENDING or CONFIRMED status)
  const activeBookings = bookings.filter(
    (b) => b.status === "PENDING" || b.status === "CONFIRMED"
  ).length;

  // Calculate total revenue (sum of all COMPLETED bookings)
  const totalRevenue = bookings
    .filter((b) => b.status === "COMPLETED")
    .reduce((sum, b) => sum + Number(b.totalPrice || 0), 0);

  // Get recent bookings (last 3)
  const recentBookings = bookings.slice(0, 3);

  const stats = {
    totalVehicles,
    totalBookings,
    totalServices: 8, // TODO: Fetch from services API
    totalContacts: 23, // TODO: Fetch from contacts API
    revenue: `$${totalRevenue.toFixed(2)}`,
    activeBookings,
  };

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your business"
      />

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <StatCard
          title="Total Vehicles"
          value={stats.totalVehicles}
          icon={Car}
        />
        <StatCard
          title="Total Bookings"
          value={stats.totalBookings}
          icon={Calendar}
        />
        <StatCard
          title="Active Bookings"
          value={stats.activeBookings}
          icon={TrendingUp}
        />
        <StatCard
          title="Services"
          value={stats.totalServices}
          icon={Briefcase}
        />
        <StatCard
          title="Contact Messages"
          value={stats.totalContacts}
          icon={MessageSquare}
        />
        <StatCard
          title="Revenue (MTD)"
          value={stats.revenue}
          icon={DollarSign}
        />
      </div>

      {/* Recent Activity Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Bookings - Client Component */}
        <RecentBookings bookings={recentBookings} />

        {/* Recent Contacts */}
        <div className="rounded-lg border border-gray-800 bg-black p-6">
          <h2 className="text-lg font-semibold font-sans text-white mb-4">
            Recent Contacts
          </h2>
          <div className="space-y-4">
            {/* TODO: Map real contacts data */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <p className="font-medium font-sans text-white">
                  Sarah Williams
                </p>
                <p className="text-sm font-mono text-gray-400">
                  Inquiry about pricing...
                </p>
              </div>
              <span className="rounded-full bg-blue-900 px-3 py-1 text-xs font-mono font-medium text-blue-300">
                New
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <p className="font-medium font-sans text-white">Robert Brown</p>
                <p className="text-sm font-mono text-gray-400">
                  Question about availability...
                </p>
              </div>
              <span className="rounded-full bg-gray-700 px-3 py-1 text-xs font-mono font-medium text-gray-300">
                Read
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium font-sans text-white">Emily Davis</p>
                <p className="text-sm font-mono text-gray-400">
                  Corporate account setup...
                </p>
              </div>
              <span className="rounded-full bg-green-900 px-3 py-1 text-xs font-mono font-medium text-green-300">
                Replied
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
