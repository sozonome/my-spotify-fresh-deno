import { encode } from "encode";
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "@/lib/services/spotify/constants.ts";
import { fetcher } from "@/lib/utils/fetcher.ts";

import type { GetAccessTokenResponse } from "./types.ts";

const SPOTIFY_TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const basic = encode(
  new TextEncoder().encode(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)
);

const basicHeaders = {
  Authorization: `Basic ${basic}`,
  "Content-Type": "application/x-www-form-urlencoded",
};

export const getAccessToken = () =>
  fetcher<GetAccessTokenResponse>(SPOTIFY_TOKEN_ENDPOINT, {
    method: "POST",
    headers: basicHeaders,
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });
