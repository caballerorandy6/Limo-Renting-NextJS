import { create } from "zustand";

interface OpenDialog {
  openDialog: boolean;
  setOpenDialog: (value: boolean) => void;
}

export const useOpenDialogStore = create<OpenDialog>((set) => ({
  openDialog: false,
  setOpenDialog: (value: boolean) => set({ openDialog: value }),
}));
