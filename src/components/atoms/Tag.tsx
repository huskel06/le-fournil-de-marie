import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const tagVariants = cva(
    "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium font-sans transition-all duration-400",
    {
        variants: {
            variant: {
                default: "bg-surface text-primary hover:bg-primary hover:text-bg",
                accent: "bg-accent/20 text-accent-dark hover:bg-accent hover:text-primary-dark",
                chic: "bg-chic-parchment text-chic-dark gold-border",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface TagProps extends VariantProps<typeof tagVariants> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function Tag({ children, variant, className, onClick }: TagProps) {
    return (
        <span
            className={cn(tagVariants({ variant, className }), onClick && "cursor-pointer")}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
        >
            {children}
        </span>
    );
}