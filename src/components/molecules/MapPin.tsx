import { cn } from "@/lib/utils";

interface MapPinProps {
    label: string;
    address: string;
    variant?: "rustic" | "chic";
    className?: string;
}

export function MapPin({
    label,
    address,
    variant = "rustic",
    className,
}: MapPinProps) {
    if (variant === "chic") {
        return (
            <div className={cn("marble-bg gold-border p-5", className)}>
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gold-border marble-bg flex items-center justify-center shrink-0">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-4 h-4 text-chic-accent"
                        >
                            <path
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                                fill="currentColor"
                            />
                            <circle cx="12" cy="9" r="2.5" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-serif font-bold text-sm text-chic-dark">{label}</p>
                        <p className="font-sans text-xs text-chic-text/60 mt-1">{address}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cn("flex items-start gap-3 p-4 bg-surface border-l-2 border-accent", className)}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
            >
                <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    fill="currentColor"
                />
                <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
            <div>
                <p className="font-serif font-bold text-sm text-primary">{label}</p>
                <p className="font-sans text-xs text-text/60 mt-0.5">{address}</p>
            </div>
        </div>
    );
}
