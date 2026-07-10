import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { cookies } from "next/headers";
import { ThemeProvider } from "../../components/theme/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Navbar from "../../components/layouts/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Website | Front-End Developer",
  description:
    "Rajal's Portfolio.Building clean,responsive  modern web applications using React, Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //Language
  const locale = await getLocale();
  const messages = await getMessages();

  //Theme
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get("theme")?.value || 'light';

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      style={{ colorScheme: savedTheme }}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme={savedTheme}
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="min-h-screen wrapper `bg-(--background)` `text-(--foreground)`">
              {children}
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
