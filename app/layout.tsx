import "./globals.css";
import generateOpenGraph from "@/utils/generateOpenGraph";
import * as styles from "./layout.css";
import Providers from "./providers";

export const metadata = generateOpenGraph({
  title: '3기 졸업생',
  description: '3기 졸업생이 작성한 롤링페이퍼'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
        <main className={styles.container}>
          {children}
        </main>
        </Providers>
      </body>
    </html>
  );  
}
