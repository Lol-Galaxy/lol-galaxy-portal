import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoL Galaxy — L'écosystème League of Legends",
  description:
    "LoL Galaxy regroupe des outils indépendants pour analyser, progresser et explorer tes performances sur League of Legends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.className} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
