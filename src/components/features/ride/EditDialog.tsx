"use client";

import { useEffect, useState } from "react";
import FormQuote from "@/components/shared/forms/FormQuote";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useOpenDialogStore } from "@/stores";
import { getServices, getTripTypes } from "@/actions/services";

const EditDialog = () => {
  const { openDialog, setOpenDialog } = useOpenDialogStore();
  const [services, setServices] = useState<any[]>([]);
  const [tripTypes, setTripTypes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, tripTypesData] = await Promise.all([
          getServices(),
          getTripTypes(),
        ]);
        setServices(servicesData);
        setTripTypes(tripTypesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (openDialog) {
      fetchData();
    }
  }, [openDialog]);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-hidden p-0 gap-0 bg-gradient-to-br from-white via-blue-50/30 to-gray-50 border-2 border-blue-200 shadow-2xl">
        <DialogHeader className="px-8 pt-8 pb-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white sticky top-0 z-10 shadow-lg">
          <DialogTitle className="font-mono text-3xl font-bold flex items-center gap-3">
            <span className="text-4xl">🔍</span>
            New Search
          </DialogTitle>
          <p className="text-blue-100 font-sans text-sm mt-2">
            Perform a new search for available vehicles
          </p>
        </DialogHeader>
        <div className="overflow-y-auto px-8 py-6 max-h-[calc(95vh-140px)]">
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <FormQuote services={services} tripTypes={tripTypes} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
