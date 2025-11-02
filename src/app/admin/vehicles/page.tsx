import { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import EmptyState from "@/components/admin/EmptyState";
import VehicleDialog from "@/components/admin/vehicles/VehicleDialog";
import { Edit, Trash2, Eye, Car } from "lucide-react";
import { getVehicles } from "@/actions";

export const metadata: Metadata = {
  title: "Vehicles | Admin Dashboard",
  description: "Manage your fleet of vehicles",
};

export default async function VehiclesPage() {
  const vehicles = await getVehicles();

  // TODO: Implement edit, delete, and view vehicle handlers

  return (
    <div>
      <PageHeader
        title="Vehicles"
        description="Manage your fleet of vehicles"
        action={<VehicleDialog mode="create" />}
      />

      {vehicles.length === 0 ? (
        <EmptyState
          icon={Car}
          title="No vehicles yet"
          description="Get started by adding your first vehicle to the fleet"
          action={<VehicleDialog mode="create" />}
        />
      ) : (
        <div className="rounded-lg border border-gray-800 bg-black overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-800 bg-gray-950">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    Vehicle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    Capacity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    Pricing
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-gray-950 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-sans font-semibold text-white">{vehicle.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-mono text-gray-400">
                        {vehicle.quantityPassengers} passengers • {vehicle.quantityBaggage} bags
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-mono text-gray-400">
                        ${vehicle.pricePerHour}/hr • ${vehicle.pricePerMile}/mi
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-mono font-semibold ${
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
                        {/* TODO: Implement view vehicle action */}
                        <button
                          className="text-gray-400 hover:text-white transition-colors"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {/* TODO: Use VehicleDialog mode="edit" vehicleId={vehicle.id} */}
                        <button
                          className="text-gray-400 hover:text-white transition-colors"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        {/* TODO: Implement delete vehicle action */}
                        <button
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
