"use client";

import React, { useState } from "react";
import * as styles from "./style.css";
import { useStudentSignInMutation } from "@/services/auth/auth.mutation";
import { useQueryClient } from "@tanstack/react-query";

export default function LoginModal() {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const studentSignIn = useStudentSignInMutation();
  const queryClient = useQueryClient();

  const handleLogin = async () => {
    if (!nickName || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    setIsLoading(true);

    studentSignIn.mutate(
      { nickName, password },
      {
        onSuccess: () => {
          // 로그인 성공 시 프로필 쿼리 무효화하여 자동으로 재요청
          queryClient.invalidateQueries({ 
            queryKey: ["student", "profile"] 
          });
          setIsLoading(false);
          alert("로그인 성공!");
        },
        onError: (error) => {
          alert("로그인 실패: " + error.message);
          setIsLoading(false);
        },
      }
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalCard}>
        <h1 className={styles.title}>Rolling Paper</h1>

        <div className={styles.inputGroup}>
          <label className={styles.label}>아이디</label>
          <input
            type="text"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder=""
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroupLast}>
          <label className={styles.label}>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder=""
            className={styles.input}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={styles.loginButton}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
      </div>
    </div>
  );
}