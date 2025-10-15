import { useState } from 'react';
import * as styles from './style.css';
import Image from 'next/image';

interface Step2Props {
  teacherName: string;
  teacherImage: string;
  onNext: (option: string) => void;
  onBack: () => void;
}

const options = [
  '친애하는', '존경하는', '사랑하는', '감사한',
  '잘생긴', '아름다운', '보고싶은', '멋진',
  '귀여운', '소중한', '내 최애', '잊지 않을',
];

export default function Step2({ 
  teacherName,
  teacherImage,
  onNext, 
  onBack 
}: Step2Props) {
  const [selectedOption, setSelectedOption] = useState<string>('친애하는');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      onNext(selectedOption);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>어떤 호칭을 사용하시겠어요?</h1>
      <div className={styles.optionsContainer}>
        <div className={styles.optionsCard}>
          <div className={styles.optionsGrid}>
            {options.map((option, index) => (
              <button
                key={index}
                className={`${styles.optionButton} ${
                  selectedOption === option ? styles.optionButtonSelected : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.nextButton} onClick={handleNext}>
          다음
        </button>
        <button className={styles.backButton} onClick={onBack}>
          이전
        </button>
      </div>
    </div>
  );
}