import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures of cakes from homeland cakes."
          />
          <meta property="og:Homeland cakes" content="homelandcakes.vercel.app" />
          <meta
            property="og:description"
            content="Homeland Cakes Gallery."
          />
          <meta property="og:title" content="Homeland Cakes Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Homeland Cakes Gallery" />
          <meta
            name="twitter:description"
            content="Homeland Cakes Gallery"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
