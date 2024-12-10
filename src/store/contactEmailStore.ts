import { z } from "zod";
import { create } from "zustand";

// Schema Contact Form
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is required and must be at least 2 characters." }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone number with 10 digits." })
    .max(10, {
      message: "Please enter a valid phone number with 10 digits.",
    }),
  message: z.string().optional(),
});

// Contact Email Props
export interface ContactEmailProps {
  name: string;
  phone: string;
  email: string;
  message?: string;
  errors?: Record<string, string>;
}

// Contact Email Store Props
export interface ContactEmailStore {
  contactEmail: ContactEmailProps;
  setContactEmail: (contactEmail: ContactEmailProps) => void;
}

export const useContactEmailStore = create<ContactEmailStore>((set) => ({
  contactEmail: {
    name: "",
    phone: "",
    email: "",
    message: "",
    errors: {},
  },

  setContactEmail: (contactEmail) => {
    // Validación de los datos utilizando Zod
    const result = contactSchema.safeParse(contactEmail);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0]] = err.message;
        }
      });
      set((state) => ({
        contactEmail: {
          ...state.contactEmail,
          errors,
        },
      }));
    } else {
      set({ contactEmail: { ...contactEmail, errors: {} } }); // Si es válido, actualiza el estado sin errores
    }
  },
}));
