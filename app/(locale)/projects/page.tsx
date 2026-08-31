"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProjectCard from "@/components/project-card";
import { FadeIn } from "@/components/common/fade-in";
import { projects } from "@/app/data/data";
import { useTranslations } from "next-intl";

const ProjectPage = () => {
  const t = useTranslations("projects");

  const localizedProjects = projects.map((project) => ({
    ...project,
    description: t(`${project.id}.description`),
    features: Array.isArray(t.raw(`${project.id}.features`))
      ? (t.raw(`${project.id}.features`) as string[])
      : [],
  }));

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <FadeIn className="mx-auto flex w-full max-w-5xl flex-col gap-6 pb-10">
        {localizedProjects.map((project) => (
          <ProjectCard
            key={project.title}
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
      </FadeIn>
    </>
  );
};

export default ProjectPage;
