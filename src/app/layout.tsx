import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daiki Yamamoto | Engineer",
  description:
    "フリーランスエンジニア Daiki Yamamoto のポートフォリオサイト。Web開発、システム設計など幅広いサービスを提供しています。",
  keywords: [
    "フリーランス",
    "エンジニア",
    "Web開発",
    "システム開発",
    "React",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
