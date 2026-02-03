"use client";

import { createContext, useContext, useState, ReactNode, useEffect, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { GlobalLoader } from "../components/layout/GlobalLoader";

interface TransitionContextType {
    isLoading: boolean;
    navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true); // Start true for initial load
    const [isFirstVisit, setIsFirstVisit] = useState(true);

    // Initial load logic
    useEffect(() => {
        const hasVisited = sessionStorage.getItem("gk8-visited");
        if (hasVisited) {
            setIsFirstVisit(false);
            // If not first visit, maybe shorter load or just immediate? 
            // We'll keep the logic consistent: isLoading starts true, then we turn it off.
        } else {
            sessionStorage.setItem("gk8-visited", "true");
            setIsFirstVisit(true);
        }

        const delay = isFirstVisit ? 3000 : 1200; // Actually for initial load, we might want to respect the 3s rule
        // Wait for the initial delay
        const timer = setTimeout(() => {
            setIsLoading(false);
            if (isFirstVisit) setIsFirstVisit(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [isFirstVisit]); // Only run once on mount (or when isFirstVisit settles)

    // When pathname actually changes, we can turn off loading if we triggered it manually
    useEffect(() => {
        // This is a failsafe. If we navigated using standard links or back button.
        // However, our navigate function sets isLoading(true).
        // We need to know when to set it to false.
        // In Next.js, pathname change means the new page is rendered.
        // So we can start a timer here to reveal the new page.

        if (isLoading) {
            // If we are already loading (triggered by navigate), we wait for the "cinematic" delay before revealing.
            // But if we just arrived here (popstate), we might also want to show loader? 
            // Let's rely on the navigate function for the "before" part. 
            // And here we ensure it turns off.

            const delay = 1000; // Standard nav delay
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [pathname, searchParams]);


    const navigate = (href: string) => {
        if (href === pathname) return;

        setIsLoading(true); // Start fade in

        // Wait for fade in animation (approx 500-800ms) before changing route
        setTimeout(() => {
            router.push(href);
        }, 800);
    };

    return (
        <TransitionContext.Provider value={{ isLoading, navigate }}>
            <Suspense fallback={null}>
                <GlobalLoader isLoading={isLoading} />
            </Suspense>
            {children}
        </TransitionContext.Provider>
    );
}

export function useTransition() {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error("useTransition must be used within a TransitionProvider");
    }
    return context;
}
