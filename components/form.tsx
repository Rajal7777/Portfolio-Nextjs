"use client";

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactFormSchema } from "@/lib/validations";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";

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

    //handle submit form
    function onSubmit(data: z.infer<typeof contactFormSchema>) {
        console.log(data);
    }

    const inputStyle =
        "border rounded-md border-border bg-background px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    return (
        <Card className="w-full sm:max-w-md max-w-2xl mx-auto">
            <h2 className="h2-bold text-center">Contact Form</h2>
            <CardHeader>
                <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
                <form
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
                                            autoComplete="off"
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
            <CardFooter>
                <Button type="submit" variant="default"
                className="w-full">
                    Submit
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ContactForm;
