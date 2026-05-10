"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function Cursor() {
    const [reducedMotion, setReducedMotion] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);

        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        if (reducedMotion) return;

        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e: MouseEvent) => {
            cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
        };

        const onMouseDown = () => cursor.classList.add("scale-75");
        const onMouseUp = () => cursor.classList.remove("scale-75");

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, [reducedMotion]);

    if (reducedMotion) return null;

    return (
        <div
            ref={cursorRef}
            className={cn(
                "fixed top-0 left-0 w-6 h-6 pointer-events-none z-[99999]",
                "transition-transform duration-100 ease-out",
                "hidden lg:block"
            )}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-accent"
            >
                <ellipse cx="12" cy="12" rx="4" ry="6" fill="currentColor" opacity="0.8" />
                <path
                    d="M8 10 Q12 6 16 10"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.4"
                />
            </svg>
        </div>
    );
}