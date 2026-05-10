# 🥖 Le Fournil de Marie

**Boulangerie-Patisserie Artisanale Bio - Nantes Centre (44)**

Site vitrine pour la boulangerie-patisserie artisanale bio de Marie Lecomte, situee a Nantes. Design fusionnant l'Authentique & Rustique avec l'Haussmannien Chic.

**URL :** [lefournildemarie-nantes.fr](https://lefournildemarie-nantes.fr)

---

## 📋 Table des matieres

- [Stack Technique](#stack-technique)
- [Design System](#design-system)
- [Architecture du Projet](#architecture-du-projet)
- [Pages](#pages)
- [Fonctionnalites](#fonctionnalites)
- [Setup Local](#setup-local)
- [Tests](#tests)
- [Variables d'Environnement](#variables-denvironnement)
- [Deploiement Vercel](#deploiement-vercel)
- [Guide de Reprise](#guide-de-reprise)
- [Bonnes Pratiques](#bonnes-pratiques)

---

## Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 16.2.6 (App Router) | Framework React full-stack |
| **React** | 19.2.4 | UI Library |
| **TypeScript** | 5.x | Typage statique |
| **Tailwind CSS** | 4.x | Design system utility-first |
| **Framer Motion** | 12.x | Animations React declaratives |
| **GSAP** | 3.12.x | Animations scroll avancees (ScrollTrigger, MorphSVG) |
| **Lenis** | 1.2.x | Smooth scroll |
| **Resend** | 4.x | Emails transactionnels (formulaires) |
| **class-variance-authority** | 0.7.x | Variants de composants |
| **clsx + tailwind-merge** | -- | Utilitaire `cn()` pour classes conditionnelles |

### Deploiement

- **Hbergeur :** Vercel Pro
- **Domaine :** lefournildemarie-nantes.fr
- **Region :** CDN global (Vercel Edge)

---

## Design System

### Direction Visuelle : Fusion Authentique & Rustique x Haussmannien Chic

| Contexte | Direction |
|----------|-----------|
| **Header / Navigation** | Haussmannien Chic - corniche doree, lettres elegantes |
| **Hero** | Haussmannien Chic - cadre vitrine, mise en scene |
| **Sections contenu** | Authentique & Rustique - textures, matieres, organicite |
| **Produits** | Authentique & Rustique - main, farine, matiere brute |
| **Footer** | Haussmannien Chic - marbre, cheminee, medaillons |
| **Animations entree** | Haussmannien Chic - rideau qui s'ouvre |
| **Animations scroll** | Authentique & Rustique - grain, textures organiques |
| **Typographie titres** | Haussmannien Chic - Cormorant Garamond |
| **Typographie corps** | Authentique & Rustique - Satoshi |
| **Curseur** | Authentique & Rustique - graine de ble |

### Palette

```css
/* Primaire */
--color-primary: #6B3F2A       /* Brun pain d'epices */
--color-primary-light: #8B5E3C /* Cuir patine */
--color-primary-dark: #4A2818  /* Terre de nuit */

/* Accent */
--color-accent: #E8C07A        /* Miel d'acacia */
--color-accent-dark: #D4A04A   /* Ble mur */

/* Fond */
--color-bg: #FDF8F0            /* Lait cru */
--color-bg-light: #F5EDE0      /* Farine */

/* Texte */
--color-text: #2C1810          /* Charbon de bois */
--color-surface: #F5F0E8       /* Coquille d'oeuf */

/* Chic (Haussmannien) */
--color-chic-accent: #E8C07A   /* Or vieilli */
--color-chic-brass: #C8A050    /* Laiton */
--color-chic-dark: #3D2015     /* Ebene */
--color-chic-text: #1A0F0A     /* Noir d'encre */
--color-chic-emerald: #2D4A3E  /* Vert emeraude */
```

### Typographie

| Usage | Police | Poids |
|-------|--------|-------|
| **Titres display** | Cormorant Garamond | 700, tracking -2% |
| **Sous-titres** | Cormorant Garamond | 400 italic |
| **Corps de texte** | Satoshi | 300/400, line-height 1.6 |
| **Accroches** | TAN Meringue | 400, clamp(4rem-8rem) |

### Breakpoints

| Label | Width | Target |
|-------|-------|--------|
| `xs` | 375px | iPhone SE |
| `sm` | 640px | Grand mobile |
| `md` | 768px | Tablette |
| `lg` | 1024px | Petit desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1920px | Grand ecran |

---

## Architecture du Projet

```
src/
  app/
    api/
      contact/route.ts      # POST -> Resend (formulaire contact)
      commande/route.ts     # POST -> Resend (commande speciale)
    a-propos/page.tsx         # Page A Propos
    commande/page.tsx         # Page Commande Speciale
    contact/page.tsx          # Page Contact
    mentions-legales/page.tsx # Page Mentions Legales
    savoir-faire/page.tsx     # Page Savoir-Faire
    globals.css               # Design system complet
    layout.tsx                # Layout racine (Header, Footer, Lenis, Cursor)
    page.tsx                  # Page Accueil

  components/
    atoms/                    # 10 composants atomiques
      Badge.tsx
      Button.tsx
      Cursor.tsx
      Divider.tsx
      Heading.tsx
      Icon.tsx
      Image.tsx
      LenisProvider.tsx
      Skeleton.tsx
      Tag.tsx
      Text.tsx

    molecules/                # 8 composants moleculaires
      ContactForm.tsx
      Frame.tsx
      MapPin.tsx
      NavigationItem.tsx
      ProductCard.tsx
      SocialLink.tsx
      TestimonialCard.tsx
      TimelineStep.tsx

    organisms/                # 10 composants organisme
      ContactSection.tsx
      Footer.tsx
      Header.tsx
      HeroSection.tsx
      InstagramFeed.tsx
      MapSection.tsx
      NavTabs.tsx
      ProductsSection.tsx
      SavoirFaireSection.tsx
      TestimonialsSection.tsx

    templates/                # 6 templates de page
      AboutTemplate.tsx
      CommandeTemplate.tsx
      ContactTemplate.tsx
      HomeTemplate.tsx
      LegalTemplate.tsx
      SavoirFaireTemplate.tsx

  lib/
    constants.ts              # Donnees du site (SITE, NAV_ITEMS, ABOUT_VALUES, etc.)
    gsap.ts                   # Configuration GSAP + ScrollTrigger
    lenis.ts                  # Hook useLenisScroll
    rate-limit.ts             # Rate limiter cote serveur
    utils.ts                  # cn() utility
```

### Regle : Architecture Atomique

- **Aucun fichier .tsx ne depasse 150 lignes**
- Les composants sont organises par complexite croissante
- Les templates orchestrent les organisms
- Les pages importent les templates

---

## Pages

| Route | Template | Sections |
|-------|----------|----------|
| `/` | `HomeTemplate` | Hero, Savoir-Faire, Produits, Temoignages, Instagram, Contact |
| `/savoir-faire` | `SavoirFaireTemplate` | Hero, Timeline 6 etapes, CTA |
| `/a-propos` | `AboutTemplate` | Hero, Valeurs, Equipe, Chiffres |
| `/contact` | `ContactTemplate` | Hero, Formulaire + Infos, Carte |
| `/commande` | `CommandeTemplate` | Hero, Formulaire evenementiel |
| `/mentions-legales` | `LegalTemplate` | Mentions legales completes |

---

## Fonctionnalites

### 1. Formulaire de Contact -> Resend

- **Route :** `POST /api/contact`
- **Champs :** nom, email, sujet, message
- **Template email :** HTML responsive avec style du Fournil
- **Validation :** cote client + serveur
- **Securite :** aucune cle API exposee cote client, XSS protege (escapeHtml), rate limiting (5 req/min/IP)

### 2. Commande Speciale Evenements

- **Route :** `POST /api/commande`
- **Champs :** nom, email, telephone, type d'evenement, date, invites, description
- **Types :** Mariage, Anniversaire, Entreprise, Bapteme, Noel, Autre
- **Template email :** HTML structure avec toutes les infos

### 3. Smooth Scroll (Lenis)

- Duree : 1.2s
- Easing personnalise : cubic-bezier(0.25, 0.1, 0.25, 1)
- Respecte `prefers-reduced-motion`
- Initialise dans `LenisProvider` (composant client)

### 4. Animations Framer Motion

- Revelations au scroll (`whileInView`)
- Animations d'entree de page
- Menu mobile anime
- Transitions fluides sur tous les composants

### 5. Curseur Personnalise

- Graine de ble (SVG)
- Rotation au clic
- Cache sur mobile/tactile

### 6. Feed Instagram

- Grille 6 photos
- Lien vers Instagram
- Hover avec icone appareil photo
- Placeholder pour integration API future

### 7. Design System Tailwind 4

- `@theme inline` avec tokens CSS personnalises
- Classes utilitaires : `linen-button`, `gold-border`, `marble-bg`
- Animations : `grain`, `shimmer`, `ember`
- Overlay grain de farine : `.grain-overlay`

### 8. Redirections SEO

```ts
/a-propos-de-nous -> /a-propos        (301)
/nous-contacter   -> /contact         (301)
/mentions         -> /mentions-legales (301)
```

### 9. Securite

- **CSP** : Content-Security-Policy configuree dans `next.config.ts`
- **Rate limiting** : 5 requetes/minute/IP sur les routes API
- **XSS** : `escapeHtml()` sur toutes les variables interpolees dans les templates email
- **Headers** : X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security, etc.

---

## Setup Local

### Pre-requis

- Node.js 20+
- npm 10+
- Un compte [Resend](https://resend.com) (pour les emails)

### Installation

```bash
# Cloner le projet
rtk git clone <url-du-repo>
rtk cd "Le Fournil de Marie"

# Installer les dependances
rtk npm install

# Copier les variables d'environnement
rtk cp .env.example .env.local

# Lancer le serveur de developpement
rtk npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

### Commandes

| Commande | Description |
|----------|-------------|
| `rtk npm run dev` | Serveur de developpement |
| `rtk npm run build` | Build de production |
| `rtk npm run start` | Serveur de production |
| `rtk npm run lint` | Verification ESLint |

---

## Tests

### Smoke Tests (Playwright)

```bash
# Installer Playwright
rtk npx playwright install

# Lancer les tests
rtk npx playwright test

# Lancer les tests en mode UI
rtk npx playwright test --ui
```

Les tests de fumee verifient :
- Chargement de chaque page (status 200)
- Presence des elements cles (titres, navigation, footer)
- Fonctionnement du formulaire de contact
- Fonctionnement du formulaire de commande

---

## Variables d'Environnement

```env
# .env.local

# === RESEND ===
# Cle API pour l'envoi des emails
# Obtenez-la sur https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxx

# === SITE ===
# URL de production (metadonnees OG)
NEXT_PUBLIC_SITE_URL=https://lefournildemarie-nantes.fr
```

> ⚠️ **Securite :** `RESEND_API_KEY` n'est jamais exposee cote client. Elle est utilisee uniquement dans les API routes (`/api/contact`, `/api/commande`).

---

## Deploiement Vercel

### 1. Preparer le deploiement

```bash
# Build de verification
rtk npm run build

# Push vers GitHub/GitLab
rtk git add .
rtk git commit -m "feat: initial release"
rtk git push
```

### 2. Configurer Vercel Pro

1. Connecter le depot GitHub sur [vercel.com](https://vercel.com)
2. Framework : **Next.js**
3. Root Directory : `./`
4. Build Command : `next build`
5. Output Directory : `.next`

### 3. Variables d'environnement Vercel

Ajouter dans Vercel Dashboard -> Settings -> Environment Variables :

| Variable | Valeur |
|----------|--------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` |
| `NEXT_PUBLIC_SITE_URL` | `https://lefournildemarie-nantes.fr` |

### 4. Domaine personnalise

1. Vercel Dashboard -> Domains -> `lefournildemarie-nantes.fr`
2. Configurer les DNS :
   - Type : `CNAME`
   - Name : `@`
   - Value : `cname.vercel-dns.com`
3. Activer **Vercel Edge Network** pour le CDN

### 5. Redirections SEO

Les redirections 301 sont configurees dans `next.config.ts` :

```ts
/a-propos-de-nous -> /a-propos
/nous-contacter   -> /contact
/mentions         -> /mentions-legales
```

---

## Guide de Reprise

### Structure des Composants

1. **Atoms** : Composants de base (Button, Heading, Text, etc.)
   - Props via `cva()` pour les variants
   - Utilisation de `cn()` pour la fusion de classes

2. **Molecules** : Assemblage d'atoms (ProductCard, ContactForm, etc.)
   - Logique metier minimale
   - Props typees avec TypeScript

3. **Organisms** : Sections completes (Header, HeroSection, etc.)
   - Contenu statique defini dans le composant
   - Animations Framer Motion pour les revelations

4. **Templates** : Orchestration des organisms
   - Layout de page complet
   - Pas de logique metier

### Ajouter une Page

1. Creer le template dans `src/components/templates/`
2. Creer la page dans `src/app/<route>/page.tsx`
3. Ajouter les metadonnees SEO
4. Ajouter le lien dans `src/lib/constants.ts` -> `NAV_ITEMS`

### Ajouter un Produit

Les produits sont definis dans `ProductsSection.tsx` (tableau `PRODUCTS`). Ajouter une entree :

```ts
{
  name: "Pain de Campagne",
  description: "Farine bio T110, levain naturel, noix et figues.",
  price: "6,50 EUR",
  image: "/assets/photos/pain-campagne.jpg",
  category: "Pains",
}
```

### Modifier le Design System

Les tokens Tailwind sont dans `src/app/globals.css` :

- `@theme inline {}` pour les couleurs, espacements, ombres
- `@font-face` pour les polices
- Classes utilitaires personnalisees (`.linen-button`, `.gold-border`, etc.)

### Images

- Format : WebP / AVIF
- Poids max : 200 KB
- Lazy loading par defaut
- Dossier : `public/assets/photos/`
- Composant : `OptimizedImage` (atoms)

### Audit de Securite

Avant toute mise en production, executer un audit de securite complet :

```bash
# Verifier les dependances
rtk npm audit

# Verifier les cles API exposees
rtk grep -r "sk-" src/ --include="*.tsx" --include="*.ts"

# Verifier les headers de securite (configures dans next.config.ts)
```

---

## Bonnes Pratiques

### Performance Lighthouse

- **Performance > 90** : Images optimisees, lazy loading, code splitting
- **Accessibility > 95** : ARIA labels, contrastes, navigation clavier
- **SEO > 95** : Metadonnees, Open Graph, sitemap, redirections 301

### Core Web Vitals

- **LCP < 2.5s** : Images prioritaires, polices swap
- **CLS < 0.1** : Dimensions explicites, skeleton loading

### Securite

- Aucune cle API cote client
- Headers de securite (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Rate limiting sur les routes API (5 req/min/IP)
- XSS protection (escapeHtml sur les templates email)
- Validation des entrees utilisateur
- Lazy initialization de Resend

### Code

- Architecture atomique (fichiers < 150 lignes)
- TypeScript strict
- Composants "use client" minimaux
- Prefixe `rtk` sur toutes les commandes shell

---

## Licence

(c) 2026 Le Fournil de Marie - Tous droits reserves.

---

*Fait avec soin a Nantes*
