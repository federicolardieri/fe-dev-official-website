"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function MouseAura() {
    const [isMobile, setIsMobile] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Disable on mobile/touch devices for performance
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            if (isMobile) return;
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", checkMobile);
        };
    }, [mouseX, mouseY, isMobile]);

    if (isMobile) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"
            style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
    );
}
