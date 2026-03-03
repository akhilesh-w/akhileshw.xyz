"use client";

import { useEffect, useState } from "react";

export const ReadingProgressBar = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                );
            }
        };

        window.addEventListener("scroll", updateScrollCompletion);

        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-full h-1 z-50 transition-all duration-300 pointer-events-none"
            style={{
                background: `linear-gradient(to right, #6366f1 ${completion}%, transparent ${completion}%)`,
            }}
        >
            <div
                className="absolute top-0 right-0 h-full w-1 bg-indigo-500 blur-sm rounded-full"
                style={{ left: `${completion}%`, opacity: completion > 0 ? 1 : 0 }}
            />
        </div>
    );
};
