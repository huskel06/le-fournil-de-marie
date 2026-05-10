# Proposition Design — Le Fournil de Marie

> **Présenté par @designer — 10 mai 2026**
> En attente de validation avant implémentation

---

## Sommaire

1. [Direction 1 — Authentique & Rustique](#direction-1--authentique--rustique)
2. [Direction 2 — Haussmannien Chic](#direction-2--haussmannien-chic)
3. [Design System Unifié](#design-system-unifié)
4. [Architecture des Pages](#architecture-des-pages)
5. [Signature d'Animation](#signature-danimation)
6. [Recommandation](#recommandation)

---

# Direction 1 — Authentique & Rustique

## Concept

> **"La main dans la farine, l'œil sur le fournil."**

Une direction qui plonge dans la matérialité brute du métier de boulanger. La texture est reine : chaque surface semble palpable, chaque grain de farine, chaque craquelure de pain est célébré. L'ambiance est celle d'un fournil à l'aube — chaude, feutrée, intime.

### Mood Board Textuel

| Élément | Référence |
|---------|-----------|
| **Matières** | Lin brut, bois patiné, pierre de meulière, papier kraft, toile de jute |
| **Lumière** | Chaude (2700K), directionnelle, ombres longues, contre-jour poussiéreux |
| **Couleurs** | Terre de Sienne, ocre, crème, brun tabac, noir charbon |
| **Formes** | Organiques, irrégulières, asymétriques, cercles imparfaits |
| **Références** | poilane.com, eric-kayser.com, lepainquichante.fr |

### Palette Direction 1

```
#6B3F2A  ── Brun pain d'épices (primaire)
#8B5E3C  ── Cuir patiné (primaire light)
#4A2818  ── Terre de nuit (primaire dark)
#E8C07A  ── Miel d'acacia (accent)
#D4A04A  ── Blé mûr (accent dark)
#FDF8F0  ── Lait cru (fond)
#F5EDE0  ── Farine (fond light)
#2C1810  ── Charbon de bois (texte)
#F5F0E8  ── Coquille d'œuf (surface)
```

### Typographie

| Usage | Police | Détail |
|-------|--------|--------|
| **Titres (display)** | **TAN — Meringue** | Serif texturé, lettres irrégulières, graisse 700, tracking -2% |
| **Sous-titres** | **Instrument Serif** | Serif élégant mais chaleureux, graisse 400, italic |
| **Corps de texte** | **Satoshi** | Sans-serif humaniste, graisse 300/400, hauteur de ligne 1.6 |
| **Accroches** | **TAN — Meringue** | En très gros corps (clamp 4rem-8rem), lettres espacées |

> **Pourquoi TAN — Meringue ?** C'est une police display qui imite la texture du pain artisanal — chaque lettre a des bords irréguliers, comme une miche façonnée à la main. Aucune police générique ne peut transmettre cette matérialité.

### Layout Signatures

#### 1. Hero — "Le Four à Bois"
- **Pas de hero plein écran.** Un cadre vertical (format 4:5) contenant une image de pain en macro-texture.
- Le titre est **composé en cercle** autour de l'image, comme une meule.
- La navigation est intégrée dans le cercle lui-même.
- *Non-conventionnel :* le CTA n'est pas un bouton mais un fil de lin qui se déroule au scroll.

#### 2. Section Savoir-Faire — "Les Mains"
- **Layout mosaïque asymétrique** : 5 images de tailles différentes disposées comme des pièces de pain sur un étal.
- Chaque image se révèle avec un **effet de pétrissage** (morphing SVG) au scroll.
- Les légendes sont écrites à la main (police scripte) sur un fond de papier kraft texturé.

#### 3. Section Produits — "Le Levain"
- **Pas de grille de cards.** Un **carrousel horizontal** avec défilement au scroll (horizontal scroll section).
- Chaque produit est présenté comme une **nature morte** : produit + ingrédients bruts disposés artistiquement.
- Le prix est gravé dans le bois (effet CSS texturé).

#### 4. Footer — "Le Coin du Fournil"
- Footer asymétrique avec une **carte de Nantes dessinée à la main** en arrière-plan.
- Les liens sont disposés comme des **étiquettes de sac de farine** épinglées.

### Animation Signature

| Élément | Technique | Détail |
|---------|-----------|--------|
| **Entrée page** | Framer Motion + Lenis | Grain texture overlay qui se dissipe comme de la farine soufflée |
| **Scroll** | Lenis smooth | Curseur personnalisé en forme de graine de blé |
| **Révélation images** | GSAP Clip-path | Découpe organique (forme d'éventail de farine) |
| **Parallax** | GSAP ScrollTrigger | Ingrédients qui flottent à différentes vitesses |
| **Hover** | Framer Motion | Zoom macro + léger grain animé |
| **Transition pages** | GSAP Morph | Forme de pain qui pétrit et se transforme |

### Éléments de Design Non-Conventionnels

1. **Curseur personnalisé** : une graine de blé qui tourne sur elle-même
2. **Boutons en lin** : pas de rectangle — des formes irrégulières avec un fil qui traverse
3. **Navigation** : pas de hamburger — un ruban de boulanger (chiffon) qui se déroule
4. **Loading screen** : un four à bois qui chauffe (animation CSS de braises)
5. **404** : "Cette miche n'existe pas" — illustration d'un pain brûlé

---

# Direction 2 — Haussmannien Chic

## Concept

> **"Le salon de thé du Ritz, dans une boulangerie de quartier."**

Une direction qui transpose l'élégance des grands salons parisiens du XIXe dans l'univers de la boulangerie artisanale. Boiseries foncées, dorures subtiles, vitrines comme des écrins. Chaque page est une pièce d'un appartement haussmannien.

### Mood Board Textuel

| Élément | Référence |
|---------|-----------|
| **Matières** | Bois de noyer, laiton brossé, marbre de Carrare, velours côtelé, verre soufflé |
| **Lumière** | Ambrée, lustres, chandeliers, clair-obscur, reflets dorés |
| **Couleurs** | Acajou, or vieilli, ivoire, vert émeraude, noir d'encre |
| **Formes** | Géométriques, symétriques, cadres, arcs, moulures, rosaces |
| **Références** | Métier, Loewe, Dior Maison, Ritz Paris, laduree.com |

### Palette Direction 2

```
#6B3F2A  ── Acajou foncé (primaire)
#8B6045  ── Noyer ciré (primaire light)
#3D2015  ── Ébène (primaire dark)
#E8C07A  ── Or vieilli (accent)
#C8A050  ── Laiton (accent dark)
#FDF8F0  ── Ivoire (fond)
#F0E8D8  ── Parchemin (fond light)
#1A0F0A  ── Noir d'encre (texte)
#F5F0E8  ── Nacre (surface)
#2D4A3E  ── Vert émeraude (accent secondaire)
```

### Typographie

| Usage | Police | Détail |
|-------|--------|--------|
| **Titres (display)** | **Cormorant Garamond** | Serif français classique, graisse 700, tracking +5%, petites capitales |
| **Sous-titres** | **Cormorant Infant** | Serif élégant, graisse 300, italic, tracking +2% |
| **Corps de texte** | **Satoshi** | Sans-serif raffiné, graisse 300/400, hauteur de ligne 1.8 |
| **Chiffres / Prix** | **Playfair Display** | Chiffres élégants, graisse 400, old-style figures |
| **Accents décoratifs** | **Cormorant Garamond** | En très gros corps, lettres ornementales, swashes |

> **Pourquoi Cormorant Garamond ?** C'est une réinterprétation moderne du Garamond — la police des livres français du XVIIe. Elle évoque immédiatement le raffinement, la culture, l'art de vivre à la française. Associée à Satoshi pour le corps, elle crée un contraste classique/contemporain parfait.

### Layout Signatures

#### 1. Hero — "Le Salon"
- **Format vitrine** : le hero est un cadre de bois sculpté (CSS) contenant une scène de vie.
- Le titre est gravé dans une plaque de laiton (effet métal CSS) au-dessus du cadre.
- **Pas de CTA visible** — l'invitation est un cordon de velours rouge que l'on "tire" (interaction au scroll).
- La navigation est une **corniche** en haut de page, avec des lettres dorées.

#### 2. Section Savoir-Faire — "L'Atelier"
- **Layout galerie** : les étapes du savoir-faire sont présentées comme des **tableaux dans des cadres dorés**.
- Disposition en **salon** : les cadres sont accrochés à différents niveaux sur un mur de papier peint.
- Au scroll, les cadres s'inclinent légèrement comme si on les regardait en se déplaçant dans la pièce.

#### 3. Section Produits — "La Vitrine"
- **Layout vitrine de salon de thé** : les produits sont présentés sur des **plateaux en marbre** disposés sur une table.
- Chaque plateau est un espace délimité par une nappe en dentelle (pattern CSS).
- Les prix sont écrits à l'encre dorée sur des étiquettes suspendues.

#### 4. Footer — "Le Foyer"
- Footer en forme de **cheminée** : le logo est au-dessus de la "cheminée", les liens sont disposés comme des bûches.
- Fond de marbre veiné (CSS gradient).
- Les icônes sociales sont des médaillons dorés.

### Animation Signature

| Élément | Technique | Détail |
|---------|-----------|--------|
| **Entrée page** | Framer Motion | Rideau de velours qui s'ouvre (clip-path reveal) |
| **Scroll** | Lenis smooth | Curseur en forme de loupe dorée |
| **Révélation images** | GSAP Scale + Rotate | Images qui se dévoilent comme des tableaux qu'on découvre |
| **Parallax** | GSAP ScrollTrigger | Lustres qui se balancent légèrement au scroll |
| **Hover** | Framer Motion | Effet "dorure" — bordure dorée qui s'allume |
| **Transition pages** | GSAP Morph | Cadre qui se referme et se rouvre |

### Éléments de Design Non-Conventionnels

1. **Curseur personnalisé** : une loupe dorée (référence aux antiquaires)
2. **Boutons en laiton** : boutons ronds avec un motif de rosace, effet métal brossé
3. **Navigation** : pas de hamburger — un lustre qui s'allume (les branches sont les liens)
4. **Loading screen** : un lustre qui s'allume crystal par crystal
5. **404** : "Cette pièce n'existe pas dans l'appartement" — porte fermée avec un heurtoir

---

# Design System Unifié

Bien que les deux directions divergent visuellement, elles partagent une **architecture de composants identique**. Seuls les tokens visuels changent.

## Tokens de Base

```css
/* Palette — tokens partagés */
--color-primary: #6B3F2A;
--color-accent: #E8C07A;
--color-bg: #FDF8F0;

/* Espacements — échelle 4px */
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 2rem;      /* 32px */
--space-xl: 4rem;      /* 64px */
--space-2xl: 8rem;     /* 128px */
--space-3xl: 12rem;    /* 192px */

/* Rayons */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-full: 9999px;

/* Ombres */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.07);
--shadow-lg: 0 10px 30px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 60px rgba(0,0,0,0.15);

/* Transitions */
--transition-fast: 200ms ease;
--transition-base: 400ms ease;
--transition-slow: 800ms ease;
--transition-very-slow: 1200ms ease;
```

## Breakpoints

| Label | Width | Target |
|-------|-------|--------|
| `xs` | 375px | iPhone SE |
| `sm` | 640px | Grand mobile |
| `md` | 768px | Tablette |
| `lg` | 1024px | Petit desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1920px | Grand écran |

## Architecture Atomique

```
components/
├── atoms/
│   ├── Button.tsx              (< 150 lignes)
│   ├── Heading.tsx             (< 150 lignes)
│   ├── Text.tsx                (< 150 lignes)
│   ├── Image.tsx               (< 150 lignes)
│   ├── Icon.tsx                (< 150 lignes)
│   ├── Badge.tsx               (< 150 lignes)
│   ├── Divider.tsx             (< 150 lignes)
│   ├── Tag.tsx                 (< 150 lignes)
│   ├── Skeleton.tsx            (< 150 lignes)
│   └── Cursor.tsx              (< 150 lignes)
│
├── molecules/
│   ├── NavigationItem.tsx      (< 150 lignes)
│   ├── ProductCard.tsx         (< 150 lignes)
│   ├── TestimonialCard.tsx     (< 150 lignes)
│   ├── SocialLink.tsx          (< 150 lignes)
│   ├── TimelineStep.tsx        (< 150 lignes)
│   ├── ContactForm.tsx         (< 150 lignes)
│   ├── MapPin.tsx              (< 150 lignes)
│   └── Frame.tsx               (< 150 lignes)
│
├── organisms/
│   ├── Header.tsx              (< 150 lignes)
│   ├── Footer.tsx              (< 150 lignes)
│   ├── HeroSection.tsx         (< 150 lignes)
│   ├── SavoirFaireSection.tsx  (< 150 lignes)
│   ├── ProductsSection.tsx     (< 150 lignes)
│   ├── TestimonialsSection.tsx (< 150 lignes)
│   ├── ContactSection.tsx      (< 150 lignes)
│   ├── MapSection.tsx          (< 150 lignes)
│   └── InstagramFeed.tsx       (< 150 lignes)
│
└── templates/
    ├── HomeTemplate.tsx        (< 150 lignes)
    ├── SavoirFaireTemplate.tsx (< 150 lignes)
    ├── AboutTemplate.tsx       (< 150 lignes)
    ├── ContactTemplate.tsx     (< 150 lignes)
    └── LegalTemplate.tsx       (< 150 lignes)
```

---

# Architecture des Pages

## Page 1 — `/` Accueil

### Sections (dans l'ordre)

| Section | Direction 1 (Rustique) | Direction 2 (Chic) |
|---------|----------------------|-------------------|
| **Hero** | Four à bois — cercle typographique | Salon — cadre vitrine + plaque laiton |
| **Savoir-faire** | Mosaïque asymétrique "Les Mains" | Galerie de tableaux "L'Atelier" |
| **Produits vedettes** | Carrousel horizontal "Le Levain" | Vitrine marbre "La Vitrine" |
| **Témoignages** | Papier kraft épinglé au mur | Lettres manuscrites dans des enveloppes |
| **Instagram** | Fil de lin avec photos épinglées | Médaillons dorés en grille |
| **Footer** | Carte Nantes dessinée à la main | Cheminée en marbre |

### Layout Non-Conventionnel
- **Rustique** : Hero en cercle, pas de rectangle
- **Chic** : Hero encadré comme un tableau, pas de full-width

## Page 2 — `/savoir-faire`

### Sections

| Section | Direction 1 (Rustique) | Direction 2 (Chic) |
|---------|----------------------|-------------------|
| **Hero** | Mains enfarinées en macro | Outils de boulanger sur velours |
| **Étapes** | Timeline verticale avec fil de lin | Horloge comtoise — timeline circulaire |
| **Matières premières** | Sachets de farine ouverts | Ingrédients en bocaux de verre |
| **Atelier** | Vidéo en plein écran (fournil) | Diptyque photo/dessin technique |
| **Footer** | Identique accueil | Identique accueil |

### Layout Non-Conventionnel
- **Rustique** : Timeline avec un vrai fil qui traverse la page
- **Chic** : Timeline en cercle (comme un cadran d'horloge)

## Page 3 — `/à-propos`

### Sections

| Section | Direction 1 (Rustique) | Direction 2 (Chic) |
|---------|----------------------|-------------------|
| **Hero** | Portrait de Marie dans le fournil | Portrait de Marie en médaillon doré |
| **Histoire** | Parchemin déroulé au scroll | Livre relié cuir qui s'ouvre |
| **Valeurs** | 3 piliers en bois gravé | 3 piliers en marbre |
| **Équipe** | Photos en polaroid épinglées | Portraits en cadre ovale |
| **Chiffres** | Tableau noir à la craie | Plaques de laiton gravées |
| **Footer** | Identique accueil | Identique accueil |

### Layout Non-Conventionnel
- **Rustique** : Parchemin qui se déroule horizontalement
- **Chic** : Livre qui s'ouvre (effet 3D CSS)

## Page 4 — `/contact`

### Sections

| Section | Direction 1 (Rustique) | Direction 2 (Chic) |
|---------|----------------------|-------------------|
| **Hero** | Comptoir en bois — formulaire intégré | Bureau en marbre — formulaire intégré |
| **Infos** | Étiquettes de sac de farine | Cartes de visite en argentique |
| **Carte** | Carte Nantes dessinée à la main | Carte Nantes style XVIIIe |
| **Horaires** | Tableau noir | Cadre doré avec parchemin |
| **Footer** | Identique accueil | Identique accueil |

### Layout Non-Conventionnel
- **Rustique** : Le formulaire est "sur" le comptoir (perspective isométrique)
- **Chic** : Le formulaire est sur un bureau avec écritoire

## Page 5 — `/mentions-légales`

### Sections

| Section | Direction 1 (Rustique) | Direction 2 (Chic) |
|---------|----------------------|-------------------|
| **Contenu** | Rouleau de papier kraft | Parchemin dans un cadre |
| **Footer** | Identique accueil | Identique accueil |

### Layout Non-Conventionnel
- **Rustique** : Texte qui se déroule comme un rouleau
- **Chic** : Texte présenté comme un acte notarié

---

# Signature d'Animation

## Animations Transversales (les deux directions)

### 1. Smooth Scroll — Lenis
```typescript
// lib/lenis.ts
// Configuration Lenis avec easing personnalisé
// Durée : 1.2s, easing : (0.25, 0.1, 0.25, 1)
// Respecte prefers-reduced-motion
```

### 2. Entrée de Page
```typescript
// Direction 1 : Grain overlay → se dissipe (farine soufflée)
// Direction 2 : Rideau → s'ouvre (velours)
// Technique : Framer Motion <motion.div> avec clip-path
```

### 3. Révélation au Scroll
```typescript
// Technique : GSAP ScrollTrigger + clip-path
// Direction 1 : Forme organique (irrégulière)
// Direction 2 : Forme géométrique (carré/cercle)
// Threshold : 0.3, once: true
```

### 4. Parallax
```typescript
// Technique : GSAP ScrollTrigger + yPercent
// Direction 1 : Ingrédients flottants (vitesses 0.1-0.3)
// Direction 2 : Lustres qui se balancent (rotation 2-5deg)
```

### 5. Hover
```typescript
// Technique : Framer Motion whileHover
// Direction 1 : Scale 1.05 + grain overlay
// Direction 2 : Scale 1.02 + gold border glow
```

### 6. Transition de Page
```typescript
// Technique : GSAP Morph
// Direction 1 : Forme de pain qui pétrit
// Direction 2 : Cadre qui se referme
```

## Animations Spécifiques

### Direction 1 — Rustique
| Animation | Technique | Durée |
|-----------|-----------|-------|
| Grain texture | CSS @keyframes + overlay PNG | Continu |
| Pétrissage morph | GSAP MorphSVG | 1.5s |
| Farine soufflée | Framer Motion particles | 2s |
| Fil qui se déroule | GSAP DrawSVG | 3s |
| Braises (loading) | CSS animation + box-shadow | 0.8s loop |

### Direction 2 — Chic
| Animation | Technique | Durée |
|-----------|-----------|-------|
| Dorure shimmer | CSS @keyframes + background-position | Continu |
| Cadre reveal | GSAP Scale + Rotate | 1.2s |
| Rideau ouverture | Framer Motion clip-path | 1.5s |
| Lustre balancement | GSAP rotation | 4s loop |
| Encre qui sèche | GSAP DrawSVG | 2s |

---

# Recommandation

## Approche Préconisée

**Fusionner les deux directions** plutôt que d'en choisir une.

La tension créative mentionnée dans le brief — *Artisanal & Texturé × Haussmannien / Classique* — est la signature même du projet. La proposition la plus forte est de **laisser les deux directions coexister** :

### Principe de Coexistence

| Contexte | Direction |
|----------|-----------|
| **Header / Navigation** | Haussmannien Chic — corniche dorée, lettres élégantes |
| **Hero** | Haussmannien Chic — cadre vitrine, mise en scène |
| **Sections contenu** | Authentique & Rustique — textures, matières, organicité |
| **Produits** | Authentique & Rustique — main, farine, matière brute |
| **Footer** | Haussmannien Chic — marbre, cheminée, médaillons |
| **Animations entrée** | Haussmannien Chic — rideau qui s'ouvre |
| **Animations scroll** | Authentique & Rustique — grain, textures organiques |
| **Typographie titres** | Haussmannien Chic — Cormorant Garamond |
| **Typographie corps** | Authentique & Rustique — Satoshi chaleureux |
| **Curseur** | Authentique & Rustique — graine de blé |

### Pourquoi cette fusion ?

1. **Le brief le demande explicitement** : "collision délibérée, aucun compromis lissant les oppositions"
2. **Création d'une signature unique** : aucun site de boulangerie ne mélange rusticité et raffinement
3. **Narration visuelle** : le parcours utilisateur va du chic (première impression) vers l'authentique (découverte du produit)
4. **Différenciation concurrentielle** : Poilâne est 100% rustique, Ladurée est 100% chic — Le Fournil de Marie est les deux

---

## Prochaines Étapes

1. ✅ Valider une direction (ou la fusion proposée)
2. 🎨 Créer le design system complet (tokens Tailwind 4)
3. 🧱 Implémenter les atoms → molecules → organisms
4. 📄 Produire les 5 pages complètes
5. 🎬 Intégrer les animations (Framer Motion + GSAP + Lenis)
6. 📱 Valider responsive 5 breakpoints
7. ✅ Présenter pour validation finale

---

*Proposition design par @designer — En attente de validation*