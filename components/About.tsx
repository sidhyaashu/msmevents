"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about-us" className="py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Animated Background Numbers/Text */}
                <div className="relative mb-24 opacity-50 font-extrabold text-5xl md:text-9xl select-none overflow-hidden text-white">
                    <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                        Nationwide
                    </motion.div>
                    <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="text-right">
                        Nation scale
                    </motion.div>
                    <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                        Renowned
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/madhu.jpg"
                                alt="Madhu Sudan Mondal"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="mt-4 text-center text-gray-400">
                            Madhu Sudan Mondal. <span className="text-gray-600">Owner of the event agency</span>
                        </p>
                    </motion.div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <motion.h4
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight opacity-50"
                        >
                            MSM Events & Advertisements creates impactful events and brand activations with reliable execution across India.

                        </motion.h4>

                        <div className="space-y-6 text-lg text-gray-400">
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                We partner with leading brands to execute corporate events, exhibitions, product launches, and on-ground activations combining creativity, operational excellence, and reliable manpower to elevate brand presence and engage real audiences.
                            </motion.p>
                        </div>

                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            <a href="#quiz" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-colors">
                                Find out the price!
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
