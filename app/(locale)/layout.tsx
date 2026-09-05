import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";

import { getLocale, getMessages } from "next-intl/server";
import Navbar from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Rajal Suwal | Frontend Developer",
    template: "%s | Rajal Suwal",
  },
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and modern web application development.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //Language, let next-intl handle it.
  const locale = await getLocale();
  const messages = await getMessages();

  //Theme
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;

  const initialTheme =
    themeCookie === "dark" || themeCookie === "light"
      ? themeCookie
      : "light";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      style={{ colorScheme: initialTheme }}
      className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme={initialTheme}
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            <Navbar />

            <main
              className="wrapper flex-1 bg-background pt-16
              text-foreground"
            >
              {children}
            </main>
            <Footer />
            <Toaster
              position="top-right"
              richColors />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
