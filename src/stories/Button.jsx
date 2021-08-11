import React from 'react';
import './button.css';

const STYLES = [
  "button--default--solid",
  "button--primary--solid",
  "button--secondary--solid",
  "button--danger--solid",
  "button--outline",
  "button--text",
  "button--disable-shadow",
  "button--disable-text",
  "button--disable",
]

const SIZES = [
  "button--small",
  "button--medium",
  "button--large",
]

export const Button = ({
  children, 
  type, 
  onClick, 
  buttonStyle,
  buttonSize
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle
  : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize
  : SIZES[0];

  return (
    <button className={`button ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}