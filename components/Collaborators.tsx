import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud";

const logos = [
    {
        src: "/assets/brands/asianpaints.png",
        alt: "Asian Paints",
    },
    {
        src: "/assets/brands/keekoo.png",
        alt: "Keekoo",
    },
    {
        src: "/assets/brands/technorail.png",
        alt: "Technorail",
    },
    {
        src: "/assets/brands/zepto.png",
        alt: "Zepto",
    },
    {
        src: "/assets/brands/asianpaints.png",
        alt: "Asian Paints",
    },
    {
        src: "/assets/brands/keekoo.png",
        alt: "Keekoo",
    },
    {
        src: "/assets/brands/technorail.png",
        alt: "Technorail",
    },
    {
        src: "/assets/brands/zepto.png",
        alt: "Zepto",
    },
];

export default function Collaborators() {
    return (
        <div className="w-full place-content-center px-4 py-24 bg-black">
            <div
                aria-hidden="true"
                className={cn(
                    "-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
                    "bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]",
                    "blur-[60px]"
                )}
            />
            <div className="w-full max-w-6xl mx-auto relative z-10">
                <h2 className="mb-8 text-center">
                    <span className="block font-medium text-lg text-gray-500 uppercase tracking-widest mb-2">
                        Trusted by
                    </span>
                    <span className="font-bold text-3xl md:text-5xl text-white tracking-tight">
                       leading companies
                    </span>
                </h2>

                <LogoCloud logos={logos} />
            </div>
        </div>
    );
}
