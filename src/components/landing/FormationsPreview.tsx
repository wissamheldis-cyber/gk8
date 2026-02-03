import { Button } from "../ui/Button";
import { Check, Video, Users } from "lucide-react";

export function FormationsPreview() {
    return (
        <section className="py-24 bg-gk-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-16 text-center">Nos Formats</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Visio Card */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-gk-accent/30 transition-all flex flex-col">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                                <Video />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Visio — 1 heure</h3>
                            <p className="text-gk-metal-light">Sensibilisation rapide & efficace.</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {["Théorie interactive", "Analyse vidéo", "Questions / Réponses"].map((item, i) => (
                                <li key={i} className="flex items-center text-sm text-gk-white">
                                    <Check className="w-4 h-4 text-green-500 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" className="w-full" href="/contact">
                            Me proposer une date
                        </Button>
                    </div>

                    {/* Presential Card */}
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-gk-accent/50 hover:border-gk-accent transition-all flex flex-col transform hover:-translate-y-2">
                        <div className="absolute top-0 right-0 bg-gk-accent text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                            RECOMMANDÉ
                        </div>
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-gk-accent/10 rounded-lg flex items-center justify-center text-gk-accent mb-4">
                                <Users />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Présentiel — 2 heures</h3>
                            <p className="text-gk-metal-light">Pratique réelle sur le terrain.</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {["Diagnostic express", "Démos en situation", "Corrections individuelles", "Mise en place routine"].map((item, i) => (
                                <li key={i} className="flex items-center text-sm text-gk-white">
                                    <Check className="w-4 h-4 text-gk-accent mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button variant="primary" className="w-full" href="/contact">
                            Demander un devis
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
