import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
    title: string;
    description: string;
    techStack: string[];
    imageSrc: string;
    imageAlt: string;
    liveProjectUrl: string;
    liveCodeUrl: string;
};

//group-hover/card:scale-105
const ProjectCard = ({
    title,
    description,
    techStack,
    imageSrc,
    imageAlt,
    liveProjectUrl,
    liveCodeUrl,
}: ProjectCardProps) => {
    return (
        <Card className="overflow-hidden border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/80">
            <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden md:h-auto md:w-[40%] ">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105 p-2"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority={false}
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                            {title}
                        </h3>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {description}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                            Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 pt-2">
                        <Link
                            href={liveProjectUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(buttonVariants({ variant: "default", size: "lg" }), "px-4")}
                        >
                            Live Project
                        </Link>
                        <Link
                            href={liveCodeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
                        >
                            Live Code
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
