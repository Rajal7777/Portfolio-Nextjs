import InfoCard from "./common/info";
import { useTranslations } from "next-intl";
import { Raleway } from "next/font/google";
import { FadeIn } from "./common/fade-in";

const raleway = Raleway({
    subsets: ["latin"],
    weight: "700",
});

const EducationPage = () => {
    const t = useTranslations("educationPage");

    return (
        <section className="flex flex-col gap-4 max-w-4xl mx-auto px-4 py-8">
            <FadeIn>
                <h2 className="mb-4 text-4xl pl-4 text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair">
                    {t("title")}
                </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
                <span className="text-[1.2rem] bg-gray-700 text-background rounded-md inline-flex w-fit font-medium px-1">
                    Education Background Nepal
                </span>
            </FadeIn>

            <FadeIn delay={0.1}>
                <InfoCard
                    className={raleway.className}
                    title="Bright Star English School"
                    description="Barahisthan, Bhaktapur"
                    image="/images/school.png"
                    duration="2015 - 2019"
                />
            </FadeIn>

            <FadeIn delay={0.15}>
                <InfoCard
                    className={raleway.className}
                    title="Khowpa Higher Secondary School"
                    description="Dekocha, Bhaktapur"
                    image="/images/khwopa.png"
                    duration="2015 - 2019"
                />
            </FadeIn>

            <FadeIn delay={0.2}>
                <InfoCard
                    className={raleway.className}
                    title="Orchid International College"
                    info="College of information Technology"
                    description="Lalitpur, Nepal"
                    image="/images/orchid.png"
                    duration="2015 - 2019"
                />
            </FadeIn>

            <FadeIn delay={0.25}>
                <hr />
            </FadeIn>
            <FadeIn delay={0.3}>
                <span className="text-[1.2rem] bg-gray-700 text-background rounded-md inline-flex w-fit font-medium px-1">
                    Education Background Japan
                </span>
            </FadeIn>
            <FadeIn delay={0.35}>
                <InfoCard
                    className={raleway.className}
                    title="久留米日本語学校"
                    info="Kurume Japanese Language School"
                    description="Kurume, Fukuoka, Japan"
                    image="/images/kurume.svg"
                    duration="2020 - 2022"
                />
            </FadeIn>

            <FadeIn delay={0.4}>
                <InfoCard
                    className={raleway.className}
                    title="熊本YMCAビジネス専門学校"
                    info="Kumamoto YMCA Business College"
                    description="Kumamoto, Japan"
                    image="/images/ymca.webp"
                    duration="2022 - 2024"
                />
            </FadeIn>
        </section>
    );
};

export default EducationPage;
