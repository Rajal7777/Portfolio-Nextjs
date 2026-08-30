"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProjectCardProps } from "@/types";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "./common/fade-in";
import { useState } from "react";

const ProjectCard = ({
  title,
  description,
  features,
  techStack,
  images,
  imageAlt,
  liveProjectUrl,
  liveCodeUrl,
  className,
}: ProjectCardProps) => {
  const [current, setCurrent] = useState(0);

  return (
    <FadeIn delay={0.25}>
      <Card
        className={cn(
          "overflow-hidden border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/80 p-1 mt-2",
          className,
        )}
      >
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="w-full p-3 md:w-1/2 md:p-4">
            {/* Main Image Container */}
            <div className="relative aspect-3/2 w-full overflow-hidden rounded-lg border bg-slate-50 dark:bg-slate-800">
              <Image
                src={images[current]}
                alt={imageAlt}
                fill
                priority
                quality={100}
                className="object-contain transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrent(index)}
                    className={cn(
                      "relative h-16 w-20 shrink-0 overflow-hidden rounded-md border transition-all duration-200",
                      current === index
                        ? "border-sky-500 ring-2 ring-sky-200 dark:ring-sky-900"
                        : "border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-500",
                    )}
                    aria-label={`Show project image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${imageAlt} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex w-full flex-col gap-5 p-6 md:w-1/2 md:p-7">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                {title}
              </h3>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </div>

            {features && features.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

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
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "px-4",
                )}
              >
                Live Project
              </Link>
              <Link
                href={liveCodeUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-4",
                )}
              >
                Live Code
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </FadeIn>
  );
};

export default ProjectCard;
