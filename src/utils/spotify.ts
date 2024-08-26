import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

export default spotifyApi;

export interface Track {
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
}

let tokenExpirationTime = 0;

async function refreshAccessToken() {
  const data = await spotifyApi.refreshAccessToken();
  spotifyApi.setAccessToken(data.body['access_token']);
  tokenExpirationTime = Date.now() + data.body['expires_in'] * 1000;
}

export async function getCurrentlyPlayingTrack(): Promise<Track | null> {
  try {
    if (Date.now() > tokenExpirationTime) {
      await refreshAccessToken();
    }

    const response = await spotifyApi.getMyCurrentPlayingTrack();

    if (response.statusCode === 204 || !response.body) {
      console.log('No track currently playing');
      return null;
    }

    const track = response.body.item as SpotifyApi.TrackObjectFull;

    return {
      name: track.name,
      artists: track.artists.map(artist => ({ name: artist.name })),
      album: { images: track.album.images }
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching currently playing track:', error.message);
    } else {
      console.error('Unknown error fetching currently playing track');
    }
    return null;
  }
}
