import { theme } from "@/styles";
import { keyframes, style } from "@vanilla-extract/css";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const container = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 9999,
});

export const loading = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.52)",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
});

export const spinner = style({
  width: "48px",
  height: "48px",
  border: `4px solid ${theme.candy}`,
  borderTop: "4px solid #E37272",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});
