"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineStepProps {
    step: number;
    title: string;
    description: string;
    isLast?: boolean;
    variant?: "rustic" | "chic";
    className?: string;
}

export function TimelineStep({
    step,
    title,
    description,
    isLast = false,
    variant = "rustic",
    className,
}: TimelineStepProps) {
    if (variant === "chic") {
        return (
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn("relative flex gap-6", className)}
            >
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full gold-border marble-bg flex items-center justify-center font-serif font-bold text-sm text-chic-dark z-10">
                        {String(step).padStart(2, "0")}
                    </div>
                    {!isLast && (
                        <div className="w-px flex-1 bg-gradient-to-b from-chic-accent/30 to-transparent" />
                    )}
                </div>
                <div className="pb-8 pt-1">
                    <h3 className="font-serif text-xl font-bold text-chic-dark mb-2">
                        {title}
                    </h3>
                    <p className="font-sans text-sm text-chic-text/70 leading-relaxed">
                        {description}
                    </p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("relative flex gap-5", className)}
        >
            <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-bg flex items-center justify-center font-sans text-xs font-bold z-10">
                    {step}
                </div>
                {!isLast && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
            </div>
            <div className="pb-8 pt-0.5">
                <h3 className="font-serif text-lg font-bold text-primary mb-1.5">
                    {title}
                </h3>
                <p className="font-sans text-sm text-text/70 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
