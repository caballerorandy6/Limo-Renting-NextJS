import { z } from "zod";
import { create } from "zustand";
import { ContactEmailStore } from "@/types/contact";

// Schema Contact Form
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is required and must be at least 2 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^[\d\s\-\(\)]+$/, { message: "Phone number contains invalid characters." })
    .transform((val) => val.replace(/\D/g, "")) // Remove non-digits
    .refine((val) => val.length === 10, {
      message: "Phone number must have exactly 10 digits.",
    }),
  message: z.string().optional(),
});

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
      result.error.issues.forEach((err) => {
        const fieldName = err.path[0];
        if (fieldName && typeof fieldName === 'string') {
          errors[fieldName] = err.message;
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
