"use client";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { NavTabs } from "@/components/organisms/NavTabs";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeroSectionProps {
    className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
    return (
        <section
            className={cn(
                "relative min-h-screen flex items-center overflow-hidden",
                "marble-bg",
                className
            )}
        >
            {/* Decorative frame */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-8 right-8 bottom-8 border border-chic-accent/10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-32 md:py-40">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <NavTabs className="mb-8" />
                        <Heading
                            level="h1"
                            variant="chic"
                            className="font-serif !text-5xl md:!text-7xl lg:!text-8xl leading-tight mb-6"
                        >
                            Le Fournil
                            <br />
                            <span className="text-chic-accent">de Marie</span>
                        </Heading>
                        <Text
                            size="xl"
                            variant="chic"
                            className="max-w-lg mb-8 font-sans leading-relaxed"
                        >
                            Boulangerie-patisserie bio a Nantes Centre.
                            Farines locales de Vendee, levain naturel, cuisson au four a bois.
                            La seule boulangerie du quartier certifiee Agriculture Biologique.
                        </Text>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/savoir-faire">
                                <Button variant="gold" size="lg">
                                    Decouvrir notre savoir-faire
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="secondary" size="lg">
                                    Nous ecrire
                                </Button>
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex gap-8 mt-12 pt-8 border-t border-chic-parchment">
                            {[
                                { value: "100 %", label: "Bio" },
                                { value: "Farines", label: "locales" },
                                { value: "Levain", label: "naturel" },
                            ].map((item) => (
                                <div key={item.value}>
                                    <span className="font-serif text-2xl font-bold text-chic-dark block">
                                        {item.value}
                                    </span>
                                    <span className="font-sans text-xs text-chic-text/50 uppercase tracking-wider">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Image frame */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="gold-border p-3 marble-bg">
                            <div className="aspect-[4/5] bg-surface overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-chic-parchment">
                                    <div className="text-center p-8">
                                        <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto mb-4 text-chic-accent/30" fill="currentColor">
                                            <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path d="M25 40 Q40 20 55 40 Q40 60 25 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                        </svg>
                                        <p className="font-serif text-sm text-chic-text/30 italic">
                                            -- Photographie artisanale --
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gold corner ornaments */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-chic-accent" />
                        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-chic-accent" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-chic-accent" />
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-chic-accent" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="font-serif text-[10px] text-chic-text/30 uppercase tracking-widest">
                    Derouler
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-8 bg-chic-accent/30"
                />
            </motion.div>
        </section>
    );
}
