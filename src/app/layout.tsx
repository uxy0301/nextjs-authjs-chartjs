"use client";
import { Navbar } from "@/components/Navbar";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
