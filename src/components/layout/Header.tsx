"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: "/#services", label: "Servizi" },
        { href: "/#why-fe-dev", label: "Approccio" },
        { href: "/projects", label: "Lavori" },
        { href: "/#contact", label: "Contattaci" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md transition-all">
            <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-6">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                        <Image
                            src="/logo.jpg"
                            alt="Fe-Dev Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
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
                    <Link href="https://calendly.com/federico-lardieri22/30min?month=2026-01" target="_blank" className="hidden sm:block">
                        <Button size="sm">Prenota una Call</Button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
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
                            href="https://calendly.com/federico-lardieri22/30min?month=2026-01"
                            target="_blank"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Button className="w-full justify-center">Prenota una Call</Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
