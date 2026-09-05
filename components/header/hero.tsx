"use client";

import { Loader2, Download } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "../common/fade-in";
import { useState } from "react";

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const t = useTranslations("homePage.hero");

  const handleDownload = () => {
    setIsDownloading(true);

    const timer = setTimeout(() => setIsDownloading(false), 2000);
    return () => clearTimeout(timer);
  };

  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-8 sm:px-6 md:my-12 md:gap-10 lg:flex-row lg:items-center lg:justify-between">
      {/* Content */}
      <FadeIn className="order-2 mx-auto max-w-2xl space-y-5 text-center lg:order-1 lg:text-left">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
            Hi I&lsquo;m Rajal Suwal.
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frontend Developer{" "}
            <span className="block text-2xl text-muted-foreground sm:inline">
              {t("stack")}
            </span>
          </h1>
        </div>

        <p className="text-sm leading-7 text-pretty text-muted-foreground sm:text-base">
          {t("description")}
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
          <a
            href="/CV/resume.pdf"
            download="resume.pdf"
            onClick={handleDownload}
            aria-busy={isDownloading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 dark:bg-slate-100 px-5 py-2.5 text-sm font-medium text-white dark:text-slate-900 transition-colors hover:bg-slate-800 dark:hover:bg-slate-200 sm:w-auto"
          >
            {isDownloading ? t("resumeDownloading") : t("resumeCta")}

            {isDownloading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
          </a>
        </div>
      </FadeIn>

      {/* Image */}
      <FadeIn
        delay={0.1}
        className="order-1 mb-4 flex w-full justify-center sm:mb-0 lg:order-2 lg:w-auto lg:justify-end"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl  sm:max-w-md lg:w-80 bg-background">
          <Image
            src="/cover.jpg"
            alt={t("imageAlt")}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 320px"
            className="object-cover object-center"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
