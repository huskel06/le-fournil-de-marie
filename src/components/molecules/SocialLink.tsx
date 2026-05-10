import Link from "next/link";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const socialLinkVariants = cva(
    "inline-flex items-center justify-center transition-all duration-400",
    {
        variants: {
            variant: {
                rustic:
                    "w-10 h-10 rounded-full bg-surface text-primary hover:bg-primary hover:text-bg",
                chic: "w-10 h-10 gold-border rounded-full marble-bg text-chic-dark hover:shadow-lg",
                simple:
                    "text-primary/50 hover:text-accent",
            },
            size: {
                sm: "w-8 h-8",
                md: "w-10 h-10",
                lg: "w-12 h-12",
            },
        },
        defaultVariants: {
            variant: "rustic",
            size: "md",
        },
    }
);

interface SocialLinkProps extends VariantProps<typeof socialLinkVariants> {
    href: string;
    label: string;
    icon: React.ReactNode;
    className?: string;
}

export function SocialLink({
    href,
    label,
    icon,
    variant,
    size,
    className,
}: SocialLinkProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(socialLinkVariants({ variant, size, className }))}
        >
            {icon}
        </Link>
    );
}
