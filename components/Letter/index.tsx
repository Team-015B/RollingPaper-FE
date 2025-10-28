"use client";

import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import LoginModal from "../Modal";
import { useStudentProfile } from "@/services/auth/auth.query";

interface Teacher {
  id: string;
  name: string;
  image: string;
}

export default function LetterWriter() {
  const [step, setStep] = useState(1);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const { data: profile, isLoading, isError } = useStudentProfile();
  const isLoggedIn = !!profile && !isError;

  const handleStep1Complete = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setStep(2); // 3이 아닌 2로 수정
  };

  const handleStep2Complete = (msg: string) => {
    console.log({
      teacher: selectedTeacher,
      message: msg,
    });
    alert("편지가 성공적으로 작성되었습니다!");
    // 필요하다면 초기화
    setStep(1);
    setSelectedTeacher(null);
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setSelectedTeacher(null);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        로딩 중...
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginModal />;
  }

  return (
    <div>
      {step === 1 && <Step1 onNext={handleStep1Complete} />}
      {step === 2 && selectedTeacher && (
        <Step2
          teacherNickName={selectedTeacher.name}
          image={selectedTeacher.image as unknown as File}
          onSubmit={handleStep2Complete}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
