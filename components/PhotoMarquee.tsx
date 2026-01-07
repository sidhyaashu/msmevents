"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3b5ed038c96aaa07218b_Copy%20of%20Nixopolis3186.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3b5e2f6227d057c6723e_Copy%20of%20datsteam_bangkok_12-24_-289.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3c36c3ebba51aa52e56d_Copy%20of%20nix-year-818.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3c36b98b4218c2df223d_Copy%20of%20Nix30-2748.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3c36fd8e7837259ab256_Nix30-2802.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678fe71c2109b1efe52be36f_Nix%20May%20539.avif",
];

const row2 = [
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3c36a5be829c3bbaa44d_Copy%20of%20Nixopolis4187.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3b5ea9f5a3de5754d2d8_Copy%20of%20dt_-67.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3c36a9f5a3de5755b4f0_Copy%20of%20BSA06973.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3c363c7ab5634b11f7aa_Copy%20of%20Nix30-624.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3c35a5be829c3bbaa42f_Copy%20of%20Nixopolis4114.avif",
    "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3b5efd91f44850a65d78_Copy%20of%20dt_-181.avif",
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
