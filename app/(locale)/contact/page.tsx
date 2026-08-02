import ContactForm from "@/components/form";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact page",
    description: "Get in touch with us",
};

const ContactPage = () => {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <ContactForm />
        </>
    );
};

export default ContactPage;