import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

async function getAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN || '',
        }),
    });

    return response.json();
}

export async function GET() {
    try {
        const tokenData = await getAccessToken();
        const access_token = tokenData.access_token;

        if (!access_token) {
            console.error('Failed to get access token:', tokenData);
            return NextResponse.json({ isPlaying: false, error: 'Token error' });
        }

        // Fetch currently playing
        const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: { Authorization: `Bearer ${access_token}` },
            cache: 'no-store',
        });

        let currentSong = null;
        if (nowPlayingResponse.status === 200) {
            currentSong = await nowPlayingResponse.json();
        }

        // 1. If playing, return immediately
        if (currentSong && currentSong.is_playing && currentSong.item) {
            return NextResponse.json({
                isPlaying: true,
                title: currentSong.item.name,
                artist: currentSong.item.artists.map((a: { name: string }) => a.name).join(', '),
                album: currentSong.item.album.name,
                albumImageUrl: currentSong.item.album.images[0]?.url,
                songUrl: currentSong.item.external_urls.spotify,
            });
        }

        // 2. If NOT playing but we HAVE a current song (meaning it's paused)
        // We prefer this over recently-played because it's the active session
        if (currentSong && currentSong.item) {
            return NextResponse.json({
                isPlaying: false,
                title: currentSong.item.name,
                artist: currentSong.item.artists.map((a: { name: string }) => a.name).join(', '),
                album: currentSong.item.album.name,
                albumImageUrl: currentSong.item.album.images[0]?.url,
                songUrl: currentSong.item.external_urls.spotify,
                lastPlayedAt: new Date(currentSong.timestamp).toISOString(),
            });
        }

        // 3. Fallback to recently played if player is idle (204)
        console.log('Fetching recently played for timestamp...');
        const recentlyPlayedResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
            headers: { Authorization: `Bearer ${access_token}` },
            cache: 'no-store',
        });

        if (recentlyPlayedResponse.status === 200) {
            const recentData = await recentlyPlayedResponse.json();
            if (recentData.items && recentData.items.length > 0) {
                const track = recentData.items[0].track;
                const playedAt = recentData.items[0].played_at;

                return NextResponse.json({
                    isPlaying: false,
                    title: track.name,
                    artist: track.artists.map((a: { name: string }) => a.name).join(', '),
                    album: track.album.name,
                    albumImageUrl: track.album.images[0]?.url,
                    songUrl: track.external_urls.spotify,
                    lastPlayedAt: playedAt,
                });
            }
        }

        return NextResponse.json({ isPlaying: false });
    } catch (error) {
        console.error('Error fetching now playing:', error);
        return NextResponse.json({ isPlaying: false });
    }
}
