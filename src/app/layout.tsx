import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Cursor } from "@/components/atoms/Cursor";
import { LenisProvider } from "@/components/atoms/LenisProvider";
import { JsonLd } from "@/components/atoms/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Boulangerie-pâtisserie bio à Nantes Centre. Farines locales de Vendée, levain naturel, cuisson au four à bois. Seule boulangerie du quartier certifiée bio. Ouvert du mardi au dimanche.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${SITE.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Boulangerie-pâtisserie bio à Nantes`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Boulangerie-pâtisserie bio à Nantes Centre. Farines locales, levain naturel, four à bois.",
    images: [`${SITE.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-site-verification": "",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: SITE.name,
  description:
    "Boulangerie-pâtisserie artisanale bio à Nantes Centre. Pain au levain, viennoiseries, pâtisseries fines — faits main, avec des farines bio et des produits locaux.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  founder: {
    "@type": "Person",
    name: SITE.founder,
  },
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.postalCode,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.coordinates.latitude,
    longitude: SITE.coordinates.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: SITE.hours.tuesday.opens,
      closes: SITE.hours.tuesday.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: SITE.hours.wednesday.opens,
      closes: SITE.hours.wednesday.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: SITE.hours.thursday.opens,
      closes: SITE.hours.thursday.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: SITE.hours.friday.opens,
      closes: SITE.hours.friday.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: SITE.hours.saturday.opens,
      closes: SITE.hours.saturday.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: SITE.hours.sunday.opens,
      closes: SITE.hours.sunday.closes,
    },
  ],
  priceRange: SITE.priceRange,
  image: `${SITE.url}${SITE.images.bakery}`,
  sameAs: [SITE.social.instagram, SITE.social.facebook],
  servesCuisine: SITE.cuisine,
  areaServed: SITE.areaServed,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.ratingValue,
    reviewCount: SITE.reviewCount,
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produits du Fournil",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Pain au Levain",
          description:
            "Farine bio T80, levain naturel, cuisson four à bois. Croûte dorée, mie alvéolée.",
          category: "Pain",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Croissant Pur Beurre",
          description:
            "Beurre AOP Charentes-Poitou, farine bio, fermentation 48 h.",
          category: "Viennoiserie",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Baguette Tradition",
          description:
            "Farine bio T65, levain et levure, façonnée à la main.",
          category: "Pain",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Tarte aux Pommes",
          description:
            "Pommes locales, pâte feuilletée maison, caramel au beurre salé.",
          category: "Pâtisserie",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col bg-bg text-text font-sans antialiased">
        <JsonLd
          data={localBusinessJsonLd}
          id="jsonld-localbusiness"
        />
        <LenisProvider>
          <Cursor />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
