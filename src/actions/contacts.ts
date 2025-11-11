"use server";

import { auth } from "@clerk/nextjs/server";
import { contactSchema } from "@/stores/contactEmailStore";
import { z } from "zod";

/**
 * Server Actions para gestión de contactos
 * - submitContactForm: Público (para formulario de contacto)
 * - getAllContacts, updateContactStatus, deleteContact: Admin (requieren autenticación)
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message?: string | null;
  status: "NEW" | "READ" | "REPLIED" | "ARCHIVED";
  createdAt: string;
  updatedAt: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

export interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
  contact?: Contact;
}

// ========================
// PUBLIC ACTIONS
// ========================

/**
 * Submit Contact Form (Public)
 * Validates with Zod and saves to backend API
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ActionResult> {
  try {
    // Validar con Zod schema
    const validatedData = contactSchema.parse(data);

    // Llamar al backend API
    const response = await fetch(`${API_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    const result = await response.json();

    // Si la respuesta no es exitosa
    if (!response.ok) {
      return {
        success: false,
        error: result.error || "Failed to submit contact form",
      };
    }

    // Retornar éxito con el contacto guardado
    return {
      success: true,
      message: result.message || "Thank you for contacting us! We'll get back to you soon.",
      contact: result.contact,
    };
  } catch (error) {
    // Errores de validación de Zod
    if (error instanceof z.ZodError) {
      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError.message,
      };
    }

    // Otros errores
    console.error("❌ Contact form submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}

// ========================
// ADMIN ACTIONS
// ========================

/**
 * Obtener todos los contactos (Admin)
 */
export async function getAllContacts(): Promise<Contact[]> {
  try {
    const { getToken } = await auth();
    const token = await getToken();

    const response = await fetch(`${API_URL}/contacts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store", // No cachear para obtener datos actualizados
    });

    if (!response.ok) {
      throw new Error("Failed to fetch contacts");
    }

    const contacts = await response.json();
    return contacts;
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    return [];
  }
}

/**
 * Obtener un contacto por ID (Admin)
 */
export async function getContactById(id: string): Promise<Contact | null> {
  try {
    const { getToken } = await auth();
    const token = await getToken();

    const response = await fetch(`${API_URL}/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch contact");
    }

    const contact = await response.json();
    return contact;
  } catch (error) {
    console.error("❌ Error fetching contact:", error);
    return null;
  }
}

/**
 * Actualizar el status de un contacto (Admin)
 */
export async function updateContactStatus(
  id: string,
  status: "NEW" | "READ" | "REPLIED" | "ARCHIVED"
): Promise<ActionResult> {
  try {
    const { getToken } = await auth();
    const token = await getToken();

    const response = await fetch(`${API_URL}/contacts/${id}/status`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || "Failed to update contact status",
      };
    }

    return {
      success: true,
      message: result.message || "Contact status updated successfully",
    };
  } catch (error) {
    console.error("❌ Error updating contact status:", error);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}

/**
 * Eliminar un contacto (Admin)
 */
export async function deleteContact(id: string): Promise<ActionResult> {
  try {
    const { getToken } = await auth();
    const token = await getToken();

    const response = await fetch(`${API_URL}/contacts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || "Failed to delete contact",
      };
    }

    return {
      success: true,
      message: result.message || "Contact deleted successfully",
    };
  } catch (error) {
    console.error("❌ Error deleting contact:", error);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}
