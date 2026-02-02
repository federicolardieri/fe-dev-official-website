import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md transition-all">
            <div className="container mx-auto flex h-24 items-center justify-between px-6">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                        <Image
                            src="/logo.jpg"
                            alt="Fe-Dev Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Servizi
                    </Link>
                    <Link href="#why-fe-dev" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Approccio
                    </Link>
                    <Link href="/projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Lavori
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Contattaci
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="https://calendly.com/federico-lardieri22/30min?month=2026-01" target="_blank">
                        <Button size="sm">Prenota una Call</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
