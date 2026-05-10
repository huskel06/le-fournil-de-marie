import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/atoms/Image";

interface FrameProps {
    src: string;
    alt: string;
    variant?: "rustic" | "chic" | "polaroid";
    caption?: string;
    className?: string;
}

export function Frame({
    src,
    alt,
    variant = "rustic",
    caption,
    className,
}: FrameProps) {
    if (variant === "chic") {
        return (
            <figure className={cn("gold-border p-2 marble-bg", className)}>
                <div className="relative aspect-[4/5] overflow-hidden">
                    <OptimizedImage
                        src={src}
                        alt={alt}
                        fill
                        className="transition-transform duration-800 hover:scale-105"
                    />
                </div>
                {caption && (
                    <figcaption className="mt-3 px-2 pb-2 font-serif text-xs text-chic-text/60 italic text-center">
                        {caption}
                    </figcaption>
                )}
            </figure>
        );
    }

    if (variant === "polaroid") {
        return (
            <figure className={cn("bg-bg p-3 shadow-lg rotate-1", className)}>
                <div className="relative aspect-square overflow-hidden">
                    <OptimizedImage
                        src={src}
                        alt={alt}
                        fill
                        className="transition-transform duration-800 hover:scale-105"
                    />
                </div>
                {caption && (
                    <figcaption className="mt-2 text-center font-sans text-xs text-text/60">
                        {caption}
                    </figcaption>
                )}
            </figure>
        );
    }

    return (
        <figure className={cn("relative overflow-hidden border border-primary/5", className)}>
            <div className="relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                    src={src}
                    alt={alt}
                    fill
                    className="transition-transform duration-800 hover:scale-105"
                />
            </div>
            {caption && (
                <figcaption className="p-3 bg-surface font-sans text-xs text-text/60">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
