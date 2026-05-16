"use client";

import Link from "next/link";
import { Target, RefreshCw, Bell, Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/constants";

const services = [
    {
        number: "01",
        icon: Target,
        title: "Lead Automation",
        subtitle: "Dal contatto al CRM, senza toccare nulla",
        description: "Cattura i lead dal tuo sito o dalle campagne, li qualifica con l'AI, invia email personalizzate e aggiorna il CRM — in tempo reale, zero intervento manuale.",
        features: ["Qualificazione AI", "Email automatiche", "CRM Integration", "Notifiche istantanee"],
        accent: "from-violet-500/20 to-transparent",
    },
    {
        number: "02",
        icon: RefreshCw,
        title: "Lead Reactivation",
        subtitle: "Riattiva i lead e clienti dormenti",
        description: "Recupera i contatti che non rispondono da settimane. Sequenze AI personalizzate che riprendono la conversazione nel momento giusto, con il messaggio giusto.",
        features: ["Sequenze di riattivazione", "AI Personalization", "Multi-canale", "Scoring lead"],
        accent: "from-purple-500/15 to-transparent",
    },
    {
        number: "03",
        icon: Bell,
        title: "Follow Up Automation",
        subtitle: "Nessun lead lasciato senza risposta",
        description: "Ogni nuovo contatto riceve follow-up automatici e personalizzati — dopo la call, dopo l'offerta, dopo il silenzio. Il tuo pipeline rimane sempre caldo.",
        features: ["Follow-up post-call", "Reminder automatici", "Sequenze email/SMS", "Dashboard tracking"],
        accent: "from-indigo-500/15 to-transparent",
    },
    {
        number: "04",
        icon: Phone,
        title: "AI Receptionist",
        subtitle: "Rispondi ai clienti h24, senza personale",
        description: "Un agente vocale e/o chat intelligente che gestisce prenotazioni, domande frequenti e cancellazioni. Integrato con il tuo calendario, disponibile 24/7.",
        features: ["Voce AI (Vapi)", "Chat integrata", "Sync Calendario", "FAQ automatiche"],
        accent: "from-violet-600/15 to-transparent",
    },
    {
        number: "05",
        icon: MessageCircle,
        title: "WhatsApp Agent",
        subtitle: "Comunicazione automatica su WhatsApp",
        description: "Conferme appuntamento, follow-up post-vendita, notifiche di stato e risposte ai clienti — tutto via WhatsApp Business API, tutto in automatico.",
        features: ["WhatsApp Business API", "Follow-up automatici", "Notifiche real-time", "Risposte AI"],
        accent: "from-green-500/10 to-transparent",
    },
];

type Service = (typeof services)[number];

export function ServicePackages() {
    const firstThree = services.slice(0, 3);
    const lastTwo = services.slice(3);

    return (
        <section id="servizi" className="py-24 bg-[#F4F4F8] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none z-10" />
            <div className="container mx-auto px-6 relative z-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-2xl"
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-[0.15em] uppercase mb-6">
                        Servizi
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0F0F14] leading-tight mb-4">
                        Cosa posso automatizzare per te.
                    </h2>
                    <p className="text-[#64647A] text-lg">
                        Cinque aree di intervento, ognuna progettata per eliminare un collo di bottiglia specifico nel tuo business.
                    </p>
                </motion.div>

                {/* Grid 3 + 2 */}
                <div className="space-y-6">
                    {/* Row 1: 3 cards */}
                    <div className="grid gap-6 lg:grid-cols-3">
                        {firstThree.map((s, i) => (
                            <ServiceCard key={s.number} service={s} index={i} />
                        ))}
                    </div>

                    {/* Row 2: 2 cards centrate */}
                    <div className="grid gap-6 lg:grid-cols-2 lg:max-w-[66%] lg:mx-auto">
                        {lastTwo.map((s, i) => (
                            <ServiceCard key={s.number} service={s} index={i + 3} />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 text-center"
                >
                    <p className="text-[#64647A] text-sm">
                        Hai un processo specifico che vuoi automatizzare?{" "}
                        <span className="text-primary font-semibold">
                            Costruiamo insieme una soluzione su misura.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function ServiceCard({ service: s, index }: { service: Service; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="group bg-white border border-black/[0.08] rounded-2xl p-8 flex flex-col hover:border-primary/40 hover:shadow-[0_8px_40px_rgba(122,62,240,0.18)] hover:scale-[1.015] transition-all duration-300 relative overflow-hidden"
        >
            {/* Gradient accent top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Number + Icon */}
            <div className="flex items-center justify-between mb-8">
                <span className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors leading-none select-none">
                    {s.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <s.icon className="w-6 h-6" />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-xl font-bold text-[#0F0F14] mb-1">{s.title}</h3>
                <p className="text-primary text-sm font-semibold mb-4">{s.subtitle}</p>
                <p className="text-[#64647A] leading-relaxed mb-6 text-sm">{s.description}</p>

                <div className="space-y-2">
                    {s.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span className="text-xs text-[#0F0F14]">{f}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <Link
                href={CALENDLY_URL}
                target="_blank"
                className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300"
            >
                Parliamone <ArrowRight className="w-4 h-4" />
            </Link>
        </motion.div>
    );
}
