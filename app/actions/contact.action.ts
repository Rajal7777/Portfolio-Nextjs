"use server";

import { render } from "@react-email/render";
import { resend } from "@/lib/resend";
import { contactFormSchema } from "@/lib/validations";
import ContactEmail from "../emails/contact-email";

import { z } from "zod";

export async function sendContactEmail(
  data: z.infer<typeof contactFormSchema>,
) {
  try {
    //validate data
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        message: "Invalid data",
      };
    }

    const validatedData = result.data;

    //after we get vallidated data, we can send the email using resend
    const { name, email, message } = validatedData;

    //convert react email component to html string using react-email render function
    const html = await render(ContactEmail({ name, email, message }));

    //send email using resend
    await resend.emails.send({
      //dummy for development in production from:"Portfolio <contact@yourdomain.com>"
      from: "Portfolio <onboarding@resend.dev>",
      to: "suwalrajal57@gmail.com",
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html,
    });

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Contact email failed:", error);
    return {
      success: false,
      message: "An error occurred",
    };
  }
}
