# Convenzioni di progetto

## Naming
- Componenti React: PascalCase (`Hero.tsx`, `LogoBar.tsx`)
- File utility/lib: camelCase (`utils.ts`, `constants.ts`)
- Classi CSS custom: kebab-case (`.glow-text`)
- Variabili/funzioni in codice: inglese; testi visibili all'utente: italiano

## Pattern obbligatori
- Usare sempre `cn()` da `src/lib/utils.ts` per classi Tailwind condizionali
- URL condivisi vanno in `src/lib/constants.ts` — mai hardcodati nei componenti
- Classi Tailwind custom vanno in `globals.css` — mai in `tailwind.config` (non esiste)
- `"use client"` solo quando strettamente necessario (hook, event listener, framer-motion)

## Tailwind v4
- I token del design system sono in `src/app/globals.css` nel blocco `@theme {}`
- Non usare `tailwind.config.js` — non esiste in questo progetto
- Classi custom si scrivono come CSS puro in `globals.css`

## Struttura pagine
- Ogni sezione della home è un componente in `src/components/sections/`
- L'ordine in `page.tsx` è: Hero → LogoBar → ProblemSolution → ServicePackages → Process → CaseStudies → AboutMe → Certifications → Contact
- Le pagine dedicate (`/projects`, `/come-lavoro`) hanno il proprio `layout.tsx` per i metadata

## SVG illustrations
- Le illustrazioni in `/come-lavoro` sono SVG inline definite come componenti React nello stesso file `page.tsx` — non file separati
- `FloatingWrapper` applica animazione float continua con Framer Motion (eccezione intenzionale alla regola "no loop continui")
