import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms/Text";

interface TestimonialCardProps {
    quote: string;
    author: string;
    role?: string;
    variant?: "rustic" | "chic";
    className?: string;
}

export function TestimonialCard({
    quote,
    author,
    role,
    variant = "rustic",
    className,
}: TestimonialCardProps) {
    if (variant === "chic") {
        return (
            <figure
                className={cn(
                    "relative p-8 marble-bg gold-border",
                    className
                )}
            >
                <svg
                    className="absolute top-4 left-4 w-8 h-8 text-chic-accent/20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <blockquote className="mt-4">
                    <Text size="lg" variant="chic" className="italic font-serif leading-relaxed">
                        &ldquo;{quote}&rdquo;
                    </Text>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                    <div className="w-px h-8 bg-chic-accent/30" />
                    <div>
                        <Text size="sm" weight="medium" variant="chic">
                            {author}
                        </Text>
                        {role && (
                            <Text size="xs" variant="muted">
                                {role}
                            </Text>
                        )}
                    </div>
                </figcaption>
            </figure>
        );
    }

    return (
        <figure
            className={cn(
                "relative p-6 bg-surface border-l-2 border-accent",
                className
            )}
        >
            <blockquote>
                <Text size="base" variant="default" className="italic leading-relaxed">
                    &ldquo;{quote}&rdquo;
                </Text>
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-2">
                <span className="w-6 h-px bg-primary/30" />
                <div>
                    <Text size="sm" weight="medium">
                        {author}
                    </Text>
                    {role && (
                        <Text size="xs" variant="muted">
                            {role}
                        </Text>
                    )}
                </div>
            </figcaption>
        </figure>
    );
}
