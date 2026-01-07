'use client';
import React from 'react';
import { WavePath } from "@/components/ui/wave-path";
import { cn } from '@/lib/utils';

export default function WaveSection() {
    return (
        <section className="relative w-full flex min-h-[50vh] md:min-h-screen flex-col items-center justify-center bg-black overflow-hidden">
            <div
                aria-hidden="true"
                className={cn(
                    'pointer-events-none absolute -top-10 left-1/2 w-full h-full -translate-x-1/2 rounded-full',
                    'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_50%)]',
                    'blur-[30px]',
                )}
            />

            <div className="flex w-[80vw] md:w-[70vw] flex-col items-end relative z-10">
                <WavePath className="mb-10 text-white" />
                <div className="flex w-full flex-col items-end">
                    <div className="flex flex-col items-end text-right">
                        <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">World of Experiences</p>
                        <p className="text-white ml-0 md:ml-8 w-full md:w-3/4 text-2xl md:text-4xl mt-4 leading-tight">
                            Discover impactful events and brand activations crafted to inspire, engage, and elevate brands.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
