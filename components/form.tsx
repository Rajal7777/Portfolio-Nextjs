"use client";

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactFormSchema } from "@/lib/validations";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import { sendContactEmail } from "@/app/actions/contact.action";
import { toast } from "sonner";
import { motion } from "framer-motion";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = ({title}: {title?: string}) => {
  //connect the form to react-hook-form and zod for validation
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultValues,
  });

  //Form state variables
  const {
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = form;

  // console.log(form);

  //handle submit form
  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    try {
      const res = await sendContactEmail(data);

      if (res.success) {
        toast.success(res.message);
        form.reset(defaultValues);
      } else {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  //input style for the form fields
  const inputStyle =
    "border rounded-md border-border bg-background px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <>
    {title && (
        <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="my-6 text-center font-serif text-4xl"
      >
        {title}
      </motion.h2>
      )}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
      >
        <Card className="w-full sm:max-w-md md:max-w-4xl mx-auto space-y-8 border-none">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold">
              Send an email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              method="POST"
              id="contact-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FieldGroup>
                {/* fullName */}
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <input
                          className={inputStyle}
                          id="name"
                          {...field}
                          autoComplete="off"
                          placeholder="Enter your name"
                          required
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    );
                  }}
                />

                {/* email */}
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <input
                          className={inputStyle}
                          type="email"
                          id="email"
                          {...field}
                          autoComplete="on"
                          placeholder="Enter your email"
                          required
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    );
                  }}
                />

                {/* message */}
                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <textarea
                          className={inputStyle}
                          rows={6}
                          id="message"
                          {...field}
                          autoComplete="off"
                          placeholder="Enter your message"
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>

              <div>
                <Button
                  type="submit"
                  variant="default"
                  className="w-full"
                  form="contact-form"
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                {/* error message */}

                {isSubmitted && Object.keys(errors).length > 0 && (
                  <p className="text-red-500 text-center">
                    Please fill the error fields and try again.
                  </p>
                )}

                {/* message for successful submission */}
                {isSubmitSuccessful && (
                  <p className="text-green-500 text-center">
                    Form submitted successfully!
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default ContactForm;
