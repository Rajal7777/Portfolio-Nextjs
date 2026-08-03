import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ProjectCard from "@/components/project-card";
import { FadeIn } from "@/components/common/fade-in";

const ProjectPage = () => {
  const projects = [
    {
      title: "Portfolio Contact Platform",
      description:
        "A modern portfolio project with multilingual support and a production-ready contact workflow. The contact form validates user input, stores data reliably, and sends clean email notifications.",
      techStack: ["Next.js", "TypeScript", "Zod", "Prisma", "Tailwind CSS"],
      imageSrc: "/images/Banner.png",
      imageAlt: "Project preview placeholder",
      liveProjectUrl: "https://example.com/live-project",
      liveCodeUrl: "https://github.com/example/live-code",
    },
  ];

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