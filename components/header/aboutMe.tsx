import { getTranslations } from "next-intl/server";
import { FadeIn } from "../common/fade-in";

const AboutMe = async () => {
    const t = await getTranslations("aboutPage");

//<h2 className="text-center text-4xl  bg-slate-50">{t("title")}</h2>
    return (
        <main className="mx-auto max-w-3xl px-4 py-8 text-slate-800 antialiased font-sans">
            <FadeIn>
                <h2 className="text-center text-4xl  bg-slate-50">{t("title")}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
                <p className="text-xs mt-6 whitespace-pre-line md:text-base leading-8 p-2 text-foreground">
                    {t("description")}
                </p>
            </FadeIn>
        </main>
    );
};

export default AboutMe;