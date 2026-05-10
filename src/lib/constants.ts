export const SITE = {
    name: "Le Fournil de Marie",
    tagline: "Boulangerie-Patisserie Artisanale Bio",
    description:
        "Boulangerie-patisserie artisanale bio a Nantes Centre. Pain au levain, viennoiseries, patisseries fines - faits main, avec des farines bio et des produits locaux.",
    url: "https://lefournildemarie-nantes.fr",
    email: "bonjour@lefournildemarie-nantes.fr",
    phone: "02 40 12 34 56",
    siret: "321 654 987 00041",
    vat: "FR 12 321654987",
    capital: "5 000 EUR",
    legalForm: "SARL",
    rcs: "Nantes : 321 654 987 00041",
    founder: "Marie Lecomte",
    foundingYear: 2021,
    priceRange: "EE",
    cuisine: "Boulangerie-patisserie bio",
    areaServed: "Nantes Centre",
    ratingValue: "4.9",
    reviewCount: 150,
    address: {
        street: "12 Rue de la Grange",
        city: "Nantes",
        postalCode: "44000",
        region: "Pays de la Loire",
        country: "FR",
    },
    coordinates: {
        latitude: 47.218371,
        longitude: -1.553621,
    },
    hours: {
        monday: { opens: null, closes: null },
        tuesday: { opens: "07:00", closes: "19:00" },
        wednesday: { opens: "07:00", closes: "19:00" },
        thursday: { opens: "07:00", closes: "19:00" },
        friday: { opens: "07:00", closes: "19:00" },
        saturday: { opens: "07:00", closes: "18:00" },
        sunday: { opens: "08:00", closes: "13:00" },
    },
    hoursDisplay: {
        monday: "Ferme",
        tuesday: "07:00 - 19:00",
        wednesday: "07:00 - 19:00",
        thursday: "07:00 - 19:00",
        friday: "07:00 - 19:00",
        saturday: "07:00 - 18:00",
        sunday: "08:00 - 13:00",
    },
    social: {
        instagram: "https://instagram.com/lefournildemarie",
        facebook: "https://facebook.com/lefournildemarie",
    },
    images: {
        og: "/og-image.jpg",
        logo: "/logo.png",
        bakery: "/photos/fournil.jpg",
    },
} as const;

export const NAV_ITEMS = [
    { label: "Accueil", href: "/" },
    { label: "Savoir-Faire", href: "/savoir-faire" },
    { label: "A Propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_NAV_LINKS = [
    { label: "Accueil", href: "/" },
    { label: "Savoir-Faire", href: "/savoir-faire" },
    { label: "A Propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
    { label: "Commande Speciale", href: "/commande" },
    { label: "Mentions Legales", href: "/mentions-legales" },
] as const;

export const PRODUCTS = [
    {
        name: "Pain au Levain",
        description:
            "Farine bio T80, levain naturel, cuisson four a bois. Croute doree, mie alveolee.",
        category: "Pain",
    },
    {
        name: "Croissant Pur Beurre",
        description:
            "Beurre AOP Charentes-Poitou, farine bio, fermentation 48 h.",
        category: "Viennoiserie",
    },
    {
        name: "Tarte aux Pommes",
        description:
            "Pommes locales, pate feuilletee maison, caramel au beurre sale.",
        category: "Patisserie",
    },
    {
        name: "Baguette Tradition",
        description:
            "Farine bio T65, levain et levure, faconnee a la main.",
        category: "Pain",
    },
] as const;

export const ABOUT_VALUES = [
    {
        title: "Bio certifie",
        description:
            "100 % des farines sont certifiees Agriculture Biologique. Nous sommes la seule boulangerie du quartier a pouvoir l'afficher. Controles annuels, tracabilite complete.",
        icon: "T",
    },
    {
        title: "Farines locales",
        description:
            "Toutes nos farines viennent de minoteries vendeennes, a moins de 100 km du fournil. Nous connaissons les meuniers, nous visitons les moulins. Circuit court, pas de transport superflu.",
        icon: "W",
    },
    {
        title: "Levain naturel",
        description:
            "Notre levain est vivant, nourri quotidiennement. Il garantit une meilleure digestibilite, une conservation prolongee et des aromes que la levure industrielle ne peut pas reproduire.",
        icon: "I",
    },
] as const;

export const ABOUT_TEAM = [
    { name: "Marie Lecomte", role: "Boulangere-patissiere, fondatrice", image: "/assets/photos/marie.jpg" },
    { name: "Antoine Dubois", role: "Chef boulanger", image: "/assets/photos/antoine.jpg" },
    { name: "Camille Roux", role: "Patissiere", image: "/assets/photos/camille.jpg" },
] as const;

export const ABOUT_STATS = [
    { value: "2021", label: "Ouverture" },
    { value: "15+", label: "Pains differents" },
    { value: "100%", label: "Bio" },
    { value: "4,9*", label: "Avis clients" },
] as const;

export const COMMANDE_EVENT_TYPES = [
    { value: "mariage", label: "Mariage" },
    { value: "anniversaire", label: "Anniversaire" },
    { value: "entreprise", label: "Fete d'entreprise" },
    { value: "bapteme", label: "Bapteme" },
    { value: "noel", label: "Noel / Fetes" },
    { value: "autre", label: "Autre" },
] as const;

export const FAQ_ITEMS = [
    {
        question: "Quels sont les horaires d'ouverture du Fournil de Marie ?",
        answer:
            "Le Fournil de Marie est ouvert du mardi au samedi de 7h a 19h, et le dimanche de 8h a 13h. Ferme le lundi.",
    },
    {
        question: "Le Fournil de Marie est-il certifie bio ?",
        answer:
            "Oui, 100 % de nos farines sont certifiees Agriculture Biologique. Nous sommes la seule boulangerie du quartier Nantes Centre a pouvoir l'afficher, avec des controles annuels et une tracabilite complete.",
    },
    {
        question: "D'ou viennent les farines utilisees ?",
        answer:
            "Toutes nos farines viennent de minoteries vendeennes, a moins de 100 km du fournil. Nous selectionnons les lots a l'odorat et au toucher - T65, T80, T110, seigle, sarrasin, petit epeautre.",
    },
    {
        question: "Utilisez-vous du levain naturel ?",
        answer:
            "Oui, notre levain-chef est nourri quotidiennement depuis l'ouverture du fournil en 2021. Pas de levure industrielle, pas d'additif. Juste de la farine, de l'eau filtree et du temps.",
    },
    {
        question: "Proposez-vous des commandes pour des evenements ?",
        answer:
            "Oui, nous creons des pieces uniques pour mariages, anniversaires, seminaires et fetes de quartier : pain de ceremonie, piece montee, buffet viennoiseries. Contactez-nous pour un devis sous 48 heures.",
    },
    {
        question: "Ou se trouve le Fournil de Marie ?",
        answer:
            "Nous sommes situes au 12 Rue de la Grange, 44000 Nantes, en plein coeur du quartier Nantes Centre.",
    },
] as const;
