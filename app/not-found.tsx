import * as styles from "./layout.css"
import generateOpenGraph from "@/utils/generateOpenGraph";

export const metadata = generateOpenGraph({
  title: 'Not Found',
  description: '없는 페이지입니다.'
})

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404 - Not Found</h1>
    </div>
  );
}

export default NotFound;