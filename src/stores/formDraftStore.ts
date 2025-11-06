import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FormData } from "@/types/forms";

export interface FormDraftState {
  formDraft: Partial<FormData>;
  setFormDraft: (draft: Partial<FormData>) => void;
  clearFormDraft: () => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useFormDraftStore = create<FormDraftState>()(
  persist(
    (set) => ({
      formDraft: {},
      setFormDraft: (draft: Partial<FormData>) =>
        set((state) => ({
          formDraft: { ...state.formDraft, ...draft },
        })),
      clearFormDraft: () =>
        set(() => ({
          formDraft: {},
        })),
      // Hydration state
      _hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        });
      },
    }),
    {
      name: "form-draft-store",
      storage: createJSONStorage(() => localStorage),
      skipHydration: false,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
