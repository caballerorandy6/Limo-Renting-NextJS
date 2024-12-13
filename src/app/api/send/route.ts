import { Resend } from "resend";
//import EmailTemplate from "@/components/my-components/global-components/EmailTemplate";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Getting data from the request form body
    const data = await req.json();
    const { name, phone, email, message } = data;

    //Sending email
    const emailData = await resend.emails.send({
      from: "Limo Renting <onboarding@resend.dev>",
      to: ["caballerorandy7@gmail.com"],
      subject: "From Limo Renting",
      html: `
        <div style="font-family: 'Inter', sans-serif; line-height: 1.5; color: #374151; max-width: 600px; margin: 0 auto; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #f9fafb;">
      <h1 style="font-size: 1.5rem; font-weight: 700; text-align: center; color: #1f2937; margin-bottom: 16px;">From Limo Renting</h1>
      <p style="font-size: 1rem; color: #4b5563; margin-bottom: 8px;"><strong style="color: #1f2937;">Name:</strong> ${name}</p>
      <p style="font-size: 1rem; color: #4b5563; margin-bottom: 8px;"><strong style="color: #1f2937;">Phone:</strong> ${phone}</p>
      <p style="font-size: 1rem; color: #4b5563; margin-bottom: 8px;"><strong style="color: #1f2937;">Email:</strong> ${email}</p>
      <p style="font-size: 1rem; color: #4b5563; margin-bottom: 8px;"><strong style="color: #1f2937;">Message:</strong></p>
      <div style="font-size: 1rem; color: #6b7280; font-style: italic; padding: 12px; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 4px;">
        ${message}
      </div>
      <p style="text-align: center; color: #9ca3af; font-size: 0.875rem; margin-top: 16px;">This email was sent from the contact form on your website.</p>
    </div>
      `,
      // react: EmailTemplate({
      //   name,
      //   phone,
      //   email,
      //   message,
      // }) as React.ReactElement,
    });

    console.log("Email sent successfully", emailData);
    return NextResponse.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
