# GEMINI.md — Le Fournil de Marie
> Généré le 10 mai 2026 — Atelier-CL Brief Builder

---

## Objectif

**Formule :** L'Apogée
**Catégorie :** Artisans
**Activité :** Boulangerie-pâtisserie artisanale — pains au levain, viennoiseries maison
**URL cible :** lefournildemarie-nantes.fr
**Lancement visé :** Juin 2026

---

## Client

**Nom / Enseigne :** Le Fournil de Marie
**Responsable :** Marie Lecomte
**Activité précise :** Boulangerie-pâtisserie artisanale — pains au levain, viennoiseries maison
**Zone géographique :** Nantes Centre (44)
**SIRET :** 321 654 987 00041
**Différenciation clé :** Seule boulangerie du quartier certifiée bio + farines locales de Vendée
**Concurrents :** maison-landemaine.fr, boulangerie-bio-nantes.fr

---

## Stack

```
Next.js 16 App Router
Tailwind CSS 4 + Framer Motion + Lenis + GSAP
Resend (emails transactionnels)
```

---

## Identité visuelle

**Palette :**
- Primaire : `#6B3F2A`
- Accent : `#E8C07A`
- Fond : `#FDF8F0`

**Direction DA :** Artisanal & Texturé × Haussmannien / Classique
**Assets visuels :** Non — utiliser @imagegen

---

## Direction Créative

**Tension :** Artisanal & Texturé × Haussmannien / Classique — collision délibérée, aucun compromis lissant les oppositions.
**Références marques :** Métier, Loewe, Dior Maison, Ritz Paris
**Sites DA :** poilane.com, eric-kayser.com
**Animations :** Framer Motion + Lenis + GSAP (scroll pinning, morphing, séquences cinématiques)
**Priorité :** signature visuelle unique — chaque interaction est une décision créative
**Exigence :** présenter 2 directions DA alternatives avant de démarrer

### ⛔ Layouts INTERDITS
- Hero plein écran + liste features + pricing cards + CTA (layout SaaS générique)
- Cards identiques en grille uniforme
- Navigation hamburger sans caractère
- Polices génériques par défaut (Inter, Poppins, DM Sans) sans intention créative

### ✅ Exigences créatives @designer
- Chaque section justifie son existence **visuellement**, pas fonctionnellement
- Typographie comme élément de design : taille, graisse, espacement inhabituels
- Au moins un choix de layout non-conventionnel par page
- Consulter Awwwards.com et lapa.ninja **avant** toute décision de composition

---

## Pages

- `/ Accueil`
- `/savoir-faire`
- `/à-propos`
- `/contact`
- `/mentions-légales`

---

## Contraintes techniques

- Lighthouse : Performance > 90, Accessibility > 95, SEO > 95
- Core Web Vitals : LCP < 2.5s, CLS < 0.1
- Images : WebP / AVIF, lazy loading, max 200 KB
- Aucune clé API côté client
- Formulaire contact via Resend (API route Next.js) — pas de BDD
- Architecture Atomique : aucun fichier .tsx > 150 lignes
- Préfixe `rtk` sur toutes les commandes shell
- ⚠️ Audit @security obligatoire avant mise en prod

---

## Notes client

Ouverture du mardi au dimanche 7h-19h30. Instagram 4 200 abonnés. Section commande spéciale pour événements.

---

## Livrables

### Phase 1 — Design (@designer)
- [ ] Design system complet (tokens, variants, états, dark mode si pertinent)
- [ ] Atoms → Organisms → Templates : couverture complète
- [ ] Pages complètes selon liste ci-dessus
- [ ] Animations signature : Framer Motion + GSAP séquences avancées
- [ ] Smooth scroll Lenis + effets parallax
- [ ] Responsive : 375px / 768px / 1024px / 1280px / 1920px
- [ ] 2 directions DA proposées avant validation finale

### Phase 2 — Développement (@developer)
- [ ] Setup Next.js 16
- [ ] Formulaire contact → Resend (API route)
- [ ] Features sur mesure : ← À définir avec le client
- [ ] Intégrations : Feed Instagram, @imagegen (génération visuels)
- [ ] Variables d'environnement dans `.env.example`
- [ ] README.md : exhaustif : stack, setup complet, features custom, guide de reprise, scripts migration BDD
- [ ] Déploiement Vercel Pro + domaine + redirections SEO

### Phase 3 — Contenu (@copywriter)
- [ ] Stratégie éditoriale complète
- [ ] Textes toutes pages + microcopy
- [ ] Méta descriptions optimisées SGE
- [ ] Emails transactionnels rédigés (confirmation, devis, bienvenue)
- [ ] Relecture qualité : grille AIDA appliquée, ton signature cohérent sur toutes les pages, zéro cliché sectoriel

### Phase 4 — SEO (@seo)
- [ ] JSON-LD complet (LocalBusiness + BreadcrumbList + FAQ)
- [ ] Sitemap.xml dynamique + robots.txt
- [ ] Open Graph + Twitter Cards + structured data enrichi
- [ ] Stratégie mots-clés longue traîne locale
- [ ] Validation JSON-LD sur schema.org/validator
- [ ] Audit SEO technique complet (redirections, canoniques, vitesse)

### Audit sécurité (@security)
- [ ] Revue API routes et variables d'environnement
- [ ] CORS + rate limiting configurés
- [ ] Headers sécurité (CSP, HSTS, X-Frame-Options)
- [ ] Validation des inputs côté serveur

### Gate qualité (@qa)
- [ ] Architecture Atomique respectée
- [ ] Suite Playwright complète : toutes pages, formulaires, features custom, responsive 375px/768px/1280px/1920px
- [ ] Tests intégration : formulaires end-to-end
- [ ] Tests features custom : ${getCustomFeatures()}
- [ ] Animations vérifiées sur mobile (pas de jank, reduced-motion respecté)
- [ ] Score Lighthouse ≥ 90/95/95
- [ ] README.md : setup testé sur machine vierge par @qa
- [ ] Relecture copywriting : grille qualité appliquée, 0 phrase générique
- [ ] Audit @security validé avant déploiement

---

*Atelier-CL — L'Apogée — 10 mai 2026*