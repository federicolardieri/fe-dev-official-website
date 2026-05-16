const tools = [
    "n8n",
    "Anthropic Claude",
    "Next.js",
    "Vapi",
    "Make.com",
    "OpenAI",
    "WhatsApp Business API",
    "Supabase",
    "Vercel",
    "Google Sheets",
    "HubSpot",
    "Calendly",
];

const toolsRow1 = tools.slice(0, 6);
const toolsRow2 = tools.slice(6);
const doubledRow1 = [...toolsRow1, ...toolsRow1];
const doubledRow2 = [...toolsRow2, ...toolsRow2];

export function LogoBar() {
    return (
        <section className="py-10 md:py-14 bg-[#F4F4F8] border-y border-black/[0.06] overflow-hidden">
            <div className="flex items-center gap-0">
                <div className="flex-shrink-0 pl-6 pr-8 flex items-center gap-3 z-10 bg-[#F4F4F8] self-center">
                    <div className="w-px h-5 bg-black/20" />
                    <span className="glow-text-soft text-sm font-bold tracking-[0.2em] uppercase text-primary whitespace-nowrap">
                        Powered by
                    </span>
                    <div className="w-px h-5 bg-black/20" />
                </div>

                <div className="flex-1 flex flex-col gap-3 overflow-hidden">
                    <div className="overflow-hidden relative">
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F4F4F8] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F4F4F8] to-transparent z-10 pointer-events-none" />
                        <div className="animate-marquee flex gap-4 w-max items-center">
                            {doubledRow1.map((tool, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span
                                        className="badge-shimmer inline-block bg-gradient-to-b from-white/10 to-white/[0.03] border border-black/[0.12] shadow-[0_2px_8px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.7)] rounded-xl px-5 py-2.5 text-sm font-medium text-[#0F0F14]/60 whitespace-nowrap hover:text-primary hover:border-primary/30 hover:shadow-[0_2px_8px_rgba(122,62,240,0.15),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 cursor-default"
                                        style={{ animationDelay: `${i * 0.4}s` }}
                                    >
                                        {tool}
                                    </span>
                                    <span className="text-black/10 text-xs select-none">·</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden relative">
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F4F4F8] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F4F4F8] to-transparent z-10 pointer-events-none" />
                        <div className="animate-marquee-reverse flex gap-4 w-max items-center">
                            {doubledRow2.map((tool, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span
                                        className="badge-shimmer inline-block bg-gradient-to-b from-white/10 to-white/[0.03] border border-black/[0.12] shadow-[0_2px_8px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.7)] rounded-xl px-5 py-2.5 text-sm font-medium text-[#0F0F14]/60 whitespace-nowrap hover:text-primary hover:border-primary/30 hover:shadow-[0_2px_8px_rgba(122,62,240,0.15),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 cursor-default"
                                        style={{ animationDelay: `${(i + 6) * 0.4}s` }}
                                    >
                                        {tool}
                                    </span>
                                    <span className="text-black/10 text-xs select-none">·</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
