'use client';

import { useEffect } from 'react';

export default function Warning() {
  useEffect(() => {
    console.log(
      '%c ⚠️ 다른 학생의 계정에 접속하지 맙시다!!',
      `font-size:30px; font-weight:900; color:white; background-color:red`
    );
  }, []);

  return null;
}