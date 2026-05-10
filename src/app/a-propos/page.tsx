import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { AboutTemplate } from "@/components/templates/AboutTemplate";
import { JsonLd } from "@/components/atoms/JsonLd";

export const metadata: Metadata = {
    title: "À Propos | Le Fournil de Marie",
    description:
        "Marie Lecomte ouvre Le Fournil de Marie en 2021 à Nantes Centre. Boulangerie-pâtisserie 100% bio, farines locales de Vendée, levain naturel. Rencontrez l'équipe et nos valeurs.",
    alternates: {
        canonical: `${SITE.url}/a-propos`,
    },
    openGraph: {
        title: "À Propos | Le Fournil de Marie",
        description:
            "Marie Lecomte ouvre Le Fournil de Marie en 2021 à Nantes Centre. Boulangerie-pâtisserie 100% bio, farines locales de Vendée, levain naturel.",
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
            name: "À Propos",
            item: `${SITE.url}/a-propos`,
        },
    ],
};

export default function AboutPage() {
    return (
        <>
            <JsonLd data={breadcrumbJsonLd} id="jsonld-breadcrumb-apropos" />
            <AboutTemplate />
        </>
    );
}
