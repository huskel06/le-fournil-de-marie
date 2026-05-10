import Script from "next/script";

interface JsonLdProps {
    data: Record<string, unknown>;
    id?: string;
}

/**
 * Composant atomique JSON-LD — injecte du structured data via next/script.
 * Utilisation : <JsonLd data={{ "@context": "https://schema.org", "@type": "Bakery", ... }} />
 */
export function JsonLd({ data, id }: JsonLdProps) {
    return (
        <Script
            id={id ?? "jsonld"}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            strategy="afterInteractive"
        />
    );
}