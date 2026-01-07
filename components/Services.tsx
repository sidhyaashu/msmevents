"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Events management",
        description: "End-to-end planning and execution for seamless events.",
    },
    {
        title: "Retail Activation",
        description: "Engaging in-store experiences to drive brand awareness and sales.",
    },
    {
        title: "Product Launch",
        description: "Strategic launch events to generate buzz and impact.",
    },
    {
        title: "Award Function",
        description: "Prestigious ceremonies to recognize and celebrate excellence.",
    },
    {
        title: "Roadshow",
        description: "Mobile brand experiences reaching audiences across multiple locations.",
    },
    {
        title: "Audit Survey Program",
        description: "Comprehensive data collection and analysis services.",
    },
    {
        title: "Corporate Events",
        description: "Professional gatherings, conferences, and seminars.",
    },
    {
        title: "Web Development",
        description: "Custom websites and digital solutions for your business.",
    },
];

export default function Services() {
    const [activeIndices, setActiveIndices] = useState<number[]>([]);

    const toggleService = (index: number) => {
        if (activeIndices.includes(index)) {
            setActiveIndices(activeIndices.filter((i) => i !== index));
        } else {
            setActiveIndices([...activeIndices, index]);
        }
    };

    return (
        <section id="services" className="py-24 bg-black text-white px-4 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                {/* Left Side: Sticky Image */}
                <div className="w-full md:w-1/3 relative md:sticky md:top-24">
                    <div className="relative aspect-video md:aspect-[3/4] rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-blue-500 mix-blend-color opacity-20 z-10 pointer-events-none" />
                        <Image
                            src="https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/6794ff832fff9eb254eb347b_samuel-regan-asante-J63ln0EZgtg-unsplash.avif"
                            alt="Service decoration"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Right Side: Accordion */}
                <div className="w-full md:w-2/3">
                    <div className="mb-20">
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-gray-500 mb-2">Services</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold">
                            Our Services
                        </motion.h2>
                    </div>

                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <button
                                    onClick={() => toggleService(index)}
                                    className={`w-full py-8 flex items-center justify-between text-left transition-all duration-300 border-b ${activeIndices.includes(index) ? "border-blue-500" : "border-gray-800 hover:border-gray-600"}`}
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-mono text-gray-600">0{index + 1}</span>
                                        <h3 className={`text-2xl md:text-4xl font-semibold transition-colors ${activeIndices.includes(index) ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className={`p-2 rounded-full border transition-all duration-300 ${activeIndices.includes(index) ? "bg-white text-black rotate-180 border-white" : "border-gray-700 text-gray-500 group-hover:border-white group-hover:text-white"}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndices.includes(index) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-12 py-6 flex flex-col md:flex-row gap-6 md:items-end justify-between">
                                                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                                                    {service.description}
                                                </p>
                                                <a href="#contacts" className="flex items-center gap-2 text-blue-500 hover:text-white transition-colors font-medium">
                                                    Discuss this <ArrowUpRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
