"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "/methode", label: "Méthode GK-8" },
        { href: "/formations", label: "Formations" },
        { href: "/secteurs", label: "Secteurs" },
        { href: "/ressources", label: "Ressources" },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-gk-black/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 transition-transform group-hover:scale-110">
                        <Logo />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-white">
                        GK<span className="text-gk-accent">-8</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gk-metal-light hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" href="/contact">
                        Demander un devis
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-gk-black border-t border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-white py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="primary" className="w-full" href="/contact">
                        Demander un devis
                    </Button>
                </div>
            )}
        </header>
    );
}
