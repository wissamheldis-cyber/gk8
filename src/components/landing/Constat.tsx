"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Activity } from "lucide-react";

const problems = [
    {
        icon: AlertTriangle,
        title: "Trop théorique",
        desc: "Des formations en salle oubliées dès le retour sur le poste.",
    },
    {
        icon: Clock,
        title: "Trop long",
        desc: "3 jours de stage ? Impossible à caler dans un planning tendu.",
    },
    {
        icon: Activity,
        title: "Déconnecté",
        desc: "Ne prend pas en compte la cadence, la fatigue et le stress réel.",
    },
];

export function Constat() {
    return (
        <section className="py-24 bg-gk-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Le constat terrain
                    </h2>
                    <p className="text-xl text-gk-metal-light">
                        Pourquoi la prévention échoue souvent ?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gk-accent/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-gk-accent group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gk-metal-light leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="inline-block text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gk-white to-gk-metal-light">
                        “Ici, on travaille les automatismes réels. Sans jugement.”
                    </p>
                </div>
            </div>
        </section>
    );
}
