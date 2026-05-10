"use client";

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ContactForm } from "@/components/molecules/ContactForm";
import { MapPin } from "@/components/molecules/MapPin";
import { MapSection } from "@/components/organisms/MapSection";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function ContactTemplate() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bg">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <Text size="sm" variant="muted" className="uppercase tracking-widest mb-4 font-medium">
                            Contact
                        </Text>
                        <Heading level="h1" variant="default" className="font-serif !text-5xl md:!text-7xl mb-6">
                            Echangeons
                        </Heading>
                        <Text size="lg" variant="muted" className="max-w-2xl">
                            Une question sur nos pains ? Une envie de commander pour un evenement ?
                            Ou juste l'envie de dire bonjour ? Le formulaire est la, le fournil aussi.
                        </Text>
                    </motion.div>
                </div>
            </section>

            {/* Form + Info */}
            <section className="py-12 bg-surface">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <ContactForm variant="rustic" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="bg-bg p-6 border border-primary/5">
                                <Heading level="h4" variant="default" className="font-serif mb-4">
                                    Nos coordonnees
                                </Heading>
                                <div className="space-y-4">
                                    <MapPin
                                        label="Adresse"
                                        address={`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`}
                                        variant="rustic"
                                    />
                                    <div className="flex items-center gap-3 p-4 bg-surface border-l-2 border-accent">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent shrink-0">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                        <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="font-sans text-sm text-text hover:text-primary">
                                            {SITE.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-surface border-l-2 border-accent">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent shrink-0">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                        <a href={`mailto:${SITE.email}`} className="font-sans text-sm text-text hover:text-primary">
                                            {SITE.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Horaires */}
                            <div className="bg-surface p-6 border-l-2 border-accent">
                                <Heading level="h4" variant="default" className="font-serif mb-4">
                                    Horaires d'ouverture
                                </Heading>
                                <div className="space-y-2">
                                    {Object.entries(SITE.hoursDisplay).map(([day, hours]) => (
                                        <div key={day} className="flex justify-between text-sm">
                                            <span className="font-sans text-text/70 capitalize">
                                                {day === "monday" ? "Lundi" : day === "tuesday" ? "Mardi" : day === "wednesday" ? "Mercredi" : day === "thursday" ? "Jeudi" : day === "friday" ? "Vendredi" : day === "saturday" ? "Samedi" : "Dimanche"}
                                            </span>
                                            <span className="font-sans text-text font-medium">{hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <MapSection />
        </>
    );
}
