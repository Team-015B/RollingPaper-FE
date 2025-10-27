import { useState } from "react";
import * as styles from "./style.css"

interface Step3Props {
  teacherName: string;
  teacherImage: string;
  onSubmit: (message: string) => void;
  onBack: () => void;
}

export default function Step3({
  teacherName,
  onSubmit,
  onBack,
}: Step3Props) {
  const [message, setMessage] = useState("");
  const maxLength = 500;

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit(message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>이제 편지를 작성해볼까요?</h1>

      <div className={styles.letterCard}>
        <div className={styles.letterHeader}>
          <span className={styles.from}>From.</span>
          <span className={styles.to}>
            {teacherName}에게
          </span>
        </div>

        <textarea
          className={styles.textarea}
          placeholder="내용을 입력해주세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={maxLength}
        />

        <div className={styles.charCount}>
          {message.length}/{maxLength}
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.submitButton} onClick={handleSubmit}>
          제출
        </button>
        <button className={styles.backButton} onClick={onBack}>
          이전
        </button>
      </div>
    </div>
  );
}