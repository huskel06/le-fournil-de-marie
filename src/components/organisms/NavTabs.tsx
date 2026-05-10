"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavTabsProps {
    className?: string;
}

const TABS = ["Fournil", "Boulangerie", "Pâtisserie"];

export function NavTabs({ className }: NavTabsProps) {
    return (
        <nav
            className={cn(
                "flex items-center gap-6 md:gap-8",
                className
            )}
        >
            {TABS.map((tab, index) => (
                <button
                    key={tab}
                    className={cn(
                        "relative text-xs md:text-sm font-serif tracking-widest uppercase transition-colors duration-400",
                        index === 0
                            ? "text-chic-accent"
                            : "text-chic-text/40 hover:text-chic-text/70"
                    )}
                >
                    {tab}
                    {index === 0 && (
                        <motion.div
                            layoutId="nav-tab-indicator"
                            className="absolute -bottom-1 left-0 right-0 h-px bg-chic-accent"
                        />
                    )}
                </button>
            ))}
        </nav>
    );
}
