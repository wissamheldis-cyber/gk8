import Link from "next/link";
import { TransitionLink } from "../ui/TransitionLink";
import { Logo } from "../ui/Logo";

export function Footer() {
    return (
        <footer className="bg-gk-surface border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <TransitionLink href="/" className="flex items-center gap-2 mb-4 group">
                            <div className="w-8 h-8">
                                <Logo />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                GK<span className="text-gk-accent">-8</span>
                            </span>
                        </TransitionLink>
                        <p className="text-gk-metal-light text-sm leading-relaxed">
                            Prévention TMS et protection du dos, pensée pour le terrain.
                            <br />
                            Courte, claire, applicable immédiatement.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {[
                                { label: "Accueil", href: "/" },
                                { label: "Méthode GK-8", href: "/methode" },
                                { label: "Formations", href: "/formations" },
                                { label: "Secteurs", href: "/secteurs" },
                                { label: "Ressources", href: "/ressources" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <TransitionLink href={link.href} className="text-gk-metal-light hover:text-white text-sm transition-colors">
                                        {link.label}
                                    </TransitionLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Légal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gk-metal-light hover:text-white text-sm transition-colors">
                                    Mentions légales
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gk-metal-light hover:text-white text-sm transition-colors">
                                    Politique de confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gk-metal-light hover:text-white text-sm transition-colors">
                                    CGV
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Disclaimer */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Avertissement</h4>
                        <p className="text-gk-metal-light text-xs leading-relaxed border-l-2 border-gk-accent/30 pl-3">
                            Le programme GK-8 est une approche de prévention et de sensibilisation.
                            Il ne remplace en aucun cas un avis médical ou un traitement prescrit par un professionnel de santé.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gk-metal-light">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p>© {new Date().getFullYear()} GK-8. Tous droits réservés.</p>
                        <span className="hidden md:inline text-white/10">|</span>
                        <a
                            href="https://shou-edition.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gk-metal-light hover:text-gk-accent transition-colors"
                        >
                            Déployé par SHOU Edition
                        </a>
                    </div>
                    <p>Conçu pour le terrain.</p>
                </div>
            </div>
        </footer>
    );
}
