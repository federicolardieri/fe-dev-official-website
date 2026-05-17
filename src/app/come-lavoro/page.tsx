"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Starfield } from "@/components/ui/Starfield";
import { CALENDLY_URL } from "@/lib/constants";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const checkItems01 = [
    "Mappatura dei processi manuali",
    "Identificazione delle priorità di automazione",
    "Stima ROI e tempo di recupero",
    "Nessun impegno necessario",
];

const checkItems02 = [
    "Blueprint dell'automazione",
    "Integrazione con tool esistenti",
    "Revisione e approvazione con te",
    "Zero technical debt",
];

const checkItems03 = [
    "Deploy e testing live",
    "Formazione del tuo team",
    "30 giorni di supporto post-lancio",
    "Dashboard di monitoraggio",
];

const whyCards = [
    {
        title: "Risultati in 2–4 settimane",
        description: "Non mesi. Non anni. Un mese e sei operativo.",
    },
    {
        title: "Nessuna complessità tecnica",
        description: "Ti consegno il sistema chiavi in mano, tu lo gestisci.",
    },
    {
        title: "ROI misurabile",
        description: "Ogni automazione è progettata con un obiettivo di risparmio preciso.",
    },
];

function CheckList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-gray-300 text-base">{item}</span>
                </li>
            ))}
        </ul>
    );
}

function DurationChip({ label }: { label: string }) {
    return (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/30 bg-primary/10 text-primary">
            {label}
        </span>
    );
}

