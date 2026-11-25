<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Règles projet

- **Conteneur de section** : toute section (existante ou future) doit être enveloppée dans le composant `Container` de `@/components/common/container` — largeur `max-w-7xl` et padding horizontal `px-5 xl:px-8`. Ne jamais réimplémenter ces classes à la main ni utiliser d'autres largeurs/paddings de conteneur de page.
