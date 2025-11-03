import { useState } from "react";
import * as styles from "./style.css"
import { useSendLetterMutation } from "@/services/letter/letter.mutation";

interface Step2Props {
  teacherNickName: string;
  image: File;
  onSubmit: (content: string) => void;
  onBack: () => void;
}

export default function Step2({
  teacherNickName,
  image,
  onSubmit,
  onBack,
}: Step2Props) {
  const [content, setcontent] = useState("");
  const maxLength = 500;
  
  const { mutate: sendLetter, isPending } = useSendLetterMutation();

  const handleSubmit = () => {
    if (content.trim()) {
      sendLetter(
        {
          teacherNickName,
          image,
          content: content.trim(),
        },
        {
          onSuccess: () => {
            onSubmit(content);
          },
          onError: (error) => {
            console.error("편지 전송 실패:", error);
          },
        }
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>이제 편지를 작성해볼까요?</h1>

      <div className={styles.letterCard}>
        <div className={styles.letterHeader}>
          <span className={styles.from}>From.</span>
          <span className={styles.to}>
            {teacherNickName}에게
          </span>
        </div>

        <textarea
          className={styles.textarea}
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          maxLength={maxLength}
          disabled={isPending}
        />

        <div className={styles.charCount}>
          {content.length}/{maxLength}
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button 
          className={styles.submitButton} 
          onClick={handleSubmit}
          disabled={isPending}
        >
          {isPending ? "전송 중..." : "제출"}
        </button>
        <button 
          className={styles.backButton} 
          onClick={onBack}
          disabled={isPending}
        >
          이전
        </button>
      </div>
    </div>
  );
}