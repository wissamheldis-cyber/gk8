"use client";

import { motion } from "framer-motion";
import { Truck, Hammer, Factory, HardHat, Package, Repeat } from "lucide-react";

export default function SecteursPage() {
    const sectors = [
        { icon: Truck, title: "Logistique & Transport", desc: "Chargement/déchargement, quais, vibrations, contraintes de temps extrêmes." },
        { icon: Hammer, title: "BTP & Second œuvre", desc: "Charges lourdes, sols instables, postures maintenues, intempéries." },
        { icon: Factory, title: "Industrie", desc: "Gestes répétitifs, cadence imposée, station debout prolongée." },
        { icon: HardHat, title: "Manutention diverse", desc: "Diversité des charges, imprévus, aide au levage souvent absente." },
        { icon: Package, title: "Intérim", desc: "Adaptation rapide nécessaire, manque de formation préalable, risque accru." },
        { icon: Repeat, title: "Gestes Répétitifs", desc: "TMS des membres supérieurs, poignets, épaules. L'usure invisible." },
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-6">Secteurs & Terrain</h1>
                    <p className="text-xl text-gk-metal-light max-w-2xl mx-auto">
                        Chaque terrain a ses propres pièges. La méthode GK-8 s'adapte à vos contraintes spécifiques.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {sectors.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-xl bg-gk-surface border border-white/5 hover:border-gk-accent/50 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/5 rounded-lg text-white group-hover:text-gk-accent group-hover:bg-white/10 transition-colors">
                                    <s.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                            </div>
                            <p className="text-gk-metal-light text-sm pl-[3.25rem]">
                                <span className="text-white/40 block text-xs uppercase mb-1">Situation typique</span>
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </section>

                {/* Encadrants Section */}
                <section className="bg-gradient-to-r from-gk-surface to-gk-black p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-gk-accent/10 to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-3xl font-bold text-white mb-6">Focus : Encadrants de proximité</h2>
                        <p className="text-lg text-gk-white opacity-90 mb-6 leading-relaxed">
                            Le rôle du chef d'équipe est crucial. C'est lui qui donne le rythme et valide (ou non) les bonnes pratiques.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gk-metal-light">
                                <span className="w-2 h-2 bg-gk-accent rounded-full mr-4" />
                                Savoir repérer un équipier en difficulté physique.
                            </li>
                            <li className="flex items-center text-gk-metal-light">
                                <span className="w-2 h-2 bg-gk-accent rounded-full mr-4" />
                                Oser parler "récupération" sans passer pour un frein à la prod.
                            </li>
                            <li className="flex items-center text-gk-metal-light">
                                <span className="w-2 h-2 bg-gk-accent rounded-full mr-4" />
                                Intégrer les micro-pauses dans le flux de travail.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
