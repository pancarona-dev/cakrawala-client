import { Html, Head, Main, NextScript } from "next/document";
import { SiteConfig } from "@configs/site.config";

export default function Document() {
  return (
    <Html lang={SiteConfig.lang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
