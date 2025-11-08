"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import TripTypeDialog from "./TripTypeDialog";

export default function CreateTripTypeButton() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setDialogOpen(true)}
        className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-sans font-bold text-black hover:bg-gray-200 transition-colors"
      >
        <Plus className="h-4 w-4" />
        Add Trip Type
      </button>

      <TripTypeDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        tripType={null}
      />
    </>
  );
}
