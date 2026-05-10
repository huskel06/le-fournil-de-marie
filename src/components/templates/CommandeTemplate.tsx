"use client";

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { motion } from "framer-motion";
import { useState } from "react";
import { COMMANDE_EVENT_TYPES } from "@/lib/constants";

export function CommandeTemplate() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setError("");

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
            eventType: (form.elements.namedItem("eventType") as HTMLSelectElement).value,
            date: (form.elements.namedItem("date") as HTMLInputElement).value,
            guests: (form.elements.namedItem("guests") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch("/api/commande", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, type: "commande-speciale" }),
            });

            if (!res.ok) throw new Error("Erreur lors de l'envoi");
            setStatus("success");
            form.reset();
        } catch {
            setError("L'envoi a echoue. Vous pouvez nous ecrire directement a bonjour@lefournildemarie-nantes.fr ou nous appeler au 02 40 12 34 56.");
            setStatus("error");
        }
    }

    const inputClass =
        "w-full px-4 py-3 bg-surface border border-primary/10 text-text placeholder:text-text/30 focus:outline-none focus:border-primary/40 transition-colors duration-400 font-sans text-sm";

    return (
        <>
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-bg">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <Text size="sm" variant="muted" className="uppercase tracking-widest mb-4 font-medium">
                            Evenements & sur-mesure
                        </Text>
                        <Heading level="h1" variant="default" className="font-serif !text-5xl md:!text-7xl mb-6">
                            Une commande
                            <br />pour votre evenement
                        </Heading>
                        <Text size="lg" variant="muted" className="max-w-2xl">
                            Mariage, anniversaire, seminaire, fete de quartier -
                            nous creons des pieces uniques pour vos moments de partage.
                            Pain de ceremonie, piece montee, buffet viennoiseries.
                        </Text>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-surface">
                <div className="max-w-2xl mx-auto px-4 md:px-8">
                    {status === "success" && (
                        <div className="p-6 mb-6 bg-accent/20 text-primary-dark text-sm font-medium">
                            Votre demande a bien ete envoyee.
                            Nous vous repondons sous 24 a 48 heures pour discuter de votre projet.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="p-6 mb-6 bg-red-50 text-red-700 text-sm">{error}</div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-text/70 mb-1.5 font-sans">
                                    Nom complet *
                                </label>
                                <input id="name" name="name" type="text" required className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-text/70 mb-1.5 font-sans">
                                    Email *
                                </label>
                                <input id="email" name="email" type="email" required className={inputClass} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-xs font-medium text-text/70 mb-1.5 font-sans">
                                Telephone *
                            </label>
                            <input id="phone" name="phone" type="tel" required className={inputClass} />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="eventType" className="block text-xs font-medium text-text/70 mb-1.5 font-sans">
                                    Type d'evenement *
                                </label>
                                <select id="eventType" name="eventType" required className={inputClass}>
                                    <option value="">Selectionnez</option>
                                    {COMMANDE_EVENT_TYPES.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-xs font-medium text-text/70 mb-1.5 font-sans">
                                    Date souhaitee *
                                </label>
                                <input id="date" name="date" type="date" required className={inputClass} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="guests" className="block text-xs font-medium text-text/70 mb-1.5 font-sans">
                                Nombre de personnes
                            </label>
                            <input id="guests" name="guests" type="number" min="1" className={inputClass} />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-medium text-text/70 mb-1.5 font-sans">
                                Decrivez votre projet *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Type de piece souhaitee, theme, couleurs, contraintes alimentaires..."
                                className={inputClass}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="linen-button self-start px-8 py-3 text-sm"
                        >
                            {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
