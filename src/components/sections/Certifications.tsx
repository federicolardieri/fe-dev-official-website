"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "Claude with the Anthropic API",
        issuer: "Anthropic",
        date: "Maggio 2026",
        pdf: "/Certificazioni/certificate-n77pabbujaqk-1777661816.pdf",
    },
    {
        title: "Claude Code in Action",
        issuer: "Anthropic",
        date: "Maggio 2026",
        pdf: "/Certificazioni/certificate-fo7nqykx6fqh-1778026781.pdf",
    },
    {
        title: "Claude Code 101",
        issuer: "Anthropic",
        date: "Maggio 2026",
        pdf: "/Certificazioni/certificate-djm2bopsmmow-1777696341.pdf",
    },
    {
        title: "Claude 101",
        issuer: "Anthropic",
        date: "Maggio 2026",
        pdf: "/Certificazioni/certificate-g3q4h7trm6fe-1777691097.pdf",
    },
    {
        title: "Full Stack Web Developer",
        issuer: "Aulab Hackademy",
        date: "Luglio 2025",
        pdf: "/Certificazioni/ktpkx6hh_1761651343456.pdf",
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-[0.15em] uppercase mb-6">
                        Certificazioni
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Formazione <span className="text-primary glow-text">certificata</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.pdf}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                            className="group bg-white/[0.03] border border-white/15 rounded-2xl overflow-hidden flex flex-col hover:border-white/30 hover:shadow-[0_8px_40px_rgba(122,62,240,0.12)] hover:scale-[1.015] transition-all duration-300 relative"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <a
                                href={cert.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col h-full cursor-pointer"
                            >
                                <div className="p-5 pb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.12em] uppercase">
                                            {cert.issuer}
                                        </span>
                                        <span className="text-xs text-[#9CA3AF]">{cert.date}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-white leading-snug">{cert.title}</h3>
                                </div>

                                <div className="hidden md:block relative border-t border-white/[0.06] bg-white/[0.02]">
                                    <iframe
                                        src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                                        className="w-full h-[230px]"
                                        loading="lazy"
                                        title={cert.title}
                                    />
                                    {/* overlay per catturare i click sull'iframe */}
                                    <div className="absolute inset-0" />
                                </div>

                                <div className="p-4 border-t border-white/[0.06] mt-auto flex items-center gap-2 text-xs font-semibold text-primary group-hover:text-white transition-colors duration-200">
                                    Apri certificato <ExternalLink className="w-3.5 h-3.5" />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
