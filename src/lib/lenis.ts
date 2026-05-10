"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function useLenisScroll() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Désactiver Lenis si l'utilisateur préfère les animations réduites
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );
        if (prefersReducedMotion.matches) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return lenisRef;
}
