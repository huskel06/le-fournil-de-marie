import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const headingVariants = cva("font-serif font-bold tracking-tight", {
    variants: {
        level: {
            h1: "text-5xl md:text-7xl lg:text-8xl leading-tight",
            h2: "text-4xl md:text-5xl lg:text-6xl leading-tight",
            h3: "text-2xl md:text-3xl lg:text-4xl leading-snug",
            h4: "text-xl md:text-2xl leading-snug",
            h5: "text-lg md:text-xl",
            h6: "text-base md:text-lg",
        },
        variant: {
            default: "text-primary",
            light: "text-bg",
            dark: "text-text",
            chic: "text-chic-dark",
            gold: "text-chic-accent",
        },
    },
    defaultVariants: {
        level: "h2",
        variant: "default",
    },
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode;
    className?: string;
}

export function Heading({
    as: Tag = "h2",
    level,
    variant,
    children,
    className,
}: HeadingProps) {
    return (
        <Tag className={cn(headingVariants({ level: level ?? Tag, variant, className }))}>
            {children}
        </Tag>
    );
}