"use client";

import { motion } from "framer-motion";

export function ProblemSolution() {
    const problems = [
        "Rispondere ogni giorno alle stesse domande dei clienti, per ore",
        "Contattare i lead manualmente uno per uno, con ritardi di 24-48 ore",
        "Gestire prenotazioni, follow-up e notifiche a mano, senza mai finire",
    ];

    const stats = [
        { value: "80%", label: "processi ripetitivi eliminabili" },
        { value: "24/7", label: "operativo senza interruzioni" },
        { value: "2–4 sett.", label: "tempo medio di setup" },
    ];

    return (
        <section id="problema" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-primary/20 pointer-events-none z-10" />
            {/* Glow sfondo */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-5xl relative z-20">
                {/* — PROBLEMA — */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                        className="inline-block px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-bold tracking-[0.15em] uppercase mb-8"
                    >
                        Il Problema
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-bold text-white leading-tight mb-10 max-w-3xl"
                    >
                        La tua azienda perde ore ogni giorno su attività che potrebbero fare da sole.
                    </motion.h2>
                    <div className="space-y-4">
                        {problems.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.03]"
                            >
                                <div className="w-6 h-6 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-2 h-0.5 bg-red-400 rounded" />
                                </div>
                                <p className="text-[#9CA3AF] text-base leading-relaxed">{p}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Divisore */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                    className="relative my-12 flex items-center gap-6"
                >
                    <div className="flex-1 h-px bg-white/10" />
                    <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                        La Soluzione
                    </div>
                    <div className="flex-1 h-px bg-white/10" />
                </motion.div>

                {/* — SOLUZIONE — */}
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-2xl md:text-4xl font-bold text-white leading-tight mb-12 max-w-3xl"
                    >
                        Costruisco automazioni AI su misura che gestiscono questi processi{" "}
                        <span className="text-primary glow-text">24 ore su 24, 7 giorni su 7.</span>
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                                className="p-6 rounded-2xl border border-primary/20 bg-primary/5 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{s.value}</div>
                                <div className="text-sm text-[#9CA3AF]">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
