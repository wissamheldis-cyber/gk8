"use client";

import { Logo } from "../ui/Logo";
import { motion, AnimatePresence } from "framer-motion";

interface GlobalLoaderProps {
    isLoading: boolean;
}

export function GlobalLoader({ isLoading }: GlobalLoaderProps) {
    // We removed internal state logic because it is now managed by TransitionContext

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-gk-black flex flex-col items-center justify-center p-4"
                >
                    <div className="relative w-32 h-32 md:w-48 md:h-48">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full h-full"
                        >
                            <Logo />
                        </motion.div>

                        {/* Cinematic pulsing ring behind */}
                        <motion.div
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full border border-gk-accent/30"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex flex-col items-center gap-2"
                    >
                        <h1 className="text-2xl font-bold tracking-widest text-white">
                            GK<span className="text-gk-accent">-8</span>
                        </h1>
                        <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gk-accent"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
