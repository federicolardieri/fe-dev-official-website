import { Button } from "@/components/ui/Button";
import { Starfield } from "@/components/ui/Starfield";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowLeft, Github, Briefcase, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Web Developer & Progetti AI",
    description: "Esplora i progetti di Federico Lardieri: applicazioni web moderne, integrazioni API e sistemi di automazione AI per aziende.",
    keywords: ["portfolio web developer", "progetti n8n", "automazioni AI", "casi studio sviluppo web"],
};

const projects = [
    {
        title: "Preventivo Veloce",
        problem: "I professionisti perdono ore a creare preventivi manualmente, senza tracciamento delle aperture o sistema di firma digitale.",
        solution: "SaaS che genera preventivi in pochi secondi con l'aiuto dell'AI. Include invio email, storico, notifiche all'apertura e accettazione con firma del preventivo.",
        stack: ["SaaS", "AI Integration", "Next.js", "Email Automation"],
        type: "SaaS",
        siteUrl: "https://www.ilpreventivoveloce.it"
    },
    {
        title: "AI Receptionist per Cliniche Dentali",
        problem: "Le cliniche perdono chiamate e appuntamenti fuori orario, e lo staff spende ore al telefono per gestire le prenotazioni.",
        solution: "Assistente vocale AI che risponde h24. Gestisce nuove prenotazioni, modifiche, cancellazioni, Q&A e si sincronizza automaticamente con il calendario della clinica.",
        stack: ["n8n", "Vapi", "Claude Code"],
        type: "Voice AI"
    },
    {
        title: "Automazione Lead, Notifiche e CRM",
        problem: "I lead arrivavano da più canali e venivano gestiti manualmente, con rischio di ritardi e perdita di opportunità.",
        solution: "Raccolta dei lead da form di contatto, qualificazione lead con AI, notifica in azienda tramite email/WhatsApp, salvataggio nel CRM e follow up cliente.",
        stack: ["Form Handling", "API", "Automazioni", "CRM Integration"],
        type: "AI Automation"
    },
    {
        title: "Sito Web Vetrina – Azienda Campi Sportivi",
        problem: "L’azienda aveva bisogno di una presenza online professionale per presentare servizi, progetti realizzati e contatti, migliorando la credibilità commerciale.",
        solution: "Sviluppo di un sito web moderno e responsive, con struttura chiara dei servizi, sezione lavori e contatto diretto, pensato per convertire visitatori in richieste.",
        stack: [],
        type: "Web Design",
        siteUrl: "https://www.playinnovationgroup.com/#home"
    },
    {
        title: "E-commerce Web App Completo (Aulab)",
        problem: "Necessità di una piattaforma e-commerce completa con gestione utenti, prodotti e ordini.",
        solution: "Sviluppo di un’applicazione web e-commerce con autenticazione, CRUD prodotti, carrello, gestione ordini e ruoli (admin / revisore).",
        stack: ["Laravel", "PHP", "MySQL", "CRUD", "Authentication"],
        type: "Full Stack",
        githubUrl: "https://github.com/federicolardieri/E-commerce-WebSite"
    },
    {
        title: "Generatore PDF Intelligente per Preventivi",
        problem: "La creazione manuale dei preventivi richiedeva tempo ed era soggetta a errori di inserimento.",
        solution: "Sistema che genera automaticamente preventivi PDF a partire dai dati inseriti, riducendo il lavoro manuale e standardizzando il formato dei documenti.",
        stack: ["Backend Logic", "PDF Generation", "Automazioni"],
        type: "Automation"
    },
    {
        title: "Risposte Email Automatiche con AI",
        problem: "La gestione manuale delle email richiedeva tempo e riduceva la velocità di risposta.",
        solution: "Sistema che analizza le email in ingresso, genera una risposta tramite AI, invia un riepilogo su WhatsApp/Telegram e permette l’approvazione manuale prima dell’invio.",
        stack: ["AI Integration", "Email Handling", "Workflow Automation", "Messaging APIs"],
        type: "AI & Automation"
    },
    {
        title: "Lead Scraper & Outreach Dashboard",
        problem: "La ricerca dei lead e l'invio di email a freddo venivano gestiti su fogli Excel scollegati, senza statistiche e con follow-up manuali lenti.",
        solution: "Dashboard integrata con Apify per estrarre lead. Permette di gestire gli stati, inviare email in automatico ai contatti nuovi e programmare follow-up dopo X giorni. Include storico e statistiche di conversione.",
        stack: ["Apify", "Next.js", "Email Automation", "Web Scraping"],
        type: "Internal Tool"
    }
];

export default function ProjectsPage() {
    return (
        <main className="relative min-h-screen bg-black">
            {/* Background Layer */}
            <div className="fixed inset-0 z-0">
                <Starfield />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
            </div>

            <div className="relative z-10 pt-32 pb-24">
                <div className="container mx-auto px-6">

                    {/* Hero Section */}
                    <div className="max-w-3xl mb-24">
                        <Link
                            href="/"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Torna alla Home
                        </Link>
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider">
                                Progetti
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                                Portfolio <span className="text-primary glow-text">Web Developer</span> & Soluzioni AI
                            </h1>
                            <p className="text-xl text-gray-400">
                                Scopri come applico lo sviluppo full stack e l'intelligenza artificiale per risolvere problemi di business reali.
                            </p>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="group relative border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 rounded-2xl"
                            >
                                <div className="p-8 space-y-8">
                                    {/* Header */}
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest">{project.type}</span>
                                            <CardTitle className="text-2xl md:text-3xl text-white group-hover:text-primary/90 transition-colors">
                                                {project.title}
                                            </CardTitle>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="grid gap-6">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">
                                                <Briefcase className="w-3 h-3" /> Problema
                                            </div>
                                            <p className="text-gray-400 leading-relaxed italic">
                                                "{project.problem}"
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary/70 text-xs font-bold uppercase tracking-widest mb-2">
                                                <FileText className="w-3 h-3" /> Soluzione
                                            </div>
                                            <p className="text-gray-300 leading-relaxed font-medium">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="pt-6 border-t border-white/5">
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/5 border border-white/10 text-gray-500 group-hover:border-primary/30 group-hover:text-gray-300 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action buttons */}
                                    {(project.githubUrl || project.siteUrl) && (
                                        <div className="pt-4 flex gap-4">
                                            {project.githubUrl && (
                                            <Link href={project.githubUrl} target="_blank" className="w-full">
                                                <Button variant="outline" size="sm" className="w-full gap-2 border-primary/20 hover:border-primary/50 group/btn">
                                                    <Github className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                                                    Visualizza codice
                                                </Button>
                                            </Link>
                                            )}
                                            {project.siteUrl && (
                                            <Link href={project.siteUrl} target="_blank" className="w-full">
                                                <Button variant="outline" size="sm" className="w-full gap-2 border-primary/20 hover:border-primary/50 group/btn">
                                                    <Globe className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                                                    Visita il sito
                                                </Button>
                                            </Link>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-32 text-center space-y-10 py-16 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white tracking-tight">Hai in mente un progetto?</h2>
                            <p className="text-gray-400">Parliamo di come posso aiutarti a realizzarlo.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://calendly.com/federico-lardieri22/30min?month=2026-01" target="_blank">
                                <Button size="lg" className="px-10 h-14 bg-primary hover:bg-primary/90 text-white font-bold shadow-xl shadow-primary/20">
                                    Parliamo del tuo progetto
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
