import {Head, Html, Main, NextScript} from "next/document";

// eslint-disable-next-line import/no-default-export
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
