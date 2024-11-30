import { create } from "zustand";

interface IncrementNumberState {
  count: number;
  setCount: (value: number) => void;
}

export const useIncrementNumberStore = create<IncrementNumberState>((set) => ({
  count: 0,
  setCount: (value) => set({ count: Math.round(value) }),
}));
