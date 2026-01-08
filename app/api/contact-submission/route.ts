import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        // Log the submission (in production, send to your database or email service)
        console.log("Contact Form Submission:", data);

        // TODO: Replace with your actual logic:
        // - Save to database
        // - Send email notification
        // - Integrate with CRM
        // Example: await sendEmail(data); await saveToDatabase(data);

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json({
            success: true,
            message: "Thank you! We'll contact you soon.",
        });
    } catch (error) {
        console.error("Contact submission error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong. Please try again later.",
            },
            { status: 500 }
        );
    }
}
