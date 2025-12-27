'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NowPlayingData {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
    lastPlayedAt?: string;
}

export default function NowPlaying() {
    const [data, setData] = useState<NowPlayingData | null>(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const res = await fetch('/api/now-playing');
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error('Failed to fetch now playing:', error);
                setData({ isPlaying: false });
            }
        };

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 30000);

        return () => clearInterval(interval);
    }, []);

    const formatLastPlayed = (dateStr?: string) => {
        if (!dateStr) return '';
        const now = new Date();
        const playedAt = new Date(dateStr);
        const diffInMs = now.getTime() - playedAt.getTime();
        const diffInMins = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (diffInMins < 60) return ` ${diffInMins}m ago`;
        if (diffInHours < 24) return ` ${diffInHours}h ago`;
        if (diffInDays < 7) return ` ${diffInDays}d ago`;

        return ' ' + playedAt.toLocaleDateString('en-IN', {
            month: 'short',
            day: 'numeric',
        });
    };

    // Loading state
    if (!data) {
        return (
            <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-600">
                <SpotifyIcon className="h-4 w-4 animate-pulse" />
                <span>Loading...</span>
            </div>
        );
    }

    // No data at all
    if (!data.title) {
        return (
            <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-600">
                <SpotifyIcon className="h-4 w-4" />
                <span>Not Playing</span>
            </div>
        );
    }

    // Has song data (either playing or recently played)
    return (
        <div className="space-y-2">
            <a
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors group"
            >
                {data.albumImageUrl && (
                    <Image
                        src={data.albumImageUrl}
                        alt={data.album || 'Album Art'}
                        width={56}
                        height={56}
                        className="rounded-lg shadow-md"
                    />
                )}
                <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 truncate group-hover:underline underline-offset-2">
                        {data.title}
                    </span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                        {data.artist}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500 truncate">
                        {data.album}
                    </span>
                </div>
                <SpotifyIcon className={`h-5 w-5 ${data.isPlaying ? 'text-green-500' : 'text-neutral-400 dark:text-neutral-600'} opacity-60 group-hover:opacity-100 transition-opacity`} />
            </a>
            <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-600 pl-1">
                {data.isPlaying ? (
                    <>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span>Currently playing</span>
                    </>
                ) : (
                    <>
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                        <span>Last played{formatLastPlayed(data.lastPlayedAt)}</span>
                    </>
                )}
            </div>
        </div>
    );
}

function SpotifyIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 168 168" fill="currentColor">
            <path d="M84 0C37.5 0 0 37.5 0 84s37.5 84 84 84 84-37.5 84-84S130.5 0 84 0zm38.5 121.5c-1.5 2.5-4.5 3-7 1.5-19.5-12-44-14.5-72.5-8-2.5.5-5.5-1-6-4s1-5.5 4-6c31.5-7.5 58.5-4.5 80.5 9 2.5 1.5 3 4.5 1 7zm10-20c-2 3-5.5 4-8.5 2-22.5-14-56.5-18-83-10-3 1-6.5-1-7.5-4s1-6.5 4-7.5c30.5-9.5 68.5-5 94 11.5 3 2 4 5.5 2 8.5zm1-21c-27-16-71.5-17.5-97-9.5-4 1-8-1.5-9-5.5s1.5-8 5.5-9c29-9 78-7.5 109 11 3.5 2 4.5 7 2.5 10.5s-7 4.5-10.5 2.5z" />
        </svg>
    );
}