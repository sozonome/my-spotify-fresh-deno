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
      <main
        class={tw`p-8 min-h-screen flex flex-col items-center justify-center`}
      >
        {children}
      </main>
      <footer class={tw`text-center mt-8`}>
        <p class={tw`text-xs`}>
          {new Date().getFullYear()} -{" "}
          <a href="https://sznm.dev" target="_blank" rel="noopener">
            sznm.dev
          </a>
        </p>
      </footer>
    </Fragment>
  );
};

export default MainLayout;
