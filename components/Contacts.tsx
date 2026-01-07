"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function Contacts() {
    return (
        <section id="contacts" className="py-24 bg-black border-zinc-900 text-white px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">

                {/* Left Side: Contact Info */}
                <div className="w-full md:w-1/2">
                    <div className="mb-12">
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-gray-500 mb-2">Contacts</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">Have an event in mind?</motion.h2>
                        <p className="text-gray-400 text-lg">
                            Fill out this short quiz and we will get in touch with you!
                        </p>
                    </div>

                    <div className="flex flex-col gap-10">
                        {/* Chat Item */}
                        <motion.a
                            href="msm.eventsmanagement@gmail.com"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-start gap-6 group"
                        >
                            <div className="text-white group-hover:text-blue-500 transition-colors mt-1">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-2">Chat with us</h4>
                                <p className="text-gray-400 text-base mb-2">Our friendly team here to help you</p>
                                <p className="text-white font-medium group-hover:text-blue-500 transition-colors">msm.eventsmanagement@gmail.com</p>
                            </div>
                        </motion.a>

                        {/* Call Item */}
                        <motion.a
                            href="tel:+919635179728"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-start gap-6 group"
                        >
                            <div className="text-white group-hover:text-blue-500 transition-colors mt-1">
                                <Phone className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-2">Call us</h4>
                                <p className="text-gray-400 text-base mb-2">Call us whenever you need</p>
                                <p className="text-white font-medium group-hover:text-blue-500 transition-colors">+91 9635179728</p>
                            </div>
                        </motion.a>
                    </div>
                </div>

                {/* Right Side: Simple Form */}
                <div className="w-full md:w-1/2">
                    <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 h-full">
                        <div className="mb-8">
                            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Contact form</p>
                            <h3 className="text-2xl font-bold">Fill out the form and we will get in touch with you!</h3>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 font-medium ml-1">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-white placeholder-gray-600"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 font-medium ml-1">Your Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-white placeholder-gray-600"
                                    placeholder="1234567890"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-lg mt-4 transition-colors shadow-lg shadow-blue-900/20 cursor-pointer"
                            >
                                Submit
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
