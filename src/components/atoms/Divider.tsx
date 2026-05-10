import { cn } from "@/lib/utils";

interface DividerProps {
    variant?: "line" | "wavy" | "dots" | "linen";
    className?: string;
}

export function Divider({ variant = "line", className }: DividerProps) {
    if (variant === "linen") {
        return (
            <div
                className={cn("relative h-1 w-full", className)}
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10" />
            </div>
        );
    }

    if (variant === "wavy") {
        return (
            <div className={cn("flex items-center gap-2", className)} aria-hidden="true">
                <span className="flex-1 h-px bg-primary/20" />
                <span className="text-accent text-lg">~</span>
                <span className="flex-1 h-px bg-primary/20" />
            </div>
        );
    }

    if (variant === "dots") {
        return (
            <div className={cn("flex items-center gap-2", className)} aria-hidden="true">
                <span className="flex-1 h-px bg-primary/20" />
                <span className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span className="w-1 h-1 rounded-full bg-accent" />
                </span>
                <span className="flex-1 h-px bg-primary/20" />
            </div>
        );
    }

    return (
        <div
            className={cn("h-px w-full bg-primary/10", className)}
            aria-hidden="true"
        />
    );
}