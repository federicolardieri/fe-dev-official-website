"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Starfield } from "@/components/ui/Starfield";
import { CALENDLY_URL } from "@/lib/constants";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden">
            {/* Starfield a opacità ridotta */}
            <div className="absolute inset-0 z-0">
                <Starfield />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background z-[1]" />

            {/* Glow centrale */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] z-[1]" />

            <div className="container mx-auto px-6 flex flex-col items-center text-center z-10 space-y-8 max-w-5xl">

                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-bold tracking-[0.15em] uppercase"
                >
                    AI Automation Specialist
                </motion.div>

                {/* Headline principale */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="space-y-2"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                        <span className="text-white block">Il tuo partner AI.</span>
                        <span className="text-white block">Processi automatizzati.</span>
                        <span className="text-primary glow-text block">Risultati misurabili.</span>
                    </h1>
                </motion.div>

                {/* Sottotitolo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed"
                >
                    Progetto sistemi AI che eliminano il lavoro manuale ripetitivo, accelerano il ciclo di vendita e mantengono i clienti ingaggiati h24 — risultati misurabili già dalle prime settimane.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:justify-center items-center"
                >
                    <Link href={CALENDLY_URL} target="_blank" className="w-full max-w-xs sm:w-auto">
                        <Button size="lg" className="w-full shadow-primary/40 shadow-lg">
                            Prenota una Call Strategica
                        </Button>
                    </Link>
                    <Link href="/projects" className="w-full max-w-xs sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full border-white/20 bg-white/5">
                            Vedi i miei progetti
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 0.6, repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
        </section>
    );
}
