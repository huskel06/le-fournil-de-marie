"use client";

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Frame } from "@/components/molecules/Frame";
import { motion } from "framer-motion";
import { ABOUT_VALUES, ABOUT_TEAM, ABOUT_STATS } from "@/lib/constants";

export function AboutTemplate() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bg">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Text size="sm" variant="muted" className="uppercase tracking-widest mb-4 font-medium">
                                Le Fournil de Marie
                            </Text>
                            <Heading level="h1" variant="default" className="font-serif !text-5xl md:!text-7xl mb-6">
                                Une boulangerie bio
                                <br />en plein Nantes
                            </Heading>
                            <Text size="lg" variant="muted" className="max-w-lg">
                                Marie Lecomte ouvre ce fournil en 2021 avec une conviction :
                                le bon pain, celui qui nourrit vraiment, commence par des farines
                                locales et une fermentation maîtrisee. Pas de discours - des actes.
                            </Text>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Frame
                                src="/assets/photos/fournil.webp"
                                alt="Notre fournil au coeur de Nantes"
                                variant="chic"
                                caption="Notre fournil au coeur de Nantes"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <Heading level="h2" variant="default" className="font-serif mb-4">
                            Nos valeurs
                        </Heading>
                        <Text size="base" variant="muted" className="max-w-2xl mx-auto">
                            Trois piliers qui guident chacune de nos decisions, du choix des farines
                            a l'accueil de nos clients.
                        </Text>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {ABOUT_VALUES.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center p-8 bg-bg border border-primary/5"
                            >
                                <span className="text-4xl block mb-4">{value.icon}</span>
                                <Heading level="h4" variant="default" className="font-serif mb-3">
                                    {value.title}
                                </Heading>
                                <Text size="sm" variant="muted">
                                    {value.description}
                                </Text>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-bg">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <Heading level="h2" variant="default" className="font-serif mb-4">
                            Celles et ceux qui le font
                        </Heading>
                        <Text size="base" variant="muted" className="max-w-2xl mx-auto">
                            Trois personnes dans le fournil, une dizaine de metiers a elles trois.
                        </Text>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {ABOUT_TEAM.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <Frame
                                    src={member.image}
                                    alt={member.name}
                                    variant="polaroid"
                                    caption={member.name}
                                />
                                <Text size="sm" variant="muted" className="mt-2">
                                    {member.role}
                                </Text>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {ABOUT_STATS.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-4xl md:text-5xl font-serif font-bold text-primary block">
                                    {stat.value}
                                </span>
                                <span className="font-sans text-xs text-text/50 uppercase tracking-wider mt-2 block">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
