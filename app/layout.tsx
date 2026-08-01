import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  Anton,
  Caveat,
  Cormorant_Garamond,
  Fredoka,
  Geist,
  Geist_Mono,
  Special_Elite,
  UnifrakturCook,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archiveSerif = Cormorant_Garamond({
  variable: "--font-archive-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const archiveScript = Caveat({
  variable: "--font-archive-script",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const archiveBubble = Fredoka({
  variable: "--font-archive-bubble",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const archiveDisplay = Anton({
  variable: "--font-archive-display",
  subsets: ["latin"],
  weight: "400",
});

const archiveTypewriter = Special_Elite({
  variable: "--font-archive-typewriter",
  subsets: ["latin"],
  weight: "400",
});

const archiveBlackletter = UnifrakturCook({
  variable: "--font-archive-blackletter",
  subsets: ["latin"],
  weight: "700",
});

const siteTitle = "Alison's Personal Lab";
const siteDescription =
  "A small personal lab for research, ideas, and the songs that keep Alison moving.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const imageUrl = new URL("/og.png", metadataBase);

  return {
    metadataBase,
    title: siteTitle,
    description: siteDescription,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      url: metadataBase.toString(),
      title: siteTitle,
      description: siteDescription,
      images: [{ url: imageUrl, width: 1536, height: 1024, alt: siteTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [imageUrl.toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} ${archiveSerif.variable} ${archiveScript.variable} ${archiveBubble.variable} ${archiveDisplay.variable} ${archiveTypewriter.variable} ${archiveBlackletter.variable}`}>
        {children}
      </body>
    </html>
  );
}
