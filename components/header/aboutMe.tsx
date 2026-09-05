import { getTranslations } from "next-intl/server";
import { FadeIn } from "../common/fade-in";

const skillGroups = [
    { key: "frontend", labelKey: "frontendLabel" },
    { key: "stateManagementAndDataFetching", labelKey: "stateManagementAndDataFetchingLabel" },
    { key: "backend", labelKey: "backendLabel" },
    { key: "toolsAndVersionControl", labelKey: "toolsAndVersionControlLabel" },
] as const;

const AboutMe = async () => {
    const t = await getTranslations("aboutMe");

    return (
        <main className="mx-auto max-w-4xl px-4 py-8 font-sans antialiased text-slate-800 dark:text-slate-200">
            <FadeIn>
                <h1 className="mb-4 rounded-sm border border-gray-200 bg-slate-100 py-2 text-center text-2xl font-semibold playfair text-slate-900 dark:border-gray-700 dark:bg-slate-900 dark:text-slate-100 md:text-4xl">
                    {t("title")}
                </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
                <p className="mt-6 whitespace-pre-line p-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">
                    {t("description")}
                </p>
            </FadeIn>

            <FadeIn delay={0.2}>
                <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50/70 p-1 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
                    <h2 className="mb-5 text-center text-xl font-semibold text-slate-800 dark:text-slate-100 md:text-2xl">
                        {t("skillsTitle")}
                    </h2>

                    <div className="grid gap-4 p-1 md:grid-cols-2">
                        {skillGroups.map((group) => {
                            const items = (t.raw(group.key) ?? []) as string[];


                            return (
                                <div
                                    key={group.key}
                                    className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-950/40"
                                >
                                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-600 dark:text-slate-300">
                                        {t(group.labelKey)}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item) => (
                                            <span
                                                key={item}
                                                className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700 shadow-sm dark:border-sky-700/60 dark:bg-sky-900/30 dark:text-sky-200"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={0.3}>
                <h2 className="mb-4 mt-10 rounded-sm border border-gray-200 bg-slate-100 py-2 text-center text-xl font-semibold playfair text-slate-900 dark:border-gray-700 dark:bg-slate-900 dark:text-slate-100 md:text-3xl">
                    {t("courseTitle")}
                </h2>
            </FadeIn>

           <FadeIn delay={0.4}>
                <p className="mt-6 whitespace-pre-line p-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">
                    {t("courseDescription")}
                </p>
            </FadeIn>
        </main>
    );
};

export default AboutMe;

