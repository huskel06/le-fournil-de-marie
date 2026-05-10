"use client";

import { useLenisScroll } from "@/lib/lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
    useLenisScroll();
    return <>{children}</>;
}
