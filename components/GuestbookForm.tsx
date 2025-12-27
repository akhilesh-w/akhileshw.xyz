"use client";

import { useState } from "react";
import { signGuestbook } from "../src/app/guestbook/actions";

export default function GuestbookForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const result = await signGuestbook(formData);

        if (result.error) {
            setError(result.error);
        } else {
            // Clear the form
            (e.target as HTMLFormElement).reset();
        }
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-12 space-y-4">
            {error && (
                <p className="text-red-500 text-xs mb-2">{error}</p>
            )}
            <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all text-sm text-neutral-800 dark:text-neutral-200"
                required
            />
            <textarea
                name="message"
                placeholder="Your message"
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all text-sm resize-none text-neutral-800 dark:text-neutral-200"
                required
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
                {isSubmitting ? "Signing..." : "Sign Guestbook"}
            </button>
        </form>
    );
}
