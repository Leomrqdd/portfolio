# Redesign visuel (WIP)

Cette branche est **réservée** à un futur redesign visuel du portfolio.
Elle ne contient pas encore de changements d’UI : uniquement ce document de scaffolding.

## État actuel (ne pas se fier au README)

Le README racine est **obsolète**. Il décrit encore une direction « pixel hybrid » (Hero, Terminal, PixelRow, palette sombre, Silkscreen, etc.). Ces composants et cette direction **ne sont plus le layout courant**.

Le site actuel est une SPA **Vite + React + Tailwind v4** : layout CV clair, une page, déployée sur GitHub Pages (`lmrqd.xyz`).

## Points d’entrée pour le redesign

Quand le travail visuel commencera, partir de :

- `src/App.tsx` — composition de la page
- `src/index.css` — Tailwind v4 + tokens
- `src/components/Section.tsx` — composant de section partagé
- `src/data.ts` — contenu (profil, expériences, projets, etc.)

Ne pas réintroduire les anciens composants pixel / Hero / Terminal comme s’ils étaient encore la source de vérité.
