"use client";

import { useEffect, useState } from "react";

export const YearProgress = () => {
    const [progress, setProgress] = useState(0);
    const [daysLeft, setDaysLeft] = useState(0);
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const calculateProgress = () => {
            const now = new Date();
            const start = new Date(now.getFullYear(), 0, 1);
            const end = new Date(now.getFullYear() + 1, 0, 1);
            const total = end.getTime() - start.getTime();
            const elapsed = now.getTime() - start.getTime();
            const percentage = (elapsed / total) * 100;

            setProgress(percentage);
            setYear(now.getFullYear());

            const diff = end.getTime() - now.getTime();
            setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
        };

        calculateProgress();
        // Update every hour
        const interval = setInterval(calculateProgress, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-medium text-neutral-500 dark:text-neutral-400">
                <span>{year} is {progress.toFixed(2)}% complete</span>
                <span className="tabular-nums">{daysLeft} days remaining</span>
            </div>
            <div className="h-1 w-full bg-neutral-200/50 dark:bg-neutral-800/50 rounded-full overflow-hidden">
                <div
                    className="h-full bg-neutral-400 dark:bg-neutral-500 transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};
