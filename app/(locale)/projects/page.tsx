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

const ProjectPage = () => {
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

      <FadeIn className="mx-auto mt-6 flex w-full max-w-5xl flex-col gap-6 pb-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imageSrc={project.imageSrc}
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
