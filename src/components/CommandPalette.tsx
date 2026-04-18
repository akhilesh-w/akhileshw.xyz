'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SearchItem {
    title: string;
    href: string;
    type: "page" | "post";
    description?: string;
    date?: string;
}

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [items, setItems] = useState<SearchItem[]>([]);
    const [visibleItems, setVisibleItems] = useState<SearchItem[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchIndex = async () => {
            try {
                const res = await fetch('/api/search-index');
                const data = await res.json();
                setItems(data);
            } catch (e) {
                console.error('Failed to fetch search index');
            }
        };
        fetchIndex();
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            } else if (e.key === '/') {
                // Only trigger if not in an input/textarea
                if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
                    e.preventDefault();
                    setIsOpen(true);
                }
            } else if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        } else {
            setQuery('');
            setVisibleItems([]);
            setSelectedIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim() === '') {
            setVisibleItems(items.slice(0, 8));
            setSelectedIndex(0);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = items.filter((item) =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.description?.toLowerCase().includes(lowerQuery)
        ).slice(0, 8);

        setVisibleItems(filtered);
        setSelectedIndex(0);
    }, [query, items]);

    const handleSelect = (item: SearchItem) => {
        router.push(item.href);
        setIsOpen(false);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (visibleItems.length === 0) {
            return;
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev + 1) % visibleItems.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length);
        } else if (e.key === 'Enter') {
            if (visibleItems[selectedIndex]) {
                handleSelect(visibleItems[selectedIndex]);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
        >
            <div
                className="w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4 border-b border-neutral-800">
                    <input
                        ref={inputRef}
                        type="text"
                        className="w-full bg-transparent border-none outline-none text-neutral-200 placeholder-neutral-500 text-lg"
                        placeholder="Search posts and pages..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleInputKeyDown}
                    />
                </div>

                {visibleItems.length > 0 && (
                    <div className="p-2">
                        {visibleItems.map((item, index) => (
                            <button
                                type="button"
                                key={item.href}
                                className={`flex w-full items-center justify-between gap-4 p-3 rounded-lg text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 ${index === selectedIndex ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-400 hover:bg-neutral-800/50'
                                    }`}
                                onClick={() => handleSelect(item)}
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium">{item.title}</span>
                                    <span className="text-xs opacity-50">
                                        {item.description ?? (item.date ? new Date(item.date).toLocaleDateString() : item.type)}
                                    </span>
                                </div>
                                <span className="text-xs uppercase tracking-widest opacity-30">
                                    {item.type}
                                </span>
                            </button>
                        ))}
                    </div>
                )}

                {query && visibleItems.length === 0 && (
                    <div className="p-8 text-center text-neutral-500">
                        No results found for "{query}"
                    </div>
                )}

                <div className="p-3 border-t border-neutral-800 flex justify-between items-center text-[10px] text-neutral-500 uppercase tracking-widest">
                    <div className="flex gap-4">
                        <span>↑↓ Navigate</span>
                        <span>↵ Select</span>
                    </div>
                    <span>Esc to Close</span>
                </div>
            </div>
            <div className="fixed inset-0 -z-10" onClick={() => setIsOpen(false)} />
        </div>
    );
}
