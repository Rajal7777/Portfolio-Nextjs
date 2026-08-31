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

export const metadata: Metadata = {
  title: "About page",
  description: "About me",
};

const AboutPage = async () => {
  const t = await getTranslations("AboutPage");

  return (
    <>
      <Breadcrumb>
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
      <section className="mx-auto max-w-4xl px-1 py-8 text-slate-800 antialiased font-sans space-y-2">
        <FadeIn delay={0.1}>
          <h2 className="mb-4 text-2xl md:text-4xl  text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center  border border-gray-200 dark:border-gray-700 rounded-sm">
            {t("visaQualification")}
          </h2>

          <div className="flex justify-between w-full  my-6">
            <p className="font-medium text-sm uppercase leading-tight text-foreground bg-accent  py-1 rounded-md">
              {t("visaStatus")}
            </p>
            <p className="font-medium text-sm uppercase leading-tight text-foreground bg-accent py-1 rounded-md">
              {t("visaExpiry")}
            </p>
          </div>

          <div className="flex justify-between w-full ">
            <p className="text-[0.875rem]  leading-8  text-foreground">
              人文知識国際業務
            </p>
            <p className="text-[0.875rem]  leading-8 text-foreground">
              2027-04-18
            </p>
          </div>

          <div className="mt-4 border-t border-gray-200 dark:border-t-gray-700 space-y-1">
            <p className="font-medium text-sm uppercase leading-tight text-foreground bg-accent  py-1">
              Qualifications(資格)
            </p>

            <div className="flex justify-between w-full  py-3">
              <p className="text-[0.875rem]  leading-8  text-foreground tracking-tighter">
                日本語能力試験 N2 合格
              </p>
              <p className="text-[0.875rem]  leading-8 text-foreground">
                2021年 7月
              </p>
            </div>

            <div className="flex justify-between w-full py-3 border-t border-gray-200 dark:border-t-gray-700">
              <p className="text-[0.875rem]  leading-8  text-foreground tracking-tighter ">
                普通運転免許
              </p>
              <p className="text-[0.875rem]  leading-8  text-foreground">
                2021年 3月
              </p>
            </div>

            <div className="flex w-full items-start justify-between gap-4 border-t border-gray-200 py-3 dark:border-t-gray-700">
              <p className="min-w-0 flex-1 text-[0.875rem] leading-5 tracking-tighter text-foreground">
                Udemy Certificate of Completion
                <br />
                (オンライン学習プラットフォームUdemyにて「モダンJavaScript・React開発講座」修了)
              </p>

              <p className="shrink-0 whitespace-nowrap text-[0.875rem] leading-8 text-foreground">
                2025年 12月
              </p>
            </div>

            <div className="flex justify-between w-full py-3 border-t border-gray-200 dark:border-t-gray-700">
              <p className="text-[0.875rem]  leading-8  text-foreground tracking-tighter">
                TOEIC Listening & Reading Test 780点
              </p>
              <p className="text-[0.875rem]  leading-8  text-foreground">
                2026年 3月
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default AboutPage;
