"use server";

import { render } from "@react-email/render";
import { z } from "zod";

import { resend } from "@/lib/resend";
import { contactFormSchema } from "@/lib/validations";
import ContactEmail from "../emails/contact-email";

export async function sendContactEmail(
  data: z.infer<typeof contactFormSchema>,
) {
  try {
    // 1. Validate form data on the server
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        message: "Please check your form fields.",
      };
    }

    const { name, email, message } = result.data;

    // 2. Check required environment variable
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      console.error(
        "[Contact Email Error] CONTACT_EMAIL is not configured.",
      );

      return {
        success: false,
        message: "Email service is not configured.",
      };
    }

    // 3. Render React Email template
    const html = await render(
      <ContactEmail
        name={name}
        email={email}
        message={message}
      />,
    );

    // 4. Send email through Resend
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html,
    });

    // 5. Handle Resend error
    if (error) {
      console.error("[Contact Email Error]", error);

      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Email sent successfully.",
    };
  } catch (error) {
    console.error("[Contact Email Exception]", error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}