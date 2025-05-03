// components/MetaHead.tsx
import { Helmet } from 'react-helmet';

interface MetaHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

const defaultTitle = "Anurag Adarsh | UI/UX & Web Designer Portfolio";
const defaultDescription = "Explore the portfolio of Anurag Adarsh, a passionate UI/UX Designer and Developer. View projects, skills, and experience. Let's design experiences that make an impact!";
const defaultImage = "https://anuragadarsh.in/view.png";
const defaultUrl = "https://anuragadarsh.in/";
const defaultKeywords = "Anurag Adarsh, UI/UX Designer, Design Portfolio, Best Portfolio, Web Developer, Portfolio, Frontend Developer, Product Design, India, UI/UX Designer Portfolio 2025";

const MetaHead = ({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = defaultUrl,
  keywords = defaultKeywords,
}: MetaHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#3E40EF" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="color-scheme" content="light" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* PWA/Apple */}
      <meta name="apple-mobile-web-app-title" content="Anurag Adarsh Portfolio" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Anurag Adarsh" />
      <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />

      {/* Favicon and Manifest */}
      <link rel="shortcut icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
      <link rel="icon" type="image/x-icon" href="https://www.anuragadarsh.in/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon-16x16.ico" />
      <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon-32x32.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Anurag Adarsh",
          "url": "${url}",
          "image": "${image}",
          "sameAs": [
            "https://www.linkedin.com/in/adarshanurag/",
            "https://github.com/Anuragspace",
            "https://www.instagram.com/anurag__adarsh/",
            "https://www.behance.net/anuragadarsh1"
          ],
          "jobTitle": "UI/UX Designer , Product Designer & Developer",
          "description": "${description}"
        }
        `}
      </script>
    </Helmet>
  );
};

export default MetaHead;
