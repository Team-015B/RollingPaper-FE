"use client";

import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

interface Teacher {
  id: string;
  name: string;
  image: string;
}

export default function LetterWriter() {
  const [step, setStep] = useState(1); // 1: 선생님 선택, 2: 호칭 선택, 3: 편지 작성
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [greeting, setGreeting] = useState('');
  const [message, setMessage] = useState('');

  const handleStep1Complete = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setStep(2);
  };

  const handleStep2Complete = (option: string) => {
    setGreeting(option);
    setStep(3);
  };

  const handleStep3Complete = (msg: string) => {
    setMessage(msg);
    console.log({
      teacher: selectedTeacher,
      greeting: greeting,
      message: msg,
    });
    alert('편지가 성공적으로 작성되었습니다!');
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleStep1Complete} />}
      {step === 2 && selectedTeacher && (
        <Step2
          teacherName={selectedTeacher.name}
          teacherImage={selectedTeacher.image}
          onNext={handleStep2Complete}
          onBack={handleBack}
        />
      )}
      {step === 3 && selectedTeacher && (
        <Step3
          teacherName={selectedTeacher.name}
          teacherImage={selectedTeacher.image}
          greeting={greeting}
          onSubmit={handleStep3Complete}
          onBack={handleBack}
        />
      )}
    </div>
  );
}