import React, { useEffect, useState } from "react";
import * as styles from "./style.css";

interface Petal {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
  size: string;
  opacity: number;
}

const Sakura: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const temp: Petal[] = [];
    for (let i = 0; i < 30; i++) {
      temp.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${8 + Math.random() * 5}s`,
        size: `${8 + Math.random() * 8}px`,
        opacity: parseFloat((0.5 + Math.random() * 0.5).toFixed(2)),
      });
    }
    setPetals(temp);
  }, []);

  return (
    <div className={styles.sakuraContainer}>
      {petals.map((p) => (
        <div
          key={p.id}
          className={styles.petalWrapper}
          style={{
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        >
          <div
            className={styles.petal}
            style={{
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: "4s",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Sakura;
