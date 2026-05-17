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
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500",
            scrolled ? "pt-3" : "pt-0"
        )}>
            <div className={cn(
                "transition-all duration-500",
                scrolled
                    ? "w-[calc(100%-3rem)] max-w-5xl rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 px-4 md:px-6"
                    : "w-full bg-white border-b border-gray-200 px-4 md:px-6"
            )}>
                <div className="relative flex h-14 md:h-16 items-center overflow-visible">
                    <Link href="/" className="h-full flex items-center overflow-visible hover:opacity-80 transition-opacity shrink-0">
                        <Image
                            src="/federico-no-sfondo.png"
                            alt="Federico Lardieri"
                            width={1211}
                            height={271}
                            className={cn(
                                "w-auto object-contain transition-all duration-500",
                                scrolled ? "h-10 md:h-12 brightness-0 invert" : "h-12 md:h-14"
                            )}
                            priority
                        />
                    </Link>

                    <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    scrolled ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-900"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="ml-auto flex items-center gap-3 shrink-0">
                        <Link href={CALENDLY_URL} target="_blank" className="hidden md:block">
                            <Button size="sm">Prenota una Call</Button>
                        </Link>

                        <button
                            className={cn(
                                "md:hidden p-2 transition-colors",
                                scrolled ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-gray-900"
                            )}
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className={cn("md:hidden border-t", scrolled ? "border-white/10" : "border-gray-200")}>
                        <nav className={cn("flex flex-col p-5 gap-4", scrolled ? "bg-transparent" : "bg-white")}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "text-base font-medium transition-colors py-1",
                                        scrolled ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-900"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href={CALENDLY_URL}
                                target="_blank"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Button className="w-full justify-center mt-1">Prenota una Call</Button>
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
