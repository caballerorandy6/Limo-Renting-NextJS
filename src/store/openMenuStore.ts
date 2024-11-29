import { create } from "zustand";

export interface MenuState {
  isOpen: boolean;
  setIsOpen: (openMenu: boolean) => void;
}

export const useOpenMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));
