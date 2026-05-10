"use client";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { TimelineStep } from "@/components/molecules/TimelineStep";
import { motion } from "framer-motion";

interface SavoirFaireSectionProps {
    className?: string;
}

const STEPS = [
    {
        step: 1,
        title: "Selection des farines",
        description:
            "T65, T80, seigle, sarrasin. Chaque grain vient d'une minoterie vendeenne bio. Nous choisissons les lots a l'odorat et au toucher.",
    },
    {
        step: 2,
        title: "Levain naturel",
        description:
            "Un levain-chef nourri quotidiennement depuis l'ouverture. Pas de levure industrielle. Pas d'additif. Juste de la farine, de l'eau, du temps.",
    },
    {
        step: 3,
        title: "Faconnage a la main",
        description:
            "Sans diviseuse mecanique. Chaque pain est pese, boul e, allonge ou couronne a la main. Les irregularites sont la signature du geste.",
    },
    {
        step: 4,
        title: "Cuisson au four a bois",
        description:
            "Chene et hetre. Sole de pierre. 45 a 60 minutes selon la piece. La croute caramelise, la mie developpe ses aromes.",
    },
];

export function SavoirFaireSection({ className }: SavoirFaireSectionProps) {
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
                        Du grain a la miche
                    </Text>
                    <Heading level="h2" variant="default" className="font-serif">
                        Six gestes
                        <br />
                        qui font le pain
                    </Heading>
                    <Text size="lg" variant="muted" className="max-w-2xl mx-auto mt-4">
                        De la selection des farines a la sortie du four, chaque etape a un nom,
                        un temps, une raison. Aucun mystere - juste des choix precis.
                    </Text>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-2xl mx-auto">
                    {STEPS.map((step, index) => (
                        <TimelineStep
                            key={step.step}
                            {...step}
                            isLast={index === STEPS.length - 1}
                            variant="rustic"
                        />
                    ))}
                </div>

                {/* Decorative */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-24 h-px bg-accent/50 mx-auto mt-16"
                />
            </div>
        </section>
    );
}
