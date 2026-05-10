"use client";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";

interface ContactFormProps {
    variant?: "rustic" | "chic";
    className?: string;
}

export function ContactForm({ variant = "rustic", className }: ContactFormProps) {
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
            subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Erreur lors de l'envoi");
            setStatus("success");
            form.reset();
        } catch {
            setError("L'envoi a echoue. Vous pouvez nous ecrire directement a bonjour@lefournildemarie-nantes.fr.");
            setStatus("error");
        }
    }

    const inputClass =
        variant === "chic"
            ? "w-full px-4 py-3 bg-chic-nacre border border-chic-parchment text-chic-text placeholder:text-chic-text/30 focus:outline-none focus:border-chic-accent transition-colors duration-400 font-sans text-sm"
            : "w-full px-4 py-3 bg-surface border border-primary/10 text-text placeholder:text-text/30 focus:outline-none focus:border-primary/40 transition-colors duration-400 font-sans text-sm";

    return (
        <form
            onSubmit={handleSubmit}
            className={cn(
                "flex flex-col gap-5",
                variant === "chic" && "marble-bg p-8 gold-border",
                variant === "rustic" && "bg-surface p-6",
                className
            )}
        >
            {status === "success" && (
                <div className="p-4 bg-accent/20 text-primary-dark text-sm font-medium">
                    Message envoye ! Nous vous repondons sous 24 a 48 heures.
                </div>
            )}

            {status === "error" && (
                <div className="p-4 bg-red-50 text-red-700 text-sm">{error}</div>
            )}

            <div>
                <label htmlFor="name" className="sr-only">Votre nom</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="email" className="sr-only">Votre email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="subject" className="sr-only">Sujet de votre message</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="De quoi s'agit-il ?"
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="message" className="sr-only">Votre message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Dites-nous tout..."
                    className={inputClass}
                />
            </div>

            <Button
                type="submit"
                variant={variant === "chic" ? "gold" : "primary"}
                size="md"
                disabled={status === "sending"}
            >
                {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
        </form>
    );
}
