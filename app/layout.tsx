import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteConfig } from "@/config/site";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Wacky Steps – Play Wacky Steps Game Online`,
  description: siteConfig.description,
  openGraph: {
    title: `Wacky Steps – Play Wacky Steps Game Online`,
    description: "Play Wacky Steps free online. Ragdoll walking game, avoid cracks, dodge hazards, no download needed.",
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.og,
        alt: `${siteConfig.name} Screenshot`,
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Wacky Steps – Play Wacky Steps Game Online`,
    description: `Play Wacky Steps free online without download`,
    images: [siteConfig.images.og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={siteConfig.images.icon.apple} />
        <link rel="icon" type="image/png" sizes="32x32" href={siteConfig.images.icon.favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={siteConfig.images.icon.favicon16} />
        <link rel="manifest" href={siteConfig.metadata.manifestPath} />
        {/* <link rel="mask-icon" href={siteConfig.images.icon.safari} color="#5bbad5" /> */}
        <link rel="shortcut icon" href={siteConfig.images.icon.favicon} />
        <meta name="theme-color" content={siteConfig.metadata.themeColor} />
      </head>
      <body className={inter.className}>
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P4B94TCE2X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P4B94TCE2X');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w7jsj5hekg");
          `}
        </Script>
      </body>
    </html>
  );
}

