import Hamburger from "@/components/organisms/menu";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// speed insights
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HOKULEA | 公式ホームページ",
  description: "若者のクリエイティブとエナジーが行き交う場。HOKUELAの公式サイトです。今までにない若者のコミュニティがここにはある。ゆっくりと私たちの活動などをまとめているのでご覧になってください。",
  keywords: "若者, コミュニティ, クリエイティブ, エナジー, HOKULEA, hokulea, hoculea, hocurea, hokurea, サーフィン, サークル, かっこいい, 大学生, コミュニティ, アウトドア, イベント, sarfing, event, community, college, student, students, cool, 03, 94, 05, 06, 07, 清掃活動, クリーン, vaia, VAIA, 澁谷",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Hamburger />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
