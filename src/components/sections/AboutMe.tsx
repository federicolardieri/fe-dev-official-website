import { Button } from "@/components/ui/Button";
import { CheckCircle2, User, Code2, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function AboutMe() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-background">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
                                ABOUT
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                                Federico Lardieri: <br />
                                <span className="text-primary glow-text">Web Developer & AI Specialist</span>
                            </h2>
                            <p className="text-xl text-gray-300 font-medium max-w-xl">
                                Sono Federico, Junior Web Developer con focus su backend, automazioni e sistemi AI.
                                Costruisco prodotti che trasformano processi manuali in flussi semplici e scalabili.
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-400 max-w-xl leading-relaxed">
                            <p>
                                Arrivo dal mondo reale: lavoro operativo, gestione clienti e progetti con scadenze.
                                Oggi unisco sviluppo web e automazione per creare soluzioni concrete:
                                web app, API, dashboard e integrazioni che fanno risparmiare tempo e riducono l’errore umano.
                            </p>
                            <p>
                                Il mio obiettivo è crescere in un team tech serio, continuando a sviluppare progetti freelance selezionati.
                            </p>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-4">
                            {[
                                { text: "Backend-first: logica, database, API.", icon: Code2 },
                                { text: "Approccio pratico: progetto → release.", icon: Rocket },
                                { text: "Automazioni & AI: workflow intelligenti.", icon: ShieldCheck },
                                { text: "Affidabilità: comunicazione e puntualità.", icon: CheckCircle2 },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <div className="mt-1 p-1 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-300 text-sm leading-snug">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Facts Card */}
                    <div className="relative">
                        {/* Decorative Background Elements */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl -z-10 opacity-50" />

                        <div className="glass-card p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl space-y-8 relative overflow-hidden">
                            {/* Profile Header (Minimal) */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                    <User className="w-8 h-8" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">Federico Lardieri</div>
                                    <div className="text-primary text-sm font-medium">Web Developer & AI Automation Specialist</div>
                                </div>
                            </div>

                            {/* Quick Facts */}
                            <div className="space-y-4 border-y border-white/5 py-6">
                                {[
                                    { label: "Ruolo", value: "Junior Web Developer" },
                                    { label: "Focus", value: "Web Developer Full Stack + Automazioni + AI" },
                                    { label: "Disponibile", value: "Italia / Remoto" },
                                    { label: "Stack Corrente", value: "Laravel • PHP • MySQL • Next.js" },
                                ].map((fact, i) => (
                                    <div key={i} className="flex justify-between items-center gap-4">
                                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">{fact.label}</span>
                                        <span className="text-gray-200 text-sm font-medium text-right">{fact.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack Chips */}
                            <div className="space-y-4">
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Competenze Tech</span>
                                <div className="flex flex-wrap gap-2">
                                    {["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind", "Next.js", "REST API", "Git/GitHub", "n8n"].map((tech) => (
                                        <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-primary/30 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col gap-3 pt-4">
                                <Link href="/projects" className="w-full">
                                    <Button variant="outline" className="w-full justify-center" size="lg">
                                        Guarda i progetti
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
