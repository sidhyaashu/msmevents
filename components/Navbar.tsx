"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";

const navLinks = [
    { name: "About", href: "#about-us" }, // Updated href to match ID in About.tsx
    { name: "Catalogue", href: "#event-cases" }, // Updated href to match ID in Cases.tsx
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Contacts", href: "#contacts" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        if (lenis) {
            lenis.scrollTo(href, { duration: 1.5 });
        } else {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-transparent py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50">
                        <Image
                            src="/assets/msm-logo-bg.png"
                            alt="MSM Logo"
                            width={70}
                            height={20}
                            className="object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="#quiz"
                            onClick={(e) => handleLinkClick(e, "#quiz")}
                            className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm tracking-wide hover:bg-gray-200 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative z-50 text-white p-2 cursor-pointer"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-3xl font-bold text-white uppercase tracking-wider hover:text-gray-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#quiz"
                            onClick={(e) => handleLinkClick(e, "#quiz")}
                            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-colors"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
