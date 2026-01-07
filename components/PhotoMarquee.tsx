"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const row1 = [
    "/assets/scroll/8.jpg",
    "/assets/scroll/9.jpg",
    "/assets/scroll/10.jpg",
    "/assets/scroll/11.jpg",
    "/assets/scroll/12.jpg",
];

const row2 = [
    "/assets/scroll/14.jpg",
    "/assets/scroll/15.jpg",
    "/assets/scroll/16.jpg",
    "/assets/scroll/11.jpg",
    "/assets/scroll/12.jpg",
];

export default function PhotoMarquee() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // Text Animations
    // Text appears 0 -> 0.25, stays visible
    const textOpacity = useTransform(smoothProgress, [0, 0.5, 0.5, 0.6], [0, 1, 1, 0]);
    const textScale = useTransform(smoothProgress, [0, 0.25], [0.8, 1]);
    const textY = useTransform(smoothProgress, [0, 0.25], [100, 0]);
    const textBlur = useTransform(smoothProgress, [0, 0.25], ["blur(10px)", "blur(0px)"]);

    // Row Animations
    // Enter delayed: 0.35 -> 0.65
    // Exit: 0.8 -> 1.0
    // Use -100% for Row 1 (Left->Right) and 100% for Row 2 (Right->Left) with w-max to ensure fully offscreen
    const row1X = useTransform(smoothProgress, [0.35, 0.65, 0.8, 1], ["-100%", "0%", "0%", "100%"]);
    const row2X = useTransform(smoothProgress, [0.35, 0.65, 0.8, 1], ["100%", "0%", "0%", "-100%"]);

    // Global Opacity for rows
    // Make them visible earlier (0.3) so they are fully opaque when movement starts (0.35)
    // But since they are offscreen at 0.35, this is safe.
    const rowsOpacity = useTransform(smoothProgress, [0, 0.25, 0.3, 0.8, 0.9], [0, 0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center">

                {/* Text Layer */}
                <motion.div
                    style={{ opacity: textOpacity, scale: textScale, y: textY, filter: textBlur }}
                    className="absolute z-20 text-center"
                >
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Welcome to MSM Events</p>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                        No limits <br />
                        <span className="opacity-50">Just epic events</span>
                    </h2>
                </motion.div>

                {/* Images Layer */}
                <motion.div
                    style={{ opacity: rowsOpacity }}
                    className="relative z-10 w-full flex flex-col gap-8 md:gap-16 -rotate-2 scale-110"
                >
                    {/* Row 1 - Moves Left to Right */}
                    <motion.div style={{ x: row1X }} className="flex gap-4 md:gap-8 w-max whitespace-nowrap px-4">
                        {row1.map((src, i) => (
                            <div key={`r1-${i}`} className="relative w-[300px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={src}
                                    alt={`Event ${i}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 2 - Moves Right to Left */}
                    <motion.div style={{ x: row2X }} className="flex gap-4 md:gap-8 w-max whitespace-nowrap px-4 justify-end">
                        {row2.map((src, i) => (
                            <div key={`r2-${i}`} className="relative w-[300px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={src}
                                    alt={`Event ${i}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
