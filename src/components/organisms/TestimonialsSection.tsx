"use client";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { motion } from "framer-motion";

interface TestimonialsSectionProps {
    className?: string;
}

const TESTIMONIALS = [
    {
        quote:
            "La croute est parfaitement craquante et la mie a ce gout de levain qu'on ne trouve pas ailleurs.",
        author: "Sophie L.",
        role: "Cliente depuis 2021",
    },
    {
        quote:
            "Le feuillete du croissant est une oeuvre d'art. On sent le travail du beurre AOP.",
        author: "Pierre M.",
        role: "Nantes",
    },
    {
        quote:
            "L'equipe est accueillante, le fournil sent bon le bois et la farine. On s'y sent bien.",
        author: "Claire D.",
        role: "Voisine du fournil",
    },
];

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
    return (
        <section className={cn("py-24 md:py-32 bg-bg", className)}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <Text size="sm" variant="muted" className="uppercase tracking-widest mb-4 font-medium">
                        Ils reviennent
                    </Text>
                    <Heading level="h2" variant="default" className="font-serif">
                        Ce qu'on en dit
                    </Heading>
                    <Text size="lg" variant="muted" className="max-w-2xl mx-auto mt-4">
                        Les mots de ceux qui poussent la porte. Sans filtre, sans script.
                    </Text>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <TestimonialCard {...testimonial} variant="rustic" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
