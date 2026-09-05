import HeroSection from "@/components/header/hero";
import ContactPage from "./contact-component";
import SkillSection from "@/components/skills";
import ProjectCard from "@/components/project-card";
import { projects } from "@/app/data/data";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("projects");

  const localizedProjects = projects.map((project) => {
    let featuresArray: string[] = [];
    try {
      const rawFeatures = t.raw(`${project.id}.features`);
      if (Array.isArray(rawFeatures)) {
        featuresArray = rawFeatures;
      }
    } catch (e) {
      console.error(
        `Missing or malformed features array for project: ${project.id}`,
        e,
      );
    }

    return {
      ...project,
      description: t(`${project.id}.description`),
      features: featuresArray,
    };
  });

  return (
    <>
      <HeroSection />

      <main className="mx-auto mt-10 max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
        <h2 className="my-10 py-2 text-center text-2xl font-semibold tracking-wide text-slate-800 dark:text-slate-100 md:text-4xl">
          Featured Projects
          <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-slate-800 dark:bg-slate-100" />
        </h2>

        {localizedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            features={project.features}
            techStack={project.techStack}
            images={project.images}
            imageAlt={project.imageAlt}
            liveProjectUrl={project.liveProjectUrl}
            liveCodeUrl={project.liveCodeUrl}
          />
        ))}
      </main>

      <SkillSection />
      <ContactPage />
    </>
  );
}
