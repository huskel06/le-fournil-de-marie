"use client";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ContactForm } from "@/components/molecules/ContactForm";
import { MapPin } from "@/components/molecules/MapPin";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";

interface ContactSectionProps {
    className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
    return (
        <section className={cn("py-24 md:py-32 bg-surface", className)}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Text size="sm" variant="muted" className="uppercase tracking-widest mb-4 font-medium">
                            Venir au Fournil
                        </Text>
                        <Heading level="h2" variant="default" className="font-serif mb-6">
                            Retrouvez-nous
                            <br />
                            à Nantes
                        </Heading>
                        <Text size="lg" variant="muted" className="mb-8 max-w-md">
                            Notre fournil est ouvert du mardi au dimanche. Venez découvrir nos
                            créations et échanger avec notre équipe.
                        </Text>

                        <div className="space-y-4 mb-8">
                            <MapPin
                                label="Le Fournil de Marie"
                                address={`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`}
                                variant="rustic"
                            />
                            <div className="flex items-center gap-3 p-4 bg-surface border-l-2 border-accent">
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent shrink-0">
                                    <path
                                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                                <a
                                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                                    className="font-sans text-sm text-text hover:text-primary transition-colors"
                                >
                                    {SITE.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-surface border-l-2 border-accent">
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent shrink-0">
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <a
                                    href={`mailto:${SITE.email}`}
                                    className="font-sans text-sm text-text hover:text-primary transition-colors"
                                >
                                    {SITE.email}
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <ContactForm variant="rustic" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
