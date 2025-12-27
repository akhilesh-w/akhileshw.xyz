import MainLayout from "../../../components/main-layout";
import { getGuestbookMessages } from "./actions";
import GuestbookForm from "../../../components/GuestbookForm";

export const dynamic = "force-dynamic";

export default async function Guestbook() {
    const messages = await getGuestbookMessages();

    return (
        <MainLayout>
            <header className="appear stagger-1">
                <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">
                    guestbook
                </h1>
            </header>

            <main className="max-w-xl">
                <p className="mb-10 text-neutral-600 dark:text-neutral-500 leading-relaxed appear stagger-2">
                    Leave a message, say hi, or just sign your name. I love hearing from people who stumble upon this little corner of the web.
                </p>

                <div className="appear stagger-3">
                    <GuestbookForm />
                </div>

                <section className="space-y-8 appear stagger-4">
                    {messages.map((msg: any, index: number) => (
                        <div key={msg.id} className={`group appear stagger-${Math.min(index + 5, 5)}`}>
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="font-semibold text-neutral-800 dark:text-neutral-300">{msg.name}</span>
                                <span className="text-xs text-neutral-400 dark:text-neutral-600">
                                    {new Date(msg.created_at).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric"
                                    })}
                                </span>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-500 text-sm leading-relaxed">
                                {msg.message}
                            </p>
                        </div>
                    ))}
                    {messages.length === 0 && (
                        <p className="text-neutral-400 dark:text-neutral-600 text-sm italic">
                            No entries yet. Be the first to sign!
                        </p>
                    )}
                </section>
            </main>
        </MainLayout>
    );
}
