export function Terrain() {
    return (
        <section className="py-20 bg-gk-black text-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 opacity-70">
                    {["Charges instables", "Torsions", "Cadence soutenue", "Fatigue", "Froid", "Stress", "Sols irréguliers"].map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-gk-metal-light text-sm md:text-base">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-2xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
                    “On ne moralise pas. <br />
                    <span className="text-gk-accent">On équipe.</span>”
                </p>
            </div>
        </section>
    );
}
