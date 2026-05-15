import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API_KEY = process.env.LASTFM_API_KEY;
const USERNAME = process.env.LASTFM_USERNAME;

export async function GET() {
    try {
        const res = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`,
            { cache: 'no-store' }
        );

        if (!res.ok) return NextResponse.json({ isPlaying: false });

        const data = await res.json();
        const tracks = data?.recenttracks?.track;
        if (!tracks || tracks.length === 0) return NextResponse.json({ isPlaying: false });

        const track = Array.isArray(tracks) ? tracks[0] : tracks;
        const isPlaying = track['@attr']?.nowplaying === 'true';
        const image = track.image?.find((img: { size: string }) => img.size === 'large')?.['#text'];

        return NextResponse.json({
            isPlaying,
            title: track.name,
            artist: track.artist['#text'],
            album: track.album['#text'],
            albumImageUrl: image || null,
            songUrl: track.url,
            lastPlayedAt: isPlaying ? null : new Date(Number(track.date?.uts) * 1000).toISOString(),
        });
    } catch {
        return NextResponse.json({ isPlaying: false });
    }
}
