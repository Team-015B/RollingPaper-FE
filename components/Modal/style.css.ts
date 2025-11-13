import { theme, flex, font } from "@/styles";
import { style } from "@vanilla-extract/css";

export const overlay = style({
  ...flex.CENTER,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: '20px',
  zIndex: 1000,
  backgroundColor: theme.background,
});

export const modalCard = style({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '48px 40px',
  width: '100%',
  maxWidth: '440px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
});

export const title = style({
  ...font.H4,
  textAlign: 'center',
  marginBottom: '40px',
  color: '#333',
});

export const inputGroup = style({
  marginBottom: '24px'
});

export const inputGroupLast = style({
  marginBottom: '40px'
});

export const label = style({
  ...font.p3,
  display: 'block',
  color: '#666',
  marginBottom: '8px',
});

export const input = style({
  ...font.p2,
  width: '100%',
  padding: '12px 0',
  border: 'none',
  borderBottom: '1px dotted #D4C4B0',
  outline: 'none',
  backgroundColor: 'transparent',
  color: '#333',
});

export const loginButton = style({
  ...font.btn1,
  width: '100%',
  padding: '16px',
  backgroundColor: theme.cookie,
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.7
  }
});