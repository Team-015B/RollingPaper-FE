"use client";

import { useState } from "react";
import Step1 from "./Step1";
import Step3 from "./Step3";
import LoginModal from "../Modal";

interface Teacher {
  id: string;
  name: string;
  image: string;
}

export default function LetterWriter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [message, setMessage] = useState("");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleStep1Complete = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setStep(3);
  };

  const handleStep3Complete = (msg: string) => {
    setMessage(msg);
    console.log({
      teacher: selectedTeacher,
      message: msg,
    });
    alert("편지가 성공적으로 작성되었습니다!");
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(1);
    }
  };

  if (!isLoggedIn) {
    return <LoginModal onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div>
      {step === 1 && <Step1 onNext={handleStep1Complete} />}
      {step === 3 && selectedTeacher && (
        <Step3
          teacherName={selectedTeacher.name}
          teacherImage={selectedTeacher.image}
          onSubmit={handleStep3Complete}
          onBack={handleBack}
        />
      )}
    </div>
  );
}