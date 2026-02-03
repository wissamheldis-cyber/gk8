"use client";

import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background/3D Abstract Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gk-accent/20 rounded-full blur-[120px] opacity-20 animate-pulse" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gk-accent text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-gk-accent animate-pulse" />
                        Santé & Sécurité Terrain
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                        8 gestes. <br />
                        Un dos. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gk-white to-gk-metal-light">
                            Une carrière.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gk-metal-light mb-8 leading-relaxed max-w-lg">
                        Prévention TMS et protection du dos, pensée pour le terrain : courte, claire, applicable immédiatement.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="group" href="/contact">
                            Demander un devis
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" href="/methode">
                            <PlayCircle className="mr-2 w-5 h-5" />
                            Voir les 8 gestes
                        </Button>
                    </div>
                </motion.div>

                {/* Visual Content (Abstract 3D Representation) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block h-[600px] w-full"
                >
                    {/* Conceptual 3D Spine/Force Lines */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-[500px] h-[500px]">
                            {/* Main Logo in 3D-like container */}
                            <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                                <Logo className="w-full h-full opacity-80" />
                            </div>

                            {/* Floating orbital elements for depth */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -z-10 animate-pulse" />
                            <div className="absolute top-[10%] right-[20%] w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-xl backdrop-blur-md border border-white/10 shadow-2xl skew-y-12 animate-float" />
                            <div className="absolute bottom-[20%] left-[10%] w-32 h-32 bg-gradient-to-tr from-gk-accent/10 to-transparent rounded-full backdrop-blur-md border border-white/5 animate-float-delayed" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-xs text-gk-metal-light">Découvrir</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
}
