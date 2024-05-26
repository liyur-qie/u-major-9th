import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Typle-r",
  description: "The app for practicing touch typing that is develop by create-next-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
