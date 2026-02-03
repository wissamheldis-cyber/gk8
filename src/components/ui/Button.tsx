"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { useTransition } from "../../context/TransitionContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
        // Optional: We try to use the transition context.
        // Since this is a "ui" component it might be used outside provider? 
        // Ideally usage is always inside provider.
        // But hooks shouldn't crash if optional? No, useTransition throws.
        // Safe bet: assume it's used correctly or catch the hook error?
        // Better: wrap in a try/catch or just use the hook. The layout wraps everything.

        // However, hooks must be top level.
        const { navigate } = useTransition();

        const variants = {
            primary: "bg-gk-accent text-white hover:bg-opacity-90 shadow-lg hover:shadow-gk-accent/20",
            secondary: "bg-gk-white text-gk-black hover:bg-gray-200",
            outline: "border border-gk-white/20 text-gk-white hover:bg-white/10",
            ghost: "text-gk-metal-light hover:text-gk-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg font-semibold",
        };

        const buttonClasses = cn(
            "inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gk-accent/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            if (href.startsWith("#")) {
                return (
                    <a href={href} className={buttonClasses}>
                        {props.children}
                    </a>
                );
            }
            return (
                <button
                    type="button"
                    className={buttonClasses}
                    onClick={() => navigate(href)}
                >
                    {props.children}
                </button>
            );
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={buttonClasses}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
