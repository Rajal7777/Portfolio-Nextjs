import HeroSection from '@/components/header/hero';
import ContactPage from './contact-component';
import SkillSection from '@/components/skills';
import { FadeIn } from '@/components/common/fade-in';
import ProjectCard from '@/components/project-card';
import { projects } from '@/app/data/data';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FadeIn className="max-w-4xl mx-auto mt-10 space-y-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl mb-4 md:text-4xl  text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center my-10 border border-gray-200 dark:border-gray-700 rounded-sm">
          Featured Projects
        </h2>
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
            className="my-8"
          />
        ))}
      </FadeIn>
      <SkillSection />
      <ContactPage />

    </>
  );
}