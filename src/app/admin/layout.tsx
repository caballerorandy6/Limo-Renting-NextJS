import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-950">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="pt-20 px-4 pb-4 lg:p-8">{children}</div>
      </div>
    </div>
  );
}
