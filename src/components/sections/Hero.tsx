"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Starfield } from "@/components/ui/Starfield";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden">
            <Starfield />
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 flex flex-col items-center text-center z-10 space-y-12">
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
                        Esperto in <span className="text-primary glow-text">automazioni AI</span> e <br className="hidden sm:block" />
                        <span className="text-primary glow-text">Web Developer</span> full stack
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Aiuto aziende e imprenditori a ridurre il lavoro manuale e aumentare efficienza e fatturato.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full px-6 sm:px-0 sm:justify-center items-center">
                    <Link
                        href="https://calendly.com/federico-lardieri22/30min?month=2026-01"
                        target="_blank"
                        className="w-full max-w-sm sm:w-auto"
                    >
                        <Button size="lg" className="w-full shadow-primary/50 shadow-lg">
                            Prenota una Call Strategica
                        </Button>
                    </Link>
                    <Link
                        href="/projects"
                        className="w-full max-w-sm sm:w-auto"
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full border-white/20 bg-white/5"
                        >
                            Vedi i miei progetti
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
