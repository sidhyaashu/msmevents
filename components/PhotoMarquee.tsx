"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

function MarqueeRow({ images, direction = "left", speed = 20 }: { images: string[], direction?: "left" | "right", speed?: number }) {
    return (
        <div className="flex overflow-hidden whitespace-nowrap mask-gradient relative">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : 0 }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                className="flex gap-4 min-w-full"
            >
                {[...images, ...images, ...images].map((src, i) => (
                    <div key={i} className="relative w-[300px] md:w-[400px] h-[250px] md:h-[300px] flex-shrink-0 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                        <Image
                            src={src}
                            alt={`Event photo ${i}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </motion.div>
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : 0 }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                className="flex gap-4 min-w-full absolute top-0 left-full"
            >
                {[...images, ...images, ...images].map((src, i) => (
                    <div key={i} className="relative w-[300px] md:w-[400px] h-[250px] md:h-[300px] flex-shrink-0 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                        <Image
                            src={src}
                            alt={`Event photo ${i}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default function PhotoMarquee() {
    return (
        <section className="py-24 bg-black overflow-hidden space-y-8">
            <div className="text-center mb-12">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-gray-500 mb-2">Welcome to Chumakov Events</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-white">
                    No limits <br />
                    <span className="text-stroke">Just epic events</span>
                </motion.h2>
            </div>

            <div className="-rotate-2 scale-110">
                <MarqueeRow images={row1} speed={40} direction="left" />
            </div>
            <div className="rotate-2 scale-110">
                <MarqueeRow images={row2} speed={40} direction="right" />
            </div>
        </section>
    );
}
