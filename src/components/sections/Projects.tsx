import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Piattaforma Prenotazioni Sportive",
        description: "Web App completa per centri sportivi. Sistema di prenotazione campi, gestione pagamenti e dashboard amministrativa per monitorare le entrate.",
        tags: ["Next.js", "Stripe", "Dashboard"],
    },
    {
        title: "AI Lead Gen System",
        description: "Sistema automatizzato che qualifica i lead, invia risposte email immediate e notifica il team commerciale su Telegram/WhatsApp. Salvataggio automatico nel CRM.",
        tags: ["AI Agents", "CRM Automation", "WhatsApp API"],
    },
    {
        title: "Automazione Servizio Clienti",
        description: "Assistente virtuale integrato su WhatsApp che risponde h24, gestisce richieste di supporto e genera preventivi automatici basati sulle risposte dell'utente.",
        tags: ["Chatbot", "WhatsApp", "Preventivi Auto"],
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                            Lavori in Evidenza
                        </h2>
                        <p className="text-gray-400">
                            Esempi reali di come aiuto le aziende a scalare attraverso la tecnologia.
                        </p>
                    </div>
                    <Link href="/projects">
                        <Button variant="outline" className="group">
                            Vedi Tutti i Progetti
                            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="group border-white/5 bg-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full">
                            <CardHeader>
                                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                <CardDescription className="text-base text-gray-400">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
