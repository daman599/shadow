"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ReturnToPreview = () => {
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            setShowButton(currentScrollY > 150);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function handleButtonClick() {
        document.getElementById("preview")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <div className="fixed bottom-5 md:bottom-10 right-4 md:right-8 z-50">
            {showButton && <button
                onClick={handleButtonClick}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md border border-muted shadow-xl 
                flex items-center justify-center transition-all duration-300
                 cursor-pointer">
                <ChevronUp />
            </button>}
        </div>
    );
}