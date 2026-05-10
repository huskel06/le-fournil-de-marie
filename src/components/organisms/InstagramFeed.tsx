"use client";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { motion } from "framer-motion";

interface InstagramFeedProps {
    className?: string;
}

const INSTAGRAM_POSTS = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    alt: `Création du Fournil de Marie — photo ${i + 1}`,
}));

export function InstagramFeed({ className }: InstagramFeedProps) {
    return (
        <section className={cn("py-24 md:py-32 bg-bg", className)}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <Text size="sm" variant="muted" className="uppercase tracking-widest mb-4 font-medium">
                        Suivez-nous
                    </Text>
                    <Heading level="h2" variant="default" className="font-serif">
                        &commat;lefournildemarie
                    </Heading>
                    <Text size="base" variant="muted" className="mt-4">
                        Retrouvez nos créations du jour, les coulisses du fournil et les
                        instants de vie de l'atelier sur Instagram.
                    </Text>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {INSTAGRAM_POSTS.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href="https://instagram.com/lefournildemarie"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group relative aspect-square overflow-hidden bg-surface"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-8 h-8 text-primary/10"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-400 flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-6 h-6 text-bg opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                                >
                                    <path
                                        d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
