"use client";

import { motion } from "framer-motion";

const scenarios = [
    {
        type: "AI Receptionist",
        industry: "Studio Dentistico",
        problem: "Lo staff perdeva 2–3 ore al giorno a rispondere al telefono per prenotazioni e domande ripetitive.",
        solution: "Agente vocale AI che gestisce autonomamente nuove prenotazioni, modifiche, cancellazioni e FAQ — 24/7.",
        results: [
            { value: "–80%", label: "chiamate gestite manualmente" },
            { value: "40+", label: "appuntamenti/mese automatizzati" },
            { value: "h24", label: "operativo senza interruzioni" },
        ],
    },
    {
        type: "Lead Automation",
        industry: "Agenzia / Servizi B2B",
        problem: "I lead dai form venivano contattati con 24–48 ore di ritardo. Molte opportunità andavano perse.",
        solution: "Lead Automation con qualificazione AI, email personalizzata entro 60 secondi e notifica immediata al commerciale.",
        results: [
            { value: "<60s", label: "tempo di risposta al lead" },
            { value: "+35%", label: "tasso di conversione" },
            { value: "0", label: "interventi manuali richiesti" },
        ],
    },
    {
        type: "WhatsApp Agent",
        industry: "E-commerce / Retail",
        problem: "I clienti richiedevano aggiornamenti sugli ordini via WhatsApp, occupando ore di assistenza clienti ogni giorno.",
        solution: "WhatsApp Agent che risponde in automatico allo stato dell'ordine, gestisce reclami base e invia follow-up post-acquisto.",
        results: [
            { value: "–70%", label: "ticket assistenza clienti" },
            { value: "h24", label: "risposta immediata" },
            { value: "+40%", label: "customer satisfaction" },
        ],
    },
];

export function CaseStudies() {
    return (
        <section id="scenari" className="py-24 bg-[#F4F4F8] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none z-10" />
            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                    className="mb-16 max-w-2xl"
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-[0.15em] uppercase mb-6">
                        Scenari d&apos;uso
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0F0F14] leading-tight mb-4">
                        Come funziona nella pratica.
                    </h2>
                    <p className="text-[#64647A] text-lg">
                        Esempi concreti di automazioni AI applicate a settori reali.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {scenarios.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                            className="group bg-white border border-black/[0.08] rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(122,62,240,0.15)] hover:border-primary/40 hover:scale-[1.015] transition-all duration-300 relative"
                        >
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Header card */}
                            <div className="p-6 border-b border-black/[0.06]">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{s.type}</span>
                                    <span className="text-xs text-[#64647A] bg-black/5 border border-black/[0.08] px-2 py-1 rounded-md">{s.industry}</span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-5">
                                <div>
                                    <p className="text-xs font-bold text-[#64647A] uppercase tracking-wider mb-2">Problema</p>
                                    <p className="text-[#0F0F14] text-sm leading-relaxed italic">&quot;{s.problem}&quot;</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Soluzione</p>
                                    <p className="text-[#0F0F14] text-sm leading-relaxed font-medium">{s.solution}</p>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="px-6 pb-6">
                                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-black/[0.06]">
                                    {s.results.map((r, j) => (
                                        <div key={j} className="text-center">
                                            <div className="text-xl font-bold text-primary">{r.value}</div>
                                            <div className="text-[10px] text-[#64647A] leading-tight mt-1">{r.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
