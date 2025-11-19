import * as styles from "./style.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div className={styles.spinner} />
      </div>
    </div>
  );
}
