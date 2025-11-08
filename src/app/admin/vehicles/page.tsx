import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader";
import EmptyState from "@/components/admin/EmptyState";
import VehicleDialog from "@/components/admin/vehicles/VehicleDialog";
import VehicleActions from "@/components/admin/vehicles/VehicleActions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Car } from "lucide-react";
import { getVehiclesAdmin } from "@/actions/vehicles";

export const metadata: Metadata = {
  title: "Vehicles | Admin Dashboard",
  description: "Manage your fleet of vehicles",
};

export default async function VehiclesPage() {
  const { userId, getToken } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const token = await getToken();
  if (!token) {
    redirect("/sign-in");
  }

  const vehicles = await getVehiclesAdmin(token);

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
          <Table>
            <TableHeader className="bg-gray-950">
              <TableRow className="border-gray-800 hover:bg-gray-950">
                <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                  Vehicle
                </TableHead>
                <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                  Capacity
                </TableHead>
                <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                  Pricing
                </TableHead>
                <TableHead className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                  Status
                </TableHead>
                <TableHead className="text-right text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id} className="border-gray-800 hover:bg-gray-950">
                  <TableCell>
                    <div className="text-sm font-sans font-semibold text-white">
                      {vehicle.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-mono text-gray-400">
                      {vehicle.quantityPassengers} passengers • {vehicle.quantityBaggage} bags
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-mono text-gray-400">
                      ${vehicle.pricePerHour}/hr • ${vehicle.pricePerMile}/mi
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={vehicle.isActive ? "default" : "secondary"}
                      className={`font-mono ${
                        vehicle.isActive
                          ? "bg-green-900 text-green-300 hover:bg-green-900"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {vehicle.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <VehicleActions vehicleId={vehicle.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
