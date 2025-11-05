import { useState } from "react";
import * as styles from "./style.css";
import Image from "next/image";

interface Teacher {
  id: string;
  name: string;
  image: string;
}

const teachers: Teacher[] = [
  { id: "jb", name: "황정배 선생님", image: "/황정배-선생님.png" },
  { id: "bg", name: "이보경 선생님", image: "/이보경-선생님.png" },
  { id: "mj", name: "이민정 선생님", image: "/이민정-선생님.png" },
  { id: "sm", name: "이수민 선생님", image: "/이수민-선생님.png" },
  { id: "chj", name: "최훈주 선생님", image: "/최훈주-선생님.png" },
  { id: "sb", name: "서승범 선생님", image: "/서승범-선생님.png" },
  { id: "nl", name: "배나래 선생님", image: "/배나래-선생님.png" },
  { id: "dw", name: "이동욱 선생님", image: "/이동욱-선생님.png" },
  { id: "yg", name: "양윤직 선생님", image: "/양윤직-선생님.png" },
  { id: "lhj", name: "이현정 선생님", image: "/이현정-선생님.png" },
  { id: "sr", name: "이소라 선생님", image: "/이소라-선생님.png" },
  { id: "sj", name: "박수진 선생님", image: "/박수진-선생님.png" },
];

interface Step1Props {
  onNext: (teacher: Teacher) => void;
}

export default function Step1({ onNext }: Step1Props) {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const handleTeacherClick = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleNext = () => {
    if (selectedTeacher) {
      onNext(selectedTeacher);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>어떤 선생님에게 편지를 쓰시겠어요?</h1>
      <div className={styles.teacherGrid}>
        {teachers.map((teacher) => (
          <button
            key={teacher.id}
            className={`${styles.teacherCard} ${
              selectedTeacher?.id === teacher.id
                ? styles.teacherCardSelected
                : ""
            }`}
            onClick={() => handleTeacherClick(teacher)}
          >
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={48}
              height={48}
              unoptimized
            />
            <div className={styles.teacherName}>{teacher.name}</div>
          </button>
        ))}
      </div>

      <div className={styles.buttonGroup}>
        <button
          className={styles.nextButton}
          onClick={handleNext}
          disabled={!selectedTeacher}
        >
          다음
        </button>
      </div>
    </div>
  );
}
