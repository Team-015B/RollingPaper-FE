"use client";

import * as styles from "./style.css";
import { useReceivedLetter } from "@/services/letter/letter.query";
import { useState } from "react";
import Sakura from "../Sakura";

interface Letter {
  id: number;
  content: string;
  from: string;
  createdAt: string;
  student: {
    id: number;
    nickName: string;
  };
}

export default function Read() { 
  const { data, isLoading } = useReceivedLetter();
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  const letters: Letter[] = data?.letters || [];

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );
  }

  return (
    <>
      <Sakura />
      <div className={styles.container}>
        <h1 className={styles.title}>
          3년간 저희를 멋진 모습으로 이끌어주신 선생님, 너무나도 감사드립니다!
        </h1>

        {letters.length === 0 ? (
          <div className={styles.emptyState}>
            <p>아직 받은 편지가 없습니다.</p>
          </div>
        ) : (
          <div className={styles.letterGrid}>
            {letters.map((letter) => (
              <div
                key={letter.id}
                className={styles.letterCard}
                onClick={() => setSelectedLetter(letter)}
              >
                <div className={styles.envelope}>
                  <div className={styles.envelopeFlap}></div>
                  {/* <div className={styles.envelopeLetter}>
                    <div className={styles.letterLines}></div>
                  </div> */}
                </div>
                <p className={styles.studentName}>{letter.from}</p>
              </div>
            ))}
          </div>
        )}

        {selectedLetter && (
          <div
            className={styles.modalOverlay}
            onClick={() => setSelectedLetter(null)}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedLetter(null)}
              >
                ✕
              </button>

              <div className={styles.modalHeader}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div className={styles.modalTitleWrapper}>
                    <p className={styles.from}>From. {selectedLetter.from}</p>
                    <p className={styles.modalDate}>
                      {new Date(selectedLetter.createdAt).toLocaleDateString(
                        "ko-KR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
                <p className={styles.to}>To. 선생님께</p>
              </div>

              <div className={styles.letterContent}>
                {selectedLetter.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}