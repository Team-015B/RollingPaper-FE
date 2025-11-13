import { style, keyframes } from "@vanilla-extract/css";

const fall = keyframes({
  "0%": { 
    transform: "translate3d(0, -10%, 0)", 
    opacity: 0 
  },
  "10%": {
    opacity: 1,
  },
  "20%": {
    transform: "translate3d(-15px, 20vh, 0)",
  },
  "40%": {
    transform: "translate3d(25px, 40vh, 0)",
  },
  "60%": {
    transform: "translate3d(-20px, 60vh, 0)",
  },
  "80%": {
    transform: "translate3d(15px, 80vh, 0)",
  },
  "100%": { 
    transform: "translate3d(-10px, 105vh, 0)", 
    opacity: 0.3 
  },
});

const sway = keyframes({
  "0%, 100%": { 
    transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" 
  },
  "25%": { 
    transform: "rotateX(30deg) rotateY(45deg) rotateZ(-15deg)" 
  },
  "50%": { 
    transform: "rotateX(-20deg) rotateY(90deg) rotateZ(20deg)" 
  },
  "75%": { 
    transform: "rotateX(25deg) rotateY(135deg) rotateZ(-10deg)" 
  },
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