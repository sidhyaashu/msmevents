"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, AlertCircle } from "lucide-react";
import {
    submitQuizForm,
    saveFormToStorage,
    loadFormFromStorage,
    clearFormStorage,
    type QuizFormData
} from "@/lib/form-manager";

const steps = [
    {
        id: 1,
        question: "What type of event do you have in mind?",
        options: ["Birthday party", "Product launch", "Corporate event", "Private celebration", "Business conference", "Gala dinner", "Wedding", "Other"],
        type: "radio",
        fieldName: "eventType"
    },
    {
        id: 2,
        question: "What's the date and place of your event?",
        type: "inputs",
        fields: [
            { name: "date", label: "Date", type: "date" },
            { name: "place", label: "Place", type: "text" }
        ],
    },
    {
        id: 3,
        question: "How many guests are you expecting?",
        options: ["10 - 30 people", "30 - 50 people", "50 - 100 people", "100 - 200 people", "200+ people"],
        type: "radio",
        fieldName: "guestCount"
    },
    {
        id: 4,
        question: "Do you need a headline performer for event?",
        options: ["Yes, we would like a famous performer", "Yes, but a local or emerging talent would be enough", "No, we don't need a headline performer"],
        type: "radio",
        fieldName: "performer"
    },
    {
        id: 5,
        question: "Do you need a personal consultation?",
        options: ["Yes, let's schedule a call on Google Meet", "A phone call would be great", "I prefer communication via messenger", "Please send me the offer via WhatsApp/Telegram"],
        type: "radio",
        fieldName: "consultationType"
    },
    {
        id: 6,
        question: "The last step! Leave us your contacts and we will reach out you!",
        type: "last-step",
        fields: [
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone", type: "tel" }
        ]
    }
];

export default function Quiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<QuizFormData>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    // Load saved form data on mount
    useEffect(() => {
        const saved = loadFormFromStorage("quiz");
        if (saved) {
            setFormData(saved);
        }
    }, []);

    // Save form data whenever it changes
    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            saveFormToStorage("quiz", formData);
        }
    }, [formData]);

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

    const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        const result = await submitQuizForm(formData);

        setSubmitStatus({
            type: result.success ? "success" : "error",
            message: result.message,
        });

        if (result.success) {
            // Clear form and storage on success
            clearFormStorage("quiz");
            setFormData({});

            // Reset to first step after 3 seconds
            setTimeout(() => {
                setCurrentStep(0);
                setSubmitStatus({ type: null, message: "" });
            }, 3000);
        }

        setIsSubmitting(false);
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
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                    >
                        <span className="opacity-60"> A quick quiz to help us create the event of your <span className="text-blue-500">dreams!</span></span>
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
                                    {currentQuestion.options?.map((option) => {
                                        const fieldName = currentQuestion.fieldName || '';
                                        const isSelected = formData[fieldName as keyof QuizFormData] === option;

                                        return (
                                            <button
                                                key={option}
                                                onClick={() => handleInputChange(fieldName, option)}
                                                className={`p-5 rounded-2xl border text-left transition-all duration-300 group relative overflow-hidden cursor-pointer ${isSelected ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/50" : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"}`}
                                            >
                                                <div className="flex items-center justify-between relative z-10">
                                                    <span className="font-medium">{option}</span>
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? "border-white bg-white" : "border-gray-500 group-hover:border-gray-300"}`}>
                                                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            {currentQuestion.type === "inputs" && (
                                <div className="space-y-6">
                                    {currentQuestion.fields?.map((field) => (
                                        <div key={field.name}>
                                            <label className="block text-sm text-gray-400 mb-2 font-medium ml-1">{field.label}</label>
                                            <input
                                                type={field.type}
                                                value={(formData[field.name as keyof QuizFormData] as string) || ""}
                                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                                placeholder={`Enter ${field.label}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {currentQuestion.type === "last-step" && (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {currentQuestion.fields?.map((field) => (
                                        <div key={field.name}>
                                            <label className="block text-sm text-gray-400 mb-2 font-medium ml-1">
                                                {field.name === "phone" ? "Your Phone Number" : `Your ${field.label}`}
                                            </label>
                                            <input
                                                type={field.type}
                                                value={(formData[field.name as keyof QuizFormData] as string) || ""}
                                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                                placeholder={`Enter ${field.label}`}
                                                required
                                            />
                                        </div>
                                    ))}

                                    {/* Status Message */}
                                    {submitStatus.type && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded-lg flex items-center gap-3 ${submitStatus.type === "success"
                                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                                }`}
                                        >
                                            {submitStatus.type === "success" ? (
                                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            )}
                                            <span className="text-sm font-medium">{submitStatus.message}</span>
                                        </motion.div>
                                    )}

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className={`w-full py-5 rounded-full font-bold text-lg mt-8 transition-shadow shadow-lg text-white cursor-pointer ${isSubmitting
                                                ? "bg-gray-600 cursor-not-allowed"
                                                : "bg-gradient-to-r from-blue-600 to-blue-500 shadow-blue-900/50"
                                            }`}
                                    >
                                        {isSubmitting ? "Sending request..." : "Send a request!"}
                                    </motion.button>
                                </form>
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
