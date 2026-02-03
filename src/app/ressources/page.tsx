"use client";

import { Button } from "@/components/ui/Button";
import { FileText, Video, Download } from "lucide-react";

export default function RessourcesPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Ressources</h1>
                    <p className="text-xl text-gk-metal-light">
                        Outils pratiques pour faire vivre la méthode après la formation.
                    </p>
                </div>

                {/* Coming Soon Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20 opacity-75">
                    {[
                        { icon: FileText, title: "Posters GK-8", desc: "Affichettes rappel pour les zones de pause." },
                        { icon: FileText, title: "Fiches Réflexes", desc: "Mémo poche plastifié pour le terrain." },
                        { icon: Video, title: "Vidéo Routine", desc: "Support vidéo pour l'échauffement dirigé." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-xl border border-dashed border-white/20 bg-white/5 flex flex-col items-center text-center">
                            <item.icon className="w-10 h-10 text-gk-metal mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gk-metal-light mb-4">{item.desc}</p>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gk-accent font-medium border border-gk-accent/20">
                                Bientôt disponible
                            </span>
                        </div>
                    ))}
                </div>

                {/* Newsletter Capture */}
                <div className="max-w-xl mx-auto p-8 rounded-2xl bg-gk-surface border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-gk-accent to-transparent opacity-50" />

                    <Download className="w-8 h-8 text-white mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Recevoir les ressources dès leur sortie</h3>
                    <p className="text-gk-metal-light mb-8">
                        Laissez-nous votre email pro pour être notifié du lancement des kits pédagogiques.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="votre.email@entreprise.com"
                            className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gk-accent transition-colors"
                        />
                        <Button type="submit">
                            M'inscrire
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
