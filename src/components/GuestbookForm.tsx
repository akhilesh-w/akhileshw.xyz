"use client";

import { useState } from "react";
import { signGuestbook } from "@/app/guestbook/actions";

export default function GuestbookForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccessMessage(null);

        const formData = new FormData(e.currentTarget);
        const result = await signGuestbook(formData);

        if (result.error) {
            setError(result.error);
        } else {
            // Clear the form
            (e.target as HTMLFormElement).reset();
            setSuccessMessage("Thanks for signing the guestbook.");
        }
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-12 space-y-4">
            {(error || successMessage) && (
                <p
                    className={`text-sm ${error ? "text-red-500" : "text-green-600 dark:text-green-400"}`}
                    role={error ? "alert" : "status"}
                    aria-live="polite"
                >
                    {error ?? successMessage}
                </p>
            )}
            <div className="space-y-2">
                <label htmlFor="guestbook-name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Name
                </label>
                <input
                    id="guestbook-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-neutral-600 dark:focus-visible:ring-offset-gray-900 transition-all text-sm text-neutral-800 dark:text-neutral-200"
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="guestbook-message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Message
                </label>
                <textarea
                    id="guestbook-message"
                    name="message"
                    placeholder="Your message"
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-neutral-600 dark:focus-visible:ring-offset-gray-900 transition-all text-sm resize-none text-neutral-800 dark:text-neutral-200"
                    required
                />
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="min-h-10 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-neutral-600 dark:focus-visible:ring-offset-gray-900 transition-opacity disabled:opacity-50"
            >
                {isSubmitting ? "Signing..." : "Sign Guestbook"}
            </button>
        </form>
    );
}
