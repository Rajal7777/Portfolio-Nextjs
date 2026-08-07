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

const AboutPage =async () => {
  const t =  await getTranslations("AboutPage");

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

      <section className="mx-auto max-w-3xl px-4 py-8 text-slate-800 antialiased font-sans space-y-2">
        <FadeIn delay={0.1}>
          <h2 className="mb-4 text-2xl md:text-4xl  text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center  border border-gray-200 dark:border-gray-700 rounded-sm">
         {t("visaQualification")}
          </h2>

          <div className="flex justify-between w-full px-1 my-6">
            <p className="font-medium text-sm uppercase leading-tight text-foreground">
              {t("visaStatus")}
            </p>
            <p className="font-medium text-sm uppercase leading-tight text-foreground">
              {t("visaExpiry")}
            </p>
          </div>

          <div className="flex justify-between w-full px-4">
            <p className="text-[0.875rem]  leading-8 px-2 text-foreground">
              人文知識国際業務
            </p>
            <p className="text-[0.875rem]  leading-8 px-2 text-foreground">
              2027-04-18
            </p>
          </div>

          <div className="border-t border-gray-200 mt-4">
            <p className="font-medium text-sm uppercase leading-tight text-foreground pt-4 underline">
              Qualifications(資格)
            </p>

            <div className="flex justify-between w-full px-4 py-3">
                      <p className="text-[0.875rem]  leading-8 px-2 text-foreground">
                        日本語能力試験 N2 合格
                     </p>
                      <p className="text-[0.875rem]  leading-8 px-2 text-foreground">
                        2021年 7月
                     </p>

            </div>

            <div className="flex justify-between w-full px-4 py-3">
                      <p className="text-[0.875rem]  leading-8 px-2 text-foreground">
                      普通運転免許
                     </p>
                      <p className="text-[0.875rem]  leading-8 px-2 text-foreground">
                        2021年 3月
                     </p>

            </div>

            <div className="flex justify-between w-full px-4 py-3">
                      <p className="text-[0.875rem]  leading-8 px-2 text-foreground">
                      TOEIC Listening & Reading Test 780点
                     </p>
                      <p className="text-[0.875rem]  leading-8 px-2 text-foreground">
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
