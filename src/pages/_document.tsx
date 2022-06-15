import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
        </Head>

        <body className="scrollbar scrollbar-thumb-brand-yellow scrollbar-track-black hover:scrollbar-thin">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
