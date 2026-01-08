/**
 * Form Management Utility
 * Centralized form handling for both Quiz and Contact forms
 */

export interface QuizFormData {
    eventType?: string;
    date?: string;
    place?: string;
    guestCount?: string;
    performer?: string;
    consultationType?: string;
    name?: string;
    email?: string;
    phone?: string;
}

export interface ContactFormData {
    name: string;
    phone: string;
}

export interface FormValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
}

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate phone number (flexible format)
 */
export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
};

/**
 * Validate Quiz Form Data
 */
export const validateQuizForm = (data: QuizFormData): FormValidationResult => {
    const errors: Record<string, string> = {};

    if (!data.name || data.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters";
    }

    if (!data.email || !validateEmail(data.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (!data.phone || !validatePhone(data.phone)) {
        errors.phone = "Please enter a valid phone number";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/**
 * Validate Contact Form Data
 */
export const validateContactForm = (data: ContactFormData): FormValidationResult => {
    const errors: Record<string, string> = {};

    if (!data.name || data.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters";
    }

    if (!data.phone || !validatePhone(data.phone)) {
        errors.phone = "Please enter a valid phone number";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/**
 * Submit Quiz Form
 */
export const submitQuizForm = async (data: QuizFormData): Promise<{ success: boolean; message: string }> => {
    try {
        // Validate first
        const validation = validateQuizForm(data);
        if (!validation.isValid) {
            return {
                success: false,
                message: "Please fill in all required fields correctly",
            };
        }

        // TODO: Replace with your actual API endpoint
        const response = await fetch("/api/quiz-submission", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Submission failed");
        }

        return {
            success: true,
            message: "Thank you! We'll get back to you soon.",
        };
    } catch (error) {
        console.error("Quiz form submission error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
};

/**
 * Submit Contact Form
 */
export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
    try {
        // Validate first
        const validation = validateContactForm(data);
        if (!validation.isValid) {
            return {
                success: false,
                message: "Please fill in all required fields correctly",
            };
        }

        // TODO: Replace with your actual API endpoint
        const response = await fetch("/api/contact-submission", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Submission failed");
        }

        return {
            success: true,
            message: "Thank you! We'll contact you soon.",
        };
    } catch (error) {
        console.error("Contact form submission error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
};

/**
 * Store form data in localStorage (for persistence)
 */
export const saveFormToStorage = (formType: "quiz" | "contact", data: any): void => {
    try {
        localStorage.setItem(`${formType}-form-draft`, JSON.stringify(data));
    } catch (error) {
        console.error("Failed to save form to storage:", error);
    }
};

/**
 * Retrieve form data from localStorage
 */
export const loadFormFromStorage = (formType: "quiz" | "contact"): any | null => {
    try {
        const stored = localStorage.getItem(`${formType}-form-draft`);
        return stored ? JSON.parse(stored) : null;
    } catch (error) {
        console.error("Failed to load form from storage:", error);
        return null;
    }
};

/**
 * Clear form data from localStorage
 */
export const clearFormStorage = (formType: "quiz" | "contact"): void => {
    try {
        localStorage.removeItem(`${formType}-form-draft`);
    } catch (error) {
        console.error("Failed to clear form storage:", error);
    }
};
