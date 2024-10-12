"use client"
import { useEffect, useState } from "react";

interface ScrollEffectsInt {
    threshold?: number,
    verticalDisplacement?: number,
    isStarting?: boolean
}

export default function useScrollEffects(
    contentRef: React.RefObject<HTMLDivElement>,
    { threshold = 300, verticalDisplacement = 100, isStarting = false }: ScrollEffectsInt = {}
) {
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

        // Check if the component is the starting component
        if (isStarting && top >= 0) {
            setStyle({ opacity: 1, y: 0 }); // No effect if at the top
            return;
        }

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
    }, [contentRef, threshold, verticalDisplacement, isStarting, handleScroll]);

    return style;
};
