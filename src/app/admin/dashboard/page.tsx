"use client";

import PageHeader from "@/components/admin/PageHeader";
import StatCard from "@/components/admin/StatCard";
import { Car, Calendar, Briefcase, MessageSquare, DollarSign, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  // TODO: Fetch real data from API
  const stats = {
    totalVehicles: 12,
    totalBookings: 48,
    totalServices: 8,
    totalContacts: 23,
    revenue: "$45,231",
    activeBookings: 15,
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
          trend={{ value: "+2 this month", isPositive: true }}
        />
        <StatCard
          title="Total Bookings"
          value={stats.totalBookings}
          icon={Calendar}
          trend={{ value: "+12 this week", isPositive: true }}
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
          trend={{ value: "5 unread", isPositive: false }}
        />
        <StatCard
          title="Revenue (MTD)"
          value={stats.revenue}
          icon={DollarSign}
          trend={{ value: "+18.2%", isPositive: true }}
        />
      </div>

      {/* Recent Activity Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Bookings */}
        <div className="rounded-lg border border-gray-800 bg-black p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Recent Bookings
          </h2>
          <div className="space-y-4">
            {/* TODO: Map real bookings data */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <p className="font-medium text-white">John Doe</p>
                <p className="text-sm text-gray-400">Luxury Sedan - Airport Transfer</p>
              </div>
              <span className="rounded-full bg-green-900 px-3 py-1 text-xs font-medium text-green-300">
                Confirmed
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <p className="font-medium text-white">Jane Smith</p>
                <p className="text-sm text-gray-400">Stretch Limo - Wedding</p>
              </div>
              <span className="rounded-full bg-yellow-900 px-3 py-1 text-xs font-medium text-yellow-300">
                Pending
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Mike Johnson</p>
                <p className="text-sm text-gray-400">SUV - Corporate Event</p>
              </div>
              <span className="rounded-full bg-green-900 px-3 py-1 text-xs font-medium text-green-300">
                Confirmed
              </span>
            </div>
          </div>
        </div>

        {/* Recent Contacts */}
        <div className="rounded-lg border border-gray-800 bg-black p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Recent Contacts
          </h2>
          <div className="space-y-4">
            {/* TODO: Map real contacts data */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <p className="font-medium text-white">Sarah Williams</p>
                <p className="text-sm text-gray-400">Inquiry about pricing...</p>
              </div>
              <span className="rounded-full bg-blue-900 px-3 py-1 text-xs font-medium text-blue-300">
                New
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <p className="font-medium text-white">Robert Brown</p>
                <p className="text-sm text-gray-400">Question about availability...</p>
              </div>
              <span className="rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-gray-300">
                Read
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Emily Davis</p>
                <p className="text-sm text-gray-400">Corporate account setup...</p>
              </div>
              <span className="rounded-full bg-green-900 px-3 py-1 text-xs font-medium text-green-300">
                Replied
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
