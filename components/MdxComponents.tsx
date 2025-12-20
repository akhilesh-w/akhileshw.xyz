import Link from 'next/link';

const Callout = ({ children, type = 'info' }: { children: React.ReactNode; type?: string }) => {
    const styles: Record<string, string> = {
        info: 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/20 dark:border-blue-400 dark:text-blue-300',
        warning: 'bg-yellow-50 border-yellow-500 text-yellow-700 dark:bg-yellow-900/20 dark:border-yellow-400 dark:text-yellow-300',
        error: 'bg-red-50 border-red-500 text-red-700 dark:bg-red-900/20 dark:border-red-400 dark:text-red-300',
        success: 'bg-green-50 border-green-500 text-green-700 dark:bg-green-900/20 dark:border-green-400 dark:text-green-300',
    };

    const icons: Record<string, string> = {
        info: 'ℹ️',
        warning: '⚠️',
        error: '🚫',
        success: '✅',
    };

    return (
        <div className={`my-6 p-4 border-l-4 rounded ${styles[type] || styles.info}`}>
            <div className="flex gap-3">
                <span>{icons[type] || icons.info}</span>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
};

export const components = {
    h1: (props: any) => <h1 className="text-xl font-bold mt-8 mb-4 " {...props} />,
    h2: (props: any) => <h2 className="text-lg font-bold mt-8 mb-4 pb-2 border-b dark:border-neutral-800" {...props} />,
    h3: (props: any) => <h3 className="text-base font-bold mt-6 mb-3" {...props} />,
    p: (props: any) => <p className="leading-relaxed mb-4" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
    li: (props: any) => <li className="" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 italic my-6" {...props} />
    ),
    a: ({ href, children, ...props }: any) => {
        if (href?.startsWith('/')) {
            return (
                <Link href={href} className="text-blue-600 dark:text-blue-400 hover:underline" {...props}>
                    {children}
                </Link>
            );
        }
        return (
            <a
                href={href}
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    },
    Callout,
};
