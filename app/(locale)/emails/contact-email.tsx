import {
    Body,
    Container,
    Heading,
    Html,
    Section,
    Text,
} from "@react-email/components";

type Props = {
    name: string;
    email: string;
    message: string;
};

export default function ContactEmail({ name, email, message }: Props) {
    return (
        <Html>
            <Body style={body}>
                <Container style={container}>
                    <Section style={accentBar} />

                    <Heading style={heading}>New Portfolio Contact</Heading>

                    <Text style={subtitle}>Someone sent a message through the website.</Text>

                    <Section style={fieldCard}>
                        <Text style={label}>Name</Text>
                        <Text style={value}>{name}</Text>
                    </Section>

                    <Section style={fieldCard}>
                        <Text style={label}>Email</Text>
                        <Text style={value}>{email}</Text>
                    </Section>

                    <Section style={messageCard}>
                        <Text style={label}>Message</Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const body = {
    backgroundColor: "#f6f7fb",
    fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    margin: 0,
    padding: "32px 16px",
};

const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
    padding: "28px",
};

const accentBar = {
    backgroundColor: "#111827",
    borderRadius: "999px",
    height: "6px",
    marginBottom: "20px",
    width: "72px",
};

const heading = {
    color: "#111827",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    margin: "0 0 8px",
};

const subtitle = {
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "22px",
    margin: "0 0 20px",
};

const fieldCard = {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "14px 16px",
    marginBottom: "12px",
};

const messageCard = {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "14px 16px",
    marginTop: "6px",
};

const label = {
    color: "#6b7280",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    lineHeight: "16px",
    margin: "0 0 6px",
    textTransform: "uppercase" as const,
};

const value = {
    color: "#111827",
    fontSize: "14px",
    lineHeight: "22px",
    margin: 0,
};

const messageText = {
    color: "#111827",
    fontSize: "14px",
    lineHeight: "24px",
    margin: 0,
    whiteSpace: "pre-wrap" as const,
};
