import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { HomeTemplate } from "@/components/templates/HomeTemplate";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Le Fournil de Marie — Boulangerie-pâtisserie bio à Nantes Centre. Farines locales de Vendée, levain naturel, cuisson au four à bois. Seule boulangerie du quartier certifiée bio. Ouvert du mardi au dimanche.",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Le Fournil de Marie — Boulangerie-pâtisserie bio à Nantes Centre. Farines locales de Vendée, levain naturel, cuisson au four à bois. Seule boulangerie du quartier certifiée bio. Ouvert du mardi au dimanche.",
  },
};

export default function HomePage() {
  return <HomeTemplate />;
}
