import { Suspense } from "react";
import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
import 'material-symbols';

import '@/styles/globals.css';
import { NavigationEvents } from '@/hooks/NavigationEvents';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const googleSansDisplay = localFont({
  src: [
    { path: "../public/font/googlesansdisplayregular.woff2", weight: "400" },
    { path: "../public/font/googlesansdisplaymedium.woff2", weight: "500" },
    { path: "../public/font/googlesansdisplaybold.woff2", weight: "700" },
  ],
  variable: "--font-google-sans-display",
});

export const roboto = localFont({
  src: [
    { path: "../public/font/robotoregular.woff2", weight: "400" },
    { path: "../public/font/robotomedium.woff2", weight: "500" },
    { path: "../public/font/robotobold.woff2", weight: "700" },
  ],
  variable: "--font-roboto",
});

export const spotifyCircular = localFont({
  src: [
    { path: "../public/font/spotifycircular.woff2", weight: "400" },
    { path: "../public/font/spotifycircularblack.woff2", weight: "500" },
    { path: "../public/font/spotifycircularbold.woff2", weight: "700" },
  ],
  variable: "--font-spotify-circular",
});

export const helveticaNeue = localFont({
  src: [
    { path: "../public/font/helveticaneueregular.woff2", weight: "400" },
    { path: "../public/font/helveticaneuebold.woff2", weight: "700" },
  ],
  variable: "--font-helvetica-neue",
});

export const sourceCodePro = localFont({
  src: [
    { path: "../public/font/sourcecodeproregular.woff2", weight: "400" },
    { path: "../public/font/sourcecodepromedium.woff2", weight: "500" },
    { path: "../public/font/sourcecodeprobold.woff2", weight: "700" },
  ],
  variable: "--font-source-code-pro",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
        <Head>
          <title>brkn.</title>
          <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
          <link rel="canonical" href="https://brokendesigns.studio/" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Broken - Portfolio" />
          <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
          <meta property="og:url" content="https://brokendesigns.studio/" />
          <meta property="og:site_name" content="Broken" />
          <meta name="twitter:title" content="Broken - Portfolio" />
          <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
          <meta name="twitter:url" content="https://brokendesigns.studio/" />
          <meta name="twitter:site" content="@TheBroken_XD" />
          <meta name="twitter:creator" content="@TheBroken_XD" />
      </Head>
      
      <body className={`${googleSansDisplay.variable} ${roboto.variable} ${spotifyCircular.variable} ${helveticaNeue.variable} ${sourceCodePro.variable} font-sans antialiased bg-black`} style={{ fontFamily: `"Google Sans Display", "Roboto", "spotify-circular", "Helvetica Neue", helvetica, arial, "Hiragino Kaku Gothic Pro", meiryo, "MS Gothic", sans-serif` }}>
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
