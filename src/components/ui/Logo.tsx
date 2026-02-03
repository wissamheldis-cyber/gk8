import { clsx } from "clsx";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={clsx("relative flex items-center justify-center", className)}>
            {/* 
        Abstract Spine/Force Concept:
        Two interlocking rings representing vertebra/protection + force lines 
      */}
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Outer Ring - Protection */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-gray-600/50"
                    strokeWidth="2"
                />

                {/* Ring 1 - Dynamic Accent (Rotated) */}
                <ellipse
                    cx="50"
                    cy="50"
                    rx="45"
                    ry="25"
                    className="stroke-gk-accent"
                    strokeWidth="3"
                    transform="rotate(-30 50 50)"
                />

                {/* Ring 2 - Structure (Counter-rotated) */}
                <ellipse
                    cx="50"
                    cy="50"
                    rx="45"
                    ry="25"
                    className="stroke-white"
                    strokeWidth="1.5"
                    transform="rotate(60 50 50)"
                />

                {/* Core Dot (Center of Gravity) */}
                <circle cx="50" cy="50" r="6" className="fill-white" />
                <circle cx="50" cy="50" r="3" className="fill-gk-accent" />
            </svg>
        </div>
    );
}
