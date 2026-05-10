import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Award, BrainCircuit, Code, Terminal, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const certifications = [
    {
        title: "Full Stack Web Developer (Aulab)",
        description: "Hackademy intensiva di 400 ore. Sviluppo web full-stack, inclusi HTML, CSS, Javascript, PHP, Framework Laravel e Metodologie Agili.",
        icon: Code,
        pdfPath: "/Certificazioni/ktpkx6hh_1761651343456.pdf",
        tags: ["PHP", "Laravel", "Javascript"],
    },
    {
        title: "Building with the Claude API",
        description: "Integrazione di applicazioni basate sull'API di Anthropic Claude, per creare soluzioni di AI generativa scalabili e intelligenti.",
        icon: BrainCircuit,
        pdfPath: "/Certificazioni/certificate-n77pabbujaqk-1777661816.pdf",
        tags: ["Anthropic API", "AI Integration"],
    },
    {
        title: "Claude 101",
        description: "Fondamenti dei modelli Claude, architetture, e i principi per creare prompt efficaci per sistemi di Intelligenza Artificiale.",
        icon: FileText,
        pdfPath: "/Certificazioni/certificate-g3q4h7trm6fe-1777691097.pdf",
        tags: ["Prompt Engineering", "LLM Fundamentals"],
    },
    {
        title: "Claude Code 101",
        description: "Introduzione all'utilizzo di Claude per l'assistenza allo sviluppo software, la scrittura, il refactoring e il debugging di codice.",
        icon: Terminal,
        pdfPath: "/Certificazioni/certificate-djm2bopsmmow-1777696341.pdf",
        tags: ["AI Coding", "Refactoring"],
    },
    {
        title: "Claude Code in Action",
        description: "Applicazione pratica e avanzata di Claude per l'ingegneria del software, per accelerare la delivery e la qualità del codice in progetti reali.",
        icon: Award,
        pdfPath: "/Certificazioni/certificate-fo7nqykx6fqh-1778026781.pdf",
        tags: ["Advanced AI", "Software Engineering"],
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Certificazioni & <span className="text-primary glow-text">Formazione</span>
                    </h2>
                    <p className="text-gray-400">
                        Il mio percorso di studi e i riconoscimenti ottenuti per le competenze in sviluppo web e intelligenza artificiale.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <Card key={index} className="group border-white/5 bg-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between">
                            <CardHeader>
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <cert.icon className="h-6 w-6" />
                                    </div>
                                    <Link href={cert.pdfPath} target="_blank">
                                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/5">
                                            Vedi PDF
                                        </Button>
                                    </Link>
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                                <CardDescription className="text-base text-gray-400 mt-2">
                                    {cert.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mt-4 border-t border-white/5 pt-4">
                                    {cert.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/5 text-primary/80 border border-primary/10 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
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
