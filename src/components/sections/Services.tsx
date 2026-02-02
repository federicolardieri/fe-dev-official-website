import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Bot, CircuitBoard, LayoutDashboard, Database, Globe, Zap } from "lucide-react";

const services = [
    {
        title: "Automazioni AI",
        description: "Sostituisci compiti manuali ripetitivi con agenti intelligenti. Dal supporto clienti all'inserimento dati, lascia che l'AI faccia il lavoro sporco.",
        icon: Bot,
    },
    {
        title: "Automazione Processi",
        description: "Connetti i tuoi strumenti esistenti (CRM, Slack, Email) per creare flussi di lavoro fluidi che funzionano 24/7 senza supervisione.",
        icon: CircuitBoard,
    },
    {
        title: "Web App Personalizzate",
        description: "Applicazioni web scalabili e ad alte prestazioni costruite con Next.js. Create su misura per la logica e le esigenze del tuo business.",
        icon: Globe,
    },
    {
        title: "Internal Tools & Dashboard",
        description: "Potenzia il tuo team con pannelli di amministrazione e dashboard personalizzate che forniscono insight e controllo in tempo reale.",
        icon: LayoutDashboard,
    },
    {
        title: "Sviluppo SaaS",
        description: "Sviluppo end-to-end di prodotti Software-as-a-Service, dal MVP all'architettura di produzione scalabile.",
        icon: Database,
    },
    {
        title: "Integrazioni API",
        description: "Colma il divario tra i tuoi software disconnessi. Costruisco API robuste per garantire un flusso di dati fluido.",
        icon: Zap,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Soluzioni, non solo Servizi
                    </h2>
                    <p className="text-gray-400">
                        Non scrivo solo codice. Costruisco sistemi che risolvono problemi di business reali e creano leva.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card key={index} className="group border-white/5 bg-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