function FloatingWrapper({
    children,
    delay = 0,
    duration = 4,
    tilt = 4,
}: {
    children: ReactNode;
    delay?: number;
    duration?: number;
    tilt?: number;
}) {
    return (
        <motion.div
            animate={{
                y: [0, -16, 0],
                rotate: [-tilt / 2, tilt / 2, -tilt / 2],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
            style={{
                filter: "drop-shadow(0 0 20px #7A3EF0) drop-shadow(0 0 50px #7A3EF040)",
            }}
        >
            {children}
        </motion.div>
    );
}

function MagnifyingGlassSVG() {
    return (
        <svg width="260" height="260" viewBox="0 0 260 260" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <circle cx="108" cy="108" r="88" fill="#7A3EF0" fillOpacity="0.05" />
            <rect x="174" y="172" width="68" height="22" rx="11" fill="#3B1C7A" transform="rotate(45 174 172)" opacity="0.55" />
            <rect x="170" y="166" width="68" height="22" rx="11" fill="url(#handleGrad)" transform="rotate(45 170 166)" />
            <rect x="170" y="166" width="68" height="7" rx="3.5" fill="#A97EFF" fillOpacity="0.25" transform="rotate(45 170 166)" />
            <circle cx="108" cy="108" r="74" fill="#7A3EF0" fillOpacity="0.07" />
            <circle cx="108" cy="108" r="74" stroke="#A97EFF" strokeWidth="1.5" strokeOpacity="0.18" />
            <circle cx="108" cy="108" r="74" stroke="#7A3EF0" strokeWidth="13" />
            <circle cx="108" cy="108" r="74" stroke="#C4A8FF" strokeWidth="2" strokeOpacity="0.22" />
            <line x1="52" y1="108" x2="164" y2="108" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.12" />
            <line x1="108" y1="52" x2="108" y2="164" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.12" />
            <circle cx="108" cy="108" r="3" fill="#7A3EF0" fillOpacity="0.28" />
            <path d="M 66 78 A 48 48 0 0 1 118 48" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.18" />
            <path d="M 72 68 A 28 28 0 0 1 96 56" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.10" />
            <circle cx="172" cy="58" r="4.5" fill="#7A3EF0" fillOpacity="0.80" />
            <circle cx="172" cy="58" r="7" fill="#7A3EF0" fillOpacity="0.18" />
            <circle cx="144" cy="30" r="2.5" fill="#A97EFF" fillOpacity="0.60" />
            <circle cx="144" cy="30" r="5" fill="#A97EFF" fillOpacity="0.12" />
            <circle cx="28" cy="98" r="3.5" fill="#7A3EF0" fillOpacity="0.50" />
            <circle cx="28" cy="98" r="6.5" fill="#7A3EF0" fillOpacity="0.10" />
            <circle cx="82" cy="198" r="2" fill="#C4A8FF" fillOpacity="0.45" />
            <circle cx="82" cy="198" r="4" fill="#C4A8FF" fillOpacity="0.10" />
            <circle cx="210" cy="128" r="3" fill="#7A3EF0" fillOpacity="0.55" />
            <circle cx="210" cy="128" r="5.5" fill="#7A3EF0" fillOpacity="0.12" />
            <defs>
                <linearGradient id="handleGrad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#9B6AFF" />
                    <stop offset="50%" stopColor="#7A3EF0" />
                    <stop offset="100%" stopColor="#4B1FA8" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function BlueprintSVG() {
    const dots: ReactNode[] = [];
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 6; col++) {
            const cx = 28 + col * 26;
            const cy = 28 + row * 24;
            dots.push(<circle key={`dot-${row}-${col}`} cx={cx} cy={cy} r={1.5} fill="#7A3EF0" fillOpacity={0.25} />);
        }
    }
    return (
        <svg viewBox="0 0 220 270" width={220} height={270} fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <rect x={10} y={10} width={200} height={250} rx={8} stroke="#7A3EF0" strokeWidth={1} fill="#7A3EF0" fillOpacity={0.05} />
            <path d="M10 30 L10 10 L30 10" stroke="#7A3EF0" strokeWidth={1.5} strokeLinecap="round" />
            <path d="M190 10 L210 10 L210 30" stroke="#7A3EF0" strokeWidth={1.5} strokeLinecap="round" />
            <path d="M10 240 L10 260 L30 260" stroke="#7A3EF0" strokeWidth={1.5} strokeLinecap="round" />
            <path d="M190 260 L210 260 L210 240" stroke="#7A3EF0" strokeWidth={1.5} strokeLinecap="round" />
            {dots}
            <rect x={60} y={38} width={70} height={28} rx={4} stroke="#7A3EF0" strokeWidth={1.2} fill="#7A3EF0" fillOpacity={0.06} />
            <line x1={95} y1={66} x2={95} y2={90} stroke="#7A3EF0" strokeWidth={1.2} strokeDasharray="3 2" />
            <polygon points="91,88 95,96 99,88" fill="#7A3EF0" fillOpacity={0.7} />
            <rect x={55} y={96} width={80} height={28} rx={4} stroke="#7A3EF0" strokeWidth={1.2} fill="#7A3EF0" fillOpacity={0.06} />
            <line x1={95} y1={124} x2={95} y2={148} stroke="#7A3EF0" strokeWidth={1.2} strokeDasharray="3 2" />
            <polygon points="91,146 95,154 99,146" fill="#7A3EF0" fillOpacity={0.7} />
            <rect x={50} y={154} width={90} height={32} rx={4} stroke="#7A3EF0" strokeWidth={1.6} fill="#7A3EF0" fillOpacity={0.1} />
            <line x1={60} y1={166} x2={110} y2={166} stroke="#9B6EFF" strokeWidth={0.8} strokeOpacity={0.4} />
            <line x1={60} y1={174} x2={100} y2={174} stroke="#9B6EFF" strokeWidth={0.8} strokeOpacity={0.3} />
            <line x1={24} y1={244} x2={196} y2={244} stroke="#7A3EF0" strokeWidth={1} strokeOpacity={0.5} />
            <line x1={24} y1={240} x2={24} y2={248} stroke="#7A3EF0" strokeWidth={1.2} strokeOpacity={0.6} />
            <line x1={196} y1={240} x2={196} y2={248} stroke="#7A3EF0" strokeWidth={1.2} strokeOpacity={0.6} />
            <line x1={110} y1={241} x2={110} y2={247} stroke="#7A3EF0" strokeWidth={1} strokeOpacity={0.4} />
            <polygon points="28,241 22,244 28,247" fill="#7A3EF0" fillOpacity={0.55} />
            <polygon points="192,241 198,244 192,247" fill="#7A3EF0" fillOpacity={0.55} />
            <g transform="rotate(-30, 163, 60)">
                <rect x={155} y={14} width={16} height={72} rx={2.5} fill="#9B6EFF" fillOpacity={0.85} />
                <rect x={157.5} y={16} width={4} height={68} rx={1.5} fill="#FFFFFF" fillOpacity={0.12} />
                <rect x={155} y={14} width={16} height={6} rx={1} fill="#5A2ABF" />
                <rect x={155} y={8} width={16} height={8} rx={2} fill="#FF9E9E" />
                <polygon points="155,86 171,86 163,102" fill="#FFE08A" />
                <polygon points="155,86 171,86 163,102" stroke="#D4A017" strokeWidth={0.8} fill="none" />
                <rect x={155} y={14} width={16} height={72} rx={2.5} stroke="#5A2ABF" strokeWidth={0.8} fill="none" />
            </g>
        </svg>
    );
}

function RocketSVG() {
    return (
        <svg width="180" height="280" viewBox="0 0 180 280" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="48" r="1.8" fill="#9B6EFF" opacity="0.45" />
            <circle cx="155" cy="72" r="1.4" fill="#7A3EF0" opacity="0.38" />
            <circle cx="32" cy="130" r="1.2" fill="#9B6EFF" opacity="0.32" />
            <circle cx="160" cy="118" r="2" fill="#7A3EF0" opacity="0.5" />
            <circle cx="18" cy="190" r="1.5" fill="#9B6EFF" opacity="0.3" />
            <circle cx="148" cy="160" r="1.3" fill="#7A3EF0" opacity="0.42" />
            <ellipse cx="90" cy="248" rx="28" ry="16" fill="#7A3EF0" fillOpacity="0.18" />
            <ellipse cx="90" cy="244" rx="20" ry="10" fill="#9B6EFF" fillOpacity="0.14" />
            <path d="M68 220 C64 232 72 252 90 262 C108 252 116 232 112 220 C104 228 96 232 90 234 C84 232 76 228 68 220Z" fill="#7A3EF0" fillOpacity="0.65" />
            <path d="M76 220 C73 230 79 248 90 256 C101 248 107 230 104 220 C99 226 95 229 90 231 C85 229 81 226 76 220Z" fill="#9B6EFF" fillOpacity="0.55" />
            <path d="M82 220 C80 228 84 242 90 248 C96 242 100 228 98 220 C95 224 92 226 90 227 C88 226 85 224 82 220Z" fill="#C4A8FF" fillOpacity="0.4" />
            <path d="M70 185 L46 218 L70 210 Z" fill="#7A3EF0" fillOpacity="0.82" />
            <path d="M110 185 L134 218 L110 210 Z" fill="#7A3EF0" fillOpacity="0.82" />
            <rect x="74" y="94" width="40" height="130" rx="20" fill="#3D1A8E" fillOpacity="0.35" />
            <rect x="70" y="90" width="40" height="130" rx="20" fill="#7A3EF0" fillOpacity="0.85" />
            <rect x="75" y="98" width="8" height="112" rx="4" fill="white" fillOpacity="0.08" />
            <path d="M90 18 C82 30 70 58 70 90 L110 90 C110 58 98 30 90 18Z" fill="#9B6EFF" fillOpacity="0.9" />
            <path d="M90 18 C98 30 110 58 110 90 L90 90 Z" fill="#5A2ABF" fillOpacity="0.35" />
            <path d="M82 34 C80 44 76 64 75 82" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.1" />
            <circle cx="90" cy="148" r="14" fill="#0B0B0F" stroke="#9B6EFF" strokeWidth="3" />
            <circle cx="90" cy="148" r="11" fill="#7A3EF0" fillOpacity="0.12" />
            <path d="M80 142 A11 11 0 0 1 90 137" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
            <circle cx="85" cy="144" r="3" fill="white" fillOpacity="0.07" />
            <rect x="70" y="210" width="40" height="10" rx="4" fill="#5A2ABF" fillOpacity="0.5" />
        </svg>
    );
}

export default function ComeLavoroPage() {
    return (
        <main className="min-h-screen bg-background">

            <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Starfield />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
                </div>

                <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
                    <motion.div {...fadeUp} className="max-w-3xl">
                        <Link
                            href="/"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-10 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Torna alla Home
                        </Link>

                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
                                IL METODO
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                                Il metodo per automatizzare{" "}
                                <span className="text-primary glow-text">senza complicazioni.</span>
                            </h1>

                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                                Tre fasi strutturate per passare da &ldquo;ci penso&rdquo; a &ldquo;è già operativo&rdquo; in meno di un mese.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp} className="flex items-center justify-center">
                            <FloatingWrapper delay={0} duration={4} tilt={2}>
                                <MagnifyingGlassSVG />
                            </FloatingWrapper>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <DurationChip label="1–2 giorni" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                Scoperta
                            </h2>
                            <p className="italic text-gray-400 text-lg border-l-2 border-primary/40 pl-4">
                                &ldquo;Capiamo dove stai perdendo tempo e denaro.&rdquo;
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Prima call gratuita di 45 minuti. Analizziamo i tuoi processi operativi, identifichiamo i colli di bottiglia ripetitivi e stimiamo il risparmio reale in termini di ore e costi.
                            </p>
                            <CheckList items={checkItems01} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-white/[0.02] border-y border-white/5 py-28">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-6 order-2 lg:order-1"
                        >
                            <DurationChip label="3–5 giorni" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                Progettazione
                            </h2>
                            <p className="italic text-gray-400 text-lg border-l-2 border-primary/40 pl-4">
                                &ldquo;Il sistema su misura per la tua realtà.&rdquo;
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Progetto l&apos;architettura dell&apos;automazione integrando i tool che già usi. Nessuna migrazione, nessun cambio forzato. CRM, email, calendario, WhatsApp — tutto connesso.
                            </p>
                            <CheckList items={checkItems02} />
                        </motion.div>

                        <motion.div
                            {...fadeUp}
                            className="order-1 lg:order-2 flex items-center justify-center"
                        >
                            <FloatingWrapper delay={1} duration={4.2} tilt={2}>
                                <BlueprintSVG />
                            </FloatingWrapper>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-28">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp} className="flex items-center justify-center">
                            <FloatingWrapper delay={0.5} duration={3.2} tilt={1.5}>
                                <RocketSVG />
                            </FloatingWrapper>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <DurationChip label="1–2 settimane" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                Deploy & Supporto
                            </h2>
                            <p className="italic text-gray-400 text-lg border-l-2 border-primary/40 pl-4">
                                &ldquo;Live. Testato. Autonomo.&rdquo;
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Implemento il sistema, lo testo in produzione insieme a te e ti formo per gestirlo in autonomia. Rimango disponibile per ottimizzazioni post-lancio.
                            </p>
                            <CheckList items={checkItems03} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-28 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Perché questo metodo <span className="text-primary glow-text">funziona.</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {whyCards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative rounded-2xl border border-white/5 bg-white/[0.03] p-8 space-y-4 overflow-hidden group hover:border-primary/30 transition-colors duration-300"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <h3 className="text-lg font-bold text-white">
                                    {card.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-28 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <motion.div
                        {...fadeUp}
                        className="relative text-center max-w-3xl mx-auto py-20 px-8 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                        <div className="space-y-4 mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                Pronto a scoprire quanto tempo puoi recuperare?
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Prenota la call gratuita di scoperta. Zero impegno.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href={CALENDLY_URL} target="_blank">
                                <Button size="lg" className="px-10 shadow-xl shadow-primary/20">
                                    Prenota la Call di Scoperta
                                </Button>
                            </Link>
                            <Link href="/#contact">
                                <Button variant="outline" size="lg" className="px-10">
                                    Hai domande?
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
