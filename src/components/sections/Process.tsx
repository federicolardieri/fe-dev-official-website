"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Analisi",
        description: "Analizziamo insieme i processi della tua azienda. Identifico dove l'AI può intervenire e stimo il risparmio reale in termini di tempo e costi.",
        duration: "1–2 giorni",
    },
    {
        number: "02",
        title: "Progettazione",
        description: "Progetto l'automazione su misura, integrata con i software che già usi — CRM, email, calendario, WhatsApp. Nessuna migrazione necessaria.",
        duration: "3–5 giorni",
    },
    {
        number: "03",
        title: "Deploy & Supporto",
        description: "Implemento il sistema, lo testo insieme a te e ti formo per gestirlo in autonomia. Disponibile per assistenza e ottimizzazioni post-lancio.",
        duration: "1–2 settimane",
    },
];

export function Process() {
    return (
        <section id="processo" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/15 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-primary/20 pointer-events-none z-10" />

            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                    className="mb-16 text-center max-w-2xl mx-auto"
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-[0.15em] uppercase mb-6">
                        Come Lavoro
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Semplice. Veloce. Misurabile.
                    </h2>
                    <p className="text-[#9CA3AF] text-lg">
                        Nessuna complessità tecnica per te. Ti accompagno dall&apos;analisi al lancio.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
                            className="group relative p-8 rounded-2xl border border-white/15 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_8px_40px_rgba(122,62,240,0.12)] hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Connector line (not last) */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30 z-10" />
                            )}

                            <div className="text-6xl font-bold text-primary/30 leading-none mb-6">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-[#9CA3AF] leading-relaxed mb-6">{step.description}</p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#9CA3AF]">
                                ⏱ {step.duration}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
