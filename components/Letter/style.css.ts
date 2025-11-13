import { style, keyframes } from "@vanilla-extract/css";
import { font, theme, flex } from "@/styles";

const buttonBaseStyle = {
  position: "relative" as const,
  ":before": {
    content: '""',
    position: "absolute" as const,
    top: "6px",
    left: "6px",
    right: "6px",
    bottom: "6px",
    border: "1px dashed white",
    borderRadius: "10px",
    pointerEvents: "none" as const,
  },
};

const bounceInAnimation = keyframes({
  "0%": {
    opacity: 0,
    transform: "rotate(3deg) scale3d(0.3, 0.3, 0.3)",
  },
  "20%": {
    transform: "rotate(3deg) scale3d(1.1, 1.1, 1.1)",
  },
  "40%": {
    transform: "rotate(3deg) scale3d(0.9, 0.9, 0.9)",
  },
  "60%": {
    opacity: 1,
    transform: "rotate(3deg) scale3d(1.03, 1.03, 1.03)",
  },
  "80%": {
    transform: "rotate(3deg) scale3d(0.97, 0.97, 0.97)",
  },
  "100%": {
    opacity: 1,
    transform: "rotate(3deg) scale3d(1, 1, 1)",
  },
});

export const bounceIn = style({
  animation: `${bounceInAnimation} 1s ease-out forwards`,
});

export const container = style({
  ...flex.COLUMN_CENTER,
  width: "100%",
  minHeight: "100vh",
  padding: "20px",
});

export const title = style({
  ...font.H2,
  marginBottom: "40px",
  color: "#333",
  textAlign: "center",
});

export const teacherGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "24px",
  maxWidth: "600px",
  width: "100%",
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "12px",
  marginBottom: "40px",
});

export const teacherCard = style({
  ...flex.COLUMN_CENTER,
  gap: "12px",
  padding: "16px",
  border: "2px solid transparent",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "transform 0.2s, border-color 0.2s",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const teacherCardSelected = style({
  border: `2px solid ${theme.cookie}`,
  backgroundColor: "#FFF0F0",
  borderRadius: "8px",
  transform: "scale(1.05)",
});

export const teacherName = style({
  ...font.p1,
  color: "#666",
  textAlign: "center",
});

export const optionsContainer = style({
  ...flex.CENTER,
  maxWidth: "800px",
  width: "100%",
  position: "relative",
  minHeight: "400px",
});

export const optionsCard = style({
  backgroundColor: "#FFF",
  padding: "30px",
  borderRadius: "12px",
  maxWidth: "600px",
  width: "100%",
});

export const teacherInfo = style({
  ...flex.COLUMN_CENTER,
  position: "absolute",
  top: "-40px",
  right: "-70px",
  gap: "12px",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  minWidth: "150px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  transform: "rotate(12deg)",
});

export const optionsHeader = style({
  position: "absolute",
  top: "20px",
  right: "20px",
});

export const optionsTitle = style({
  ...font.H4,
  marginBottom: "24px",
  color: "#333",
});

export const optionsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
});

export const optionButton = style({
  ...font.btn2,
  padding: "12px 16px",
  border: "none",
  background: "none",
  color: "#666",
  cursor: "pointer",
  textAlign: "center",
  borderRadius: "8px",
});

export const optionButtonSelected = style({
  ...font.btn2,
  backgroundColor: "white",
  border: `2px dotted ${theme.cookie}`,
  borderRadius: "8px",
  color: "#333",
});

export const letterCard = style({
  maxWidth: "600px",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "12px",
  marginBottom: "20px",
  position: "relative",
  ":before": {
    content: '""',
    position: "absolute",
    top: "8px",
    left: "8px",
    right: "8px",
    bottom: "8px",
    border: `1px dashed ${theme.cookie}`,
    borderRadius: "8px",
    pointerEvents: "none",
  },
});

export const letterHeader = style({
  ...flex.BETWEEN,
  alignItems: "flex-start",
  marginBottom: "24px",
  paddingBottom: "16px",
  borderBottom: "1px solid #E5E5E5",
});

export const from = style({
  ...font.btn1,
  color: "#666",
});

export const to = style({
  ...font.p2,
  color: "#666",
  textAlign: "right",
});

export const textarea = style({
  ...font.p2,
  width: "100%",
  minHeight: "200px",
  border: "none",
  outline: "none",
  color: "#333",
  resize: "none",
  "::placeholder": {
    color: "#999",
  },
});

export const charCount = style({
  ...font.p3,
  textAlign: "right",
  color: "#999",
  marginTop: "16px",
  paddingTop: "16px",
  borderTop: "1px solid #E5E5E5",
});

export const nextButton = style({
  ...font.btn1,
  position: "relative",
  width: "400px",
  padding: "16px",
  backgroundColor: theme.cookie,
  color: "white",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.2s",
  ":before": {
    content: '""',
    position: "absolute",
    top: "6px",
    left: "6px",
    right: "6px",
    bottom: "6px",
    border: "1px dashed white",
    borderRadius: "10px",
    pointerEvents: "none",
  },
  ":disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});

export const buttonGroup = style({
  ...flex.COLUMN_CENTER,
  gap: "16px",
  width: "400px",
});

export const submitButton = style({
  ...font.btn1,
  ...buttonBaseStyle,
  width: "100%",
  padding: "16px",
  backgroundColor: theme.cookie,
  color: "white",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.2s",
});

export const backButton = style({
  ...font.btn1,
  ...buttonBaseStyle,
  width: "100%",
  padding: "16px",
  backgroundColor: theme.candy,
  color: "#FFF",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
});