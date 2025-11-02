import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export default function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
  return (
    <div className="rounded-lg border border-gray-800 bg-black p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium font-mono text-gray-400 uppercase tracking-wide">{title}</p>
          <p className="mt-2 text-3xl font-bold font-sans text-white">{value}</p>
          {trend && (
            <p
              className={`mt-2 text-sm font-mono ${
                trend.isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {trend.isPositive ? "↑" : "↓"} {trend.value}
            </p>
          )}
        </div>
        <div className="rounded-full bg-gray-900 p-3">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}
