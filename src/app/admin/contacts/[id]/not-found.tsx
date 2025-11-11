import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <AlertCircle className="h-16 w-16 text-gray-500" />
        <h1 className="text-4xl font-bold font-sans text-white">Contact Not Found</h1>
        <p className="text-gray-400 font-mono text-center max-w-md">
          The contact you are looking for does not exist or has been deleted.
        </p>
      </div>

      <Link
        href="/admin/contacts"
        className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-sans font-bold transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Contacts
      </Link>
    </div>
  );
}
