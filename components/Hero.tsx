"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black px-4">
            {/* Dynamic Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero.jpg"
                    alt="Hero background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Aurora / Spotlight Effect */}
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[100px] rounded-full animate-pulse delay-1000" />
            </motion.div>

            <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
                {/* Animated Headline with Letter Stagger */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white leading-[1] mb-8 mix-blend-difference"
                >
                    Crafted Events <br />
                    <span className="text-gray-400">Designed to </span>
                    Stand Out
                </motion.h1>

                {/* Animated Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-2xl text-lg md:text-xl text-gray-200 mb-12 leading-relaxed font-light"
                >
                    <p>
                        Excellence in corporate events, exclusive side events for the crypto and IGaming elite,
                        and bespoke private celebrations.
                    </p>
                </motion.div>

                {/* Magnetic CTA Button */}
                <MagneticButton>
                    <motion.a
                        href="#quiz"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="inline-flex px-10 py-5 bg-white text-black rounded-full font-bold text-lg transition-transform hover:scale-110 items-center justify-center gap-2 group cursor-pointer"
                    >
                        Find out the price!
                        <div className="w-2 h-2 bg-black rounded-full group-hover:bg-blue-600 transition-colors" />
                    </motion.a>
                </MagneticButton>
            </div>

            {/* Social Links Bottom Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-8 hidden md:flex flex-col gap-2 z-20 text-xs uppercase tracking-widest text-gray-400 mix-blend-difference"
            >
                <a href="https://www.linkedin.com/company/msm-events-advertisement" target="_blank" className="hover:text-white transition-colors">Linkedin</a>
                {/* <a href="https://t.me/chumakov_events" target="_blank" className="hover:text-white transition-colors">Facebook</a> */}
                <a href="https://youtube.com/@msmeventsadvertisements" className="hover:text-white transition-colors">YouTube</a>
            </motion.div>
        </section>
    );
}
