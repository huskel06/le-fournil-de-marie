"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    className?: string;
    containerClassName?: string;
    priority?: boolean;
    sizes?: string;
}

export function OptimizedImage({
    src,
    alt,
    width,
    height,
    fill,
    className,
    containerClassName,
    priority = false,
    sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            className={cn(
                "relative overflow-hidden bg-surface",
                !isLoaded && "animate-pulse",
                containerClassName
            )}
            style={!fill ? { width, height } : undefined}
        >
            <Image
                src={src}
                alt={alt}
                width={!fill ? width : undefined}
                height={!fill ? height : undefined}
                fill={fill}
                sizes={fill ? sizes : undefined}
                priority={priority}
                loading={priority ? undefined : "lazy"}
                className={cn(
                    "object-cover transition-all duration-800",
                    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
                    className
                )}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
}