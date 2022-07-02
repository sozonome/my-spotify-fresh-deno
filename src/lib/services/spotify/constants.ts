import "dotenv/load.ts";

export const SPOTIFY_CLIENT_ID = Deno.env.get("SPOTIFY_CLIENT_ID") ?? "";
export const SPOTIFY_CLIENT_SECRET =
  Deno.env.get("SPOTIFY_CLIENT_SECRET") ?? "";
export const SPOTIFY_REFRESH_TOKEN =
  Deno.env.get("SPOTIFY_REFRESH_TOKEN") ?? "";
