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
    <section className="flex flex-col mx-auto max-w-3xl px-4 py-8 text-slate-800 antialiased font-sans space-y-4">
      <FadeIn>
        <h2 className="text-2xl mb-4 md:text-4xl pl-4 text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center  border border-gray-200 dark:border-gray-700 rounded-sm">
          {t("title")}
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
         <p className="text-base w-fit mx-auto font-bold  px-2 text-white leading-tight my-4 text-center bg-gray-950 rounded-lg py-2 ">
          Nepal
        </p>
      </FadeIn>

      <div className="space-y-4">
        <FadeIn delay={0.1}>
          <InfoCard
            className={raleway.className}
            title="Bright Star English School"
            info={t("schoolInfo")}
            description="Barahisthan, Bhaktapur"
            image="/images/school.png"
            duration="1998 - 2011"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <InfoCard
            className={raleway.className}
            title="Khowpa Higher Secondary School"
            info={t("highSchoolInfo")}
            description="Dekocha, Bhaktapur"
            image="/images/khwopa.png"
            duration="2011 - 2014"
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <InfoCard
            className={raleway.className}
            title="Orchid International College"
            info={t("collegeInfo")}
            description="Lalitpur, Nepal"
            image="/images/orchid.png"
            duration="2014 - 2015"
          />
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
        <p className="text-base w-fit mx-auto font-bold  px-2 text-white leading-tight my-4 text-center bg-gray-950 rounded-lg py-2 ">
          Japan
        </p>
      </FadeIn>

      <div className="space-y-4">
        <FadeIn delay={0.5}>
          <InfoCard
            className={raleway.className}
            title="久留米日本語学校"
            info="Kurume Japanese Language School"
            description="Kurume, Fukuoka, Japan"
            image="/images/kurume.svg"
            duration="2015 - 2017"
          />
        </FadeIn>

        <FadeIn delay={0.6}>
          <InfoCard
            className={raleway.className}
            title="熊本YMCAビジネス専門学校"
            info="Kumamoto YMCA Business College"
            description="Kumamoto, Japan"
            image="/images/ymca.webp"
            duration="2017 - 2019"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default EducationPage;
