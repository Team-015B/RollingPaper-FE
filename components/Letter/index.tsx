"use client";

import { useState, useEffect } from "react";
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
  const [message, setMessage] = useState("");
  
  const { data: profile, isLoading, isError } = useStudentProfile();
  const isLoggedIn = !!profile && !isError;

  const handleStep1Complete = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setStep(3);
  };

  const handleStep2Complete = (msg: string) => {
    setMessage(msg);
    console.log({
      teacher: selectedTeacher,
      message: msg,
    });
    alert("편지가 성공적으로 작성되었습니다!");
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  if (isLoading) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh" 
      }}>
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
          teacherName={selectedTeacher.name}
          teacherImage={selectedTeacher.image}
          onSubmit={handleStep2Complete}
          onBack={handleBack}
        />
      )}
    </div>
  );
}