import { getTranslations } from "next-intl/server";
import { FadeIn } from "../common/fade-in";

const AboutMe = async () => {
    const t = await getTranslations("aboutMe");

    //<h2 className="text-center text-4xl  bg-slate-50">{t("title")}</h2>
    return (
        <main className="mx-auto max-w-3xl px-4 py-8 text-slate-800 antialiased font-sans">
            <FadeIn>
          <h2 className="mb-4 text-2xl md:text-4xl  text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center  border border-gray-200 dark:border-gray-700 rounded-sm">
            {t("title")}
          </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
                <p className="text-xs mt-6 whitespace-pre-line md:text-base leading-8 p-2 text-foreground">
                    {t("description")}
                </p>
            </FadeIn>
            <FadeIn delay={0.2}>
          <h2 className="mb-4 text-xl md:text-4xl md:pl-4 text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center  border border-gray-200 dark:border-gray-700 rounded-sm text-nowrap">
            {t("courseTitle")}
          </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
                <p className="text-xs mt-6 whitespace-pre-line md:text-base leading-8 p-2 text-foreground">
                    {t("courseDescription")}
                </p>
            </FadeIn>
        </main>
    );
};
export default AboutMe;

