import { getAccessToken } from "@/lib/services/spotify/auth/getAccessToken.ts";
import { useSpotifySWR } from "@/lib/services/spotify/utils.ts";
import { fetcher } from "@/lib/utils/fetcher.ts";

import type {
  GetNowPlayingResponse,
  GetNowPlayingTransformed,
} from "./types.ts";

const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getSpotifyNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();

  return fetcher<GetNowPlayingResponse>(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const useNowPlayingData = (
  fallbackData?: GetNowPlayingTransformed,
  isReady?: boolean
) =>
  useSpotifySWR<GetNowPlayingTransformed>(
    "/api/now-playing",
    fallbackData,
    isReady
  );

export const transformNowPlayingResponse = (
  response: GetNowPlayingResponse
) => {
  const data: GetNowPlayingTransformed = {
    isPlaying: response.is_playing,
    trackTitle: response.item.name,
    artist: response.item.album.artists.map(({ name }) => name).join(", "),
    album: response.item.album.name,
    albumArtUrl: response.item.album.images[0].url,
    trackUrl: response.item.external_urls.spotify,
  };

  return data;
};
