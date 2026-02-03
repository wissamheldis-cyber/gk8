import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
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
            return (
                <Link href={href} className={buttonClasses}>
                    {props.children}
                </Link>
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
