"use client";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ProductCard } from "@/components/molecules/ProductCard";
import { motion } from "framer-motion";

interface ProductsSectionProps {
    className?: string;
}

const PRODUCTS = [
    {
        name: "Pain au Levain",
        description: "Farine bio T80, levain naturel, cuisson four a bois. Croute doree, mie alveolee.",
        price: "4,50 EUR",
        image: "/assets/photos/pain-levain.jpg",
        category: "Pains",
    },
    {
        name: "Croissant Pur Beurre",
        description: "Beurre AOP Charentes-Poitou, farine bio, fermentation 48 h.",
        price: "2,80 EUR",
        image: "/assets/photos/croissant.jpg",
        category: "Viennoiseries",
    },
    {
        name: "Tarte aux Pommes",
        description: "Pommes locales, pate feuilletee maison, caramel au beurre sale.",
        price: "5,50 EUR",
        image: "/assets/photos/tarte-pommes.jpg",
        category: "Patisseries",
    },
    {
        name: "Baguette Tradition",
        description: "Farine bio T65, levain et levure, faconnee a la main.",
        price: "2,20 EUR",
        image: "/assets/photos/baguette.jpg",
        category: "Pains",
    },
];

export function ProductsSection({ className }: ProductsSectionProps) {
    return (
        <section className={cn("py-24 md:py-32 bg-surface", className)}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <Text size="sm" variant="muted" className="uppercase tracking-widest mb-4 font-medium">
                        Ce qui sort du four
                    </Text>
                    <Heading level="h2" variant="default" className="font-serif">
                        Pains, viennoiseries, patisseries
                    </Heading>
                    <Text size="lg" variant="muted" className="max-w-2xl mx-auto mt-4">
                        Une carte courte, des produits qui tournent chaque jour.
                        Tout est fabrique sur place, avec des ingredients bio et de saison.
                    </Text>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRODUCTS.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
