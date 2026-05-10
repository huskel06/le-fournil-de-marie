import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-sans",
    {
        variants: {
            variant: {
                default: "bg-primary text-bg",
                accent: "bg-accent text-primary-dark",
                outline: "border border-primary text-primary bg-transparent",
                chic: "bg-chic-dark text-chic-bg gold-border",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
    children: React.ReactNode;
    className?: string;
}

export function Badge({ children, variant, className }: BadgeProps) {
    return (
        <span className={cn(badgeVariants({ variant, className }))}>
            {children}
        </span>
    );
}