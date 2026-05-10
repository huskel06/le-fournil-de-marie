import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { CommandeTemplate } from "@/components/templates/CommandeTemplate";
import { JsonLd } from "@/components/atoms/JsonLd";

export const metadata: Metadata = {
    title: "Commande Spéciale | Le Fournil de Marie",
    description:
        "Commandez des pièces uniques pour vos événements au Fournil de Marie à Nantes : mariage, anniversaire, fête d'entreprise. Pain de cérémonie, pièce montée, buffet viennoiseries. Devis sous 48 heures.",
    alternates: {
        canonical: `${SITE.url}/commande`,
    },
    openGraph: {
        title: "Commande Spéciale | Le Fournil de Marie",
        description:
            "Commandez des pièces uniques pour vos événements au Fournil de Marie à Nantes : mariage, anniversaire, fête d'entreprise. Pain de cérémonie, pièce montée, buffet viennoiseries. Devis sous 48 heures.",
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
            name: "Commande Spéciale",
            item: `${SITE.url}/commande`,
        },
    ],
};

export default function CommandePage() {
    return (
        <>
            <JsonLd data={breadcrumbJsonLd} id="jsonld-breadcrumb-commande" />
            <CommandeTemplate />
        </>
    );
}
