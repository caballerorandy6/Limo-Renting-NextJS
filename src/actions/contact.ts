"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
}

/**
 * Server Action for handling contact form submissions
 * Uses Resend for email delivery
 *
 * @param data - Contact form data
 * @returns ActionResult with success status and message
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ActionResult> {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return {
        success: false,
        error: "Please fill in all required fields",
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      };
    }

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: "American Transportation <noreply@yourdomain.com>",
      to: process.env.CONTACT_EMAIL || "info@yourdomain.com",
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone}</p>
          </div>

          ${
            data.message
              ? `
            <div style="margin: 20px 0;">
              <strong>Message:</strong>
              <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
                ${data.message}
              </p>
            </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the contact form on American Transportation website.</p>
          </div>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error("Email send error:", emailResult.error);
      return {
        success: false,
        error: "Failed to send message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you for contacting us! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
