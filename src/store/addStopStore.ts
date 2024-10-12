import { create } from "zustand";

interface AddStopState {
  stops: string[];
  addStop: () => void;
  removeStop: (index: number) => void;
}

export const useAddStopStore = create<AddStopState>((set) => ({
  stops: [],
  addStop: () => set((state) => ({ stops: [...state.stops, ""] })),
  removeStop: (index: number) =>
    set((state) => ({
      stops: state.stops.filter((_, i) => i !== index),
    })),
}));
