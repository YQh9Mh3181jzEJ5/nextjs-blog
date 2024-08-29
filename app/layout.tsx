import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/layouts/header/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
