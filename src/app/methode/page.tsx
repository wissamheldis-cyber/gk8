"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock } from "lucide-react";

export default function MethodePage() {
    const gestures = [
        { title: "1. Appuis stables", desc: "La base de tout. Recherche d'ancrage au sol pour une transmission de force optimale. Pieds écartés, contact sol complet." },
        { title: "2. Charge proche", desc: "Réduire le bras de levier pour diviser la contrainte lombaire. La charge doit coller au centre de gravité." },
        { title: "3. Dos neutre", desc: "Maintien des courbures naturelles. On évite le dos rond comme l'hyper-cambrure. Verrouillage actif." },
        { title: "4. Pivot des pieds", desc: "L'ennemi n°1 est la torsion. Le corps doit suivre les pieds. On pivote l'ensemble, pas juste le buste." },
        { title: "5. Hanches actives", desc: "Le moteur du mouvement. Flexion de hanche, fessiers engagés. Les jambes poussent, le dos transmet." },
        { title: "6. Respiration & Gainage", desc: "Souffler à l'effort. Le blocage respiratoire augmente dangereusement la pression. Gainage réflexe." },
        { title: "7. Rythme maîtrisé", desc: "La précipitation dégrade la technique. Un rythme fluide est plus efficace et moins fatiguant sur la durée." },
        { title: "8. Récupération active", desc: "Micro-pauses de décharge. Étirements inverses après une série de manutention. 30 secondes suffisent." },
    ];

    return (
        <div className="pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Intro */}
                <section className="mb-20 max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">La Méthode GK-8</h1>
                    <p className="text-xl text-gk-metal-light leading-relaxed">
                        Notre vision est simple : le corps est votre premier outil de travail.
                        La santé doit passer avant la performance immédiate, car la performance durable est impossible avec un corps brisé.
                        Les arrêts de travail ne sont pas une fatalité, mais une conséquence mécanique.
                    </p>
                </section>

                {/* 8 Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {gestures.map((g, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <div className="text-4xl font-bold text-gk-accent/50 mb-4">{i + 1}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{g.title.replace(/^\d+\. /, "")}</h3>
                            <p className="text-gk-metal-light text-sm leading-relaxed">{g.desc}</p>
                        </motion.div>
                    ))}
                </section>

                {/* Routine 5 minutes */}
                <section className="bg-gk-surface p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gk-accent/10 rounded-full blur-3xl" />

                    <div className="flex items-start gap-6 relative z-10">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                            <Clock />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Module : Routine 5 minutes</h3>
                            <p className="text-gk-metal-light mb-4">
                                Une routine simple à faire avant la prise de poste ou après une série intense.
                                Mobilisation articulaire douce + activation cardio légère.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gk-white">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gk-accent rounded-full" />Déverrouillage nuque/épaules</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gk-accent rounded-full" />Rotations bassin</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gk-accent rounded-full" />Squats poids de corps</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gk-accent rounded-full" />Ouverture thoracique</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg max-w-2xl mx-auto">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-200/80">
                        Avertissement : Cette approche est préventive. Elle ne remplace pas un avis médical.
                        En cas de douleur persistante, consultez un professionnel de santé.
                    </p>
                </div>
            </div>
        </div>
    );
}
