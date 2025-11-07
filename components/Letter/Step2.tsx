import { useState } from "react";
import * as styles from "./style.css"
import { useSendLetterMutation } from "@/services/letter/letter.mutation";
import { Toastify } from "../Toastify";

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
          onError: () => {
            Toastify({type: "error", content: `편지 전송 중 오류가 발생했습니다. \n관리자에게 문의해주세요.`})
          },
        }
      );
    }
    else if (!content.trim()) {
      Toastify({type: "info", content: "편지 내용을 입력하세요."})
    }
    else if (content.length > 0 && content[0] === " ") {
      Toastify({type: "info", content: "편지 내용은 공백으로 시작할 수 없습니다."})
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>이제 편지를 작성해볼까요?</h1>

      <div className={styles.letterCard}>
        <div className={styles.letterHeader}>
          <span className={styles.from}>From.</span>
          <span className={styles.to}>
             사랑하는 {teacherNickName}에게
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