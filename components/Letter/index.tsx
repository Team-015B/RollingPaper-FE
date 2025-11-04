"use client";

import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { Toastify } from "../Toastify";

interface Teacher {
  id: string;
  name: string;
  image: string;
}

export default function Letter() {
  const [step, setStep] = useState(1);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const handleStep1Complete = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setStep(2);
  };

  const handleStep2Complete = (msg: string) => {
    console.log({
      teacher: selectedTeacher,
      message: msg,
    });
    Toastify({ type: "success", content: "편지가 성공적으로 전송되었습니다!" });
    setStep(1);
    setSelectedTeacher(null);
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setSelectedTeacher(null);
    }
  };

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
