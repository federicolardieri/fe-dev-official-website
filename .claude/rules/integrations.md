---
paths:
  - "src/app/api/**"
  - "src/lib/**"
  - "src/components/sections/Contact.tsx"
---

# Integrazioni esterne

## API Contact (`src/app/api/contact/route.ts`)
- **Metodo**: POST
- **Campi**: `{ nome, email, servizio, website_url }`
- **Honeypot**: `website_url` — se compilato, restituisce `{ success: true }` finto senza chiamare n8n
- **Forward**: POST a `N8N_WEBHOOK_URL` con header `x-webhook-secret: N8N_WEBHOOK_SECRET`
- **Env richieste** (in `.env.local`):
  - `N8N_WEBHOOK_URL`
  - `N8N_WEBHOOK_SECRET`

## Variabili d'ambiente
| Variabile | Scope | Descrizione |
|---|---|---|
| `N8N_WEBHOOK_URL` | server-only | URL webhook n8n per form contatti |
| `N8N_WEBHOOK_SECRET` | server-only | Header di autenticazione webhook |

File `.env.local` alla root del progetto (non in `frontend/`).

- Nessuna variabile con prefisso `NEXT_PUBLIC_` attualmente in uso
- Mai esporre queste variabili al client bundle

## Calendly
- URL centralizzato in `src/lib/constants.ts` come `CALENDLY_URL`
- Usato in: Hero, Header, projects page, come-lavoro page
- Non duplicare il link nei singoli componenti

## SEO / URL di produzione
- **Dominio corretto**: `https://federicolardieri.com` (configurato in `layout.tsx`)
- **Attenzione**: `robots.ts` e `sitemap.ts` usano ancora `https://fe-dev.vercel.app` — da aggiornare prima del go-live
- JSON-LD schema (Person + WebSite) è nel `RootLayout` in `layout.tsx`
