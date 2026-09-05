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

 
  const nepalSchools = [
    { key: "school1", image: "/images/school.png", duration: "1999 - 2012" },
    { key: "school2", image: "/images/khwopa.png", duration: "2012 - 2014" },
    { key: "school3", image: "/images/orchid.png", duration: "2014 - 2015" },
  ];

  const japanSchools = [
    { key: "school4", image: "/images/kurume.svg", duration: "2015 - 2017" },
    { key: "school5", image: "/images/ymca.webp", duration: "2017 - 2019" },
  ];

  return (
    <section className="flex flex-col mx-auto max-w-4xl px-1 py-8 text-slate-800 antialiased font-sans space-y-4">
      {/* Page Title */}
      <FadeIn>
        <h2 className="mb-4 text-2xl md:text-4xl text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center border border-gray-200 dark:border-gray-700 rounded-sm">
          {t("title")}
        </h2>
      </FadeIn>

      {/* Region: Nepal */}
      <FadeIn delay={0.1}>
        <p className="text-base w-fit mx-auto font-bold px-2 text-white leading-tight my-4 text-center bg-gray-950 rounded-lg py-2">
          {t("nepal")}
        </p>
      </FadeIn>

      <div className="space-y-4">
        {nepalSchools.map((school, index) => (
          <FadeIn key={school.key} delay={0.1 + index * 0.1}>
            <InfoCard
              className={raleway.className}
              title={t(`${school.key}.title`)}
              info={t(`${school.key}.info`)}
              description={t(`${school.key}.description`)}
              image={school.image}
              duration={school.duration}
            />
          </FadeIn>
        ))}
      </div>

      {/* Region: Japan */}
      <FadeIn delay={0.4}>
        <p className="text-base w-fit mx-auto font-bold px-2 text-white leading-tight my-4 text-center bg-gray-950 rounded-lg py-2">
          {t("japan")}
        </p>
      </FadeIn>

      <div className="space-y-4">
        {japanSchools.map((school, index) => (
          <FadeIn key={school.key} delay={0.5 + index * 0.1}>
            <InfoCard
              className={raleway.className}
              title={t(`${school.key}.title`)}
              info={t(`${school.key}.info`)}
              description={t(`${school.key}.description`)}
              image={school.image}
              duration={school.duration}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
