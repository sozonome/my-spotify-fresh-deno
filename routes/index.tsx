/** @jsx h */
import { Handlers, PageProps } from "$fresh/server.ts";
import { h } from "preact";
import { tw } from "@twind";
import SpotifyListening from "@/islands/SpotifyListening.tsx";
import MainLayout from "@/lib/layout/index.tsx";
import { GetNowPlayingTransformed } from "@/lib/services/spotify/user/now-playing/types.ts";

export const handler: Handlers<GetNowPlayingTransformed | undefined> = {
  async GET(req: Request, ctx) {
    const response = await fetch(`${req.url}api/now-playing`);
    if (!response.ok) {
      return ctx.render(undefined);
    }
    const data: GetNowPlayingTransformed = await response.json();
    return ctx.render(data);
  },
};

const Home = ({ data }: PageProps<GetNowPlayingTransformed | undefined>) => {
  return (
    <MainLayout>
      <div class={tw`flex flex-col gap-8`}>
        <h1 class={tw`text-lg font-extrabold text-green-600 text-center`}>
          My Spotify Listening
        </h1>
        <SpotifyListening fallbackData={data} />
      </div>
    </MainLayout>
  );
};

export default Home;
