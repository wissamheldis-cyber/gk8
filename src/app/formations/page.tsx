"use client";

import { Button } from "@/components/ui/Button";
import { Check, Calendar } from "lucide-react";

export default function FormationsPage() {
    return (
        <div className="pt-24 pb-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nos Formations</h1>
                    <p className="text-xl text-gk-metal-light">Des formats courts pour un impact immédiat.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Visio 1h */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex flex-col">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gk-white mb-4">DISTANCE</span>
                            <h3 className="text-3xl font-bold text-white mb-2">Visio — 1h</h3>
                            <p className="text-gk-metal-light">L'essentiel pour sensibiliser sans arrêter la prod.</p>
                        </div>

                        <div className="space-y-6 flex-1 mb-8">
                            <div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Objectifs</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <Check className="w-4 h-4 text-green-500 mt-0.5" /> Comprendre le mécanisme des blessures dos
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <Check className="w-4 h-4 text-green-500 mt-0.5" /> Identifier les 8 gestes-clés
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Déroulé</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5" /> 15 min : Théorie choc (images, chiffres)
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5" /> 30 min : Démos des 8 gestes
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5" /> 15 min : Q/R et cas concrets
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full" href="/contact">Demander un devis</Button>
                    </div>

                    {/* Présentiel 2h */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-gk-accent/10 to-transparent border border-gk-accent/30 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gk-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="mb-6 relative z-10">
                            <span className="inline-block px-3 py-1 bg-gk-accent text-white rounded-full text-xs font-bold mb-4">SUR SITE</span>
                            <h3 className="text-3xl font-bold text-white mb-2">Présentiel — 2h</h3>
                            <p className="text-gk-metal-light">Correction réelle des gestes sur le terrain.</p>
                        </div>

                        <div className="space-y-6 flex-1 mb-8 relative z-10">
                            <div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Objectifs</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <Check className="w-4 h-4 text-gk-accent mt-0.5" /> Pratiquer les gestes sur poste de travail
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <Check className="w-4 h-4 text-gk-accent mt-0.5" /> Corriger les mauvaises habitudes individuelles
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Déroulé</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5" /> 20 min : Diagnostic express & brief
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5" /> 1h 20 : Ateliers pratiques par petits groupes
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gk-metal-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5" /> 20 min : Routine collective & debrief
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Button variant="primary" className="w-full" href="/contact">Demander un devis</Button>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto p-6 border border-white/10 rounded-xl bg-gk-surface text-center">
                    <h3 className="text-lg font-bold text-white mb-2">Adaptable à votre réalité</h3>
                    <p className="text-gk-metal-light">
                        Nous nous adaptons à votre cadence, votre environnement (bruit, espace), et l'état de fatigue de vos équipes.
                    </p>
                </div>
            </div>

            {/* Sticky Bottom CTA mimicking mobile behavior but visible always for conversions */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gk-black/90 backdrop-blur-lg border-t border-white/10 md:hidden z-40">
                <Button className="w-full" size="lg" href="/contact">
                    <Calendar className="mr-2 w-4 h-4" />
                    Prendre RDV
                </Button>
            </div>
        </div>
    );
}
