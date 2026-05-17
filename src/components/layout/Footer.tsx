import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-10 mt-20">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
                <div>
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Federico Lardieri. Tutti i diritti riservati.
                    </p>
                    <span className="text-xs text-muted/50 block mt-1">AI Automation Specialist</span>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/federicolardieri" target="_blank" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/federico-lardieri-403282315/" target="_blank" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
}
