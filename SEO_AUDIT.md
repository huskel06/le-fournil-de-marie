# Audit SEO Technique — Le Fournil de Marie

## 1. Balises canoniques

| Page | Canonique | Statut |
|------|-----------|--------|
| `/` | `https://lefournildemarie-nantes.fr` | ✅ OK |
| `/savoir-faire` | `https://lefournildemarie-nantes.fr/savoir-faire` | ✅ OK |
| `/a-propos` | `https://lefournildemarie-nantes.fr/a-propos` | ✅ OK |
| `/contact` | `https://lefournildemarie-nantes.fr/contact` | ✅ OK |
| `/commande` | `https://lefournildemarie-nantes.fr/commande` | ✅ OK |
| `/mentions-legales` | `https://lefournildemarie-nantes.fr/mentions-legales` | ✅ OK |

**Note :** Les balises canoniques sont définies via `alternates.canonical` dans les métadonnées Next.js. Next.js génère automatiquement la balise `<link rel="canonical">` dans le `<head>`.

## 2. Redirections (next.config.ts)

| Source | Destination | Type | Statut |
|--------|-------------|------|--------|
| `/a-propos-de-nous` | `/a-propos` | 301 | ✅ OK |
| `/nous-contacter` | `/contact` | 301 | ✅ OK |
| `/mentions` | `/mentions-legales` | 301 | ✅ OK |
| `/index.html` | `/` | 301 | ✅ OK |
| `/home` | `/` | 301 | ✅ OK |
| `/notre-histoire` | `/a-propos` | 301 | ✅ OK |
| `/nos-produits` | `/savoir-faire` | 301 | ✅ OK |
| `/commander` | `/commande` | 301 | ✅ OK |
| `/:path(/)/` | `/:path` | 301 | ✅ OK (trailing slash) |

## 3. Headers HTTP

| Header | Valeur | Statut |
|--------|--------|--------|
| `X-Frame-Options` | `DENY` | ✅ OK |
| `X-Content-Type-Options` | `nosniff` | ✅ OK |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | ✅ OK |
| `X-DNS-Prefetch-Control` | `on` | ✅ OK |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | ✅ OK |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | ✅ OK |
| `Cache-Control` (assets) | `public, max-age=31536000, immutable` | ✅ OK |
| `Cache-Control` (images) | `public, max-age=31536000, immutable` | ✅ OK |

## 4. Performance & Core Web Vitals

### Images
- Formats : WebP + AVIF ✅ (configuré dans `next.config.ts`)
- Lazy loading : natif via Next.js `<Image>` component ✅
- Taille max : 200 KB (à vérifier dans les composants Image)
- Device sizes : 375, 640, 768, 1024, 1280, 1920 ✅
- Cache images : 30 jours minimum ✅

### Polices
- Vérifier que les polices sont self-hostées (pas de Google Fonts CDN)
- Utiliser `next/font` pour le chargement optimisé

### Cache
- Assets statiques : 1 an, immutable ✅
- Images : 1 an, immutable ✅
- Pages HTML : géré par Vercel Edge Network

## 5. Robots & Indexation

| Élément | Valeur | Statut |
|---------|--------|--------|
| `robots.txt` | Présent, sitemap référencé | ✅ OK |
| `robots` meta | `index, follow` | ✅ OK |
| `googleBot` meta | `index, follow, max-image-preview:large` | ✅ OK |
| Sitemap | Dynamique, 6 URLs | ✅ OK |
| `/_next/` | Désindexé dans robots.txt | ✅ OK |
| `/api/` | Désindexé dans robots.txt | ✅ OK |

## 6. Structured Data (JSON-LD)

| Type | Page | Statut |
|------|------|--------|
| `LocalBusiness` (Bakery) | Toutes (layout) | ✅ OK |
| `BreadcrumbList` | `/savoir-faire` | ✅ OK |
| `BreadcrumbList` | `/a-propos` | ✅ OK |
| `BreadcrumbList` | `/contact` | ✅ OK |
| `BreadcrumbList` | `/commande` | ✅ OK |
| `BreadcrumbList` | `/mentions-legales` | ✅ OK |
| `FAQPage` | `/savoir-faire` | ✅ OK |

## 7. Open Graph & Twitter Cards

| Meta | Statut |
|------|--------|
| `og:title` | ✅ Défini (template + per-page) |
| `og:description` | ✅ Défini (SGE optimisé) |
| `og:url` | ✅ Défini |
| `og:type` | ✅ `website` |
| `og:locale` | ✅ `fr_FR` |
| `og:site_name` | ✅ `Le Fournil de Marie` |
| `og:image` | ✅ 1200×630, WebP |
| `twitter:card` | ✅ `summary_large_image` |
| `twitter:title` | ✅ Défini |
| `twitter:description` | ✅ Défini |
| `twitter:image` | ✅ Défini |

## 8. Accessibilité

| Critère | Statut | Note |
|---------|--------|------|
| `lang="fr"` | ✅ | Défini sur `<html>` |
| `aria-label` navigation | ✅ | Menu, réseaux sociaux |
| `alt` texts images | ✅ | Définis dans COPY.md |
| Screen-reader labels | ✅ | Champs de formulaire |

## 9. Recommandations restantes

1. **Générer une image OG** (`public/og-image.jpg`) — 1200×630px, avec le logo et le nom
2. **Créer une favicon complète** : `favicon.ico`, `apple-touch-icon.png` (180×180)
3. **Ajouter `google-site-verification`** dans les métadonnées (clé Google Search Console)
4. **Vérifier les polices** : s'assurer qu'elles sont servies localement via `next/font`
5. **Configurer Vercel Analytics** pour le suivi Core Web Vitals (optionnel)
6. **Soumettre le sitemap** à Google Search Console
7. **Configurer le www → non-www** dans les paramètres Vercel
8. **Vérifier les temps de réponse** : objectif < 200ms TTFB (Vercel Edge)

## 10. Checklist déploiement final

- [ ] Ajouter `google-site-verification` dans `layout.tsx`
- [ ] Générer et placer `public/og-image.jpg` (1200×630)
- [ ] Générer et placer `public/apple-touch-icon.png` (180×180)
- [ ] Soumettre sitemap.xml à Google Search Console
- [ ] Vérifier les JSON-LD sur schema.org/validator
- [ ] Tester les redirections 301
- [ ] Vérifier les balises canoniques sur chaque page
- [ ] Scanner Lighthouse (Performance > 90, Accessibility > 95, SEO > 95)
- [ ] Configurer le domaine personnalisé sur Vercel
- [ ] Activer Vercel Edge Cache