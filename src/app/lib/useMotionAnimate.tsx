"use client"
import { useEffect, useState } from "react";

interface MotionAnimateInt {
    duration?: number,
    delay?: number,
    animation?: "fade" | "slide-fade",
}

export default function useMotionAnimate({ duration = 1, delay = 0, animation = "slide-fade" }: MotionAnimateInt = {}) {

    const FadeInEffect = {
        variants: {
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: 1,
                transition: {
                    delay,
                    duration
                },
            },
        },
        initial: "hidden",
        animate: "visible",
    };

    const FadeSlideInEffect = {
        variants: {
            hidden: {
                opacity: 0,
                y: 50,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    delay,
                    duration
                },
            },
        },
        initial: "hidden",
        animate: "visible",
    };

    return animation == "fade" ? FadeInEffect : animation == "slide-fade" ? FadeSlideInEffect : null;
}; 