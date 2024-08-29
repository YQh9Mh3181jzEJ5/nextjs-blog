import type { Metadata } from "next";

import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "My Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
