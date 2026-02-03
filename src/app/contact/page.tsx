"use client";

import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Infos & RDV */}
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-6">Contactez-nous</h1>
                        <p className="text-lg text-gk-metal-light mb-12">
                            Besoin d'un devis pour une formation ou d'échanger sur vos problématiques terrain ?
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Email</h3>
                                    <p className="text-gk-metal-light">contact@gk-8.fr</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Téléphone</h3>
                                    <p className="text-gk-metal-light">01 23 45 67 89</p>
                                    <p className="text-xs text-gk-metal-light/50">Du Lundi au Vendredi, 9h-18h</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl bg-gk-accent/10 border border-gk-accent/20">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Prise de RDV Directe
                            </h3>
                            <p className="text-sm text-gk-metal-light mb-6">
                                Réservez un créneau de 15min pour qualifier votre besoin avec un expert GK-8.
                            </p>
                            <Button className="w-full bg-white text-black hover:bg-gray-200" href="#agenda">
                                Accéder à l'agenda
                            </Button>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-gk-surface p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-8">Demander un devis</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gk-metal-light">Nom complet</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gk-accent focus:outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gk-metal-light">Entreprise</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gk-accent focus:outline-none transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gk-metal-light">Email professionnel</label>
                                    <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gk-accent focus:outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gk-metal-light">Téléphone</label>
                                    <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gk-accent focus:outline-none transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gk-metal-light">Secteur d'activité</label>
                                <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gk-accent focus:outline-none transition-colors">
                                    <option>Logistique / Transport</option>
                                    <option>BTP / Construction</option>
                                    <option>Industrie / Usine</option>
                                    <option>Services / Bureaux</option>
                                    <option>Autre</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gk-metal-light">Message / Besoins spécifiques</label>
                                <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gk-accent focus:outline-none transition-colors"></textarea>
                            </div>

                            <div className="pt-4">
                                <Button className="w-full" size="lg">
                                    Envoyer la demande
                                </Button>
                                <p className="text-xs text-center text-gk-metal-light mt-4">
                                    En envoyant ce formulaire, vous acceptez d'être recontacté dans le cadre de votre demande.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
