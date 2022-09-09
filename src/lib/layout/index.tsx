import type { ComponentChildren } from "preact";
import { Fragment } from "preact";
type MainLayoutProps = {
  children: ComponentChildren;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Fragment>
      <div class="flex flex-col min-h-screen justify-center">
        <main class="p-8 flex flex-col items-center ">{children}</main>
        <footer class="text-center mt-8">
          <p class="text-xs">
            {new Date().getFullYear()} -{" "}
            <a
              href="https://sznm.dev"
              class="font-bold"
              target="_blank"
              rel="noopener"
            >
              sznm.dev
            </a>
          </p>
        </footer>
      </div>
    </Fragment>
  );
};

export default MainLayout;
