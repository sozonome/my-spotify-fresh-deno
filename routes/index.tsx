/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "@/islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-lg font-extrabold text-green-600 text-center`}>
        My Spotify Listening
      </h1>
      <p class={tw`my-6`}>
        Hello, this is Nathan learning fresh deno framework.
      </p>
      <Counter start={3} />
    </div>
  );
}
