import Link from 'next/link';
import MainLayout from '../../components/main-layout';

export default function NotFound() {
    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
                <div className="relative group cursor-pointer">
                    <div className="text-9xl font-black opacity-10 select-none">404</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl animate-bounce">🏎️💥</div>
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">You're off track.</h1>
                    <p className="text-neutral-500 max-w-xs mx-auto">
                        The page you're looking for hit the barriers or never made it out of the pits.
                    </p>
                </div>

                <Link
                    href="/"
                    className="px-6 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full font-medium hover:scale-105 transition-transform"
                >
                    Back to the Grid
                </Link>
            </div>
        </MainLayout>
    );
}
