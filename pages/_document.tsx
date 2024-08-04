import Document, { Head, Html, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="icon" type="image/x-icon" href="favicon.ico?v=2"  />
          <meta
            name="description"
            content="See pictures of cakes from homeland cakes."
          />
          <meta property="og:Homeland cakes" content="homelandcakes.vercel.app" />
          <meta
            property="og:description"
            content="Welcome to Homeland Cakes! With over 200 custom cake designs, we transform your sweetest dreams into reality. Browse our gallery to find inspiration and order directly via WhatsApp for personalized service. We use only the finest ingredients to craft cakes that taste as good as they look. Let us make your next celebration unforgettable with our exquisite creations."
          />
          <meta property="og:title" content="Homeland Cakes Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Welcome to Homeland Cakes! With over 200 custom cake designs, we transform your sweetest dreams into reality. Browse our gallery to find inspiration and order directly via WhatsApp for personalized service. We use only the finest ingredients to craft cakes that taste as good as they look. Let us make your next celebration unforgettable with our exquisite creations." />
          <meta
            name="twitter:description"
            content="Welcome to Homeland Cakes! With over 200 custom cake designs, we transform your sweetest dreams into reality. Browse our gallery to find inspiration and order directly via WhatsApp for personalized service. We use only the finest ingredients to craft cakes that taste as good as they look. Let us make your next celebration unforgettable with our exquisite creations."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        <Analytics/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
