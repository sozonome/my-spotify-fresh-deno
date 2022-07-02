import { HandlerContext } from "$fresh/server.ts";
import {
  getSpotifyNowPlaying,
  transformNowPlayingResponse,
} from "@/lib/services/spotify/user/now-playing/index.ts";
import type { GetNowPlayingTransformed } from "@/lib/services/spotify/user/now-playing/types.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext
): Promise<Response> => {
  if (req.method !== "GET") {
    return new Response(undefined, { status: 400 });
  }

  try {
    const response = await getSpotifyNowPlaying();

    if (!response || !response.item) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const data: GetNowPlayingTransformed =
      transformNowPlayingResponse(response);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
