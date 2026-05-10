import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center font-medium transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary:
                    "linen-button",
                secondary:
                    "bg-transparent border border-primary text-primary hover:bg-primary hover:text-bg",
                ghost:
                    "bg-transparent text-primary hover:bg-surface",
                gold:
                    "marble-bg text-chic-dark gold-border hover:shadow-lg",
            },
            size: {
                sm: "h-9 px-4 text-xs",
                md: "h-11 px-6 text-sm",
                lg: "h-13 px-8 text-base",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };