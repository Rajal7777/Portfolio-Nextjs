"use client";

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactFormSchema } from "@/lib/validations";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import { sendContactEmail } from "@/app/actions/contact.action";
import { toast } from "sonner";

const defaultValues = {
    name: "",
    email: "",
    message: "",
};

const ContactForm = () => {
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
            <h2 className="text-center font-serif text-4xl my-6">Contact Form</h2>
            <Card className="w-full sm:max-w-md md:max-w-4xl mx-auto space-y-8 border-none">
                <CardHeader>
                    <CardTitle
                        className="text-center text-2xl font-semibold"
                    >Send an email</CardTitle>
                </CardHeader>
                <CardContent>
                    <form
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
                                                id="email"
                                                {...field}
                                                autoComplete="on"
                                                placeholder="Enter your email"
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
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
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
                </CardFooter>
            </Card>
        </>
    );
};

export default ContactForm;
