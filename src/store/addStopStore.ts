import { create } from "zustand";

import { AddStopState } from "@/lib/interfaces";

export const useAddStopStore = create<AddStopState>((set) => ({
  stops: [],
  addStop: () => set((state) => ({ stops: [...state.stops, ""] })),
  removeStop: (index: number) =>
    set((state) => ({
      stops: state.stops.filter((_, i) => i !== index),
    })),
}));
