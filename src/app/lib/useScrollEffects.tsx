"use client"
import { useEffect, useState } from "react";

interface ScrollEffectsInt {
    threshold?: number,
    verticalDisplacement?: number
}

export default function useScrollEffects(
    contentRef: React.RefObject<HTMLDivElement>,
    { threshold = 300, verticalDisplacement = 100 }: ScrollEffectsInt = {}) {
    const [style, setStyle] = useState({ opacity: 1, y: 0 });

    const calculateProgress = (distance: number, threshold: number) => {
        return Number(Math.max(Math.min(1 - Math.abs(distance) / threshold, 1), 0).toFixed(2));
    };

    const calculateDisplacement = (distance: number, progress: number, verticalDisplacement: number) => {
        const direction = distance > 0 ? 1 : -1;
        return direction * (1 - progress) * verticalDisplacement;
    };

    const handleScroll = () => {
        const element = contentRef.current;
        if (!element) return;

        const { top, height } = element.getBoundingClientRect();
        const elementCenter = top + height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = elementCenter - viewportCenter;

        const progress = calculateProgress(distance, threshold);
        const displacement = calculateDisplacement(distance, progress, verticalDisplacement);

        setStyle({ opacity: progress, y: displacement });
    };

    useEffect(() => {
        const onScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [contentRef, threshold, verticalDisplacement]);

    return style;
}; 