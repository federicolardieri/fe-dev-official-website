import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Come Lavoro — Federico Lardieri | AI Automation Specialist",
    description: "Il metodo in 3 fasi per implementare automazioni AI che funzionano davvero. Dalla scoperta al deploy, nessuna complessità tecnica per te.",
};

export default function ComeLavoroLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
