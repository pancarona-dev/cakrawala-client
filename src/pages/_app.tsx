import type { AppProps } from "next/app";
import { useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import useComponentVisible from "@hooks/use-component-visible";
import ModalContext from "@stores/modal";
import { AuthProvider } from "@stores/auth";
import { FetchProvider } from "@stores/fetch";
import { TagProvider } from "@stores/tag";
import { ThemeProvider } from "next-themes";
import Modal from "@components/modal";
import AuthForms from "@components/auth-forms";
import { SiteConfig } from "@configs/site.config";
import "react-tagsinput/react-tagsinput.css";
import "@styles/nprogress.css";
import "@styles/app.css";
import "@styles/variables.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [authScreen, setAuthScreen] = useState("");

  const handleComponentVisible = (componentVisible: any, authScreen: any) => {
    setIsComponentVisible(componentVisible);
    setAuthScreen(authScreen);
  };

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme={SiteConfig.theme}>
        <ModalContext.Provider
          value={{ ref, handleComponentVisible, setIsComponentVisible }}
        >
          <AuthProvider>
            <FetchProvider>
              <TagProvider>
                <Component {...pageProps} />
                {isComponentVisible && (
                  <Modal>
                    <AuthForms screen={authScreen} />
                  </Modal>
                )}
              </TagProvider>
            </FetchProvider>
          </AuthProvider>
        </ModalContext.Provider>
      </ThemeProvider>
    </>
  );
}
