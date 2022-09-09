import { GetNowPlayingTransformed } from "@/lib/services/spotify/user/now-playing/types.ts";

type SpotifyListeningPlainProps = {
  data?: GetNowPlayingTransformed;
};

const SpotifyListeningPlain = ({ data }: SpotifyListeningPlainProps) => {
  if (!data || !data?.isPlaying) {
    return <p className="text-center text-gray-500">Not Listening</p>;
  }

  return (
    <a
      href={data.trackUrl}
      className="flex rounded-xl mx-auto items-center gap-2 h-20"
      target="_blank"
    >
      <img src={data.albumArtUrl} className="w-16 rounded-md" />
      <div>
        <p className="font-heading font-extrabold text-size-sm">
          {data.trackTitle}
        </p>
        <p className="font-sans text-size-xs text-gray-500">
          {data.artist}
        </p>
      </div>
    </a>
  );
};

export default SpotifyListeningPlain;
