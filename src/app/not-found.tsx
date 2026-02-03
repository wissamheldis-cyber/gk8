import { TransitionLink } from "@/components/ui/TransitionLink";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export const metadata = {
    title: "404 - Page Introuvable | GK-8",
};

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gk-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-lg">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 backdrop-blur-sm">
                    <AlertTriangle className="w-8 h-8 text-gk-accent" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    Page Introuvable
                </h1>

                <p className="text-gk-metal-light text-lg mb-8 leading-relaxed">
                    Il semble que cette page n'existe pas ou a été déplacée.
                    Retournez en terrain connu.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <TransitionLink href="/">
                        <Button size="lg" className="w-full sm:w-auto">
                            <ArrowLeft className="mr-2 w-5 h-5" />
                            Retour à l'accueil
                        </Button>
                    </TransitionLink>
                </div>
            </div>
        </div>
    );
}
