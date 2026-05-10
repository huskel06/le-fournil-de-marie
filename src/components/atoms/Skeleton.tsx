import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
    variant?: "text" | "circular" | "rectangular";
    width?: string | number;
    height?: string | number;
}

export function Skeleton({
    className,
    variant = "text",
    width,
    height,
}: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse bg-surface rounded-md",
                variant === "circular" && "rounded-full",
                variant === "text" && "h-4 w-full",
                className
            )}
            style={{ width, height }}
            aria-hidden="true"
        />
    );
}