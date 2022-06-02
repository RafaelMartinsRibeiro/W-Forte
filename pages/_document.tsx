import Document, { Html, Head, Main, NextScript } from "next/document";
import { Navbar } from "../components/Navbar";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
