import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationItemProps {
    label: string;
    href: string;
    isActive?: boolean;
    className?: string;
    variant?: "rustic" | "chic";
}

export function NavigationItem({
    label,
    href,
    isActive = false,
    className,
    variant = "chic",
}: NavigationItemProps) {
    if (variant === "chic") {
        return (
            <Link
                href={href}
                className={cn(
                    "relative font-serif text-sm tracking-widest uppercase transition-colors duration-400",
                    "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-chic-accent after:transition-all after:duration-400",
                    isActive
                        ? "text-chic-accent after:w-full"
                        : "text-chic-text hover:text-chic-accent after:w-0 hover:after:w-full",
                    className
                )}
            >
                {label}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className={cn(
                "relative font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-400",
                "before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent",
                isActive
                    ? "text-primary before:opacity-100"
                    : "text-primary/60 hover:text-primary before:opacity-0 hover:before:opacity-100",
                className
            )}
        >
            {label}
        </Link>
    );
}
