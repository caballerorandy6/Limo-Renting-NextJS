"use client";

import PageHeader from "@/components/admin/PageHeader";
import EmptyState from "@/components/admin/EmptyState";
import { Plus, Edit, Trash2, Eye, Briefcase } from "lucide-react";

export default function ServicesPage() {
  // TODO: Fetch real services data from API
  const services = [
    {
      id: "1",
      title: "Airport Transfer",
      slug: "airport-transfer",
      description: "Professional airport pickup and drop-off services",
      isActive: true,
    },
    {
      id: "2",
      title: "Wedding Transportation",
      slug: "wedding-transportation",
      description: "Elegant transportation for your special day",
      isActive: true,
    },
    {
      id: "3",
      title: "Corporate Events",
      slug: "corporate-events",
      description: "Executive transportation for business events",
      isActive: true,
    },
    {
      id: "4",
      title: "Wine Tours",
      slug: "wine-tours",
      description: "Luxury wine country tours",
      isActive: false,
    },
  ];

  const handleCreateService = () => {
    // TODO: Implement create service logic
    console.log("Create service");
  };

  const handleEditService = (id: string) => {
    // TODO: Implement edit service logic
    console.log("Edit service:", id);
  };

  const handleDeleteService = (id: string) => {
    // TODO: Implement delete service logic
    console.log("Delete service:", id);
  };

  const handleViewService = (id: string) => {
    // TODO: Implement view service logic
    console.log("View service:", id);
  };

  return (
    <div>
      <PageHeader
        title="Services"
        description="Manage your service offerings"
        action={
          <button
            onClick={handleCreateService}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Service
          </button>
        }
      />

      {services.length === 0 ? (
        <EmptyState
          icon={Briefcase}
          title="No services yet"
          description="Get started by adding your first service offering"
          action={
            <button
              onClick={handleCreateService}
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Service
            </button>
          }
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-lg border border-gray-800 bg-black p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="rounded-full bg-gray-900 p-2">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                    service.isActive
                      ? "bg-green-900 text-green-300"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {service.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">/{service.slug}</p>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {service.description}
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
                <button
                  onClick={() => handleViewService(service.id)}
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
                >
                  <Eye className="h-4 w-4" />
                  View
                </button>
                <button
                  onClick={() => handleEditService(service.id)}
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-red-900 hover:border-red-900 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
