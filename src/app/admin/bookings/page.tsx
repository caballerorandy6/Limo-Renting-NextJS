"use client";

import PageHeader from "@/components/admin/PageHeader";
import EmptyState from "@/components/admin/EmptyState";
import { Calendar, Eye, Edit, Trash2, Filter } from "lucide-react";

export default function BookingsPage() {
  // TODO: Fetch real bookings data from API
  const bookings = [
    {
      id: "1",
      bookingNumber: "BK-2024-001",
      customerName: "John Doe",
      email: "john@example.com",
      vehicle: "Luxury Sedan",
      service: "Airport Transfer",
      date: "2024-11-15",
      status: "CONFIRMED",
      totalPrice: 250,
    },
    {
      id: "2",
      bookingNumber: "BK-2024-002",
      customerName: "Jane Smith",
      email: "jane@example.com",
      vehicle: "Stretch Limo",
      service: "Wedding",
      date: "2024-11-20",
      status: "PENDING",
      totalPrice: 850,
    },
    {
      id: "3",
      bookingNumber: "BK-2024-003",
      customerName: "Mike Johnson",
      email: "mike@example.com",
      vehicle: "SUV",
      service: "Corporate Event",
      date: "2024-11-18",
      status: "COMPLETED",
      totalPrice: 450,
    },
  ];

  const handleViewBooking = (id: string) => {
    // TODO: Implement view booking logic
    console.log("View booking:", id);
  };

  const handleEditBooking = (id: string) => {
    // TODO: Implement edit booking logic
    console.log("Edit booking:", id);
  };

  const handleDeleteBooking = (id: string) => {
    // TODO: Implement delete booking logic
    console.log("Delete booking:", id);
  };

  const handleFilterBookings = () => {
    // TODO: Implement filter logic
    console.log("Filter bookings");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return "bg-green-900 text-green-300";
      case "PENDING":
        return "bg-yellow-900 text-yellow-300";
      case "COMPLETED":
        return "bg-blue-900 text-blue-300";
      case "CANCELLED":
        return "bg-red-900 text-red-300";
      default:
        return "bg-gray-700 text-gray-300";
    }
  };

  return (
    <div>
      <PageHeader
        title="Bookings"
        description="Manage customer reservations"
        action={
          <button
            onClick={handleFilterBookings}
            className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filter
          </button>
        }
      />

      {bookings.length === 0 ? (
        <EmptyState
          icon={Calendar}
          title="No bookings yet"
          description="Bookings will appear here once customers make reservations"
        />
      ) : (
        <div className="rounded-lg border border-gray-800 bg-black overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-800 bg-gray-950">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Booking #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Vehicle / Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-950 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">
                        {booking.bookingNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">
                        {booking.customerName}
                      </div>
                      <div className="text-sm text-gray-400">{booking.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{booking.vehicle}</div>
                      <div className="text-sm text-gray-400">{booking.service}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400">{booking.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">
                        ${booking.totalPrice}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleViewBooking(booking.id)}
                          className="text-gray-400 hover:text-white transition-colors"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEditBooking(booking.id)}
                          className="text-gray-400 hover:text-white transition-colors"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteBooking(booking.id)}
                          className="text-gray-400 hover:text-red-400 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
