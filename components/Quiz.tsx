"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

const steps = [
    {
        id: 1,
        question: "What type of event do you have in mind?",
        options: ["Birthday party", "Product launch", "Corporate event", "Private celebration", "Business conference", "Gala dinner", "Wedding", "Other"],
        type: "radio",
    },
    {
        id: 2,
        question: "What’s the date and place of your event?",
        type: "inputs",
        fields: ["Date", "Place"],
    },
    {
        id: 3,
        question: "How many guests are you expecting?",
        options: ["10 - 30 people", "30 - 50 people", "50 - 100 people", "100 - 200 people", "200+ people"],
        type: "radio",
    },
    {
        id: 4,
        question: "Do you need a headline performer for event?",
        options: ["Yes, we would like a famous performer", "Yes, but a local or emerging talent would be enough", "No, we don’t need a headline performer"],
        type: "radio"
    },
    {
        id: 5,
        question: "Do you need a personal consultation?",
        options: ["Yes, let’s schedule a call on Google Meet", "A phone call would be great", "I prefer communication via messenger", "Please send me the offer via WhatsApp/Telegram"],
        type: "radio"
    },
    {
        id: 6,
        question: "The last step! Leave us your contacts and we will reach out you!",
        type: "last-step",
        fields: ["Name", "Email", "Phone"]
    }
];

export default function Quiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<any>({});

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const currentQuestion = steps[currentStep];

    return (
        <section id="quiz" className="py-32 bg-black text-white px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
                {/* Left Side: Text */}
                <div className="w-full md:w-1/3">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-gray-500 mb-2">Quiz</motion.p>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight opacity-50"
                    >
                        A quick quiz to help us create the event of your <span className="text-blue-500">dreams!</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Fill out this short quiz if you already know the event you&#x27;d like to organize!
                        This will help us understand your needs better and offer the most suitable solution.
                    </p>
                </div>

                {/* Right Side: Glassmorphic Form */}
                <div className="w-full md:w-2/3 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Progress Bar */}
                    <div className="mb-8 relative z-20">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-sm font-mono text-gray-500">Step {currentStep + 1} / {steps.length}</span>
                            <div className="h-1 bg-white/10 flex-1 ml-4 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                    className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                                />
                            </div>
                        </div>
                        <motion.h3
                            key={currentStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl md:text-3xl font-bold"
                        >
                            {currentQuestion.question}
                        </motion.h3>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="min-h-[300px] relative z-20"
                        >
                            {currentQuestion.type === "radio" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {currentQuestion.options?.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => setAnswers({ ...answers, [currentQuestion.id]: option })}
                                            className={`p-5 rounded-2xl border text-left transition-all duration-300 group relative overflow-hidden cursor-pointer ${answers[currentQuestion.id] === option ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/50" : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"}`}
                                        >
                                            <div className="flex items-center justify-between relative z-10">
                                                <span className="font-medium">{option}</span>
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${answers[currentQuestion.id] === option ? "border-white bg-white" : "border-gray-500 group-hover:border-gray-300"}`}>
                                                    {answers[currentQuestion.id] === option && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {currentQuestion.type === "inputs" && (
                                <div className="space-y-6">
                                    {currentQuestion.fields?.map((field) => (
                                        <div key={field}>
                                            <label className="block text-sm text-gray-400 mb-2 font-medium ml-1">{field}</label>
                                            <input
                                                type={field === "Date" ? "date" : "text"}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                                placeholder={`Enter ${field}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {currentQuestion.type === "last-step" && (
                                <div className="space-y-6">
                                    {currentQuestion.fields?.map((field) => (
                                        <div key={field}>
                                            <label className="block text-sm text-gray-400 mb-2 font-medium ml-1">{field === "Phone" ? "Your Phone Number" : `Your ${field}`}</label>
                                            <input
                                                type={field === "Email" ? "email" : "text"}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                                placeholder={`Enter ${field}`}
                                            />
                                        </div>
                                    ))}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-bold text-lg mt-8 transition-shadow shadow-lg shadow-blue-900/50 text-white cursor-pointer"
                                    >
                                        Send a request!
                                    </motion.button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-between mt-10 pt-8 border-t border-white/10 relative z-20">
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 0}
                            className={`text-gray-400 hover:text-white transition-colors font-medium ${currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            Back
                        </button>

                        {currentQuestion.type !== "last-step" && (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 cursor-pointer"
                            >
                                Next <ChevronRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
