import { getTranslations } from "next-intl/server";

const AboutMe = async () => {
    const t = await getTranslations("aboutPage");


    return (
        <main className="mx-auto max-w-3xl px-4 py-8 text-slate-800 antialiased font-sans">
            <h2 className="text-center text-4xl  bg-slate-50">{t("title")}</h2>
            <p className="text-xs mt-6 whitespace-pre-line md:text-base leading-8 p-2 text-foreground">
                {t("description")}
            </p>
        </main>
    );
};

export default AboutMe;