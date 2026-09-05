import { FadeIn } from "@/components/common/fade-in";
import EducationPage from "@/components/education";
import AboutMe from "@/components/header/aboutMe";
import { getTranslations } from "next-intl/server";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutPage");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const AboutPage = async () => {
  const t = await getTranslations("AboutPage");

  const personalDetails = [
    { label: t("jlpt"), date: t("jlptDate") },
    { label: t("driverLicense"), date: t("licenseDate") },
    { label: t("udemy"), date: t("udemyDate") },
    { label: t("toeic"), date: t("toeicDate") },
  ];

  return (
    <>
      <Breadcrumb className="px-4 max-w-4xl mx-auto mt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/about">About</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <AboutMe />
      <EducationPage />

      {/* Visa Qualification Section */}
      <section className="mx-auto max-w-4xl px-4 py-8 text-slate-800 dark:text-slate-200 antialiased font-sans">
        <FadeIn delay={0.1}>
          <h2 className="my-10 py-2 text-center text-2xl font-semibold tracking-wide text-slate-800 dark:text-slate-100 md:text-4xl">
            {t("visaQualification")}
            <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-slate-800 dark:bg-slate-100" />
          </h2>

          {/*visa data grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 p-4 border rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-50 mb-1">
                {t("visaStatus")}
              </p>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                {t("visaName")}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-50 mb-1">
                {t("visaExpiry")}
              </p>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                2027-04-18
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-1">
            <h3 className="my-10 py-2 text-center text-2xl font-semibold tracking-wide text-slate-800 dark:text-slate-100 md:text-4xl">
              {t("qualificationsLabel")}
              <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-slate-800 dark:bg-slate-100" />
            </h3>


            {personalDetails.map((item, idx) => (
              <div
                key={idx}
                className="flex w-full items-start justify-between gap-4 py-3 border-b last:border-0 border-slate-100 dark:border-slate-800/60"
              >
                <p className="min-w-0 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {item.label}
                </p>
                <p className="shrink-0 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400 font-mono">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default AboutPage;
