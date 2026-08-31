"use client";

import HeroSection from "@/components/header/hero";
import ContactPage from "./contact-component";
import SkillSection from "@/components/skills";
import ProjectCard from "@/components/project-card";
import { projects } from "@/app/data/data";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("projects");

  const localizedProjects = projects.map((project) => ({
    ...project,
    description: t(`${project.id}.description`),
    features: t.raw(`${project.id}.features`) as string[],
  }));

  return (
    <>
      <HeroSection />

      <main className="mx-auto mt-10 max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
        <h2 className="my-10 border border-gray-200 bg-slate-100 py-2 text-center text-2xl font-semibold text-gray-800 dark:border-gray-700 dark:bg-slate-900 md:text-4xl">
          Featured Projects
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