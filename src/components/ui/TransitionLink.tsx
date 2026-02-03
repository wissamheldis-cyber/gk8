"use client";

import { useTransition } from "@/context/TransitionContext";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface TransitionLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export function TransitionLink({ href, children, className, onClick }: TransitionLinkProps) {
    const { navigate } = useTransition();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (onClick) onClick();
        navigate(href);
    };

    return (
        <a href={href} onClick={handleClick} className={clsx("cursor-pointer", className)}>
            {children}
        </a>
    );
}
