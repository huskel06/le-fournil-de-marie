import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { OptimizedImage } from "@/components/atoms/Image";

interface ProductCardProps {
    name: string;
    description: string;
    price: string;
    image: string;
    category?: string;
    className?: string;
}

export function ProductCard({
    name,
    description,
    price,
    image,
    category,
    className,
}: ProductCardProps) {
    return (
        <article
            className={cn(
                "group relative flex flex-col bg-bg border border-primary/5 overflow-hidden",
                "transition-all duration-800 hover:shadow-lg",
                className
            )}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                    src={image}
                    alt={name}
                    fill
                    className="group-hover:scale-105 transition-transform duration-800"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {category && (
                    <span className="absolute top-3 left-3 bg-bg/90 text-text text-xs font-medium px-2.5 py-1">
                        {category}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2 p-5 flex-1">
                <Heading level="h4" variant="dark" className="font-serif">
                    {name}
                </Heading>
                <Text size="sm" variant="muted" className="flex-1">
                    {description}
                </Text>

                <div className="flex items-center justify-between pt-3 border-t border-primary/5">
                    <span className="text-lg font-serif font-bold text-primary">
                        {price}
                    </span>
                    <Button variant="primary" size="sm">
                        Commander
                    </Button>
                </div>
            </div>
        </article>
    );
}
