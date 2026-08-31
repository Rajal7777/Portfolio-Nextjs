"use client";

import { cn } from "@/lib/utils";
import {
  Cable,
  ClipboardCheck,
  Terminal,
  LucideIcon,
  Palette,
  Workflow,
  Layers,
  Server,
} from "lucide-react";
import { Raleway } from "next/font/google";
import { Card } from "./ui/card";
import { FadeIn } from "./common/fade-in";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "700",
});

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layers,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "State & Data",
    icon: Workflow,
    skills: ["Zustand", "Context API", "TanStack Query"],
  },
  {
    title: "Forms & Validation",
    icon: ClipboardCheck,
    skills: ["React Hook Form", "Zod"],
  },
  {
    title: "UI & Animation",
    icon: Palette,
    skills: ["Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Database & ORM",
    icon: Cable,
    skills: ["Prisma", "PostgreSQL"],
  },
  {
    title: "Tools & Deployment",
    icon: Terminal,
    skills: ["Git", "GitHub", "npm", "Vercel"],
  },
];

//Card component for each skill category
function SkillsCard({ title, icon: Icon, skills }: SkillCategory) {
  return (
    <Card className="p-5 min-h-35 hover:shadow-md dark:hover:shadow-white/10  transition-transform duration-300 ease-in-out">
      <section>
        <div className="flex flex-row items-start mb-4">
          <Icon className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-300" />
          <h3 className="text-lg font-semibold text-left">{title}</h3>
        </div>
        <ul className="list-inside flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <li
              key={skill}
              className="text-gray-700 dark:text-gray-400 list-none whitespace-nowrap bg-accent rounded-md py-0.5 px-1 text-xs"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
}

const SkillSection = () => {
  return (
    <FadeIn delay={0.10}>
      <section
        className={cn("max-w-4xl mx-auto text-center my-6 sm:px-6 lg:px-8", raleway.className)}
      >
      <h2 className="text-2xl mb-4 md:text-4xl  text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center my-10  border border-gray-200 dark:border-gray-700 rounded-sm">
          Skills{" "}
        </h2>
        <h5 className="mb-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          My Tech Stack
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <FadeIn key={skill.title} delay={index * 0.18} x={-40} y={0} once>
              <SkillsCard {...skill} />
            </FadeIn>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export default SkillSection;
