"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, CheckCircle2, AlertCircle, Building2, User } from "lucide-react";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [userType, setUserType] = useState<"azienda" | "privato">("azienda");
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefono: "",
        azienda: "",
        ruolo: "",
        servizio: "Lead Automation",
        messaggio: "",
        fatturato: "< 500k",
        sito: "",
        dimensioni: "1-10 dipendenti",
        investimento: "< 5.000 €",
        fonte: "LinkedIn",
        website_url: "" // Honeypot field
    });

    const handleUserTypeChange = (type: "azienda" | "privato") => {
        setUserType(type);
        setFormData(prev => ({
            ...prev,
            investimento: type === "azienda" ? "< 5.000 €" : "0 - 1.000 €"
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // Clean up data for Privato submissions
            const submissionData = {
                ...formData,
                userType,
                // Clear company-specific fields if it's a private individual
                azienda: userType === "azienda" ? formData.azienda : "",
                ruolo: userType === "azienda" ? formData.ruolo : "",
                fatturato: userType === "azienda" ? formData.fatturato : "",
                sito: userType === "azienda" ? formData.sito : "",
                dimensioni: userType === "azienda" ? formData.dimensioni : "",
                timestamp: new Date().toISOString(),
                source: "Federico Lardieri Website"
            };

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submissionData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    nome: "", email: "", telefono: "", azienda: "", ruolo: "",
                    servizio: "Lead Automation", messaggio: "",
                    fatturato: "< 500k", sito: "", dimensioni: "1-10 dipendenti",
                    investimento: userType === "azienda" ? "< 5.000 €" : "0 - 1.000 €",
                    fonte: "LinkedIn",
                    website_url: ""
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-32 relative bg-[#F4F4F8] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none z-10" />
            <div className="container mx-auto px-6 max-w-5xl relative z-20">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-4">
                        CONTATTACI
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#0F0F14] mb-6">
                        Parliamo del <span className="text-primary">tuo progetto.</span>
                    </h2>
                    <p className="text-xl text-[#64647A] max-w-2xl mx-auto">
                        Seleziona il tipo di profilo e compila il form per fissare una call.
                    </p>
                </div>

                <div className="bg-[#0B0B0F] rounded-3xl p-8 md:p-12 border border-primary/25 shadow-[0_0_40px_rgba(122,62,240,0.08)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                    {/* User Type Selector */}
                    <div className="flex gap-4 mb-12 justify-center p-1.5 bg-white/5 border border-white/10 rounded-2xl w-fit mx-auto">
                        <button
                            type="button"
                            onClick={() => handleUserTypeChange("azienda")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-bold text-sm ${userType === "azienda"
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            <Building2 className="w-4 h-4" />
                            Azienda
                        </button>
                        <button
                            type="button"
                            onClick={() => handleUserTypeChange("privato")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-bold text-sm ${userType === "privato"
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            <User className="w-4 h-4" />
                            Privato
                        </button>
                    </div>

                    {/* Status Messages */}
                    {status === "success" && (
                        <div className="mb-8 p-6 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center gap-4 text-green-400 animate-in fade-in slide-in-from-top-4">
                            <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                            <div>
                                <p className="font-bold">Richiesta inviata con successo!</p>
                                <p className="text-sm opacity-90">Verrai ricontattato a breve.</p>
                            </div>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="mb-8 p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center gap-4 text-red-400 animate-in fade-in slide-in-from-top-4">
                            <AlertCircle className="w-6 h-6 flex-shrink-0" />
                            <div>
                                <p className="font-bold">Qualcosa è andato storto.</p>
                                <p className="text-sm opacity-90">Riprova più tardi o scrivici direttamente via email.</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Honeypot field - Hidden from users */}
                        <div className="hidden" aria-hidden="true">
                            <input
                                type="text"
                                name="website_url"
                                tabIndex={-1}
                                autoComplete="off"
                                value={formData.website_url}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nome e Cognome *</label>
                                <input
                                    required
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    {userType === "azienda" ? "Email Aziendale *" : "Email Personale *"}
                                </label>
                                <input
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Numero di Telefono</label>
                                <div className="flex bg-white/5 border border-primary/30 rounded-lg overflow-hidden">
                                    <div className="px-4 py-4 bg-white/10 text-gray-400 border-r border-white/10 flex items-center gap-2">
                                        🇮🇹 +39
                                    </div>
                                    <input
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        type="tel"
                                        className="w-full bg-transparent px-4 py-4 text-white outline-none"
                                    />
                                </div>
                            </div>
                            {userType === "azienda" && (
                                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nome Azienda *</label>
                                    <input
                                        required={userType === "azienda"}
                                        name="azienda"
                                        value={formData.azienda}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                            )}
                        </div>

                        {userType === "azienda" && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Qual è il ruolo della tua azienda? *</label>
                                <input
                                    required={userType === "azienda"}
                                    name="ruolo"
                                    value={formData.ruolo}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="es. CEO, Marketing Manager, Developer..."
                                    className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-600"
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">A quale servizio sei interessato? *</label>
                            <select
                                name="servizio"
                                value={formData.servizio}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option>Lead Automation</option>
                                <option>AI Receptionist</option>
                                <option>WhatsApp Agent</option>
                                <option>Altro / Non so ancora</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Descrivici in modo specifico il progetto *</label>
                            <textarea
                                required
                                name="messaggio"
                                value={formData.messaggio}
                                onChange={handleChange}
                                rows={6}
                                className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        {userType === "azienda" && (
                            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fatturato Annuale</label>
                                    <select
                                        name="fatturato"
                                        value={formData.fatturato}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option>{"< 500k"}</option>
                                        <option>500k - 1M</option>
                                        <option>{"> 1M"}</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sito Web Aziendale</label>
                                    <input
                                        name="sito"
                                        value={formData.sito}
                                        onChange={handleChange}
                                        type="url"
                                        placeholder="www.tuaazienda.it"
                                        className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-600"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8">
                            {userType === "azienda" && (
                                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dimensioni dell'azienda *</label>
                                    <select
                                        required={userType === "azienda"}
                                        name="dimensioni"
                                        value={formData.dimensioni}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option>1-10 dipendenti</option>
                                        <option>11-50 dipendenti</option>
                                        <option>50+ dipendenti</option>
                                    </select>
                                </div>
                            )}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Investimento per il progetto *</label>
                                <select
                                    name="investimento"
                                    value={formData.investimento}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                                >
                                    {userType === "azienda" ? (
                                        <>
                                            <option>{"< 5.000 €"}</option>
                                            <option>5.000 € - 10.000 €</option>
                                            <option>{"> 10.000 €"}</option>
                                        </>
                                    ) : (
                                        <>
                                            <option>0 - 1.000 €</option>
                                            <option>1.000 € - 3.000 €</option>
                                            <option>3.000 € +</option>
                                        </>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Come hai sentito parlare di noi? *</label>
                            <select
                                name="fonte"
                                value={formData.fonte}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-primary/30 rounded-lg px-4 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option>LinkedIn</option>
                                <option>Passaparola</option>
                                <option>Google</option>
                                <option>Altro</option>
                            </select>
                        </div>

                        <Button
                            disabled={status === "loading"}
                            type="submit"
                            size="lg"
                            className="w-full py-6 text-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Invio in corso...
                                </>
                            ) : "Invia Richiesta"}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
