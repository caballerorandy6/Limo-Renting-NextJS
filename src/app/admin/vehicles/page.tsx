"use client";

import PageHeader from "@/components/admin/PageHeader";
import EmptyState from "@/components/admin/EmptyState";
import { Plus, Edit, Trash2, Eye, Car } from "lucide-react";

export default function VehiclesPage() {
  // TODO: Fetch real vehicles data from API
  const vehicles = [
    {
      id: "1",
      name: "Luxury Sedan",
      passengers: 4,
      baggage: 3,
      pricePerHour: 80,
      pricePerMile: 4,
      isActive: true,
    },
    {
      id: "2",
      name: "Stretch Limo",
      passengers: 8,
      baggage: 3,
      pricePerHour: 120,
      pricePerMile: 6,
      isActive: true,
    },
    {
      id: "3",
      name: "SUV",
      passengers: 6,
      baggage: 5,
      pricePerHour: 100,
      pricePerMile: 5,
      isActive: false,
    },
  ];

  const handleCreateVehicle = () => {
    // TODO: Implement create vehicle logic
    console.log("Create vehicle");
  };

  const handleEditVehicle = (id: string) => {
    // TODO: Implement edit vehicle logic
    console.log("Edit vehicle:", id);
  };

  const handleDeleteVehicle = (id: string) => {
    // TODO: Implement delete vehicle logic
    console.log("Delete vehicle:", id);
  };

  const handleViewVehicle = (id: string) => {
    // TODO: Implement view vehicle logic
    console.log("View vehicle:", id);
  };

  return (
    <div>
      <PageHeader
        title="Vehicles"
        description="Manage your fleet of vehicles"
        action={
          <button
            onClick={handleCreateVehicle}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Vehicle
          </button>
        }
      />

      {vehicles.length === 0 ? (
        <EmptyState
          icon={Car}
          title="No vehicles yet"
          description="Get started by adding your first vehicle to the fleet"
          action={
            <button
              onClick={handleCreateVehicle}
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Vehicle
            </button>
          }
        />
      ) : (
        <div className="rounded-lg border border-gray-800 bg-black overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-800 bg-gray-950">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Vehicle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Capacity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Pricing
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
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-gray-950 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{vehicle.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400">
                        {vehicle.passengers} passengers • {vehicle.baggage} bags
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400">
                        ${vehicle.pricePerHour}/hr • ${vehicle.pricePerMile}/mi
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          vehicle.isActive
                            ? "bg-green-900 text-green-300"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {vehicle.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleViewVehicle(vehicle.id)}
                          className="text-gray-400 hover:text-white transition-colors"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEditVehicle(vehicle.id)}
                          className="text-gray-400 hover:text-white transition-colors"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteVehicle(vehicle.id)}
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
