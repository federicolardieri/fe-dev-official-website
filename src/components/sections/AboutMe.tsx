"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";
const skills = ["Claude API", "n8n", "Make.com", "Vapi", "Next.js", "Supabase", "WhatsApp API", "OpenAI", "Python", "TypeScript"];

export function AboutMe() {
    return (
        <section id="about" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/15 to-transparent pointer-events-none z-10" />
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Chi sono */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-[0.15em] uppercase mb-6">
                                Chi sono
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Federico Lardieri<br />
                                <span className="text-primary glow-text">AI Automation Specialist</span>
                            </h2>
                            <p className="text-[#9CA3AF] text-lg leading-relaxed mb-4">
                                Progetto e implemento sistemi di automazione AI su misura per aziende che vogliono ridurre il lavoro manuale e aumentare i risultati — senza assumere nuovo personale.
                            </p>
                            <p className="text-[#9CA3AF] leading-relaxed">
                                Arrivo dal mondo operativo reale: ho lavorato su progetti con scadenze, clienti e responsabilità concrete. Oggi uso questa esperienza per costruire automazioni che funzionano davvero — non solo in teoria.
                            </p>
                        </div>

                        {/* Stack tecnico */}
                        <div>
                            <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider mb-4">Stack & Tool</p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-medium hover:border-primary/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                    {/* Right: Card profilo */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="lg:sticky lg:top-28"
                    >
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 space-y-6">
                            {/* Disponibilità badge */}
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                                <span className="text-sm text-[#9CA3AF]">Disponibile per nuovi progetti</span>
                            </div>

                            <div className="border-t border-white/[0.06] pt-6 space-y-4">
                                {[
                                    { label: "Ruolo", value: "AI Automation Specialist" },
                                    { label: "Focus", value: "Lead, Receptionist, WhatsApp AI" },
                                    { label: "Disponibilità", value: "Italia & Remoto" },
                                    { label: "Setup medio", value: "2–4 settimane" },
                                ].map((item) => (
                                    <div key={item.label} className="flex justify-between items-center gap-4">
                                        <span className="text-xs font-bold text-[#9CA3AF]/60 uppercase tracking-wider">{item.label}</span>
                                        <span className="text-sm text-white font-medium text-right">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-3">
                                <Link href={CALENDLY_URL} target="_blank" className="w-full">
                                    <Button size="lg" className="w-full justify-center">
                                        Prenota una Call Gratuita
                                    </Button>
                                </Link>
                                <Link href="/projects" className="w-full">
                                    <Button variant="outline" size="md" className="w-full justify-center border-white/20 text-white hover:bg-white/5">
                                        Vedi i progetti
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
