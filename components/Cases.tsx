"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const cases = [
    {
        title: "Affiliate Night: Exclusive Event",
        tags: ["VIP", "Affiliate", "Sigma"],
        image: "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678fd81158e1c4e9260fec50_Dats%20Team%20Image.avif",
    },
    {
        title: "30th Anniversary Celebration",
        tags: ["Corporate", "Headliners", "Teambuilding"],
        image: "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678f3c36fd8e7837259ab256_Nix30-2802.avif",
    },
    {
        title: "Christmas Gala Dinner",
        tags: ["Christmas", "Gala Dinner", "Casino"],
        image: "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678fd811fb7b3d3cf1505188_Christmas%20Gala%20Dinner.avif",
    },
    {
        title: "Birthday Corporate Party",
        tags: ["Teambuilding", "Corporate", "Quest"],
        image: "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678fd811fda8ac4b60bf3e91_Sentyabrevka%202023.avif",
    },
    {
        title: "May Party",
        tags: ["Family day", "1000+ guests", "Corporate"],
        image: "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678fd811a0fab16f1916a7dc_May%20Party.avif",
    },
    {
        title: "Family Day: Western Vibes",
        tags: ["Western", "Corporate", "IT-company"],
        image: "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/678fd916ff96ae7abec002b6_Maevka%202023.avif",
    },
    {
        title: "Business Summit GMP+",
        tags: ["Forum", "Business event", "Conference"],
        image: "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/679291ae0b8637c1029b0d9e_alexandre-debieve-DOu3JJ3eLQc-unsplash.avif",
    },
    {
        title: "Nigth Parties",
        tags: ["Nightlife", "Show program", "Artists"],
        image: "https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/6793d38827a554adde4c8d2d_dawid-labno-tZTLzyz4-xI-unsplash.avif",
    },
];

function CaseCard({ item, index }: { item: any, index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax scale effect
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className="group relative cursor-pointer"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-900 mb-4">
                <motion.div style={{ scale }} className="w-full h-full relative">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:blur-sm lg:group-hover:blur-0"
                    />
                </motion.div>

                {/* Reveal Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="px-6 py-3 border border-white/30 rounded-full text-white tracking-widest uppercase text-sm font-bold bg-white/10 hover:bg-white/20 transition-colors">
                        View Case
                    </span>
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                    {item.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                    {item.tags.map((tag: string, i: number) => (
                        <span key={i} className="flex items-center">
                            {tag}
                            {i < item.tags.length - 1 && <span className="mx-2 h-1 w-1 rounded-full bg-gray-800 block" />}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function Cases() {
    return (
        <section id="event-cases" className="py-24 bg-black text-white px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm uppercase tracking-widest text-gray-500 mb-2 mix-blend-difference"
                    >
                        Cases
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bold"
                    >
                        Explore our <br className="hidden md:block" />
                        <span className="text-stroke">event cases</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {cases.map((item, index) => (
                        <CaseCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
