---
priority: critical
scope: global
---
# Règles globales Atelier-CL

## Commandes shell — Préfixe RTK obligatoire
Toutes les commandes shell DOIVENT être préfixées par `rtk`.
- Correct : `rtk git status`, `rtk npm install`
- Incorrect : `git status`, `npm install`

## Architecture Atomique
- Aucun fichier `.tsx` ne dépasse 150 lignes
- Découper : atoms/ molecules/ organisms/ templates/

## Sécurité API
- Jamais de clé API côté client
- Variables d'environnement via process.env côté serveur uniquement

## Stack
- Next.js 16 App Router / Convex / Clerk / Tailwind 4 / Framer Motion

## Fin de projet — Build, Commit & Push
AVANT tout `rtk npm run build`, `rtk git commit` ou `rtk git push` en contexte de livraison :
STOP — afficher dans le chat : "✅ @qa validé. Je m'apprête à : build → commit → push. Confirmes-tu ? (OK/GO)"
Ne jamais enchaîner ces 3 opérations sans validation explicite du chef de projet.

## Déploiement GitHub — Workflow obligatoire

### 1. Créer le repo GitHub (outil MCP)
Toujours utiliser l'outil MCP `create_repository` — NE PAS demander une création manuelle.
- `name` : kebab-case du projet (ex : `volt-et-lumiere`)
- `private` : false par défaut
- `description` : "[Nom client] — Atelier-CL"
L'outil retourne `clone_url` — copier cette URL pour l'étape suivante.

### 2. Configurer la remote et pousser
```bash
rtk git remote add origin [clone_url de l'étape 1]
rtk git branch -M main
rtk git push -u origin main
```

### 3. Si le push échoue (authentification)
Configurer le credential manager Windows une seule fois :
```bash
rtk git config --global credential.helper manager
```
Puis relancer le push — Windows stocke les credentials pour tous les projets suivants.
Ne jamais mettre un token GitHub en clair dans le code ou dans un commit.
