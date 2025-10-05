import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import generateOpenGraph from "@/utils/generateOpenGraph";

export const metadata = generateOpenGraph({
  title: '선생님 선택',
  description: '어떤 선생님에게 편지를 쓰시겠어요?'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );  
}
