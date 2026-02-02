"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Starfield } from "@/components/ui/Starfield";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <Starfield />
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 flex flex-col items-center text-center z-10 space-y-10">
                {/* Logo */}
                {/* Logo Text */}
                <div className="relative mb-4 pb-4 px-4 md:px-20 overflow-visible">
                    <div className="text-[60px] sm:text-[80px] md:text-[150px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50 drop-shadow-[0_0_50px_rgba(122,62,240,0.6)] leading-tight select-none inline-block whitespace-nowrap">
                        Fe-Dev
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-6 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        Web Developer & Esperto in <br />
                        <span className="text-primary glow-text">Sviluppo Siti Web</span> & <span className="text-primary glow-text">Automazioni AI</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Sono un full stack developer specializzato nel creare ecosistemi digitali intelligenti. Realizzo siti web in Next.js, e-commerce e soluzioni di AI automation per massimizzare la scalabilità del tuo business.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full px-6 sm:px-0 sm:justify-center">
                    <Link href="https://calendly.com/federico-lardieri22/30min?month=2026-01" target="_blank" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full shadow-primary/50 shadow-lg">Prenota una Call Strategica</Button>
                    </Link>
                    <Link href="/projects" className="w-full sm:w-auto">
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full border-white/40 bg-white/5 hover:bg-white/10"
                        >
                            Vedi i miei progetti
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
