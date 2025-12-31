"use client";

import { useState, useMemo } from "react";
import MainLayout from "../../../components/main-layout";
import Link from "next/link";
import { logs } from "./data";

export default function Logs() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = useMemo(() => {
        const counts: Record<string, number> = {};
        logs.forEach(log => {
            counts[log.category] = (counts[log.category] || 0) + 1;
        });

        const list = [
            { name: "All", count: logs.length },
            { name: "Books", count: counts["Books"] || 0 },
            { name: "Articles", count: counts["Articles"] || 0 },
            { name: "Resource", count: counts["Resource"] || 0 },
            { name: "Tweets", count: counts["Tweets"] || 0 },
            { name: "Video", count: counts["Video"] || 0 },
        ];

        return list;
    }, []);

    const filteredLogs = selectedCategory === "All"
        ? logs
        : logs.filter(log => log.category === selectedCategory);

    return (
        <MainLayout>

            <header className="appear stagger-1 mb-8">
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">Books & Bookmarks</h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    A collection of stuff I've read, watched, heard, or bookmarked lately.
                </p>
            </header>

            <nav className="appear stagger-2 flex flex-wrap gap-2 mb-10 justify-center sm:justify-end">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`px-3 py-1 rounded-full text-[11px] font-medium border transition-colors flex items-center gap-1 ${selectedCategory === cat.name
                            ? "bg-[#eef3db] text-neutral-900 border-neutral-600 dark:bg-[#323a1a] dark:text-[#d9e3b1] dark:border-neutral-500"
                            : "bg-white text-neutral-600 border-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
                            }`}
                    >
                        <span>{cat.name}</span>
                        <span className="opacity-50 text-[10px]">{cat.count}</span>
                    </button>
                ))}
            </nav>

            <main className="appear stagger-3 border-t border-neutral-100 dark:border-neutral-800">
                {filteredLogs.map((log, index) => (
                    <div
                        key={index}
                        className="group py-6 border-b border-neutral-100 dark:border-neutral-800 transition-colors"
                    >
                        <Link href={log.url} target="_blank" className="flex items-start justify-between">
                            <div className="flex-1 pr-4">
                                <div className="flex items-center gap-1 mb-1.5 flex-wrap">
                                    <h2 className="text-[17px] font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                                        {log.title}
                                    </h2>
                                    <span className="text-neutral-400 dark:text-neutral-600 transform scale-110">↗</span>
                                </div>
                                <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                    {log.description} <span className="text-neutral-300 dark:text-neutral-600 mx-1">/</span> <span className="text-[12px] opacity-70 italic whitespace-nowrap">{log.date}</span>
                                </p>
                            </div>
                            <div className="flex-shrink-0 pt-1">
                                <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded-md bg-neutral-50 dark:bg-neutral-800/50">
                                    {log.category}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </main>
        </MainLayout>
    );
}
