// One-time script to obtain a Spotify Refresh Token.

require('dotenv').config({ path: '.env.local' });

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'http://127.0.0.1:3001/callback';
const SCOPES = 'user-read-currently-playing user-read-playback-state user-read-recently-played';

async function getRefreshToken(code) {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI,
        }),
    });

    const data = await response.json();

    if (data.error) {
        console.error('Error:', data.error_description);
        process.exit(1);
    }

    console.log('\n✅ Success! Add this to your .env.local:\n');
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
}

const code = process.argv[2];

if (code) {
    getRefreshToken(code);
} else {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;
    console.log('\n🎵 Spotify Authorization\n');
    console.log('1. Open this URL in your browser:\n');
    console.log(authUrl);
    console.log('\n2. After authorizing, you will be redirected to a URL like:');
    console.log('   http://localhost:3001/callback?code=AQXXXX...');
    console.log('\n3. Copy the "code" value and run this script again:');
    console.log('   node scripts/get-spotify-token.js <YOUR_CODE>');
}
