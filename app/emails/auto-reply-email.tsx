import {
    Body,
    Container,
    Heading,
    Html,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";

type Props = {
    name: string;
    message: string;
};

export default function AutoReplyEmail({ name, message }: Props) {
    return (
        <Html>
            <Tailwind>
                <Body className="m-0 bg-slate-50 px-4 py-8 font-sans">
                    <Container className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                        <Section className="mb-5 h-1.5 w-18 rounded-full bg-slate-900" />

                        <Heading className="m-0 mb-2 text-2xl font-bold leading-8 text-slate-900">
                            Thanks for reaching out, {name}!
                        </Heading>

                        <Text className="m-0 mb-5 text-sm leading-6 text-slate-500">
                            I received your message and will get back to you soon.
                        </Text>

                        <Section className="mt-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                            <Text className="m-0 mb-1.5 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                                Your message
                            </Text>
                            <Text className="m-0 whitespace-pre-wrap text-sm leading-6 text-slate-900">
                                {message}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
