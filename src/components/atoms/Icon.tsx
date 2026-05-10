import { cn } from "@/lib/utils";

interface IconProps {
    name: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    "aria-label"?: string;
}

const sizeMap = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
};

export function Icon({ name, size = "md", className, "aria-label": ariaLabel }: IconProps) {
    return (
        <svg
            className={cn(sizeMap[size], "shrink-0", className)}
            aria-label={ariaLabel ?? `${name} icon`}
            role="img"
        >
            <use href={`/icons/sprite.svg#${name}`} />
        </svg>
    );
}