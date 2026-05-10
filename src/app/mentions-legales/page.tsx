import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalTemplate } from "@/components/templates/LegalTemplate";
import { JsonLd } from "@/components/atoms/JsonLd";

export const metadata: Metadata = {
    title: "Mentions Légales | Le Fournil de Marie",
    description:
        "Mentions légales du Fournil de Marie — SARL au capital de 5 000€, RCS Nantes 321 654 987 00041. Éditeur, hébergement, données personnelles, cookies.",
    alternates: {
        canonical: `${SITE.url}/mentions-legales`,
    },
    openGraph: {
        title: "Mentions Légales | Le Fournil de Marie",
        description:
            "Mentions légales du Fournil de Marie — SARL au capital de 5 000€, RCS Nantes 321 654 987 00041. Éditeur, hébergement, données personnelles, cookies.",
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
        {
            "@type": "ListItem",
            position: 2,
            name: "Mentions Légales",
            item: `${SITE.url}/mentions-legales`,
        },
    ],
};

export default function LegalPage() {
    return (
        <>
            <JsonLd data={breadcrumbJsonLd} id="jsonld-breadcrumb-mentions" />
            <LegalTemplate />
        </>
    );
}
