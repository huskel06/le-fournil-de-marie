import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { ContactTemplate } from "@/components/templates/ContactTemplate";
import { JsonLd } from "@/components/atoms/JsonLd";

export const metadata: Metadata = {
    title: "Contact | Le Fournil de Marie",
    description:
        "Contactez Le Fournil de Marie — 12 Rue de la Grange, 44000 Nantes. Tél. 02 40 12 34 56. Formulaire de contact, horaires d'ouverture, accès. Réponse sous 24 à 48 heures.",
    alternates: {
        canonical: `${SITE.url}/contact`,
    },
    openGraph: {
        title: "Contact | Le Fournil de Marie",
        description:
            "Contactez Le Fournil de Marie — 12 Rue de la Grange, 44000 Nantes. Tél. 02 40 12 34 56. Formulaire de contact, horaires d'ouverture, accès.",
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
            name: "Contact",
            item: `${SITE.url}/contact`,
        },
    ],
};

export default function ContactPage() {
    return (
        <>
            <JsonLd data={breadcrumbJsonLd} id="jsonld-breadcrumb-contact" />
            <ContactTemplate />
        </>
    );
}
