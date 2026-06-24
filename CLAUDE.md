# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Panoramica

Sito portfolio di Fe-Dev (Federico Lardieri — AI & Automation Studio). Next.js app alla root del repo. Il sito converte visitatori in lead tramite form contatto (→ n8n) e prenotazione call (→ Calendly).

## Stack

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS v4 (token via `@theme` in `globals.css`, no `tailwind.config`)
- Framer Motion, lucide-react
- `cn()` da `src/lib/utils.ts`

## Comandi (dalla root del progetto)

```bash
npm run dev      # Dev server → http://localhost:3000
npm run build    # Build produzione
npm run lint     # ESLint
```

## Variabili d'Ambiente (`.env.local`)

| Variabile | Descrizione |
|---|---|
| `N8N_WEBHOOK_URL` | URL webhook n8n per il form contatti |
| `N8N_WEBHOOK_SECRET` | Header di autenticazione del webhook |

## Note Critiche

- **SEO**: `robots.ts` e `sitemap.ts` usano ancora `fe-dev.vercel.app` — aggiornare a `federicolardieri.com` prima del go-live (il `layout.tsx` è già corretto)
- **Dettagli brand, animazioni, token CSS** → `.claude/rules/brand-ui.md`
- **Convenzioni naming e pattern** → `.claude/rules/conventions.md`
- **API contact, Calendly, SEO** → `.claude/rules/integrations.md`

---

## Adaptive Guardrails

Scan every entry below before starting any task. No exceptions.

This is a living correction log. When the user corrects you, or when a wrong assumption causes a bug, append a new entry immediately. Entries are permanent — never delete, only supersede.

### Entry format

N. [ACTIVATION] Directive — reason.

- **N**: Sequential number. Never reuse.
- **ACTIVATION**:
  - `ALWAYS` — Applies unconditionally to every task.
  - `NEVER` — Hard prohibition. Zero exceptions.
  - `WHEN:surface` — Fires only for a specific surface (e.g. `WHEN:git`, `WHEN:supabase`).

### Resolving contradictions

1. **Supersession** — `(supersedes #N)` kills entry N. Dead entries stay visible but ignored.
2. **Specificity** — narrower scope wins (`WHEN:x` beats `ALWAYS`).
3. **Recency** — higher entry number wins. Last resort only.

---

### Correction Log

<!-- Append new entries below. Do not edit above this line. -->
