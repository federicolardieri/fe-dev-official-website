# Fe-Dev | AI & Automation Studio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Typescript](https://img.shields.io/badge/Typescript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

Sito ufficiale di **Fe-Dev**, studio specializzato in sviluppo web moderno, sistemi AI e automazione dei processi. Questo progetto funge da vetrina per i servizi offerti e come dimostrazione tecnica di un'architettura frontend performante e sicura.

---

## 🚀 Caratteristiche Principali

- **Design Premium & Futuristico**: Interfaccia scura con accenti viola, animazioni fluide con Framer Motion e micro-interazioni curate.
- **Totalmente Responsive**: Ottimizzato per desktop, tablet e mobile con menu a comparsa dedicato.
- **Backend-as-a-Proxy**: Gestione sicura dei contatti tramite API Route per proteggere i webhook di automazione (n8n).
- **Performance State-of-the-Art**: Costruito con Next.js 15 e React 19 per una velocità di caricamento fulminea.
- **Effetti Dinamici**: Aura che segue il mouse, sistema stellare dinamico (Starfield) e componenti UI personalizzati.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animazioni**: [Framer Motion](https://www.framer.com/motion/)
- **Icone**: [Lucide React](https://lucide.dev/)

### Automazione & Integrazioni
- **Backend/Workflow**: [n8n](https://n8n.io/) per la gestione delle lead e notifiche automatiche.
- **Hosting**: Pronto per il deploy su Vercel o piattaforme simili.

## 📁 Struttura della Repo

```text
frontend/
├── src/
│   ├── app/           # Route, Layout e API (Next.js App Router)
│   ├── components/    # Componenti UI, Layout e Sezioni (Hero, Services, etc.)
│   ├── lib/           # Utility e configurazioni
│   └── public/        # Asset statici (logo, icone)
```

## ⚙️ Installazione Locale

1. Clona la repository:
   ```bash
   git clone https://github.com/federicolardieri/fe-dev-official-website.git
   cd fe-dev-official-website/frontend
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Configura le variabili d'ambiente (crea un file `.env.local`):
   ```env
   N8N_WEBHOOK_URL=il_tuo_webhook_qui
   N8N_WEBHOOK_SECRET=la_tua_chiave_segreta
   ```

4. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

## 🛡️ Sicurezza & Best Practices

Il progetto implementa un'architettura **Server-side Proxy**. Invece di chiamare direttamente i webhook n8n dal client (esponendo l'URL a spammer), le richieste passano per `/api/contact`, dove vengono validate e inviate con header di sicurezza cifrati.

---

## 📧 Contatti

🌍 Live Demo: https://fe-dev.vercel.app
- **LinkedIn**: [Federico Lardieri](https://www.linkedin.com/in/federico-lardieri-403282315/)
- **GitHub**: [@federicolardieri](https://github.com/federicolardieri)

---

Developed with ❤️ by [Federico Lardieri](https://github.com/federicolardieri)
