import React from 'react';
import './Button.css';

const Button = ({ buttonText, icon, handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      <span className="button-title">{buttonText}</span>
      <img src={icon} alt="arrow img" />
    </button>
  )
}

export default Button