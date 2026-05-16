"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { href: "/#servizi", label: "Servizi" },
        { href: "/come-lavoro", label: "Come Lavoro" },
        { href: "/projects", label: "Progetti" },
        { href: "/#contact", label: "Contattami" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 transition-all duration-500">
            <div className={cn(
                "transition-all duration-500",
                scrolled
                    ? "w-full max-w-5xl mx-6 rounded-2xl bg-[#0B0B0F]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 px-6"
                    : "w-full bg-background/80 backdrop-blur-md border-b border-white/5 px-6"
            )}>
                <div className="flex h-16 md:h-20 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/30 shadow-[0_0_15px_rgba(122,62,240,0.3)] flex-shrink-0">
                            <Image
                                src="/logo.jpg"
                                alt="Federico Lardieri"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="text-base font-bold text-white leading-none">Federico Lardieri</div>
                            <div className="text-xs text-primary mt-0.5 leading-none">AI Automation Specialist</div>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href={CALENDLY_URL} target="_blank" className="hidden sm:block">
                            <Button size="sm">Prenota una Call</Button>
                        </Link>

                        <button
                            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
                        <nav className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href={CALENDLY_URL}
                                target="_blank"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Button className="w-full justify-center">Prenota una Call</Button>
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
