import { useState } from "react";
import { useContactEmailStore } from "@/stores";
import { submitContactForm as submitContactFormAction } from "@/actions";

interface UseContactFormReturn {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  submitForm: (data: ContactFormData) => Promise<void>;
  reset: () => void;
}

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

/**
 * Custom hook for handling contact form submission
 * Manages form state, validation, and Server Action communication
 * Uses Server Actions instead of API routes
 *
 * @example
 * const { isSubmitting, isSuccess, error, submitForm } = useContactForm();
 *
 * const handleSubmit = async (data) => {
 *   await submitForm(data);
 * };
 */
export function useContactForm(): UseContactFormReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setContactEmail } = useContactEmailStore();

  const submitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      // Update store
      setContactEmail({
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message || "",
      });

      // Use Server Action instead of API route
      const result = await submitContactFormAction(data);

      if (!result.success) {
        throw new Error(result.error || "Failed to send message");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
    reset,
  };
}
