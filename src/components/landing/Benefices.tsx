import { ShieldCheck, TrendingUp } from "lucide-react";

export function Benefices() {
    return (
        <section className="py-24 bg-gk-surface border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Salariés */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-full bg-white/10 text-white">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Pour les équipes</h3>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "Diminution immédiate des douleurs en fin de journée.",
                                "Meilleure compréhension de son propre corps.",
                                "Réduction du risque de blessure grave.",
                                "Sentiment de maîtrise technique."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gk-metal-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gk-accent mt-2 mr-4 flex-shrink-0" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Entreprise */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-full bg-white/10 text-white">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Pour l'entreprise</h3>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "Moins de dégradation physique à moyen terme.",
                                "Réduction progressive des arrêts de travail.",
                                "Amélioration du climat de travail.",
                                "Stabilisation des équipes (fidélisation)."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gk-metal-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 mr-4 flex-shrink-0" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
