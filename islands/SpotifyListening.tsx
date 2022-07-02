/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

import { useNowPlayingData } from "@/lib/services/spotify/user/now-playing/index.ts";
import { GetNowPlayingTransformed } from "@/lib/services/spotify/user/now-playing/types.ts";

type SpotifyListeningProps = {
  fallbackData?: GetNowPlayingTransformed;
};

const SpotifyListening = ({ fallbackData }: SpotifyListeningProps) => {
  const { data, isLoading } = useNowPlayingData(fallbackData, IS_BROWSER);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data?.isPlaying) {
    return <p className="text-center text-gray-500">Not Listening</p>;
  }

  return (
    <a
      href={data.trackUrl}
      className={tw`flex rounded-xl mx-auto items-center gap-2 h-20`}
      target="_blank"
    >
      <img src={data.albumArtUrl} className={tw`w-16 rounded-md`} />
      <div>
        <p className={tw`font-heading font-extrabold text-size-sm`}>
          {data.trackTitle}
        </p>
        <p className={tw`font-sans text-size-xs text-gray-500`}>
          {data.artist}
        </p>
      </div>
    </a>
  );
};

export default SpotifyListening;
