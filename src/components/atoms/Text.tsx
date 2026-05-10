import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const textVariants = cva("font-sans", {
    variants: {
        size: {
            xs: "text-xs leading-relaxed",
            sm: "text-sm leading-relaxed",
            base: "text-base leading-relaxed",
            lg: "text-lg leading-relaxed",
            xl: "text-xl leading-relaxed",
        },
        weight: {
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            bold: "font-bold",
        },
        variant: {
            default: "text-text",
            muted: "text-primary-light",
            light: "text-bg/80",
            chic: "text-chic-text",
            gold: "text-chic-accent",
        },
    },
    defaultVariants: {
        size: "base",
        weight: "light",
        variant: "default",
    },
});

interface TextProps extends VariantProps<typeof textVariants> {
    as?: "p" | "span" | "div" | "label" | "blockquote";
    children: React.ReactNode;
    className?: string;
}

export function Text({
    as: Tag = "p",
    size,
    weight,
    variant,
    children,
    className,
}: TextProps) {
    return (
        <Tag className={cn(textVariants({ size, weight, variant, className }))}>
            {children}
        </Tag>
    );
}