"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Layers, Target } from "lucide-react";

const promises = [
    { icon: CheckCircle2, title: "Clair", desc: "Zéro jargon médical complexe." },
    { icon: Layers, title: "Structuré", desc: "Une méthode logique en 8 étapes." },
    { icon: Zap, title: "Applicable", desc: "Tout de suite, sur le poste." },
    { icon: Target, title: "Adapté", desc: "Pensé pour la réalité du terrain." },
];

export function Promesse() {
    return (
        <section className="py-24 bg-gk-black">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {promises.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 shadow-lg hover:shadow-gk-accent/10 hover:border-gk-accent/30 transition-all duration-300"
                        >
                            <item.icon className="w-10 h-10 text-gk-accent mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gk-metal-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
