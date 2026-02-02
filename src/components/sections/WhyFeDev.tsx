import { TrendingUp, Clock, Brain } from "lucide-react";

export function WhyFeDev() {
    return (
        <section id="why-fe-dev" className="py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            La scalabilità è un problema ingegneristico. <br />
                            <span className="text-primary">Io lo risolvo.</span>
                        </h2>
                        <p className="text-lg text-gray-400">
                            La maggior parte delle aziende raggiunge un tetto dove più ricavi significano più lavoro. Il mio obiettivo è spezzare questo legame. Trattando le tue operazioni aziendali come un sistema ingegneristico, ti aiuto a scalare senza assumere nuovo personale.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: TrendingUp,
                                    title: "Focus sulla Leva",
                                    desc: "Costruisco strumenti che lavorano 24/7, così tu non devi farlo.",
                                },
                                {
                                    icon: Clock,
                                    title: "Efficienza Operativa",
                                    desc: "Riduci l'inserimento dati manuale e i compiti ripetitivi fino all'80%.",
                                },
                                {
                                    icon: Brain,
                                    title: "Decisioni Data-Driven",
                                    desc: "Dashboard e analisi che ti danno chiarezza sulla salute del tuo business.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/10">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-xl" />
                        <div className="relative bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                                    <div className="space-y-1">
                                        <div className="text-sm text-gray-400">Ore Risparmiate / Mese</div>
                                        <div className="text-4xl font-bold text-white">120+</div>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Lavoro Manuale</span>
                                        <span className="text-white">-85%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-red-500 w-[15%]" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Throughput Automatizzato</span>
                                        <span className="text-white">+300%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[75%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
