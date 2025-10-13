import "./globals.css";
import generateOpenGraph from "@/utils/generateOpenGraph";
import * as styles from "./layout.css";

export const metadata = generateOpenGraph({
  title: '3기 졸업생',
  description: '어떤 선생님에게 편지를 쓰시겠어요?'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main className={styles.container}>
          {children}
        </main>
      </body>
    </html>
  );  
}
