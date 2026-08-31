"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactFormSchema } from "@/lib/validations";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import { sendContactEmail } from "@/app/actions/contact-action";
import { toast } from "sonner";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  //handle submit form
  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    try {
      const res = await sendContactEmail(data);

      if (res.success) {
        toast.success(res.message);
        reset(defaultValues);
      } else {
        toast.error(res.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Card className="w-full sm:max-w-md md:max-w-4xl mx-auto space-y-8 border-none mt-4">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-semibold">
          Contact Me
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FieldGroup>
            {/* fullName */}
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>

              <input
                id="name"
                {...register("name")}
                autoComplete="name"
                placeholder="Enter your name"
                className="border rounded-md border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />

              {errors.name && <FieldError errors={[errors.name]} />}
            </Field>

            {/* email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <input
                id="email"
                {...register("email")}
                autoComplete="email"
                placeholder="Enter your email"
                className="border rounded-md border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />

              {errors.email && <FieldError errors={[errors.email]} />}
            </Field>

            {/* message */}
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>

              <textarea
                id="message"
                {...register("message")}
                autoComplete="off"
                placeholder="Enter your message"
                rows={6}
                className="border rounded-md border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />

              {errors.message && <FieldError errors={[errors.message]} />}
            </Field>
          </FieldGroup>

          <div>
            <Button
              type="submit"
              variant="default"
              className="w-full my-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
