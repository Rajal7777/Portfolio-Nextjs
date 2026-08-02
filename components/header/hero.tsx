import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const HeroSection = async () => {
  const t = await getTranslations("homePage.hero");

  return (
    <section className="mx-auto flex py-8 md:my-12 max-w-4xl flex-col px-4 sm:px-6 md:gap-10  lg:flex-row lg:items-center lg:justify-between">
      <main className="order-2 max-w-2xl mx-auto space-y-5 text-center lg:order-1 lg:text-left">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
            Hi I&lsquo;m Rajal Suwal.
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frontend Developer{" "}
            <span className=" block text-2xl text-muted-foreground sm:inline">
              {t("stack")}
            </span>
          </h2>
        </div>

        <p className="text-xs  text-pretty md:text-base leading-7 text-muted-foreground sm:text-lg">
          {t("description")}
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
          <a
            href="/CV/resume.pdf"
            download="resume.pdf"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-600 px-5 py-1 text-sm font-medium text-white transition-colors hover:bg-gray-500 sm:w-auto md:py-3"
          >
            {t("resumeCta")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </main>

      {/* image section */}
      <div className="order-1 flex shrink-0 justify-center lg:order-2 lg:justify-end">
        <Image
          src="/images/me.webp"
          alt={t("imageAlt")}
          width={320}
          height={400}
          className="h-auto w-64 rounded-2xl object-cover sm:w-72 md:w-80"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
