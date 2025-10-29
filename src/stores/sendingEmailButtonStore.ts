import { create } from "zustand";

// Submit Button Store Props
export interface SendingEmailButtonProps {
  buttonText: string;
  setButtonText: (newText: string) => void;
}

export const useSendingEmailButtonStore = create<SendingEmailButtonProps>(
  (set) => ({
    buttonText: "Send Message",
    setButtonText: (newText: string) => set({ buttonText: newText }),
  })
);
