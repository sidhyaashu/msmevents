"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4  border-zinc-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                    {/* <Image
                        src="/assets/msm-logo-bg.png"
                        alt="Logo"
                        width={100}
                        height={25}
                    /> */}

                    © 2026 MSM Events & Advertisements. All Rights Reserved.
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 text-gray-400">
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/chumakov.events/" target="_blank" className="hover:text-white transition-colors">Instagram</a>
                        <a href="https://t.me/chumakov_events" target="_blank" className="hover:text-white transition-colors">Telegram</a>
                        <a href="https://www.youtube.com/@ChumakovEvents" target="_blank" className="hover:text-white transition-colors">YouTube</a>
                    </div>

                    <div className="flex gap-6 md:border-l md:border-zinc-800 md:pl-8">
                        <a href="mailto:msm.eventsmanagement@gmail.com" className="hover:text-white transition-colors">msm.eventsmanagement@gmail.com</a>
                        <a href="tel:+919635179728" className="hover:text-white transition-colors">+91 9635179728</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
