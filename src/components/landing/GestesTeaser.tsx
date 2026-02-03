"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { clsx } from "clsx";

const gestures = [
    { id: 1, title: "Appuis stables", desc: "La base de tout mouvement. Ancrage au sol pour transmettre la force." },
    { id: 2, title: "Charge proche", desc: "Réduire le bras de levier pour diviser l'effort lombaire par 5." },
    { id: 3, title: "Dos neutre", desc: "Respecter les courbures naturelles. Ni rond, ni hyper-cambré." },
    { id: 4, title: "Pivot des pieds", desc: "Ne jamais twister le dos. Le corps suit les pieds." },
    { id: 5, title: "Hanches actives", desc: "Le moteur du mouvement, c'est les fessiers, pas les lombaires." },
    { id: 6, title: "Respiration", desc: "Bloquer sa respiration = pression intra-abdominale dangereuse." },
    { id: 7, title: "Rythme", desc: "La précipitation est l'ennemie de la technique." },
    { id: 8, title: "Récupération", desc: "Micro-pauses actives pour relâcher les tensions accumulées." },
];

export function GestesTeaser() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gk-surface relative">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Les 8 Gestes-Clés</h2>
                    <p className="text-gk-metal-light">Cliquez pour découvrir la mécanique.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {gestures.map((geste) => (
                        <motion.div
                            key={geste.id}
                            layout
                            onClick={() => setActiveId(activeId === geste.id ? null : geste.id)}
                            className={clsx(
                                "relative p-6 rounded-xl border border-white/10 cursor-pointer overflow-hidden group transition-all duration-300",
                                activeId === geste.id ? "bg-gk-accent text-white border-gk-accent" : "bg-white/5 hover:bg-white/10"
                            )}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={clsx(
                                    "text-4xl font-bold opacity-30",
                                    activeId === geste.id ? "text-white" : "text-gk-metal"
                                )}>
                                    {geste.id}
                                </span>
                                <div className={clsx(
                                    "p-2 rounded-full transition-colors",
                                    activeId === geste.id ? "bg-white/20" : "bg-white/5 group-hover:bg-gk-accent"
                                )}>
                                    {activeId === geste.id ? <X size={20} /> : <Plus size={20} />}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold mb-2">{geste.title}</h3>

                            <AnimatePresence>
                                {activeId === geste.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-white/90 text-sm leading-relaxed"
                                    >
                                        {geste.desc}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
