import { style, keyframes } from "@vanilla-extract/css";

const fall = keyframes({
  "0%": { 
    transform: "translate3d(0, -10%, 0) rotateZ(0deg)", 
    opacity: 1 
  },
  "25%": {
    transform: "translate3d(-20px, 25vh, 0) rotateZ(90deg)",
  },
  "50%": {
    transform: "translate3d(20px, 50vh, 0) rotateZ(180deg)",
  },
  "75%": {
    transform: "translate3d(-10px, 75vh, 0) rotateZ(270deg)",
  },
  "100%": { 
    transform: "translate3d(0px, 100vh, 0) rotateZ(360deg)", 
    opacity: 0.2 
  },
});

const sway = keyframes({
  "0%": { transform: "translateX(0px) rotateY(0deg)" },
  "25%": { transform: "translateX(15px) rotateY(90deg)" },
  "50%": { transform: "translateX(0px) rotateY(180deg)" },
  "75%": { transform: "translateX(-15px) rotateY(270deg)" },
  "100%": { transform: "translateX(0px) rotateY(360deg)" },
});

export const sakuraContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: 1000,
});

export const petalWrapper = style({
  position: "absolute",
  top: "-20px",
  animationName: fall,
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "normal",
});

export const petal = style({
  width: "12px",
  height: "12px",
  backgroundColor: "#f9c5d1",
  borderRadius: "150% 0 150% 0",
  opacity: 0.9,
  transformOrigin: "center center",
  animationName: sway,
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDirection: "normal",
});