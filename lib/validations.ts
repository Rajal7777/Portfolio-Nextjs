import { z } from "zod";

//schema for contact form
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(254),

  message: z
    .string()
    .trim()
    .min(10, "Message is too short")
    .max(5000, "Message is too long"),
});