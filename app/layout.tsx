import type { Metadata } from "next";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/components/AudioProvider";

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "X-Space | Immersive Space Travel Experience",
  description: "Embark on an immersive journey through space with interactive visuals and ambient sounds",
  icons: {
    icon: '/home/Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <AudioProvider>
        <body>{children}</body>
      </AudioProvider>
    </html>
  );
}
