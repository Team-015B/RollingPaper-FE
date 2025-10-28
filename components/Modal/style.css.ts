import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  zIndex: 1000
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
  fontSize: '24px',
  fontWeight: '500',
  textAlign: 'center',
  marginBottom: '40px',
  color: '#333',
  fontFamily: 'serif'
});

export const inputGroup = style({
  marginBottom: '24px'
});

export const inputGroupLast = style({
  marginBottom: '40px'
});

export const label = style({
  display: 'block',
  fontSize: '14px',
  color: '#666',
  marginBottom: '8px',
  fontWeight: '400'
});

export const input = style({
  width: '100%',
  padding: '12px 0',
  fontSize: '15px',
  border: 'none',
  borderBottom: '1px dotted #D4C4B0',
  outline: 'none',
  backgroundColor: 'transparent',
  color: '#333',
});

export const loginButton = style({
  width: '100%',
  padding: '16px',
  backgroundColor: '#B08968',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s',
  
  
  ':hover': {
    backgroundColor: '#9A7556'
  },
  
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.7
  }
});