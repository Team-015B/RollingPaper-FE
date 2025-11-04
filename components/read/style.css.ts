import { style, keyframes } from "@vanilla-extract/css";
import { font } from "@/styles";

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const scaleIn = keyframes({
  from: { opacity: 0, transform: "scale(0.9)" },
  to: { opacity: 1, transform: "scale(1)" },
});

export const container = style({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "60px 20px 40px",
  backgroundImage: "url(/background.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.83)",
    zIndex: 0,
  }
});

export const title = style({
  marginBottom: "48px",
  color: "#2c2c2c",
  textAlign: "center",
  position: "relative",
  zIndex: 1,
  fontSize: "36px",
  fontWeight: "700",
  background: "linear-gradient(135deg, #B08968 0%, #8B6F47 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export const loading = style({
  fontSize: "18px",
  color: "#666",
  position: "relative",
  zIndex: 1,
});

export const emptyState = style({
  position: "relative",
  zIndex: 1,
  padding: "60px 40px",
  textAlign: "center",
  fontSize: "18px",
  color: "#999",
});

export const letterGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: "24px",
  maxWidth: "1200px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  padding: "0 20px",
  
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
      gap: "16px",
    }
  }
});

export const letterCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  padding: "24px 16px",
  borderRadius: "20px",
  backgroundColor: "white",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
  cursor: "pointer",
  transition: "all 0.3s ease",
  animation: `${fadeIn} 0.5s ease-out`,
  border: "2px solid transparent",
  
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 32px rgba(176, 137, 104, 0.25)",
    border: "2px solid #B08968",
  }
});

export const imageWrapper = style({
  position: "relative",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  overflow: "hidden",
  border: "3px solid #B08968",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f5f5f5",
});

export const studentImage = style({
  objectFit: "cover",
});

export const defaultAvatar = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "36px",
  fontWeight: "700",
  color: "white",
  background: "linear-gradient(135deg, #B08968 0%, #9A7556 100%)",
});

export const studentName = style({
  fontSize: "16px",
  fontWeight: "600",
  color: "#333",
  textAlign: "center",
  marginTop: "4px",
});

export const date = style({
  fontSize: "12px",
  color: "#999",
  textAlign: "center",
});

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  padding: "20px",
  animation: `${fadeIn} 0.3s ease-out`,
});

export const modalContent = style({
  backgroundColor: "#FEFDFB",
  borderRadius: "12px",
  padding: "40px",
  maxWidth: "600px",
  width: "100%",
  maxHeight: "85vh",
  overflow: "auto",
  position: "relative",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  animation: `${scaleIn} 0.3s ease-out`,
  
  "::before": {
    content: '""',
    position: "absolute",
    top: "12px",
    left: "12px",
    right: "12px",
    bottom: "12px",
    border: "1px dashed #B08968",
    borderRadius: "8px",
    pointerEvents: "none",
  },
  
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "32px 24px",
      maxHeight: "90vh",
    }
  }
}); 

export const closeButton = style({
  position: "absolute",
  top: "26px",
  right: "26px",
  background: "white",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  color: "#999",
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s",
  zIndex: 10,
  
  ":hover": {
    color: "#333",
  }
});


export const modalHeader = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "24px",
  paddingBottom: "16px",
  borderBottom: "1px solid #E5E5E5",
});

export const modalImageWrapper = style({
  position: "relative",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  overflow: "hidden",
  border: "2px solid #B08968",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  flexShrink: 0,
  backgroundColor: "#f5f5f5",
});

export const modalImage = style({
  objectFit: "cover",
});

export const defaultAvatarLarge = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "700",
  color: "white",
  background: "linear-gradient(135deg, #B08968 0%, #9A7556 100%)",
});

export const modalTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  flex: 1,
});

export const from = style({
  fontSize: "18px",
  fontWeight: "600",
  color: "#333",
  margin: 0,
});

export const to = style({
  fontSize: "14px",
  color: "#666",
  textAlign: "right",
  margin: 0,
  paddingRight: "8px",
});

export const modalDate = style({
  fontSize: "13px",
  color: "#999",
  margin: 0,
});

export const letterContent = style({
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#333",
  whiteSpace: "pre-wrap",
  padding: "20px 0",
  minHeight: "200px",
  wordBreak: "break-word",
});

