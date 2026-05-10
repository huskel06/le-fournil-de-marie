"use client";

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { TimelineStep } from "@/components/molecules/TimelineStep";
import { motion } from "framer-motion";

const STEPS = [
    {
        step: 1,
        title: "Selection des farines bio",
        description:
            "Nous collaborons avec des minoteries vendeennes pour selectionner les meilleures farines bio moulues sur pierre. Chaque lot est choisi pour ses qualites organoleptiques - T65, T80, T110, seigle, sarrasin, petit epeautre. Le grain determine tout ce qui suit.",
    },
    {
        step: 2,
        title: "Creation du levain naturel",
        description:
            "Notre levain-chef vit depuis l'ouverture du fournil. Nourri quotidiennement avec farine et eau filtree, il est le coeur battant de la production. Chaque rafraichi developpe des aromes complexes et une acidite maitrisee. Pas de levure industrielle. Pas d'additif.",
    },
    {
        step: 3,
        title: "Petrissage a la main",
        description:
            "Le petrissage manuel respecte les temps de repos essentiels au developpement du reseau glutineux. Chaque pate est travaillee selon son rythme - certaines demandent 24 heures de fermentation avant faconnage.",
    },
    {
        step: 4,
        title: "Faconnage artisanal",
        description:
            "Sans diviseuse mecanique. Chaque pain est pese, boul e, allonge ou couronne a la main. Boules, baguettes, pains de campagne, couronnes - chaque forme est unique, marquee par le geste du boulanger.",
    },
    {
        step: 5,
        title: "Cuisson au four a bois",
        description:
            "Notre four a bois chauffe au feu de chene et de hetre. La sole de pierre accumule la chaleur et la restitue uniformement, creant une croute caramelisee et une mie parfaitement alveolee. La cuisson dure 45 a 60 minutes selon les pieces.",
    },
    {
        step: 6,
        title: "Ressuyage et conservation",
        description:
            "Apres cuisson, chaque pain repose sur des claies en osier pendant 2 heures minimum. Cette etape permet a la croute de developper son craquant et a la mie de stabiliser son humidite. Un pain bien ressu e se conserve plusieurs jours.",
    },
];

export function SavoirFaireTemplate() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bg">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="max-w-3xl">
                            <Text size="sm" variant="muted" className="uppercase tracking-widest mb-4 font-medium">
                                Du grain a la miche
                            </Text>
                            <Heading level="h1" variant="default" className="font-serif !text-5xl md:!text-7xl">
                                Six gestes
                                <br />
                                qui font le pain
                            </Heading>
                            <Text size="xl" variant="muted" className="max-w-2xl mt-6">
                                De la selection des farines a la sortie du four, chaque etape a un nom,
                                un temps, une raison. Aucun mystere - juste des choix precis,
                                herites de la tradition boulangere francaise et adaptes aux farines bio.
                            </Text>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Full Timeline */}
            <section className="py-20 bg-surface">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    {STEPS.map((step, index) => (
                        <TimelineStep
                            key={step.step}
                            {...step}
                            isLast={index === STEPS.length - 1}
                            variant="rustic"
                        />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-bg">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heading level="h3" variant="default" className="font-serif mb-4">
                            Vous avez des questions ?
                        </Heading>
                        <Text size="base" variant="muted" className="mb-8">
                            Le fournil est ouvert, l'equipe est la. Passez nous voir ou ecrivez-nous.
                        </Text>
                        <a
                            href="/contact"
                            className="inline-flex linen-button px-8 py-3 text-sm"
                        >
                            Nous contacter
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
