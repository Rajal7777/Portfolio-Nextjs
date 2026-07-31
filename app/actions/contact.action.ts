"use server";

import { render } from "@react-email/render";
import { resend } from "@/lib/resend";
import { contactFormSchema } from "@/lib/validations";
import ContactEmail from "../(locale)/emails/contact-email";

import { z } from "zod";

export async function sendContactEmail(
  data: z.infer<typeof contactFormSchema>,
) {
  try {
    //validate data
    const validatedData = contactFormSchema.parse(data);

    if (!validatedData) {
      return {
        success: false,
        message: "Invalid data",
      };
    }

    const { name, email, message } = validatedData;
    const html = await render(ContactEmail({ name, email, message }));

    //send email using resend
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "suwalrajal57@gmail.com",
      subject: `New contact form submission from ${name}`,
      html,
    });

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred",
    };
  }
}
