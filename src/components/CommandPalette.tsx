'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SearchItem {
    title: string;
    slug: string;
    date: string;
}

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchItem[]>([]);
    const [items, setItems] = useState<SearchItem[]>([]);
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
            setResults([]);
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }
        const filtered = items.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
        setResults(filtered);
        setSelectedIndex(0);
    }, [query, items]);

    const handleSelect = (item: SearchItem) => {
        router.push(`/blog/${item.slug}`);
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev + 1) % results.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        } else if (e.key === 'Enter') {
            if (results[selectedIndex]) {
                handleSelect(results[selectedIndex]);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div
                className="w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4 border-b border-neutral-800">
                    <input
                        ref={inputRef}
                        type="text"
                        className="w-full bg-transparent border-none outline-none text-neutral-200 placeholder-neutral-500 text-lg"
                        placeholder="Search blog posts..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                {results.length > 0 && (
                    <div className="p-2">
                        {results.map((item, index) => (
                            <div
                                key={item.slug}
                                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${index === selectedIndex ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-400 hover:bg-neutral-800/50'
                                    }`}
                                onClick={() => handleSelect(item)}
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium">{item.title}</span>
                                    <span className="text-xs opacity-50">{new Date(item.date).toLocaleDateString()}</span>
                                </div>
                                <span className="text-xs opacity-30">Enter</span>
                            </div>
                        ))}
                    </div>
                )}

                {query && results.length === 0 && (
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
