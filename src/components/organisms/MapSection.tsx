"use client";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { motion } from "framer-motion";

interface MapSectionProps {
    className?: string;
}

export function MapSection({ className }: MapSectionProps) {
    return (
        <section className={cn("py-16 md:py-24 bg-bg", className)}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10"
                >
                    <Heading level="h3" variant="default" className="font-serif">
                        Nous trouver
                    </Heading>
                    <Text size="base" variant="muted" className="mt-2">
                        12 Rue de la Grange, 44000 Nantes
                    </Text>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative overflow-hidden marble-bg gold-border"
                >
                    <div className="aspect-[21/9] min-h-[300px] relative">
                        <iframe
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.5534%2C47.2184%2C-1.5534%2C47.2184&layer=mapnik&marker=47.2184%2C-1.5534"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: "absolute", inset: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Carte - Le Fournil de Marie"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
