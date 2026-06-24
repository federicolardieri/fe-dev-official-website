---
paths:
  - "src/components/**"
  - "src/app/**/*.tsx"
  - "src/app/**/*.css"
---

# Regole Brand & UI

## Token CSS (non usare valori raw)
| Token Tailwind | Valore | Uso |
|---|---|---|
| `bg-primary` / `text-primary` | `#7A3EF0` | Viola brand |
| `bg-background` | `#0B0B0F` | Sfondo dark |
| `text-foreground` | `#FFFFFF` | Testo principale |
| `text-muted` | `#9CA3AF` | Testo secondario |

Preferire sempre i token sopra ai valori HEX diretti. Se serve una variante opacity, usare `primary/20`, `primary/40`, ecc.

## Regole hard del brand
- **Dark UI only** — nessuna classe `light:` o `bg-white` visibile
- **No emoji** — mai in testo visibile all'utente
- **No stock images** — solo foto reali di Federico o SVG custom
- **`.glow-text`** → `text-shadow` viola; usarla solo su testo primario in evidenza (headline), mai su body text
- **`MouseAura`** → già incluso nel `RootLayout`, non duplicare
- **`Starfield`** → canvas 3D con stelle viola; usare solo in Hero (`page.tsx`) e pagina Projects e come-lavoro

## Animazioni
- Usare Framer Motion per transizioni di entrata (`whileInView`, `initial/animate`)
- Pattern standard: `{ opacity: 0, y: 30 }` → `{ opacity: 1, y: 0 }` con `duration: 0.6`
- `viewport: { once: true }` sempre — le animazioni si triggerano una sola volta
- No loop continui, tranne `FloatingWrapper` in `/come-lavoro` (eccezione intenzionale)
- No animazioni eccessive o che distraggono dalla lettura

## Componenti UI
- **Button**: 4 varianti (`default`, `outline`, `ghost`, `destructive`) — vedere `src/components/ui/Button.tsx`
- **Card**: wrapper con bordo e sfondo sottile
- **LogoBar**: barra loghi tech con scroll
- Hover card: `hover:border-primary/30 transition-colors duration-300` + top highlight gradient

## Tono UI
- Testo diretto, senza preamboli
- CTA chiari: "Prenota la Call", "Hai domande?"
- Nessun hype marketing
