import type { Metadata } from "next";
import { SITE, FAQ_ITEMS } from "@/lib/constants";
import { SavoirFaireTemplate } from "@/components/templates/SavoirFaireTemplate";
import { JsonLd } from "@/components/atoms/JsonLd";

export const metadata: Metadata = {
    title: "Savoir-Faire | Le Fournil de Marie",
    description:
        "Découvrez les 6 étapes de fabrication du pain au Fournil de Marie à Nantes : sélection des farines bio vendéennes, levain naturel, pétrissage manuel, façonnage, cuisson au four à bois, ressuyage. Un savoir-faire artisanal transparent.",
    alternates: {
        canonical: `${SITE.url}/savoir-faire`,
    },
    openGraph: {
        title: "Savoir-Faire | Le Fournil de Marie",
        description:
            "Découvrez les 6 étapes de fabrication du pain au Fournil de Marie à Nantes : sélection des farines bio vendéennes, levain naturel, pétrissage manuel, façonnage, cuisson au four à bois, ressuyage.",
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
            name: "Savoir-Faire",
            item: `${SITE.url}/savoir-faire`,
        },
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
        },
    })),
};

export default function SavoirFairePage() {
    return (
        <>
            <JsonLd data={breadcrumbJsonLd} id="jsonld-breadcrumb-savoirfaire" />
            <JsonLd data={faqJsonLd} id="jsonld-faq" />
            <SavoirFaireTemplate />
        </>
    );
}
