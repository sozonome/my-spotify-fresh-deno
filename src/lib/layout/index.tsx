/** @jsx h */
import { Fragment, h } from "preact";
import type { ComponentChildren } from "preact";
import { tw } from "@twind";

type MainLayoutProps = {
  children: ComponentChildren;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Fragment>
      <div class={tw`flex flex-col min-h-screen justify-center`}>
        <main class={tw`p-8 flex flex-col items-center `}>{children}</main>
        <footer class={tw`text-center mt-8`}>
          <p class={tw`text-xs`}>
            {new Date().getFullYear()} -{" "}
            <a href="https://sznm.dev" class={tw`font-bold`} target="_blank" rel="noopener">
              sznm.dev
            </a>
          </p>
        </footer>
      </div>
    </Fragment>
  );
};

export default MainLayout;
