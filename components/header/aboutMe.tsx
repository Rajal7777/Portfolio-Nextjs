import { getTranslations } from "next-intl/server";

const AboutMe = async () => {
    const t = await getTranslations("aboutPage");


    return (
        <main className="mx-auto max-w-3xl px-4 py-8 text-slate-800 antialiased font-sans">
            <h2 className="text-center text-5xl  bg-slate-50">{t("title")}</h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-8">
                {t("description")}
            </p>
        </main>
    );
};

export default AboutMe;