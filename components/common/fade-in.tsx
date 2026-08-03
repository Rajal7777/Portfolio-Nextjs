"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type FadeInProps = HTMLMotionProps<"div"> & {
    delay?: number;
    y?: number;
    once?: boolean;
};

export function FadeIn({
    children,
    className,
    delay = 0,
    y = 16,
    once = true,
    ...props
}: FadeInProps) {
    //amount: 0.2 means when 20% of the component is visible in the viewport, animation will be triggered.
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
