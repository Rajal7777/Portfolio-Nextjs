import { z } from "zod";

//schema for contact form
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be less than 30 characters."),

  email: z.string().trim().email("Please enter a valid email address"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters."),
});
