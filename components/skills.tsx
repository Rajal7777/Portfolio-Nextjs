"use client";

import { cn } from "@/lib/utils";
import {
  Cable,
  ClipboardCheck,
  Code2,
  Terminal,
  LucideIcon,
  Palette,
  Workflow,
} from "lucide-react";
import { Raleway } from "next/font/google";
import { Card } from "./ui/card";
import { FadeIn } from "./common/fade-in";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "700",
});

type Skills = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const skills: Skills[] = [
  {
    title: "Frameworks",
    icon: Code2,
    skills: ["React", "Next.js", "Node.js", "Express.js"],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "State Management",
    icon: Workflow,
    skills: ["Redux", "Zustand", "Context API"],
  },
  {
    title: "Forms & Validation",
    icon: ClipboardCheck,
    skills: ["React Hook Form", "Zod"],
  },
  {
    title: "UI & Design",
    icon: Palette,
    skills: ["Tailwind CSS", "Shadcn UI", "Framer Motion"],
  },
  {
    title: "Data & Orms",
    icon: Cable,
    skills: ["ReactQuery", "Prisma", "MongoDB"],
  },
  {
    title: "Version Control & Deployment",
    icon: Terminal,
    skills: ["Git", "GitHub", "Vercel", "Npm"],
  },
];

//Card component for each skill category
function SkillsCard({ title, icon: Icon, skills }: Skills) {
  return (
    <Card className="p-5 h-35  hover:shadow-md hover:scale-105 dark:hover:shadow-olive-50/20  transition-transform duration-300 ease-in-out my-3">
      <div>
        <div className="flex flex-row items-start mb-4">
          <Icon className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-300" />
          <h3 className="text-lg font-semibold text-left">{title}</h3>
        </div>
        <ul className="list-inside flex flex-wrap gap-1.5">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-gray-700 dark:text-gray-400 list-none whitespace-nowrap bg-accent rounded-md py-0.5 px-1 text-xs"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

const SkillSection = () => {
  return (
    <FadeIn>
      <section
        className={cn("max-w-4xl mx-auto text-center my-6", raleway.className)}
      >
        <h2 className="mb-4 text-2xl md:text-4xl pl-4 text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center">
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
