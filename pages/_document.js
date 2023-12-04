import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Gelasio Gaetani D'Aragona</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://www.gelasiogaetani.com" />
          <meta name="description" content="Specialists in the world of Italian wines. From biological and cultural lineage to modern day company ethos and methods." />
        </Head>
        <body className="text-blueGray-700 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
