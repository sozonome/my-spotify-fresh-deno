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

export const useNowPlayingData = (fallbackData?: GetNowPlayingTransformed) =>
  useSpotifySWR<GetNowPlayingTransformed>("/api/now-playing", fallbackData);
