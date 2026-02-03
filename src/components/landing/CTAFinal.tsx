import { Button } from "../ui/Button";

export function CTAFinal() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gk-accent/10" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    Vous voulez une version adaptée à votre poste ?
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" href="/contact">
                        Demander un devis
                    </Button>
                    <Button variant="outline" size="lg" className="bg-black/50 backdrop-blur-md" href="/contact">
                        Prendre un RDV
                    </Button>
                </div>
            </div>
        </section>
    );
}
