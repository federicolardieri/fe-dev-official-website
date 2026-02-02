"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    px: number;
    py: number;
}

export function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let stars: Star[] = [];
        const numStars = 800;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Current CENTER of the starfield (where stars radiate FROM)
        let cx = width / 2;
        let cy = height / 2;

        // Target CENTER (mouse position)
        let targetCx = width / 2;
        let targetCy = height / 2;

        const setCanvasSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetCx = e.clientX;
            targetCy = e.clientY;
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: (Math.random() - 0.5) * width * 2,
                    y: (Math.random() - 0.5) * height * 2,
                    z: Math.random() * width,
                    px: 0,
                    py: 0,
                });
            }
        };

        const updateStars = () => {
            // LERP for Laggy Effect: Move current center towards target slowly
            // 0.02 = very slow lag, 0.1 = fast
            cx += (targetCx - cx) * 0.02;
            cy += (targetCy - cy) * 0.02;

            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "rgba(122, 62, 240, 0.8)"; // Purple

            for (const star of stars) {
                star.z -= 0.5; // Slow movement speed forward
                if (star.z <= 0) {
                    star.x = (Math.random() - 0.5) * width * 2;
                    star.y = (Math.random() - 0.5) * height * 2;
                    star.z = width;
                    star.px = 0;
                    star.py = 0;
                }

                const k = 128.0 / star.z;
                const px = star.x * k + cx;
                const py = star.y * k + cy;

                if (px >= 0 && px <= width && py >= 0 && py <= height) {
                    const size = (1 - star.z / width) * 3;
                    const shade = Math.floor((1 - star.z / width) * 255);

                    // Purple shades
                    ctx.fillStyle = `rgb(${Math.floor(shade * 0.48)}, ${Math.floor(shade * 0.24)}, ${Math.floor(shade * 0.94)})`;

                    ctx.beginPath();
                    ctx.arc(px, py, size, 0, Math.PI * 2);
                    ctx.fill();

                    if (star.px !== 0) {
                        ctx.strokeStyle = `rgb(${Math.floor(shade * 0.48)}, ${Math.floor(shade * 0.24)}, ${Math.floor(shade * 0.94)})`;
                        ctx.lineWidth = size;
                        ctx.beginPath();
                        ctx.moveTo(px, py);
                        ctx.lineTo(star.px, star.py);
                        ctx.stroke();
                    }
                }

                star.px = px;
                star.py = py;
            }

            requestAnimationFrame(updateStars);
        };

        setCanvasSize();
        initStars();

        window.addEventListener("mousemove", handleMouseMove);
        const animationId = requestAnimationFrame(updateStars);

        window.addEventListener("resize", () => {
            setCanvasSize();
            initStars();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", setCanvasSize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 bg-black"
            style={{ opacity: 0.8 }}
        />
    );
}
