"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4  border-zinc-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://cdn.prod.website-files.com/670d3ec1994882689450fd5d/67231e0ec47b3843f2e3b73e_Logo.png"
                        alt="Logo"
                        width={157}
                        height={25}
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 text-gray-400">
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/chumakov.events/" target="_blank" className="hover:text-white transition-colors">Instagram</a>
                        <a href="https://t.me/chumakov_events" target="_blank" className="hover:text-white transition-colors">Telegram</a>
                        <a href="https://www.youtube.com/@ChumakovEvents" target="_blank" className="hover:text-white transition-colors">YouTube</a>
                    </div>

                    <div className="flex gap-6 md:border-l md:border-zinc-800 md:pl-8">
                        <a href="mailto:hello@chumakov.events" className="hover:text-white transition-colors">hello@chumakov.events</a>
                        <a href="tel:+36703780528" className="hover:text-white transition-colors">+36 703 78 05 28</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
