"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { NavigationItem } from "@/components/molecules/NavigationItem";
import { Heading } from "@/components/atoms/Heading";
import { motion } from "framer-motion";

interface HeaderProps {
    className?: string;
}

export function Header({ className }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50",
                "bg-bg/95 backdrop-blur-md border-b border-primary/5",
                className
            )}
        >
            <nav className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-bg text-xs font-serif font-bold">F</span>
                        </div>
                        <div className="hidden sm:block">
                            <Heading
                                level="h6"
                                variant="default"
                                className="font-serif !text-sm leading-none group-hover:text-accent transition-colors"
                            >
                                {SITE.name}
                            </Heading>
                            <span className="text-[10px] text-primary/50 font-sans tracking-wider uppercase">
                                {SITE.tagline}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation — Haussmannien Chic */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <NavigationItem
                                key={item.href}
                                label={item.label}
                                href={item.href}
                                isActive={pathname === item.href}
                                variant="chic"
                            />
                        ))}
                        <Link
                            href="/commande"
                            className="gold-border px-5 py-2 text-sm font-serif tracking-wider text-chic-dark hover:shadow-lg transition-all duration-400"
                        >
                            Commande
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-px bg-primary block"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-px bg-primary block"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-px bg-primary block"
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    className="lg:hidden overflow-hidden"
                >
                    <div className="py-6 flex flex-col gap-4 border-t border-primary/5">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`font-serif text-lg tracking-wider transition-colors ${pathname === item.href
                                        ? "text-accent"
                                        : "text-primary/70 hover:text-primary"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/commande"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex self-start px-5 py-2 border border-primary text-primary text-sm font-serif tracking-wider hover:bg-primary hover:text-bg transition-colors"
                        >
                            Commande Spéciale
                        </Link>
                    </div>
                </motion.div>
            </nav>
        </header>
    );
}
